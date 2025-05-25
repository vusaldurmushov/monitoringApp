import type { TUser } from "@/types";

export type Role = "admin" | "editor" | "user" | "guest" | "rehberlik";

type RoleOption = {
  value: Role;
  label: string;
};
export const roleOptions: RoleOption[] = [
  { value: "admin", label: "Admin" },
  { value: "editor", label: "Editor" },
  { value: "user", label: "User" },
  { value: "guest", label: "Guest" },
  { value: "rehberlik", label: "Rehberlik" },
];

export const monitoringInfo = [
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

export const adStats = {
  title: "Tamkart partnyorlara görə reklam statistikası",
  statistics: {
    "Cari Gün ərzində əlavə olunanlar arasında": [
      { name: "Qapıda asılqan", quantity: 1 },
      { name: "A4", quantity: 1 },
      { name: "Buklet", quantity: 1 },
      { name: "Stiker", quantity: 1 },
      { name: "Wobler", quantity: 1 },
    ],
    "Cari Ay ərzində əlavə olunanlar arasında": [
      { name: "Qapıda asılqan", quantity: 118 },
      { name: "A4", quantity: 424 },
      { name: "Buklet", quantity: 386 },
      { name: "Stiker", quantity: 842 },
      { name: "Wobler", quantity: 19 },
    ],
    Ümumi: [
      { name: "Qapıda asılqan", quantity: 1913 },
      { name: "A4", quantity: 5032 },
      { name: "Buklet", quantity: 4472 },
      { name: "Stiker", quantity: 8980 },
      { name: "Wobler", quantity: 847 },
    ],
  },
};

export const UserList: TUser[] = [
  {
    id: "1",
    name: "Vusal Durmushov",
    username: "vusal.durmushov",
    role: "rehebrlik",
    createdAt: "26.11.2020, 04:58",
  },
  {
    id: "2",
    name: "Aysel Huseynova",
    username: "aysel.huseynova",
    role: "admin",
    createdAt: "12.02.2021, 10:15",
  },
  {
    id: "3",
    name: "Rashid Aliyev",
    username: "rashid.aliyev",
    role: "editor",
    createdAt: "03.06.2021, 14:22",
  },
  {
    id: "4",
    name: "Leyla Mammadova",
    username: "leyla.mammadova",
    role: "user",
    createdAt: "18.09.2021, 09:45",
  },
  {
    id: "5",
    name: "Elvin Karimov",
    username: "elvin.karimov",
    role: "guest",
    createdAt: "21.11.2021, 16:08",
  },
  {
    id: "6",
    name: "Sevinc Ismayilova",
    username: "sevinc.ismayilova",
    role: "rehebrlik",
    createdAt: "04.01.2022, 12:31",
  },
  {
    id: "7",
    name: "Kamran Mehdiyev",
    username: "kamran.mehdiyev",
    role: "admin",
    createdAt: "15.02.2022, 08:19",
  },
  {
    id: "8",
    name: "Nigar Guliyeva",
    username: "nigar.guliyeva",
    role: "editor",
    createdAt: "28.03.2022, 13:56",
  },
  {
    id: "9",
    name: "Tural Aliyev",
    username: "tural.aliyev",
    role: "user",
    createdAt: "09.05.2022, 18:11",
  },
  {
    id: "10",
    name: "Zarina Valiyeva",
    username: "zarina.valiyeva",
    role: "guest",
    createdAt: "19.06.2022, 07:42",
  },
  {
    id: "11",
    name: "Farid Mammadov",
    username: "farid.mammadov",
    role: "rehebrlik",
    createdAt: "02.07.2022, 11:25",
  },
  {
    id: "12",
    name: "Gunel Aliyeva",
    username: "gunel.aliyeva",
    role: "admin",
    createdAt: "14.08.2022, 15:17",
  },
  {
    id: "13",
    name: "Murad Huseynov",
    username: "murad.huseynov",
    role: "editor",
    createdAt: "29.09.2022, 22:09",
  },
  {
    id: "14",
    name: "Lala Mehdiyeva",
    username: "lala.mehdiyeva",
    role: "user",
    createdAt: "08.10.2022, 06:58",
  },
  {
    id: "15",
    name: "Rovshan Jafarov",
    username: "rovshan.jafarov",
    role: "guest",
    createdAt: "22.10.2022, 19:21",
  },
  {
    id: "16",
    name: "Ulviye Rahimova",
    username: "ulviye.rahimova",
    role: "rehebrlik",
    createdAt: "05.11.2022, 10:35",
  },
  {
    id: "17",
    name: "Anar Valiyev",
    username: "anar.valiyev",
    role: "admin",
    createdAt: "16.12.2022, 14:00",
  },
  {
    id: "18",
    name: "Sabina Ismayilova",
    username: "sabina.ismayilova",
    role: "editor",
    createdAt: "01.01.2023, 11:11",
  },
  {
    id: "19",
    name: "Orkhan Guliyev",
    username: "orkhan.guliyev",
    role: "user",
    createdAt: "10.02.2023, 08:44",
  },
  {
    id: "20",
    name: "Nazrin Mammadova",
    username: "nazrin.mammadova",
    role: "guest",
    createdAt: "23.02.2023, 17:29",
  },
  {
    id: "21",
    name: "Fuad Karimov",
    username: "fuad.karimov",
    role: "rehebrlik",
    createdAt: "05.03.2023, 20:50",
  },
  {
    id: "22",
    name: "Rena Aliyeva",
    username: "rena.aliyeva",
    role: "admin",
    createdAt: "14.04.2023, 03:15",
  },
  {
    id: "23",
    name: "Elshan Hajiyev",
    username: "elshan.hajiyev",
    role: "editor",
    createdAt: "30.04.2023, 09:07",
  },
  {
    id: "24",
    name: "Samira Huseynova",
    username: "samira.huseynova",
    role: "user",
    createdAt: "11.05.2023, 22:00",
  },
  {
    id: "25",
    name: "Ilkin Mehdiyev",
    username: "ilkin.mehdiyev",
    role: "guest",
    createdAt: "19.06.2023, 13:13",
  },
  {
    id: "26",
    name: "Vafa Guliyeva",
    username: "vafa.guliyeva",
    role: "rehebrlik",
    createdAt: "02.07.2023, 06:46",
  },
  {
    id: "27",
    name: "Emil Aliyev",
    username: "emil.aliyev",
    role: "admin",
    createdAt: "18.08.2023, 19:36",
  },
  {
    id: "28",
    name: "Shahla Mammadova",
    username: "shahla.mammadova",
    role: "editor",
    createdAt: "07.09.2023, 11:58",
  },
  {
    id: "29",
    name: "Nurlan Huseynov",
    username: "nurlan.huseynov",
    role: "user",
    createdAt: "21.10.2023, 09:40",
  },
  {
    id: "30",
    name: "Sabina Valiyeva",
    username: "sabina.valiyeva",
    role: "guest",
    createdAt: "05.12.2023, 18:26",
  },
];
