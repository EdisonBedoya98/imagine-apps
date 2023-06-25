import {
  OrderedListOutlined,
  FormOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useNavBar } from "../hooks/useNavBar";

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
  const { current, onClick } = useNavBar();
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
}
