import { PlusIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { ComboboxOption } from "../_components/ui/combobox";
import { Sheet, SheetTrigger } from "../_components/ui/sheet";
import { getProducts } from "../_data-access/product/get-products";
import UpsertSheetContent from "./_components/upsert-sheet-content";

const SalesPage = async () => {
  const products = await getProducts();
  const options: ComboboxOption[] = products.map((product) => {
    return {
      value: product.id,
      label: product.name,
    };
  });
  return (
    <div className="w-full space-y-5 p-8">
      <div className="mt-8 flex items-end justify-between">
        <div className="space-y-2">
          <span>Produtos</span>
          <h2 className="text-2xl font-bold">Gestão de Vendas</h2>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="gap-1">
              <PlusIcon size={20} />
              Adicionar Venda
            </Button>
          </SheetTrigger>
          <UpsertSheetContent products={products} productOptions={options} />
        </Sheet>
      </div>
      {/* <DataTable
        columns={columns}
        data={JSON.parse(JSON.stringify(products))}
      /> */}
    </div>
  );
};

export default SalesPage;
