function About() {

  const userAbout ={
    "TAM AD": "Vusal Durmushov",
    "İSTİFADƏÇİ ADI":"vusal.durmushov",
    'E-MAIL': "vusal.durmushov@mail.com",
    "ƏLAVƏ OLUNUB":"1 ay əvvəl"
  }


  const userAboutKeys =Object.entries(userAbout)
  console.log(userAboutKeys);

  return (
    <div>
      <h1 className="font-medium pb-4">HAQQINDA</h1>
      {
        userAboutKeys.map(([key, value]) => (
          <div key={key} className="flex justify-between py-2 flex-col ">
            <h1 className="text-sm ">{key}</h1>
            <p className="text-sm text-gray-500">{value}</p>
          </div>
        ))
      }


    </div>

   
  );
}

export default About;
