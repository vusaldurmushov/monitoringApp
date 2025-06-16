import { request } from "@/lib/request";

export default function createReason(data: { reason: string }) {
  return request<{ reason: string }>({
    method: "POST",
    url: "reasonForNotUsing",
    data,
  });
}
