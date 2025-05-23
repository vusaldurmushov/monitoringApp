import type { Role } from "@/const";

export type TUser = {
  id?: string;
  name: string;
  username: string;
  role: Role;
  createdAt?: string;
};