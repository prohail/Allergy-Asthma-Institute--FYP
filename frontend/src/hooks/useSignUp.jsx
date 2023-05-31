import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignUp = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (name, email, phone, pass) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/user/signup", {
        name: name,
        email: email,
        phone: phone,
        password: pass,
      });

      if (response.status === 200) {
        const json = response.data;
        localStorage.setItem("user", JSON.stringify(json));
        dispatch({ type: "LOGIN", payload: json });
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError("An error occurred during signup.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
