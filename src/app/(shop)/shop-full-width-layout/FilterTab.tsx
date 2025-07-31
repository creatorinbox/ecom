"use client";
import React, { useState, useEffect, useMemo } from 'react';
import { Col, Dropdown, Row } from 'react-bootstrap';

// ## INTERFACES ##
// These interfaces are aligned with your Prisma schema structure.
interface CategoryRelation {
    category: {
        name: string;
    };
}

interface AttributeValue {
    value: string;
    attribute: {
        name: string;
    };
}

interface ProductAttribute {
    attributeValue: AttributeValue;
}

interface Product {
    id: number;
    name: string;
    imageUrl: string;
    hoverImage?: string | null; // Matched to 'hoverImage' from your schema
    regularPrice?: number | null;
    salePrice: number;
    sku: string;
    brand?: string | null;
    categories?: CategoryRelation[];
    attributes?: ProductAttribute[];
    URL: string | null;
    shortDescription?: string;
    label?: string;
    labelClass?: string;
}

// A fallback image in case a product doesn't have one.
const FALLBACK_IMAGE_URL = "https://placehold.co/400x300/f0f0f0/ccc?text=Image+Not+Available";

// ## PLACEHOLDER MODAL COMPONENTS ##
const ProductModal = ({ show, handleClose, product }: { show: boolean, handleClose: () => void, product: Product | null }) => {
    if (!show || !product) return null;
    return (
        <div className="modal" style={{ display: 'block', position: 'fixed', zIndex: 1050, left: 0, top: 0, width: '100%', height: '100%', overflow: 'auto', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{product.name}</h5>
                        <button type="button" className="btn-close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body">
                        <img src={product.imageUrl || FALLBACK_IMAGE_URL} alt={product.name} className="img-fluid mb-3" />
                        <p>{product.shortDescription || "No description available."}</p>
                        <p><strong>Price:</strong> ${product.salePrice.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AddToCardModal = ({ cardShow, handleAddToCardModalClose, product }: { cardShow: boolean, handleAddToCardModalClose: () => void, product: Product | null }) => {
    if (!cardShow || !product) return null;
    return (
        <div className="modal" style={{ display: 'block', position: 'fixed', zIndex: 1050, left: 0, top: 0, width: '100%', height: '100%', overflow: 'auto', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Added to Cart</h5>
                        <button type="button" className="btn-close" onClick={handleAddToCardModalClose}></button>
                    </div>
                    <div className="modal-body">
                        <p>You've added <strong>{product.name}</strong> to your cart!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


// ## PRODUCT CARD COMPONENT ##
const ProductCard = ({ product, handleShow, handleAddToCardModalShow }: { product: Product, handleShow: () => void, handleAddToCardModalShow: () => void }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    const displayPrice = product.regularPrice && product.regularPrice > product.salePrice ? (
        <p className="mb-0 fs-14 text-muted">
            <del>${product.regularPrice.toFixed(2)}</del>&nbsp;
            <span className='text-danger'>${product.salePrice.toFixed(2)}</span>
        </p>
    ) : (
        <p className="mb-0 fs-14 text-muted">
            <span>${product.salePrice.toFixed(2)}</span>
        </p>
    );
    
    //const imageToShow = isHovered && product.hoverImage ? `/download${product.hoverImage}` : `/download${product.imageUrl}`;
    const imageToShow = isHovered && product.hoverImage ? `/download${product.hoverImage}` : `/download${product.imageUrl}`;

    return (
        <div
            className="topbar-product-card pb-3 w-100 h-100 d-flex flex-column"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="position-relative overflow-hidden">
                <img
                    src={imageToShow || FALLBACK_IMAGE_URL}
                    alt={product.name}
                    className="img-fluid w-100"
                    style={{ aspectRatio: '4 / 3', objectFit: 'cover' }}
                    onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK_IMAGE_URL; }}
                />
                <div className="product-button d-none d-lg-flex flex-column gap-2">
                    <button className="btn rounded-pill fs-14" onClick={handleShow}>
                        <span>Quick View</span>
                    </button>
                    <button
                        type="button"
                        className="btn rounded-pill fs-14"
                        onClick={handleAddToCardModalShow}
                    >
                        <span>Quick Shop</span>
                    </button>
                </div>
            </div>
            <div className="mt-3 d-flex flex-column flex-grow-1">
                <h6 className="mb-1 fw-medium">
                    <a href={product.URL || '#'} className="main_link_acid_green">{product.name}</a>
                </h6>
                {displayPrice}
            </div>
        </div>
    );
};


// ## MAIN FILTER TAB COMPONENT ##
const FilterTab = () => {
    // State
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Filter & UI State
    const [isFilterOpen, setFilterOpen] = useState(true);
    const [displayColumns, setDisplayColumns] = useState<number>(3);
    const [showProductModal, setShowProductModal] = useState(false);
    const [showCardModal, setCardShow] = useState(false);
    
    // Dynamic Filter Options State
    const [availableCategories, setAvailableCategories] = useState<string[]>([]);
    const [availableBrands, setAvailableBrands] = useState<string[]>([]);

    // Selected Filters State
    const [selectedFilters, setSelectedFilters] = useState<{
        categories: string[];
        brands: string[];
    }>({
        categories: [],
        brands: [],
    });

    // Effect to Fetch Products and Generate Filters
    useEffect(() => {
        const fetchProductsAndSetFilters = async () => {
            setIsLoading(true);
            try {
                // Fetch from your own API endpoint that uses Prisma.
                const res = await fetch("/api/products");
                if (!res.ok) throw new Error(`Network response was not ok: ${res.statusText}`);
                
                const products: Product[] = await res.json();
                
                if (!Array.isArray(products)) {
                    throw new Error("API did not return an array of products.");
                }

                setAllProducts(products);
                setFilteredProducts(products);

                // --- Generate Dynamic Filters from Product Data ---
                const categories = new Set<string>();
                const brands = new Set<string>();

                products.forEach(product => {
                    // Get categories from the nested relation
                    product.categories?.forEach(cat => {
                        if (cat.category?.name) {
                            categories.add(cat.category.name);
                        }
                    });
                    // Get brand from the top-level field
                    if (product.brand) {
                        brands.add(product.brand);
                    }
                });
                
                setAvailableCategories(Array.from(categories).sort());
                setAvailableBrands(Array.from(brands).sort());

            } catch (err) {
                console.error("Failed to fetch or process products:", err);
                setAllProducts([]);
                setFilteredProducts([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProductsAndSetFilters();
    }, []);

    // Effect to Apply Filters When Selections Change
    useEffect(() => {
        let tempProducts = [...allProducts];

        if (selectedFilters.categories.length > 0) {
            tempProducts = tempProducts.filter(p =>
                p.categories?.some(cat => selectedFilters.categories.includes(cat.category.name))
            );
        }
        
        if (selectedFilters.brands.length > 0) {
            tempProducts = tempProducts.filter(p =>
                p.brand && selectedFilters.brands.includes(p.brand)
            );
        }

        setFilteredProducts(tempProducts);
    }, [selectedFilters, allProducts]);


    // Handlers
    const handleFilterChange = (filterType: 'categories' | 'brands', value: string) => {
        setSelectedFilters(prev => {
            const currentValues = prev[filterType];
            const newValues = currentValues.includes(value)
                ? currentValues.filter(v => v !== value)
                : [...currentValues, value];
            return { ...prev, [filterType]: newValues };
        });
    };

    const handleShowProductModal = (product: Product) => {
        setSelectedProduct(product);
        setShowProductModal(true);
    };

    const handleShowAddToCardModal = (product: Product) => {
        setSelectedProduct(product);
        setCardShow(true);
    };

    const gridLayout = useMemo(() => {
        switch (displayColumns) {
            case 1: return { colClass: "col-6" };
            case 3: return { colClass: "col-md-4 col-lg-3" };
            case 4: return { colClass: "col-6 col-sm-4 col-md-3 col-lg-2" };
            default: return { colClass: "col-12 col-sm-6 col-md-4" };
        }
    }, [displayColumns]);

    return (
        <React.Fragment>
            <div className="mt-5 d-flex justify-content-between align-items-center">
                 <a href="#!" className="text-muted fs-16 align-items-center d-none d-lg-flex" onClick={(e) => { e.preventDefault(); setFilterOpen(prev => !prev); }}>
                    <i className={`iccl fwb me-2 fw-medium ${!isFilterOpen ? "iccl-filter" : "pe-7s-close"}`} style={{ fontSize: isFilterOpen ? '24px' : 'inherit' }}></i>
                    <p className="mb-0">{isFilterOpen ? 'Hide' : 'Show'} Filters</p>
                </a>
                {/* Grid layout controls */}
            </div>

            {isFilterOpen && (
                <div className="p-4 filter-box mt-4">
                    <Row className="m-sm-2 g-4">
                        {availableCategories.length > 0 && <Col sm={6} lg={3}>
                            <h5 className="mb-1 fw-medium">By Category</h5>
                            <div className="filter-title"></div>
                            <div className="mt-3 filter-category">
                                {availableCategories.map((category) => (
                                    <div key={category} className="form-check pt-2 mb-2">
                                        <input className="form-check-input" type='checkbox' id={`cat-${category}`} checked={selectedFilters.categories.includes(category)} onChange={() => handleFilterChange('categories', category)} />
                                        <label className="form-check-label ms-1" htmlFor={`cat-${category}`}>{category}</label>
                                    </div>
                                ))}
                            </div>
                        </Col>}
                        {availableBrands.length > 0 && <Col sm={6} lg={3}>
                            <h5 className="mb-1 fw-medium">By Brand</h5>
                            <div className="filter-title"></div>
                            <div className="mt-3 filter-category">
                                {availableBrands.map((brand) => (
                                    <div key={brand} className="form-check pt-2 mb-2">
                                        <input className="form-check-input" type='checkbox' id={`brand-${brand}`} checked={selectedFilters.brands.includes(brand)} onChange={() => handleFilterChange('brands', brand)} />
                                        <label className="form-check-label ms-1" htmlFor={`brand-${brand}`}>{brand}</label>
                                    </div>
                                ))}
                            </div>
                        </Col>}
                    </Row>
                </div>
            )}
            
            <div className="tab-content my-3 my-md-4">
                 <div className="tab-pane fade active show">
                    {isLoading ? (
                        <div className="text-center p-5"><p>Loading products...</p></div>
                    ) : (
                        <Row className="g-4">
                             {filteredProducts.length > 0 ? (
                                filteredProducts.map(product => (
                                    <Col key={product.id} className={gridLayout.colClass}>
                                        <ProductCard
                                            product={product}
                                            handleShow={() => handleShowProductModal(product)}
                                            handleAddToCardModalShow={() => handleShowAddToCardModal(product)}
                                        />
                                    </Col>
                                ))
                             ) : (
                                <Col>
                                    <p className='text-center fs-5 p-5'>No products found.</p>
                                </Col>
                             )}
                        </Row>
                    )}
                 </div>
            </div>

            <ProductModal show={showProductModal} handleClose={() => setShowProductModal(false)} product={selectedProduct} />
            <AddToCardModal cardShow={showCardModal} handleAddToCardModalClose={() => setCardShow(false)} product={selectedProduct} />
        </React.Fragment>
    );
}

export default FilterTab;
