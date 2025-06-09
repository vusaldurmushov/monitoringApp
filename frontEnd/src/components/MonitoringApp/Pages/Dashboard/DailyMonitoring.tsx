import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { monitoringInfo } from "@/const";

function DailyMonitoring() {
  return (
    <div className="flex justify-space-between gap-[25px]">
      {monitoringInfo.map((item, index) => (
        <Card key={index} className="mb-4 w-full ">
          <CardHeader className="p-4">
            <CardTitle>{item.title}</CardTitle>
            <p className="text-[30px] font-[600]">{item.count}</p>
          </CardHeader>
          <CardContent className="p-4">
            <div className="flex flex-col text-center">
              <p>
                BestCartPartnyorlar partnyorlar:{" "}
                <span className="font-[600]">{item.BestCartPartnyorlar}</span>{" "}
              </p>
              <p>
                Partnyor olmayanlar:{" "}
                <span className="font-[600]">{item.PartnyouOlmayanlar}</span>
              </p>
              <p>
                No Info: <span className="font-[600]">{item.NoInfo}</span>
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default DailyMonitoring;
