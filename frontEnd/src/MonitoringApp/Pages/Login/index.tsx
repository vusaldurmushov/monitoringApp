import { Button } from "@/components/ui/button";
import InputForm from "@/shared/InputForm";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";

function Login() {
  type TSubmit = {
    name: string;
    password: string;
  };
  const methods = useForm<TSubmit>();

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<TSubmit> = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-2 text-center">
            Monitoring App
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            Welcome back! Login into your account
          </p>

          <InputForm name="name" label="Fullname" />
          <InputForm name="password" label="Password" />
          <Button
            onClick={handleSubmit(onSubmit)}
            type="submit"
            className="w-full mt-4"
          >
            Login
          </Button>
        </div>
      </div>
    </FormProvider>
  );
}

export default Login;
