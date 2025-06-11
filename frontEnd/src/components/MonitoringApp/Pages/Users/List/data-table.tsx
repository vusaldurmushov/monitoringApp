import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { TPaginationPage } from "@/types";

type TPaginateData<T> = {
  page: number;
  limit: number;
  totalUsers: number;
  totalPages: number;
  data: T[];
};
interface DataTableProps<T> {
  columns: ColumnDef<T>[];
  PaginateData: TPaginateData<T> ;
  pagination: TPaginationPage;
  setPagination: React.Dispatch<React.SetStateAction<TPaginationPage>>;
}
export function DataTable<T>({
  columns,
  PaginateData,
  pagination,
  setPagination,
}: DataTableProps<T>) {
  const [globalFilter, setGlobalFilter] = useState("");

  const data = PaginateData?.data ?? [];
  const { totalPages } = PaginateData ?? { totalPages: 0 };
  const { totalUsers } = PaginateData ?? { totalUsers: 0 };

  const intervalUserPerPage = `${
    pagination.pageIndex * pagination.pageSize
  } - ${pagination.pageIndex * pagination.pageSize + pagination.pageSize}`;

  const handleNextPage = () => {
    setPagination((prev) => ({
      ...prev,
      pageIndex: prev.pageIndex + 1,
    }));
  };

  const handlePreviousPage = () => {
    setPagination((prev) => ({
      ...prev,
      pageIndex: Math.max(prev.pageIndex - 1, 0),
    }));
  };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      globalFilter,
    },
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setGlobalFilter,

    onPaginationChange: setPagination,
    manualPagination: true,
  });

  return (
    <div className='rounded-md border'>
      <Input
        placeholder='Search all table...'
        value={globalFilter}
        onChange={(e) => table.setGlobalFilter(e.target.value)}
        className='my-4 w-full max-w-sm ml-2'
      />
      <Table >
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className='h-24 text-center'>
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className='flex items-center justify-between  bg-gray-50'>
        <div className='flex items-center gap-4 my-4 ml-2 '>
          <Label htmlFor='rowsPerPage'>Rows per page:</Label>
          <Select
            value={pagination.pageSize.toString()}
            onValueChange={(value) => table.setPageSize(Number(value))}
          >
            <SelectTrigger className='w-[80px]' id='rowsPerPage'>
              <SelectValue placeholder='Select size' />
            </SelectTrigger>
            <SelectContent>
              {[5, 10, 15].map((size) => (
                <SelectItem key={size} value={size.toString()}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Label>
            Ümumi {totalUsers} nəticədən :{intervalUserPerPage}
          </Label>
        </div>

        {/* pageIndex: number;
    pageSize: number; */}
        <div>
          <Button
            variant='secondary'
            className='text-white mr-2'
            onClick={handlePreviousPage}
            disabled={+pagination.pageIndex === 0}
          >
            <ChevronLeft className='size-4' />
          </Button>

          <span>Page {pagination.pageIndex + 1}</span>
          <Button
            variant='secondary'
            className='text-white ml-2'
            disabled={pagination.pageIndex + 1 >= totalPages}
            onClick={handleNextPage}
          >
            <ChevronRight className='size-4' />
          </Button>
        </div>
      </div>
    </div>
  );
}
