import { Button } from "@/components/ui/button";
import { Pencil, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import type { TUser } from "@/types";
import { useDeleteUser } from "@/services/hooks/delete.user";
import { AlertDialogDemo } from "./AlertDialog";

function ColumnButton({ user }: { user: TUser }) {
  const { mutate: deleteUser } = useDeleteUser();

  const url = '/userlist';

  return (
    <div className='flex items-center'>
      <Link to={`/users/${user._id}/edit`} className='text-[#0056c3]'>
        <Pencil className='scale-[0.75]' />
      </Link>
      <AlertDialogDemo url={url} onConfirm={() => deleteUser(user._id)}>
        <Button variant='ghost' className='text-red-500 hover:text-red-600 '>
          <Trash2Icon />
        </Button>
      </AlertDialogDemo>
    </div>
  );
}

export default ColumnButton;
