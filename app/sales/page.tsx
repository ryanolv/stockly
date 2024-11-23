import Header from "../_components/header";
import { DataTable } from "../_components/Table";
import { ComboboxOption } from "../_components/ui/combobox";
import { getProducts } from "../_data-access/product/get-products";
import { getSales } from "../_data-access/sale/get-sales";
import CreateSaleButton from "./_components/create-sale-button";
import { columns } from "./_components/table-columns";

const SalesPage = async () => {
  const products = await getProducts();
  const sales = await getSales();
  const options: ComboboxOption[] = products.map((product) => {
    return {
      value: product.id,
      label: product.name,
    };
  });
  return (
    <div className="w-full space-y-5 p-8">
      <Header title="Gestão de Vendas" subtitle="Vendas">
        <CreateSaleButton products={products} productOptions={options} />
      </Header>
      <DataTable columns={columns} data={sales} />
    </div>
  );
};

export default SalesPage;
