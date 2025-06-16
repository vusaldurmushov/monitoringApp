import { Button } from "@/components/ui/button";
import usePostReason from "@/services/hooks/reasonPage/post.reason";
import { useFormContext } from "react-hook-form";
import { Link } from "react-router-dom";

function ReasonButton() {
  type TFormData = {
    reason: string;
  };

  const mutation = usePostReason();
  const methods = useFormContext<TFormData>();

  const { handleSubmit } = methods;

  const onSubmit = (data: { reason: string }) => {
    mutation.mutate(data);
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
        Göndər
      </Button>
      <Button variant='ghost'>
        <Link to='/reasonForNotUsing'>Geri qayıt</Link>
      </Button>
    </div>
  );
}

export default ReasonButton;
