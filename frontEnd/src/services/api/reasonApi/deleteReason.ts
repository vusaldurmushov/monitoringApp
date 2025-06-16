  import { request } from "@/lib/request";

  export default async function deleteReason({ id }: { id: string }) {

    return request({
      method: "DELETE",
      url: `/deleteReasonForNotUsing/${id}`,
    });
  }
