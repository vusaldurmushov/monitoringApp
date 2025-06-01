import { columns } from "./columns";
import { DataTable } from "./data-table";
import { useUsers } from "@/services/hooks/get.users";
import { SuccessAlert } from "./SuccessAlert";
import { Toaster } from "sonner";
import { CustomSuccessToast } from "@/shared/CustomToast";

export default function DemoPage() {
  const { data, isLoading, error } = useUsers();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred</div>;

  return (
    <div className='container mx-auto py-10'>
      <DataTable columns={columns} data={data ?? []} />
      {/* <pre className='mt-6 bg-gray-100 p-4 rounded'>
        {JSON.stringify(data, null, 2)}
      </pre> */}
    </div>
  );
}
