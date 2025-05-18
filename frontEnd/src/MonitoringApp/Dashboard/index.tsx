import { AdStatsChart } from "../Statistics";
import DailyMonitoring from "./DailyMonitoring";

function Dashboard() {
  return (
   //  <div className="bg-[#F9FAFB] w-full" >
   <div className=" w-full pr-[25px] flex flex-col gap-[30px]" >
      <h1 className="text-[22px] font-medium " >Welcome to Dashboard </h1>
      <DailyMonitoring/>
      <AdStatsChart/>
    </div>
  );
}

export default Dashboard;
