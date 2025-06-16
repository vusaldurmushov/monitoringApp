import { request } from "@/lib/request";

export default function updateReason(data: { reason: string }) {
  return request<{ reason: string }>({
    method: "PATCH",
    url: "/reasonForNotUsing/update/:id",
    data,
  });
}
