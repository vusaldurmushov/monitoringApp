import { Button } from "@/components/ui/button";
import { CircleUserRound, User, LogOut, Image } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Link, useNavigate } from "react-router-dom";
import { GetUserFromToken } from "@/services/hooks/get.userFromToken";

function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const jwt = localStorage.getItem("accessToken");

  const { data: user } = GetUserFromToken(jwt || "");

  return (
    <div className="flex justify-end border-b shadow-md p-3  mt-[-40px]">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost">
            <CircleUserRound className="mr-2 h-4 w-4" />
            Profile
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-60">
          <div className="flex justify-center my-4">
            <Image strokeWidth={1} className="h-16 w-16" />
          </div>
          <div className="grid gap-4">
            <div className="space-y-1 flex flex-col items-center">
              <h1 className="font-bold">{user?.name}</h1>
              <p className="text-sm">{user?.username}</p>
            </div>
            <div className=" flex flex-col ">
              <Link to={`/users/${user?._id}/info`}>
                <Button
                  variant="ghost"
                  className="flex justify-start text-sm w-full"
                >
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Button>
              </Link>
              <Button
                onClick={handleLogout}
                variant="ghost"
                className="flex justify-start w-full "
              >
                {" "}
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default Profile;
