import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onLogIn = (values: any) => {
    setIsLoading(true);

    signInWithEmailAndPassword(auth, values.username, values.password)
      .then(() => {
        navigate("/register-company");
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => setIsLoading(false));
  };
  return {
    onLogIn,
    isError,
    isLoading,
  };
}
