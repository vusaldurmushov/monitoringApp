import { Button } from "@/components/ui/button";
import { useLoginUser } from "@/services/hooks/login.user";
import InputForm from "@/shared/InputForm";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";

function Login() {
  const methods = useForm<TSubmit>();
  const { handleSubmit } = methods;

  const loginMutation = useLoginUser();

  type TSubmit = {
    username: string;
    password: string;
  };


  localStorage.getItem("isAuthenticated");
  
  console.log(localStorage ,'localStorage');;
  const onSubmit: SubmitHandler<TSubmit> = (data) => {
    console.log(data);
    loginMutation.mutate(data);
  };

  return (
    <FormProvider {...methods}>
      <form action=''>
        <div className='h-screen flex items-center justify-center bg-gray-50'>
          <div className='w-full max-w-sm bg-white p-6 rounded-lg shadow-md'>
            <h1 className='text-2xl font-bold mb-2 text-center'>
              Monitoring App
            </h1>
            <p className='text-gray-600 mb-6 text-center'>
              Welcome back! Login into your account
            </p>

            <InputForm name='username' label='Fullname' />
            <InputForm name='password' label='Password' />

            {loginMutation.isError && (
              <p className='text-red-500 text-sm mt-2'>
                {(loginMutation.error as Error).message}
              </p>
            )}

            {loginMutation.isPending && (
              <p className='text-gray-500 text-sm mt-2'>Loading...</p>
            )}

            <Button
              onClick={handleSubmit(onSubmit)}
              type='submit'
              className='w-full mt-4'
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
