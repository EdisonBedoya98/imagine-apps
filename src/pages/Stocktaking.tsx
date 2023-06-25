import { List, Typography } from "antd";
import { NavBar } from "../components/NavBar";
import { RegisterStocktakingForm } from "../components/RegisterStocktakingForm";
import { StockItem } from "../components/StockItem";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];
const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "Register new stocktaking",
    children: (
      <RegisterStocktakingForm onFormSubmit={(data) => console.log(data)} />
    ),
  },
  {
    key: "2",
    label: "List stocktaking",
    children: (
      <List
        header={<div>List stocktaking</div>}
        bordered
        dataSource={data}
        renderItem={(item) => <StockItem companyName={item} />}
      />
    ),
  },
];
export function Stocktaking() {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };
  return (
    <main>
      <NavBar />
      <section className="min-h-screen ">
        <Typography.Title level={3} style={{ margin: 0 }}>
          Company name
        </Typography.Title>
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          size="large"
          className="my-2"
        >
          Download stocktaking PDF
        </Button>
        <Collapse items={items} defaultActiveKey={["2"]} onChange={onChange} />
      </section>
    </main>
  );
}
