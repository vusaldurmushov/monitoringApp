import { toast } from "sonner";
import successGif from "@/assets/success.gif";
import { Button } from "@/components/ui/button";

export function CustomSuccessToast() {
  return (
    <Button
      variant='outline'
      onClick={() =>
        toast.custom((t) => (
          <div
            className='bg-[#f7f7f7] rounded-md shadow-md p-4 flex flex-col items-center w-[300px]'
            onClick={() => toast.dismiss(t)}
          >
            <img src={successGif} alt='Success' className='w-[150px] mb-2' />
            <h2 className='text-lg font-semibold text-center'>
              User deleted successfully
            </h2>
            <button
              onClick={() => toast.dismiss(t)}
              className='mt-3 bg-[var(--secondary)] hover:bg-[var(--secondary-hover)] text-white px-4 py-1 rounded'
            >
              Ok!
            </button>
          </div>
        ))
      }
    >
      Show Custom Toast
    </Button>
  );
}
