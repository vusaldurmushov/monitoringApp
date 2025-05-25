import { useFormContext, type SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useCreateUser } from "@/services/hooks/post.user";
import { useUpdateUser } from "@/services/hooks/update.user";
import type { TUser } from "@/types";

function SubmitButton({ isEdit }: { isEdit?: boolean }) {
  const methods = useFormContext<TUser>();

  const createMutation = useCreateUser(); //  Custom hook you created for POST
  const updateMutation = useUpdateUser(); //  Custom hook you created for PATCH

  const onSubmit: SubmitHandler<TUser> = (data: TUser) => {
    console.log(data, "`data` in SubmitButton component");
    if (isEdit) {
      console.log("edit work");
      updateMutation.mutate(data); // 🔁 update user
    } else {
      createMutation.mutate(data); // 🆕 create user
      methods.reset(); // Optional: reset form after submit
    }
  };

  return (
    <Button
      className='self-start'
      onClick={methods.handleSubmit(onSubmit)}
      type='submit'
    >
      {isEdit ? "Update" : "Create"}
    </Button>
  );
}

export default SubmitButton;
