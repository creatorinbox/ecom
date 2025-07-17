const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // 1️⃣ Pre-create categories and tags
await prisma.category.createMany({
  data: [
    { name: "Health" },
    { name: "Smart Devices" },
    { name: "Electronics" },
    { name: "Audio" },
    { name: "Cameras" }
  ],
  skipDuplicates: true
});

await prisma.tag.createMany({
  data: [
    { name: "monitor" },
    { name: "air-quality" },
    { name: "security" },
    { name: "drone" },
    { name: "camera" },
    { name: "4k" },
    { name: "wireless" },
    { name: "bluetooth" },
    { name: "speaker" }
  ],
  skipDuplicates: true
});


  // 2️⃣ Create products with nested relations
  const products = [
    {
      name: "Video & Air Quality Monitor",
      regularPrice: 312,
      salePrice: 239,
      badge: "-24%",
      imageUrl: "/assets/images/home-digital/pr-01.jpg",
      hoverImage: "/assets/images/home-digital/pr-02.jpg",
      isFeatured: true,
      isBestSelling: true,
      brand: "EcoVision",
      categories: {
        create: [
          { category: { connect: { name: "Health" } } },
          { category: { connect: { name: "Smart Devices" } } }
        ]
      },
      tags: {
        create: [
          { tag: { connect: { name: "monitor" } } },
          { tag: { connect: { name: "air-quality" } } },
          { tag: { connect: { name: "security" } } }
        ]
      },
      images: {
        create: [
          { url: "/assets/images/home-digital/pr-01.jpg" },
          { url: "/assets/images/home-digital/pr-02.jpg" }
        ]
      }
    },
    {
      name: "X-Star Premium Drone with 4K Camera",
      regularPrice: 450,
      imageUrl: "/assets/images/home-digital/pr-03.jpg",
      hoverImage: "/assets/images/home-digital/pr-04.jpg",
      isFeatured: true,
      isBestSelling: true,
      brand: "SkyTech",
      categories: {
        create: [
          { category: { connect: { name: "Electronics" } } }
        ]
      },
      tags: {
        create: [
          { tag: { connect: { name: "drone" } } },
          { tag: { connect: { name: "4k" } } }
        ]
      },
      images: {
        create: [
          { url: "/assets/images/home-digital/pr-03.jpg" },
          { url: "/assets/images/home-digital/pr-04.jpg" }
        ]
      }
    },
    {
      name: "Digital 20.1 4K Video Camera",
      regularPrice: 440,
      salePrice: 400,
      badge: "-10%",
      imageUrl: "/assets/images/home-digital/pr-05.jpg",
      hoverImage: "/assets/images/home-digital/pr-06.jpg",
      isFeatured: true,
      isBestSelling: true,
      brand: "CaptureX",
      categories: {
        create: [
          { category: { connect: { name: "Cameras" } } }
        ]
      },
      tags: {
        create: [
          { tag: { connect: { name: "camera" } } },
          { tag: { connect: { name: "4k" } } }
        ]
      },
      images: {
        create: [
          { url: "/assets/images/home-digital/pr-05.jpg" },
          { url: "/assets/images/home-digital/pr-06.jpg" }
        ]
      }
    },
    {
      name: "On-ear Wireless NXTG",
      regularPrice: 312,
      salePrice: 225,
      badge: "-28%",
      imageUrl: "/assets/images/home-digital/pr-07.jpg",
      hoverImage: "/assets/images/home-digital/pr-08.jpg",
      isFeatured: true,
      isBestSelling: true,
      brand: "SoundLab",
      categories: {
        create: [
          { category: { connect: { name: "Audio" } } }
        ]
      },
      tags: {
        create: [
          { tag: { connect: { name: "wireless" } } },
          { tag: { connect: { name: "bluetooth" } } }
        ]
      },
      images: {
        create: [
          { url: "/assets/images/home-digital/pr-07.jpg" },
          { url: "/assets/images/home-digital/pr-08.jpg" }
        ]
      }
    },
    {
      name: "Wireless Multiroom Speaker",
      regularPrice: 250,
      imageUrl: "/assets/images/home-digital/pr-09.jpg",
      hoverImage: "/assets/images/home-digital/pr-10.jpg",
      isFeatured: true,
      isBestSelling: true,
      brand: "PulseBox",
      categories: {
        create: [
          { category: { connect: { name: "Audio" } } },
          { category: { connect: { name: "Smart Devices" } } }
        ]
      },
      tags: {
        create: [
          { tag: { connect: { name: "speaker" } } },
          { tag: { connect: { name: "wireless" } } }
        ]
      },
      images: {
        create: [
          { url: "/assets/images/home-digital/pr-09.jpg" },
          { url: "/assets/images/home-digital/pr-10.jpg" }
        ]
      }
    }
  ];

  for (const product of products) {
    await prisma.product.create({ data: product });
  }

  console.log("✅ 5 products seeded successfully!");
}

main()
  .catch((e) => console.error("❌ Seed failed:", e))
  .finally(() => prisma.$disconnect());
