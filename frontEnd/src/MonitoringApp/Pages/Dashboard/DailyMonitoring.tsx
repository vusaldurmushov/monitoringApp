import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function DailyMonitoring() {
  const data = [
    {
      title: "Günlük monitorinq",
      count: 1,
      TamkartPartnyorlar: 1,
      PartnyouOlmayanlar: 0,
      NoInfo: 0,
    },
    {
      title: "Aylıq monitorinq",
      count: 2000,
      TamkartPartnyorlar: 1063,
      PartnyouOlmayanlar: 958,
      NoInfo: 9,
    },
    {
      title: "Ümumi monitorinq",
      count: 28567,
      TamkartPartnyorlar: 14309,
      PartnyouOlmayanlar: 15456,
      NoInfo: 1134,
    },
  ];

  return (
    <div className='flex justify-space-between gap-[25px]'>
      {data.map((item, index) => (
        <Card key={index} className='mb-4 w-full '>
          <CardHeader className='p-4'>
            <CardTitle>{item.title}</CardTitle>
            <p className='text-[30px] font-[600]'>{item.count}</p>
          </CardHeader>
          <CardContent className='p-4'>
            <div className='flex flex-col text-center'>
              <p>
                Tamkart partnyorlar:{" "}
                <span className='font-[600]'>{item.TamkartPartnyorlar}</span>{" "}
              </p>
              <p>
                Partnyor olmayanlar:{" "}
                <span className='font-[600]'>{item.PartnyouOlmayanlar}</span>
              </p>
              <p>
                No Info: <span className='font-[600]'>{item.NoInfo}</span>
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default DailyMonitoring;
