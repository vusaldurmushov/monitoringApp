import { request } from "@/lib/request";
import type { TReason } from "@/types";

export default function updateReason(data: TReason) {
  return request<TReason>({
    method: "PATCH",
    url: `/reasonForNotUsing/update/${data._id}`,
    data,
  });
}
