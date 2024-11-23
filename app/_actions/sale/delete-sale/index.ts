"use server";

import { revalidatePath } from "next/cache";
import { deleteSaleSchema, DeleteSaleSchema } from "./schema";
import { db } from "@/app/_lib/prisma";

export const deleteSale = async ({ id }: DeleteSaleSchema) => {
  deleteSaleSchema.parse({ id });
  await db.$transaction(async (trx) => {
    const sale = await trx.sale.findUnique({
      where: { id },
      include: {
        products: true,
      },
    });
    if (!sale) throw new Error("Sale not found");
    await trx.sale.delete({
      where: { id },
    });
    for (const product of sale.products) {
      await trx.product.update({
        where: { id: product.productId },
        data: {
          stock: {
            increment: product.quantity,
          },
        },
      });
    }
  });
  revalidatePath("/sales");
  revalidatePath("/products");
  revalidatePath("/");
};
