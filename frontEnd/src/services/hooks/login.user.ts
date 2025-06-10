import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../api/login.api";
import { useNavigate } from "react-router-dom";

export const useLoginUser = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginUser,
    onMutate: (vars) => {
      console.log("Mutating with", vars);
    },
    onSuccess: (res) => {
      localStorage.setItem("accessToken", res?.accessToken);
      navigate("/");
    },
    onError: (err) => {
      console.error("Login error:", err);
    },
  });
};
