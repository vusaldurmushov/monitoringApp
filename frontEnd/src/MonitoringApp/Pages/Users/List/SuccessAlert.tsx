   import {
   AlertDialog,
   AlertDialogCancel,
   AlertDialogContent,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogTitle,
   AlertDialogTrigger,
   } from "@/components/ui/alert-dialog";
   import successGif from "@/assets/success.gif";
import { Button } from "@/components/ui/button";

   export function SuccessAlert() {
   return (
      <AlertDialog>
         <AlertDialogTrigger asChild>
            <Button>
               Success
            </Button>
         </AlertDialogTrigger>
         <AlertDialogContent className='bg-[#f7f7f7]'>
         <AlertDialogHeader>
            <AlertDialogTitle className='flex !justify-center'>
               <img src={successGif} className='w-[200px]' alt='' />
            </AlertDialogTitle>
            <AlertDialogTitle className='text-center'>
               User deleted successfully
            </AlertDialogTitle>
         </AlertDialogHeader>
         <AlertDialogFooter className='flex !justify-center'>
            <AlertDialogCancel className='bg-[var(--secondary)] hover:bg-[var(--secondary-hover)] text-white hover:text-white'>
               Ok!
            </AlertDialogCancel>
         </AlertDialogFooter>
         </AlertDialogContent>
      </AlertDialog>
   );
   }
