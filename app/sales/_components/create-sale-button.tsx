"use client";

import { Button } from "@/app/_components/ui/button";
import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet";
import { PlusIcon } from "lucide-react";
import UpsertSheetContent from "./upsert-sheet-content";
import { ComboboxOption } from "@/app/_components/ui/combobox";
import { Product } from "@prisma/client";
import { useState } from "react";

interface CreateSaleButtonProps {
  products: Product[];
  productOptions: ComboboxOption[];
}

const CreateSaleButton = ({
  products,
  productOptions,
}: CreateSaleButtonProps) => {
  const [sheetIsOpen, setSheetIsOpen] = useState(false);
  return (
    <Sheet open={sheetIsOpen} onOpenChange={setSheetIsOpen}>
      <SheetTrigger asChild>
        <Button className="gap-1">
          <PlusIcon size={20} />
          Adicionar Venda
        </Button>
      </SheetTrigger>
      <UpsertSheetContent
        onSubmitSuccess={() => setSheetIsOpen(false)}
        products={products}
        productOptions={productOptions}
      />
    </Sheet>
  );
};

export default CreateSaleButton;
