import { Button } from "@/components/ui/button";
import usePostReason from "@/services/hooks/reasonPage/post.reason";
import { useUpdateReason } from "@/services/hooks/reasonPage/update.reason";
import type { TReason } from "@/types";
import { useFormContext } from "react-hook-form";
import { Link } from "react-router-dom";

type TReasonButton = {
  edit?: boolean;
};

function ReasonButton({ edit = false }: TReasonButton) {
  type TFormData = {
    reason: string;
  };

  const postReason = usePostReason();

  const updateReason = useUpdateReason();

  const methods = useFormContext<TFormData>();

  const { handleSubmit } = methods;

  const onSubmit = (data: TReason) => {
    if (edit) {
      updateReason.mutate(data); // 🔁 update user
    } else {
      postReason.mutate(data);
      // 🆕 create user
    }

    methods.reset(); // Reset the form after submission
  };

  return (
    <div>
      <Button
        variant='secondary'
        onClick={handleSubmit(onSubmit)}
        type='submit'
        className=' mr-1 text-white'
      >
        {edit ? "Dəyiş" : "Göndər"}
      </Button>
      <Button variant='ghost'>
        <Link to='/reasonForNotUsing'>Geri qayıt</Link>
      </Button>
    </div>
  );
}

export default ReasonButton;
