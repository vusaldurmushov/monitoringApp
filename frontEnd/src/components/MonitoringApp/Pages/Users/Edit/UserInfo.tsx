import { Button } from "@/components/ui/button";
import { GetUser } from "@/services/hooks/get.userId";
import { Link, useParams } from "react-router-dom";
import { UserRoundPen, Delete } from "lucide-react";
import { AlertDialogDemo } from "@/components/MonitoringApp/Pages/Users/List/AlertDialog";
import { useDeleteUser } from "@/services/hooks/delete.user";

function UserInfo() {
  const { id } = useParams();

  // now you can use this id to fetch user data
  const { data: user, isLoading } = GetUser(id!);
  const { mutate: deleteUser } = useDeleteUser();

  console.log(user);

  const { _id, username, email, dateForCreated, name } = user || {};

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="flex flex-col gap-2 bg-white py-4 pl-5  shadow-md rounded-sm mt-4">
      <h1 className="text-black  font-semibold">{name}</h1>
      <CustomText label={"ID (on website):"} text={_id} />
      <CustomText label={"Username:"} text={username} />
      <CustomText label={"Email:"} text={email} />
      <CustomText label={"Created:"} text={dateForCreated} />

      <div className="flex flex-row gap-4">
        <Link
          to={`/users/${_id}/edit`}
          className="text-[var(--sidebar-primary)] border border-[var(--sidebar-primary)] hover:bg-[var(--sidebar-primary)] hover:text-white w-[80px] flex justify-center  items-center p-1  gap-1 rounded-sm"
        >
          <UserRoundPen className="size-4" /> Edit
        </Link>
        <AlertDialogDemo onConfirm={() => deleteUser(_id)}>
          <Button className="border border-[var(--sidebar-third-background)] bg-[var(--sidebar-third-background)] text-white  hover:bg-[#f3003c]">
            <Delete className="size-4" />
            Delete
          </Button>
        </AlertDialogDemo>
      </div>
    </div>
  );
}

export default UserInfo;

type TCustomText = {
  label: string;
  text: string | undefined;
  style?: React.CSSProperties;
};

export const CustomText = ({
  label,
  text,
  style,
  ...htmlProps
}: TCustomText) => {
  return (
    <div className="flex flex-col space-x-2" style={style} {...htmlProps}>
      <p className="text-[12px] text-[var(--secondary-text)]">{label}</p>

      {text?.includes("mail") ? (
        <a
          href={`mailto:${text}`}
          className="text-sm text-blue-600 hover:underline"
        >
          {text}
        </a>
      ) : (
        <p className="text-[14px] text-black">{text}</p>
      )}
    </div>
  );
};
