import AddUser from "@/MonitoringApp/Pages/Users/Add";
import About from "@/MonitoringApp/Pages/Users/Edit/About";
import { GetUser } from "@/services/hooks/get.userId";
import { useParams } from "react-router-dom";

function Edit() {
  const { id } = useParams();

  // now you can use this id to fetch user data
  const { data: user, isLoading } = GetUser(id!);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className='grid grid-cols-3 w-full gap-5'>
      <div className='col-span-2'>
        <AddUser user={user} />
      </div>
      <div className='col-span-1'>
        <About user={user} />
      </div>
    </div>
  );
}

export default Edit;
