import { request } from "@/lib/request";
import type { TReason } from "@/types";

export default async function getReason(id: string): Promise<TReason> {
  return request<TReason>({
    method: "GET",
    url: `/getReasonForNotUsing/${id}`,
  });
}
