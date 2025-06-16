import { request } from "@/lib/request";

export default function getReason() {
  return request({
    method: "GET",
    url: "/getReasonForNotUsing/:id",
  });
}
