import { useState } from "react";
import {
  OrderedListOutlined,
  FormOutlined,
  StockOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

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
  /* {
    label: "Stocktaking",
    key: "stocktaking",
    icon: <StockOutlined />,
  }, */
];

export function NavBar() {
  const [current, setCurrent] = useState("register");
  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
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
