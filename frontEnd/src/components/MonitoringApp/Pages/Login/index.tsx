import { Button } from "@/components/ui/button";
import type { TLoginInfo } from "@/services/api/login.api";
import { useLoginUser } from "@/services/hooks/login.user";
import InputForm from "@/shared/InputForm";
import Loading from "@/shared/Loading";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";

function Login() {
  const methods = useForm<TLoginInfo>();
  const { handleSubmit } = methods;

  const loginMutation = useLoginUser();

  const onSubmit: SubmitHandler<TLoginInfo> = (data) => {
    loginMutation.mutate(data);
  };

  return (
    <FormProvider {...methods}>
      <form action="">
        <div className="h-screen flex items-center justify-center bg-gray-50">
          <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-2 text-center">
              Monitoring App
            </h1>
            <p className="text-gray-600 mb-6 text-center">
              Welcome back! Login into your account
            </p>

            <InputForm name="username" label="Fullname" />
            <InputForm name="password" label="Password" />

            {loginMutation.isError && (
              <p className="text-red-500 text-sm mt-2">
                {(loginMutation.error as Error).message}
              </p>
            )}

            {loginMutation.isPending && (
             <Loading/>
            )}

            <Button
              onClick={handleSubmit(onSubmit)}
              type="submit"
              className="w-full mt-4"
            >
              Login
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

export default Login;
