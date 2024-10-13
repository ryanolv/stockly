import { Plus } from "lucide-react";
import { Button } from "../_components/ui/button";
import { getProducts } from "../_data-access/product/get-products";
import { columns } from "./_components/columns-table";
import { DataTable } from "../_components/Table";

const ProductsPage = async () => {
  const products = await getProducts();
  return (
    <div className="w-full space-y-5 p-8">
      <div className="mt-8 flex items-end justify-between">
        <div className="space-y-2">
          <span>Produtos</span>
          <h2 className="text-2xl font-bold">Gestão de Produtos</h2>
        </div>
        <Button className="gap-1">
          <Plus size={20} />
          Novo Produto
        </Button>
      </div>
      <DataTable columns={columns} data={products} />
    </div>
  );
};

export default ProductsPage;
