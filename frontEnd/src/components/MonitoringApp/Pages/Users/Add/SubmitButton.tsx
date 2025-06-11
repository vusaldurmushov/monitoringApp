import { useFormContext, type SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useCreateUser } from "@/services/hooks/post.user";
import { useUpdateUser } from "@/services/hooks/update.user";
import type { TUser } from "@/types";

function SubmitButton({ isEdit }: { isEdit?: boolean }) {
  const methods = useFormContext<TUser>();

  const createMutation = useCreateUser({methods});
  const updateMutation = useUpdateUser(); //  Custom hook you created for PATCH

  const onSubmit: SubmitHandler<TUser> = (data: TUser) => {
    if (isEdit) {
      updateMutation.mutate(data); // 🔁 update user
    } else {
      createMutation.mutate(data);
      // 🆕 create user
    }
  };

  return (
    <Button
      className="self-start"
      onClick={methods.handleSubmit(onSubmit)}
      type="submit"
    >
      {isEdit ? "Update" : "Create"}
    </Button>
  );
}

export default SubmitButton;
