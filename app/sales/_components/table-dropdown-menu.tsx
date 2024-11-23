import { deleteSale } from "@/app/_actions/sale/delete-sale";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/_components/ui/alert-dialog";
import { Button } from "@/app/_components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import { SaleDto } from "@/app/_data-access/sale/get-sales";
import { MoreHorizontalIcon, ClipboardCopyIcon, TrashIcon } from "lucide-react";
import { toast } from "sonner";

interface SalesTableDropdownMenuProps {
  sale: Pick<SaleDto, "id">;
}

const SalesTableDropdownMenu = ({ sale }: SalesTableDropdownMenuProps) => {
  const handleCopyToClipboardClick = () => {
    navigator.clipboard.writeText(sale.id);
    toast.success("ID copiado para a área de transferência");
  };
  const handleConfirmDeleteClick = () => {
    try {
      deleteSale({ id: sale.id });
      toast.success("Venda deletada com sucesso");
    } catch (error) {
      toast.error("Erro ao deletar a venda");
      console.error(error);
    }
  };
  return (
    <AlertDialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <MoreHorizontalIcon size={16} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Ações</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="gap-1.5"
            onClick={handleCopyToClipboardClick}
          >
            <ClipboardCopyIcon size={16} />
            Copiar ID
          </DropdownMenuItem>
          <AlertDialogTrigger asChild>
            <DropdownMenuItem className="gap-1.5">
              <TrashIcon size={16} />
              Deletar
            </DropdownMenuItem>
          </AlertDialogTrigger>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
          <AlertDialogDescription>
            Você está prestes a deletar esta venda. Essa ação é irreversível.
            Deseja continuar?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirmDeleteClick}>
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SalesTableDropdownMenu;
