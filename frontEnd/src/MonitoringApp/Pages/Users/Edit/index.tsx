import AddUser from "@/MonitoringApp/Pages/Users/Add";
import About from "@/MonitoringApp/Pages/Users/Edit/About";

function Edit() {
  return (
    <div className="grid grid-cols-3 w-full gap-5">
      <div className="col-span-2">
        <AddUser />
      </div>
      <div className="col-span-1">
        <About />
      </div>
    </div>
  );
}

export default Edit;
