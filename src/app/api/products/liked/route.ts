// File: /pages/api/products/liked.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from "@src/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const likedProducts = await prisma.product.findMany({
      where: { liked: true },
      select: {
        id: true,
        name: true,
        imageUrl: true,
        salePrice: true,
        regularPrice: true,
      },
    });

    res.status(200).json(likedProducts);
  } catch (error) {
    console.error('Error fetching liked products:', error);
    res.status(500).json({ message: 'Server error' });
  }
}
