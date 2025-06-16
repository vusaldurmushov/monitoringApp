import InputForm from "@/shared/InputForm";
import { FormProvider, useForm } from "react-hook-form";
import ReasonButton from "./ReasonButton";
import { useParams } from "react-router-dom";
import { useGetReason } from "@/services/hooks/reasonPage/get.reason";
import Loading from "@/shared/Loading";
import { useEffect } from "react";

type TReasonForNotUsing = {
  edit?: boolean;
};

function ReasonForNotUsing({ edit = false }: TReasonForNotUsing) {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useGetReason(id || ""); // Always call the hook at top-level

  const methods = useForm({
    defaultValues: {
      reason: "",
    },
  });

  useEffect(() => {
    if (data?.reason) {
      methods.reset({
        reason: data.reason,
      });
    }
  }, [data, methods]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='shadow-md bg-white p-4 mt-4 rounded'>
      <h1></h1>
      <h1>
        {edit
          ? "İstifadə edilmə səbəbini dəyiş"
          : "İstifadə edilməmə səbəbini yaz"}
      </h1>

      <FormProvider {...methods}>
        <InputForm
          name='reason'
          placeholder='Səbəbi yazın'
          maxLength={150}
          min={3}
          className='my-3'
        />
        <ReasonButton edit={edit} />
      </FormProvider>
    </div>
  );
}

export default ReasonForNotUsing;
