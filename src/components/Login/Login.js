import React from "react";
import Input from "../Input/Input";
import "./Login.css";
import Button from "../Button/Buton";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import {
  useMutation,
  queryClient,
  useQueryClient,
} from "@tanstack/react-query";
import { apiLogin } from "../../apis/auth";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const loginMutation = useMutation(apiLogin, {
    onSuccess: (data) => {
      console.log("Login successful", data);
      // localStorage.setItem("accessToken", data.token);
    },

    onError: (error) => {
      console.error("Login failed", error);
    },
    cacheTime: 3 * 24 * 60 * 60 * 1000,
  });
  const handleLogin = (data) => {
    loginMutation.mutate(data);
    Swal.fire("Congratulation", "Login successfully", "success").then(() => {
      console.log(data);
    });
  };
  return (
    <div className="login" onSubmit={handleSubmit(handleLogin)}>
      <form className="login-form">
        <h3 className="login-title">Login</h3>
        <Input
          id={"username"}
          label="username"
          type="text"
          register={register}
          errors={errors}
          validate={{
            required: "Username is required",
            // pattern: {
            //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            //   message: "Invalid email address",
            // },
          }}
        />
        <Input
          id={"password"}
          label="password"
          register={register}
          errors={errors}
          type="password"
          validate={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          }}
        />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
