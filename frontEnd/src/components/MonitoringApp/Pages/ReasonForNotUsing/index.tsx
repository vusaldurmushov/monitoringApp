import InputForm from "@/shared/InputForm";
import { FormProvider, useForm } from "react-hook-form";
import ReasonButton from "./ReasonButton";

function ReasonForNotUsing() {

  

  const methods = useForm({
    defaultValues: {
      reason: "",
    },
  });

  return (
    <div className='shadow-md bg-white p-4 mt-4 rounded'>
      <h1>İstifadə edilməmə səbəbini yaz</h1>

      <FormProvider {...methods}>
        <InputForm
          name='reason'
          placeholder='Səbəbi yazın'
          maxLength={150}
          min={3}
          className='my-3'
        />
        <ReasonButton />
      </FormProvider>
    </div>
  );
}

export default ReasonForNotUsing;
