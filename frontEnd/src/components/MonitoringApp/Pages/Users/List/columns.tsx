import type { ColumnDef } from "@tanstack/react-table";
import type { Row } from "@tanstack/react-table";
import type { TUser } from "@/types";
import ColumnButton from "./ColumnButton";
import { Link } from "react-router-dom";

export const columns: ColumnDef<TUser>[] = [
  {
    accessorKey: "_id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }: { row: Row<TUser> }) => {
      const user = row.original;
      return (
        <Link className="text-[#0056c3]" to={`/users/${user._id}/info`}>
          {" "}
          {user.name}{" "}
        </Link>
      );
    },
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
    accessorKey: "dateForCreated",
    header: "Created",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }: { row: Row<TUser> }) => {
      const user = row.original;
      return <ColumnButton user={user} />;
    },
  },
];
