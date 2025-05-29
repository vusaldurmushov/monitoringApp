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
    BestCartPartnyorlar: 1,
    PartnyouOlmayanlar: 0,
    NoInfo: 0,
  },
  {
    title: "Aylıq monitorinq",
    count: 2000,
    BestCartPartnyorlar: 1063,
    PartnyouOlmayanlar: 958,
    NoInfo: 9,
  },
  {
    title: "Ümumi monitorinq",
    count: 28567,
    BestCartPartnyorlar: 14309,
    PartnyouOlmayanlar: 15456,
    NoInfo: 1134,
  },
];

export const adStats = {
  title: "BestCartPartnyorlar partnyorlara görə reklam statistikası",
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
