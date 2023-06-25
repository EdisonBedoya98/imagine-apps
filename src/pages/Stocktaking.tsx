import { List, Typography } from "antd";
import { NavBar } from "../components/NavBar";
import { RegisterStocktakingForm } from "../components/RegisterStocktakingForm";
import { StockItem } from "../components/StockItem";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import {
  StocktakingFormData,
  StocktakingFormDataFormated,
} from "../models/interfaces/ImagineApps";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";

export function Stocktaking() {
  const [stocktaking, setStocktaking] = useState<StocktakingFormDataFormated[]>(
    []
  );
  const db = getFirestore();
  const [form] = useForm();

  useEffect(() => {
    const fetchCollection = async () => {
      const firestore = getFirestore();
      const stocktakingCollection = collection(firestore, "stocktaking");

      try {
        const querySnapshot = await getDocs(stocktakingCollection);
        const data = querySnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setStocktaking(data as StocktakingFormDataFormated[]);
      } catch (error) {
        console.error("Error fetching collection: ", error);
      }
    };

    fetchCollection();
  }, []);

  const onFormSubmit = async (values: StocktakingFormData) => {
    const images = values.images
      ?.filter((img) => img.base64Image)
      .map((image) => image?.base64Image) as string[];

    try {
      await addDoc(collection(db, "stocktaking"), {
        ...values,
        images: images,
      });
      form.resetFields();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Register new stocktaking",
      children: (
        <RegisterStocktakingForm
          onFormSubmit={onFormSubmit}
          form={form}
          buttonLabel="Add stock"
        />
      ),
    },
    {
      key: "2",
      label: "List stocktaking",
      children: (
        <List
          header={<div>List stocktaking</div>}
          bordered
          dataSource={stocktaking}
          renderItem={(item) => <StockItem stock={item} />}
        />
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
        <Collapse items={items} defaultActiveKey={["2"]} />
      </section>
    </main>
  );
}
