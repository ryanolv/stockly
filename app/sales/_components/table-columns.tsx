"use client";

import { SaleDto } from "@/app/_data-access/sale/get-sales";
import { formatCurrency } from "@/app/_helpers/currency";
import { ColumnDef } from "@tanstack/react-table";
import TableDropdownMenu from "./table-dropdown-menu";

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
    cell: ({ row: { original: sale } }) => formatCurrency(sale.totalAmount),
  },
  {
    accessorKey: "date",
    header: "Data",
    cell: ({ row: { original: sale } }) =>
      sale.date.toLocaleDateString("pt-BR"),
  },
  {
    header: "Ações",
    cell: ({ row: { original: sale } }) => <TableDropdownMenu sale={sale} />,
  },
];
