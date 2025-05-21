import { useEffect, useState } from "react";
import { columns, type TUserList } from "./columns";
import { DataTable } from "./data-table";
import { UserList } from "@/const";

export default function DemoPage() {
  const [data, setData] = useState<TUserList[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result: TUserList[] = await Promise.resolve(UserList);
      setData(result);
    }

    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
