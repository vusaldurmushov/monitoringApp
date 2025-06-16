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
  dateForUpdate?: string;
};

export type TPaginationPage = {
  pageIndex: number;
  pageSize: number;
};

export type TReason = {
  _id: string;
  reason: string;
  dateForCreated?: string;
  dateForUpdate?: string;
};
