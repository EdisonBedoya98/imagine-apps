import { useState } from "react";
import {
  OrderedListOutlined,
  FormOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

const items: MenuProps["items"] = [
  {
    label: "Register company",
    key: "register-company",
    icon: <FormOutlined />,
  },
  {
    label: "List companies",
    key: "list-companies",
    icon: <OrderedListOutlined />,
  },
  {
    label: "Sign out",
    key: "sign-out",
    icon: <UserOutlined />,
  },
];

export function NavBar() {
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

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
}
