import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
// import {
//   useMutation,
//   queryClient,
//   useQueryClient,
// } from "@tanstack/react-query";
// import axios from "axios";
// import Input from "./components/Input/Input";

// const login = async ({ username, password }) => {
//   const response = await axios.post("https://dummyjson.com/auth/login", {
//     username,
//     password,
//   });

//   return response.data;
// };

const App = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const queryClient = useQueryClient();
  // const loginMutation = useMutation(login, {
  //   onSuccess: (data) => {
  //     console.log("Login successful", data);
  //     // localStorage.setItem("accessToken", data.token);
  //   },

  //   onError: (error) => {
  //     console.error("Login failed", error);
  //   },
  //   cacheTime: 3 * 24 * 60 * 60 * 1000,
  // });
  // return (
  //   <div>
  //     <label htmlFor="username">Username:</label>
  //     <input
  //       type="text"
  //       id="username"
  //       value={username}
  //       onChange={(e) => setUsername(e.target.value)}
  //     />

  //     <label htmlFor="password">Password:</label>
  //     <input
  //       type="password"
  //       id="password"
  //       value={password}
  //       onChange={(e) => setPassword(e.target.value)}
  //     />
  //     <Input />
  //     <button
  //       onClick={() => loginMutation.mutate({ username, password })}
  //       disabled={loginMutation.isLoading}
  //     >
  //       Login
  //     </button>
  //   </div>
  // );
  return (
    <div className="app">
      <h2>React hook form + TanStack</h2>
      <Login />
    </div>
  );
};

export default App;
