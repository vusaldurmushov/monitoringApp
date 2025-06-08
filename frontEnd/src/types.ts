import type { Role } from "@/const";

export type TUser = {
  _id: string;
  name: string;
  username: string;
  role: Role;
  createdAt?: string;
  profilImage?: string;
  email?: string;
  dateForCreated?: string;
};


export type TPaginationPage = {
  pageIndex: number;
  pageSize: number;
};