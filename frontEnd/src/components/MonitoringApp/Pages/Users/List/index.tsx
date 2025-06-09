import { useState } from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";

import { usePaginateUser } from "@/services/hooks/paginate.user";
import type { TPaginationPage, TUser } from "@/types";

export default function DemoPage() {
  const [pagination, setPagination] = useState<TPaginationPage>({
    pageIndex: 0,
    pageSize: 5,
  });

  const {
    data: PaginateData,
    isLoading,
    error,
  } = usePaginateUser(pagination.pageIndex + 1, pagination.pageSize);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred</div>;

  return (
    <div className='container mx-auto py-10'>
      <DataTable<TUser>
        columns={columns}
        PaginateData={PaginateData }
        pagination={pagination}
        setPagination={setPagination}
      />
    </div>
  );
}
