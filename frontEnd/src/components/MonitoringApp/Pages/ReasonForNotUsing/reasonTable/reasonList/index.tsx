import { useState } from "react";

import type { TPaginationPage, TReason } from "@/types";
import Loading from "@/shared/Loading";
import { DataTable } from "../../../Users/List/data-table";
import { usePaginateReason } from "@/services/hooks/reasonPage/paginate.reason";
import { columns } from "./column";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ReasonList() {
  const [pagination, setPagination] = useState<TPaginationPage>({
    pageIndex: 0,
    pageSize: 5,
  });

  const {
    data: PaginateData,
    isLoading,
    error,
  } = usePaginateReason(pagination.pageIndex + 1, pagination.pageSize);

  if (isLoading) return <Loading />;
  if (error) return <div>Error occurred</div>;
  if (!PaginateData) return null;

  return (
    <div className='container mx-auto'>
      <Button  variant={'secondary'} className="text-white my-4">
        <Link to='/reasonForNotUsing/add'>Əlavə Et</Link>
      </Button>

      <DataTable<TReason>
        columns={columns}
        PaginateData={PaginateData}
        pagination={pagination}
        setPagination={setPagination}
        text='POS - İSTİFADƏ EDİLMƏMƏ SƏBƏBLƏRİ'
      />
    </div>
  );
}
