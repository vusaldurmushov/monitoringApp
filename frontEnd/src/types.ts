import type { Role } from "@/const";

export type TUser = {
  _id: string;
  name: string;
  username: string;
  role: Role;
  createdAt?: string;
};