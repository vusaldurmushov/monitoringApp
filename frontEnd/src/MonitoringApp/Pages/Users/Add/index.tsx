import { Button } from "@/components/ui/button";

import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputForm from "@/shared/InputForm";
import { useState } from "react";

function AddUser() {
  const [preview, setPreview] = useState<string | null>(null);
  const formSchema = z
    .object({
      profileImg: z.string().optional(),
      username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
      }),
      name: z.string().optional(),
      email: z.string().optional(),
      password: z.string().optional(),
      passwordConfirm: z.string().optional(),
    })
    .superRefine((val, ctx) => {
      if (val.password !== val.passwordConfirm) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Password is not the same as confirm password",
          path: ["passwordConfirm"],
        });
      }
    });

    console.log(preview);

  type FormData = z.infer<typeof formSchema>;
  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });


  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Data:", data);
     const file = data.profileImg; 
     console.log(file,'wdwdwdw');
  };

  return (
    <div>
      <h1 className='font-medium'>CREATE PROFILE </h1>

      <FormProvider {...methods}>
        <InputForm
          name='profileImg'
          label='Profile image'
          type='file'
          accept='image/*'
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
            alt='Preview'
            className='w-32 h-32 object-cover rounded-full'
          />
        )}
        <InputForm name='name' label='Fullname' />
        <InputForm name='username' label='Username' />
        <InputForm name='email' label='Email' type='email' />
        <InputForm name='password' label='Password' type='password' />
        <InputForm
          name='passwordConfirm'
          label='Confirm password'
          type='password'
        />

        <Button onClick={methods.handleSubmit(onSubmit)} type='submit'>
          Submit
        </Button>
      </FormProvider>
    </div>
  );
}

export default AddUser;
