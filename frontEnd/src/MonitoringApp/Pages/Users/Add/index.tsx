import { Button } from "@/components/ui/button";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputForm from "@/shared/InputForm";
import { useState } from "react";
import SelectForm from "@/shared/SelectForm";
import { roleOptions } from "@/const";
import { formSchema } from "@/MonitoringApp/formSchame";
import { useCreateUser } from "@/services/hooks/post.user";

function AddUser() {
  const [preview, setPreview] = useState<string | null>(null);
  const mutation = useCreateUser();

  type FormData = z.infer<typeof formSchema>;
  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: "admin", // ← set your initial select value here
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Data:", data);
    mutation.mutate(data);
    methods.reset();
  };

  return (
    <div className="h-full">
      <h1 className="font-medium pb-4">CREATE PROFILE </h1>

      <FormProvider {...methods}>
        <div className="flex flex-col gap-4">
          <InputForm
            name="profileImg"
            label="Profile image"
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setPreview(URL.createObjectURL(file));
              }
            }}
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="w-32 h-32 object-cover rounded-full"
            />
          )}
          <InputForm name="name" label="Fullname" />
          <InputForm name="username" label="Username" />
          <InputForm name="email" label="Email" type="email" />
          <InputForm name="password" label="Password" type="password" />
          <InputForm
            name="confirmPassword"
            label="Confirm password"
            type="password"
          />
          <SelectForm
            name="role"
            label="Role"
            value="Admin"
            placeholder="Admin"
            options={roleOptions}
            className="w-full"
          />

          <Button
            className="self-start"
            onClick={methods.handleSubmit(onSubmit)}
            type="submit"
          >
            Submit
          </Button>
        </div>
      </FormProvider>
    </div>
  );
}

export default AddUser;
