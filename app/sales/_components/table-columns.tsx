"use client";

import { SaleDto } from "@/app/_data-access/sale/get-sales";
import { formatCurrency } from "@/app/_helpers/currency";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<SaleDto>[] = [
  {
    accessorKey: "productNames",
    header: "Produtos",
  },
  {
    accessorKey: "totalProducts",
    header: "Quantidade de Produtos",
  },
  {
    header: "Valor Total",
    cell: ({ row: { original } }) => formatCurrency(original.totalAmount),
  },
  {
    accessorKey: "date",
    header: "Data",
    cell: ({ row: { original } }) => original.date.toLocaleDateString("pt-BR"),
  },
  {
    header: "Ações",
    cell: () => <p>Editar</p>,
  },
];
