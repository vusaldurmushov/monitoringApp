import AddUser from "@/components/MonitoringApp/Pages/Users/Add";
import About from "@/components/MonitoringApp/Pages/Users/Edit/About";
import { GetUser } from "@/services/hooks/get.userId";
import Loading from "@/shared/Loading";
import { useParams } from "react-router-dom";

function Edit() {
  const { id } = useParams();


  // now you can use this id to fetch user data
  const { data: user, isLoading } = GetUser(id as string);


  if (isLoading) return <Loading/>;

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
