import { columns } from "./_components/columns-table";
import { DataTable } from "../_components/Table";
import { getProducts } from "../_data-access/product/get-products";

import CreateProductButton from "./_components/create-product-button";

const ProductsPage = async () => {
  const products = await getProducts();
  return (
    <div className="w-full space-y-5 p-8">
      <div className="mt-8 flex items-end justify-between">
        <div className="space-y-2">
          <span>Produtos</span>
          <h2 className="text-2xl font-bold">Gestão de Produtos</h2>
        </div>
        <CreateProductButton />
      </div>
      <DataTable
        columns={columns}
        data={JSON.parse(JSON.stringify(products))}
      />
    </div>
  );
};

export default ProductsPage;
