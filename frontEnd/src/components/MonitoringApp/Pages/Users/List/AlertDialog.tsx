import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import warningIcon from "@/assets/warning.png";
import { useNavigate } from "react-router-dom";

type TAlertDialogDemo = {
  children: React.ReactNode;
  onConfirm: () => void;
};

export function AlertDialogDemo({ children, onConfirm }: TAlertDialogDemo) {
  const navigate = useNavigate();

  const deleteUser = () => {
    onConfirm();
    navigate("/userlist");
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex items-center justify-center gap-2">
            <img src={warningIcon} className="w-[90px]" alt="" />
          </div>
          <AlertDialogTitle className="text-center">
            Silməyə əminsiniz?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center"></AlertDialogDescription>
          <AlertDialogDescription className="text-center">
            Sildikdən sonra bərpa etmək mümükün olmayacaq.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex !justify-center gap-4">
          <AlertDialogCancel className="bg-[#ff3366] hover:bg-[#b32445] text-white hover:text-white">
            Imtina et
          </AlertDialogCancel>

          {/* <SuccessAlert> */}

          <AlertDialogAction
            onClick={deleteUser}
            className="bg-[var(--secondary)] hover:bg-[var(--secondary-hover)]"
          >
            Sil
          </AlertDialogAction>

          {/* </SuccessAlert> */}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
