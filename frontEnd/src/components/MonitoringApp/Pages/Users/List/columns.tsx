import type { ColumnDef } from "@tanstack/react-table";
import type { Row } from "@tanstack/react-table";
import type { TUser } from "@/types";
import ColumnButton from "./ColumnButton";

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
