import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputForm from "@/shared/InputForm";
import { useEffect } from "react";
import SelectForm from "@/shared/SelectForm";
import { roleOptions } from "@/const";
import { formSchema, type FormData } from "@/feature/formSchame";
// import { useCreateUser } from "@/services/hooks/post.user";
import type { TUser } from "@/types";
import SubmitButton from "./SubmitButton";
import { SuccessAlert } from "../List/SuccessAlert";

type TAddUser = {
  user?: TUser | null;
};

function AddUser({ user }: TAddUser) {
  // const [preview, setPreview] = useState<string | null>(null);

  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // role: "admin",
    },
  });

  useEffect(() => {
    if (user) {
      methods.reset({
        name: user.name,
        username: user.username,
        email: user.email,
        role: user.role,
        // profileImage: user.profileImage, // optional
      });
    }
  }, [user, methods]);

  const isEdit = !!user;

  return (
    <div className="h-full">
      <h1 className="font-medium p-4">
        {isEdit ? "EDIT PROFILE" : "CREATE PROFILE"}
      </h1>

      <FormProvider {...methods}>
        <div className="flex flex-col gap-4">
          {/* <InputForm
            name='profileImage'
            label='Profile image'
            type='file'
            accept='image/*'
          /> */}

          <InputForm name="name" label="Fullname" />
          <InputForm name="username" label="Username" disabled={isEdit} />
          <InputForm
            name="email"
            label="Email"
            type="email"
            disabled={isEdit}
          />
          <InputForm name="password" label="Password" />
          <InputForm name="confirmPassword" label="Confirm password" />
          <SelectForm
            name="role"
            label="Role"
            // value='Admin'
            placeholder="Admin"
            options={roleOptions}
            className="w-full"
          />
        </div>
        <SubmitButton isEdit={isEdit} />
      </FormProvider>
      <SuccessAlert />
    </div>
  );
}

export default AddUser;
