"use server";

import { revalidatePath } from "next/cache";
import { deleteSaleSchema, DeleteSaleSchema } from "./schema";
import { db } from "@/app/_lib/prisma";

export const deleteSale = async ({ id }: DeleteSaleSchema) => {
  deleteSaleSchema.parse({ id });
  await db.sale.delete({
    where: { id },
  });
  revalidatePath("/sales");
};
