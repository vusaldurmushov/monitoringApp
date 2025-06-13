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
      { name: "Qapıda asılqan", quantity: 1, backgroundColor: "#FF5E00" },
      { name: "A4", quantity: 1, backgroundColor: "#00B0C7" },
      { name: "Buklet", quantity: 1, backgroundColor: "#196C28" },
      { name: "Stiker", quantity: 1, backgroundColor: "#350075" },
      { name: "Wobler", quantity: 1, backgroundColor: "#00C767" },
    ],
    "Cari Ay ərzində əlavə olunanlar arasında": [
      { name: "Qapıda asılqan", quantity: 118, backgroundColor: "#FF5E00" },
      { name: "A4", quantity: 424, backgroundColor: "#00B0C7" },
      { name: "Buklet", quantity: 386, backgroundColor: "#196C28" },
      { name: "Stiker", quantity: 842, backgroundColor: "#350075" },
      { name: "Wobler", quantity: 19, backgroundColor: "#00C767" },
    ],
    Ümumi: [
      { name: "Qapıda asılqan", quantity: 1913, backgroundColor: "#FF5E00" },
      { name: "A4", quantity: 5032, backgroundColor: "#00B0C7" },
      { name: "Buklet", quantity: 4472, backgroundColor: "#196C28" },
      { name: "Stiker", quantity: 8980, backgroundColor: "#350075" },
      { name: "Wobler", quantity: 847, backgroundColor: "#00C767" },
    ],
  },
};
