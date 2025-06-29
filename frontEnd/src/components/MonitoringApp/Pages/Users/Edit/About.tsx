import type { TUser } from "@/types";

type TAbout = {
  user?: TUser | null;
};

function About({ user }: TAbout) {
  const userAbout = {
    "TAM AD": user?.name,
    "İSTİFADƏÇİ ADI": user?.username,
    "E-MAIL": user?.email,
    "ƏLAVƏ OLUNUB": user?.dateForCreated,
    "MƏLUMAT DƏYİŞDİRİLİB": user?.dateForUpdate,
  };

  return (
    <div>
      <h1 className='font-medium pb-4'>HAQQINDA</h1>

      {Object.entries(userAbout).map(([key, value]) => (
        <div key={key} className='flex flex-col py-2'>
          <h2 className='text-sm font-medium text-gray-800'>
            {value ? key : null}
          </h2>

          {key === "E-MAIL" ? (
            <a
              href={`mailto:${value}`}
              className='text-sm text-blue-600 hover:underline'
            >
              {value}
            </a>
          ) : (
            <p className='text-sm text-gray-500'> {value}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default About;
