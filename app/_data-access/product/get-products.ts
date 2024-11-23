import "server-only";

import { db } from "@/app/_lib/prisma";
import { unstable_cache } from "next/cache";

export interface ProductDto {
  name: string;
  id: string;
  price: number;
  stock: number;
  status: string;
}

export const getProducts = async (): Promise<ProductDto[]> => {
  const products = await db.product.findMany({});
  const productDto = products.map((product) => ({
    name: product.name,
    id: product.id,
    stock: product.stock,
    price: Number(product.price),
    status: product.stock > 0 ? "IN_STOCK" : "OUT_OF_STOCK",
  }));
  return productDto;
};

export const cachedGetProducts = unstable_cache(getProducts, ["getProducts"], {
  tags: ["get-products"],
  revalidate: 60,
});
