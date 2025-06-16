import type { ColumnDef } from "@tanstack/react-table";
import type { Row } from "@tanstack/react-table";
import type { TReason } from "@/types";
import { Link } from "react-router-dom";
import ColumnButton from "./ColumnButton";
// import ColumnButton from "../../../Users/List/ColumnButton";

export const columns: ColumnDef<TReason>[] = [
  {
    accessorKey: "_id",
    header: "ID",
  },
  {
    accessorKey: "reason",
    header: "Reason",
    cell: ({ row }: { row: Row<TReason> }) => {
      const data = row.original;
      // reasonForNotUsing/:id/info
      return (
        <Link className='text-[#0056c3]' to={`/users/${data._id}/info`}>
          {" "}
          {data.reason}{" "}
        </Link>
      );
    },
  },
  {
    accessorKey: "dateForCreated",
    header: "Created",
  },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }: { row: Row<TReason> }) => {
        const data = row.original;
        return <ColumnButton data={data} />;
      },
    },
];
