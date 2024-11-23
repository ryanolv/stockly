import "server-only";

import { db } from "@/app/_lib/prisma";

export interface SaleDto {
  id: string;
  productNames: string;
  totalProducts: number;
  totalAmount: number;
  date: Date;
}

export const getSales = async (): Promise<SaleDto[]> => {
  const sales = await db.sale.findMany({
    include: {
      products: {
        include: { product: true },
      },
    },
  });

  return sales.map((sale) => ({
    id: sale.id,
    productNames: sale.products
      .map((product) => product.product.name)
      .join(" • "),
    totalProducts: sale.products.reduce(
      (acc, product) => acc + product.quantity,
      0,
    ),
    totalAmount: sale.products.reduce(
      (acc, product) => acc + Number(product.unitPrice) * product.quantity,
      0,
    ),
    date: sale.date,
  }));
};
