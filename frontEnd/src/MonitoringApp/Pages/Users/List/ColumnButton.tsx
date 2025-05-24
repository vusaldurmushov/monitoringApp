import { Button } from "@/components/ui/button"
import { Pencil, Trash2Icon } from "lucide-react"
import { Link } from "react-router-dom"
import type { TUser } from "@/types"
import { useDeleteUser } from "@/services/hooks/delete.user";

function ColumnButton({ user }: { user: TUser }) {
  const { mutate: deleteUser } = useDeleteUser();

  return (
    <div className="flex items-center">
      <Link
        to={"/edit"}
        className="text-[#0056c3]"
        onClick={() => console.log("Edit", user._id)}
      >
        <Pencil className="scale-[0.75]" />
      </Link>
      <Button
        variant={"ghost"}
        className="text-[#ff3366] hover:text-[#ff3366]"
        onClick={() => deleteUser(user._id)}
      >
        <Trash2Icon />
      </Button>
    </div>
  );
}


export default ColumnButton