import type { MenuProps } from "antd";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useNavBar() {
  const [current, setCurrent] = useState("register");
  const navigate = useNavigate();
  const auth = getAuth();

  const onClick: MenuProps["onClick"] = (e) => {
    if (e.key === "sign-out") {
      auth.signOut();
      return;
    }
    setCurrent(e.key);
    navigate(`/${e.key}`);
  };

  return {
    current,
    onClick,
  };
}
