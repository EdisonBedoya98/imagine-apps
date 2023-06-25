import { CollapseProps, List, Spin, Typography } from "antd";
import { NavBar } from "../components/NavBar";

import { Collapse } from "antd";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { useStocktaking } from "../hooks/useStocktaking";
import { RegisterStocktakingForm } from "../components/RegisterStocktakingForm";
import { StockItem } from "../components/StockItem";

export function Stocktaking() {
  const { form, onSubmitNewStok, stocktaking, isLoading, isRegistering } =
    useStocktaking();

  const formAndList: CollapseProps["items"] = [
    {
      key: "1",
      label: "Register new stocktaking",
      children: (
        <Spin tip="Loading..." spinning={isRegistering}>
          <RegisterStocktakingForm
            onFormSubmit={onSubmitNewStok}
            form={form}
            buttonLabel="Add stock"
          />
        </Spin>
      ),
    },
    {
      key: "2",
      label: "List stocktaking",
      children: (
        <Spin tip="Loading..." spinning={isLoading}>
          <List
            header={<div>List stocktaking</div>}
            bordered
            dataSource={stocktaking}
            renderItem={(item) => <StockItem stock={item} />}
          />
        </Spin>
      ),
    },
  ];
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
        <Collapse items={formAndList} defaultActiveKey={["2"]} />
      </section>
    </main>
  );
}
