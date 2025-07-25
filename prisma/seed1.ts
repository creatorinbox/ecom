import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Step 1: Create Attribute "Color" with values
  const colorAttribute = await prisma.attribute.upsert({
    where: { name: "Color" },
    update: {},
    create: {
      name: "Color",
      values: {
        create: [
          { value: "Red" },
          { value: "Black" },
          { value: "White" },
        ],
      },
    },
    include: { values: true },
  });

  // Step 2: Link productId 1 to "Red" and "Black" values
  const redValue = colorAttribute.values.find(v => v.value === "Red");
  const blackValue = colorAttribute.values.find(v => v.value === "Black");

  if (!redValue || !blackValue) {
    throw new Error("Attribute values not found");
  }

  await prisma.productAttribute.createMany({
    data: [
      {
        productId: 1,
        attributeValueId: redValue.id,
      },
      {
        productId: 1,
        attributeValueId: blackValue.id,
      },
    ],
    skipDuplicates: true,
  });

  console.log("✅ Seeded color attributes for product 1");
}

main()
  .catch(e => {
    console.error("❌ Seed failed", e);
  })
  .finally(() => prisma.$disconnect());
