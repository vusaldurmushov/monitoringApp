import { Button } from "@/components/ui/button";
import { Pencil, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import type { TReason } from "@/types";
import { AlertDialogDemo } from "../../../Users/List/AlertDialog";
import useDeleteReason from "@/services/hooks/reasonPage/deleteReason";

function ColumnButton({ data }: { data: TReason }) {
  const { mutate: deleteReason } = useDeleteReason();

  const url = '/reasonForNotUsing';

  return (
    <div className='flex items-center'>
      <Link to={`/users/${data._id}/edit`} className='text-[#0056c3]'>
        <Pencil className='scale-[0.75]' />
      </Link>
      <AlertDialogDemo url={url} onConfirm={() => deleteReason({ id: data._id })}>
        <Button variant='ghost' className='text-red-500 hover:text-red-600 '>
          <Trash2Icon />
        </Button>
      </AlertDialogDemo>
    </div>
  );
}

export default ColumnButton;
