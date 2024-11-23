import { columns } from "./_components/columns-table";
import { DataTable } from "../_components/Table";
import { cachedGetProducts } from "../_data-access/product/get-products";

import CreateProductButton from "./_components/create-product-button";
import Header from "../_components/header";

const ProductsPage = async () => {
  const products = await cachedGetProducts();
  return (
    <div className="w-full space-y-5 p-8">
      <Header title="Gestão de Produtos" subtitle="Produtos">
        <CreateProductButton />
      </Header>
      <DataTable
        columns={columns}
        data={JSON.parse(JSON.stringify(products))}
      />
    </div>
  );
};

export default ProductsPage;
