import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../api/login.api";
import { useNavigate } from "react-router-dom";

export const useLoginUser = () => {
  const navigate = useNavigate();
  // const { login } = useAuth();

  return useMutation({
    mutationFn: loginUser,

    onSuccess: (res) => {
      localStorage.setItem("accessToken", res.accessToken);
      navigate("/");
    },
    onError: (err) => {
      console.error("Login error:", err);
    },
  });
};
