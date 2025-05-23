import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import type { Row } from "@tanstack/react-table";
import type { TUser } from "@/types";

export const columns: ColumnDef<TUser>[] = [
  {
    accessorKey: "_id",
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
    cell: ({ row }: { row: Row<TUser> }) => {
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
