// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

// async function main() {
//   // 1️⃣ Pre-create categories and tags
// await prisma.category.createMany({
//   data: [
//     { name: "Health" },
//     { name: "Smart Devices" },
//     { name: "Electronics" },
//     { name: "Audio" },
//     { name: "Cameras" }
//   ],
//   skipDuplicates: true
// });

// await prisma.tag.createMany({
//   data: [
//     { name: "monitor" },
//     { name: "air-quality" },
//     { name: "security" },
//     { name: "drone" },
//     { name: "camera" },
//     { name: "4k" },
//     { name: "wireless" },
//     { name: "bluetooth" },
//     { name: "speaker" }
//   ],
//   skipDuplicates: true
// });


//   // 2️⃣ Create products with nested relations
//   const products = [
//     {
//       name: "Video & Air Quality Monitor",
//       regularPrice: 312,
//       salePrice: 239,
//       badge: "-24%",
//       imageUrl: "/assets/images/home-digital/pr-01.jpg",
//       hoverImage: "/assets/images/home-digital/pr-02.jpg",
//       isFeatured: true,
//       isBestSelling: true,
//       brand: "EcoVision",
//       categories: {
//         create: [
//           { category: { connect: { name: "Health" } } },
//           { category: { connect: { name: "Smart Devices" } } }
//         ]
//       },
//       tags: {
//         create: [
//           { tag: { connect: { name: "monitor" } } },
//           { tag: { connect: { name: "air-quality" } } },
//           { tag: { connect: { name: "security" } } }
//         ]
//       },
//       images: {
//         create: [
//           { url: "/assets/images/home-digital/pr-01.jpg" },
//           { url: "/assets/images/home-digital/pr-02.jpg" }
//         ]
//       }
//     },
//     {
//       name: "X-Star Premium Drone with 4K Camera",
//       regularPrice: 450,
//       imageUrl: "/assets/images/home-digital/pr-03.jpg",
//       hoverImage: "/assets/images/home-digital/pr-04.jpg",
//       isFeatured: true,
//       isBestSelling: true,
//       brand: "SkyTech",
//       categories: {
//         create: [
//           { category: { connect: { name: "Electronics" } } }
//         ]
//       },
//       tags: {
//         create: [
//           { tag: { connect: { name: "drone" } } },
//           { tag: { connect: { name: "4k" } } }
//         ]
//       },
//       images: {
//         create: [
//           { url: "/assets/images/home-digital/pr-03.jpg" },
//           { url: "/assets/images/home-digital/pr-04.jpg" }
//         ]
//       }
//     },
//     {
//       name: "Digital 20.1 4K Video Camera",
//       regularPrice: 440,
//       salePrice: 400,
//       badge: "-10%",
//       imageUrl: "/assets/images/home-digital/pr-05.jpg",
//       hoverImage: "/assets/images/home-digital/pr-06.jpg",
//       isFeatured: true,
//       isBestSelling: true,
//       brand: "CaptureX",
//       categories: {
//         create: [
//           { category: { connect: { name: "Cameras" } } }
//         ]
//       },
//       tags: {
//         create: [
//           { tag: { connect: { name: "camera" } } },
//           { tag: { connect: { name: "4k" } } }
//         ]
//       },
//       images: {
//         create: [
//           { url: "/assets/images/home-digital/pr-05.jpg" },
//           { url: "/assets/images/home-digital/pr-06.jpg" }
//         ]
//       }
//     },
//     {
//       name: "On-ear Wireless NXTG",
//       regularPrice: 312,
//       salePrice: 225,
//       badge: "-28%",
//       imageUrl: "/assets/images/home-digital/pr-07.jpg",
//       hoverImage: "/assets/images/home-digital/pr-08.jpg",
//       isFeatured: true,
//       isBestSelling: true,
//       brand: "SoundLab",
//       categories: {
//         create: [
//           { category: { connect: { name: "Audio" } } }
//         ]
//       },
//       tags: {
//         create: [
//           { tag: { connect: { name: "wireless" } } },
//           { tag: { connect: { name: "bluetooth" } } }
//         ]
//       },
//       images: {
//         create: [
//           { url: "/assets/images/home-digital/pr-07.jpg" },
//           { url: "/assets/images/home-digital/pr-08.jpg" }
//         ]
//       }
//     },
//     {
//       name: "Wireless Multiroom Speaker",
//       regularPrice: 250,
//       imageUrl: "/assets/images/home-digital/pr-09.jpg",
//       hoverImage: "/assets/images/home-digital/pr-10.jpg",
//       isFeatured: true,
//       isBestSelling: true,
//       brand: "PulseBox",
//       categories: {
//         create: [
//           { category: { connect: { name: "Audio" } } },
//           { category: { connect: { name: "Smart Devices" } } }
//         ]
//       },
//       tags: {
//         create: [
//           { tag: { connect: { name: "speaker" } } },
//           { tag: { connect: { name: "wireless" } } }
//         ]
//       },
//       images: {
//         create: [
//           { url: "/assets/images/home-digital/pr-09.jpg" },
//           { url: "/assets/images/home-digital/pr-10.jpg" }
//         ]
//       }
//     }
//   ];

//   for (const product of products) {
//     await prisma.product.create({ data: product });
//   }

//   console.log("✅ 5 products seeded successfully!");
// }

// main()
//   .catch((e) => console.error("❌ Seed failed:", e))
//   .finally(() => prisma.$disconnect());
// const { PrismaClient } = require('@prisma/client');
// const XLSX = require('xlsx');
// const path = require('path');

// const prisma = new PrismaClient();

// // 🧬 Load Excel file from public directory
// const workbook = XLSX.readFile(path.resolve(__dirname, '../../ecom/public/Final-product-export-15-7-2025 (1).xlsx'));
// const sheet = workbook.Sheets[workbook.SheetNames[0]];
// const products = XLSX.utils.sheet_to_json(sheet);
// async function main() {
// await prisma.category.createMany({
//   data: [
//     { name: "Health" },
//   { name: "Smart Devices" },
//   { name: "Electronics" },
//   { name: "Audio" },
//   { name: "Cameras" },
//   { name: "Apple Accessories" },
//   { name: "Mobile Repair" },
//   { name: "Flex Cables" },
//   { name: "Display & Screens" }
//   ],
//   skipDuplicates: true
// });

// await prisma.tag.createMany({
//   data: [
//     { name: "bluetooth" },
//     { name: "4k" },
//     { name: "monitor" },
//     { name: "security" },
//     { name: "wireless" },
//     { name: "speaker" },
//     { name: "camera" },
//     { name: "air-quality" },
//     { name: "drone" },
//    { name: "Apple"},
//   { name:"Apple Charger"},
//   { name:"Charger"},
//   { name:"iPhone"},
//  { name: "iPhone 11 Pro Max"},
//   { name:"iPhone Charger"},
//   { name:"Back Glass Replacement"},
//  { name: "iCare"},
//   { name:"iPhone Back Glass Repair"},
//   { name:"iPhone Rear Glass Repair"},
//   { name:"Repair Service"},
//  { name: "Flex Cable"},
//   { name:"Mi 10T"},
//   { name:"Power Button"},
//   { name:"Volume Button"},
//   { name:"Xiaomi"},
//   { name:"Xiaomi Flex Cable"},
//   { name:"LCD with Touch Screen"},
//   { name:"Vivo"},
//   { name:"Vivo LCD with Touch Screen"},
//   { name:"Vivo V7"},
//   { name:"Vivo V7 Display Replacement"},
//   { name:"Vivo V7 Touch Screen"}
//   ],
//   skipDuplicates: true
// });


//   for (const item of products) {
//     console.log("🧾 Sample Row:", item);
//     await prisma.product.create({
//       data: {
//   name: item["Name"],
//   sku: item["SKU"],
//   regularPrice: Number(item["Regular price"]) || 250,
//   salePrice: Number(item["Sale price"]) || 180,
//   badge: item["Badge"] || null, // optional if present
//   imageUrl: item["Images"]?.split(",")[0]?.trim() || "", // first image as thumbnail
//   hoverImage: item["Images"]?.split(",")[1]?.trim() || "", // second image if available
//   brand: item["Brands"]?.trim() || "Unknown",
//   isFeatured: item["Is featured?"] == 1,
//   isBestSelling: item["Published"] == 1,
//   categories: {
//   create: item["Categories"]
//     ?.split(">")
//     .map((name: string) => ({
//       category: {
//         connectOrCreate: {
//           where: { name: name.trim() },
//           create: { name: name.trim() }
//         }
//       }
//     }))
// },
// tags: {
//   create: item["Tags"]
//     ?.split(",")
//     .map((name: string) => ({
//       tag: {
//         connectOrCreate: {
//           where: { name: name.trim() },
//           create: { name: name.trim() },
//         },
//       },
//     })),
// },

    
//   images: item["Images"]
//     ? {
//         create: item["Images"]
//   .split(",")
//   .map((url: string) => ({ url: url.trim() })),
//       }
//     : undefined,
// }

//     });
//   }

//   console.log("✅ Excel data seeded successfully!");
// }

// main()
//   .catch((e) => console.error("❌ Seed error:", e))
//   .finally(() => prisma.$disconnect());
const { PrismaClient } = require('@prisma/client');
 const XLSX = require('xlsx');
 const path = require('path');

// const prisma = new PrismaClient();
//import { PrismaClient } from "@prisma/client";
//import XLSX from "xlsx";
//import path from "path";

const prisma = new PrismaClient();

// ✅ Define the expected shape of each Excel row
type ProductRow = { [key: string]: string };

async function main() {
  // 🧬 Load Excel file
  const workbook = XLSX.readFile(path.resolve(__dirname, "../../ecom/public/Final-product-export-15-7-2025 (1).xlsx"));
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
const products = XLSX.utils.sheet_to_json(sheet) as ProductRow[];
  // ✅ Seed basic categories
  await prisma.category.createMany({
    data: [
      { name: "Health" }, { name: "Smart Devices" }, { name: "Electronics" }, { name: "Audio" },
      { name: "Cameras" }, { name: "Apple Accessories" }, { name: "Mobile Repair" },
      { name: "Flex Cables" }, { name: "Display & Screens" }
    ],
    skipDuplicates: true,
  });

  // ✅ Seed basic tags
  await prisma.tag.createMany({
    data: [
      { name: "bluetooth" }, { name: "4k" }, { name: "monitor" }, { name: "security" },
      { name: "wireless" }, { name: "speaker" }, { name: "camera" }, { name: "air-quality" },
      { name: "drone" }, { name: "Apple" }, { name: "Apple Charger" }, { name: "Charger" },
      { name: "iPhone" }, { name: "iPhone 11 Pro Max" }, { name: "iPhone Charger" },
      { name: "Back Glass Replacement" }, { name: "iCare" }, { name: "iPhone Back Glass Repair" },
      { name: "iPhone Rear Glass Repair" }, { name: "Repair Service" }, { name: "Flex Cable" },
      { name: "Mi 10T" }, { name: "Power Button" }, { name: "Volume Button" },
      { name: "Xiaomi" }, { name: "Xiaomi Flex Cable" }, { name: "LCD with Touch Screen" },
      { name: "Vivo" }, { name: "Vivo LCD with Touch Screen" }, { name: "Vivo V7" },
      { name: "Vivo V7 Display Replacement" }, { name: "Vivo V7 Touch Screen" }
    ],
    skipDuplicates: true,
  });

  // ✅ Loop through each product row
  for (const item of products) {
    console.log("🧾 Seeding:", item["Name"]);

    // ⛳ Create the product itself
    const product = await prisma.product.create({
      data: {
        name: item["Name"],
        sku: item["SKU"],
        regularPrice: Number(item["Regular price"]) || 250,
        salePrice: Number(item["Sale price"]) || 180,
        badge: item["Badge"] || null,
        imageUrl: item["Images"]?.split(",")[0]?.trim() || "",
        hoverImage: item["Images"]?.split(",")[1]?.trim() || "",
        brand: item["Brands"]?.trim() || "Unknown",
        isFeatured: item["Is featured?"] === "1",
        isBestSelling: item["Published"] === "1",
        categories: {
          create: item["Categories"]
            ?.split(">")
            .map((name:string) => ({
              category: {
                connectOrCreate: {
                  where: { name: name.trim() },
                  create: { name: name.trim() },
                },
              },
            })) ?? [],
        },
        tags: {
          create: item["Tags"]
            ?.split(",")
            .map((name:string) => ({
              tag: {
                connectOrCreate: {
                  where: { name: name.trim() },
                  create: { name: name.trim() },
                },
              },
            })) ?? [],
        },
        images: item["Images"]
          ? {
              create: item["Images"]
                .split(",")
                .map((url:string) => ({ url: url.trim() })),
            }
          : undefined,
      },
    });

    // 🧩 Attributes loop — up to 3 attributes
    const attributeMap = [
      { nameKey: "Attribute 1 name", valueKey: "Attribute 1 value(s)" },
      { nameKey: "Attribute 2 name", valueKey: "Attribute 2 value(s)" },
      { nameKey: "Attribute 3 name", valueKey: "Attribute 3 value(s)" },
    ];

    for (const attr of attributeMap) {
      const attrName = item[attr.nameKey]?.trim();
      const attrValues = item[attr.valueKey]?.split(",").map((v: string) => v.trim()).filter(Boolean);

      if (!attrName || !attrValues.length) continue;

      // Create or find Attribute
      const attribute = await prisma.attribute.upsert({
        where: { name: attrName },
        update: {},
        create: { name: attrName },
      });

      for (const value of attrValues) {
        // Check if value exists
        let attributeValue = await prisma.attributeValue.findFirst({
          where: {
            value,
            attributeId: attribute.id,
          },
        });

        if (!attributeValue) {
          // Create if not found
          attributeValue = await prisma.attributeValue.create({
            data: {
              value,
              attribute: { connect: { id: attribute.id } },
            },
          });
        }

        // Link to product
        await prisma.productAttribute.create({
          data: {
            productId: product.id,
            attributeValueId: attributeValue.id,
          },
        });
      }
    }
  }

  console.log("✅ All products and attributes seeded successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
