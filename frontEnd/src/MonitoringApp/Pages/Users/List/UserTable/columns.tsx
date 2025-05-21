import { Button } from "@/components/ui/button";
import type { Role } from "@/const";
import type { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";

export type TUserList = {
  id: string;
  name: string;
  username: string;
  role: Role;
  createdAt: string;
};

export const columns: ColumnDef<TUserList>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "createdAt",
    header: "Created",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const user = row.original;
      return (
        <div className="flex items-center">
          <Link
            to={"/edit"}
            className="text-[#0056c3]"
            onClick={() => console.log("Edit", user.id)}
          >
            Edit
          </Link>
          <Button
            variant={"ghost"}
            className="text-[#ff3366] hover:text-[#ff3366]"
            onClick={() => console.log("Delete", user.id)}
          >
            Delete
          </Button>
        </div>
      );
    },
  },
];
