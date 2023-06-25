import { Button, Image, List, Spin } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { StocktakingFormDataFormated } from "../models/interfaces/ImagineApps";
import { RegisterStocktakingForm } from "./RegisterStocktakingForm";

import { Typography } from "antd";
import { useStockItem } from "../hooks/useStockItem";

const { Text } = Typography;

export function StockItem({ stock }: { stock: StocktakingFormDataFormated }) {
  const {
    isEditing,
    setIsEditing,
    form,
    onFormSubmit,
    onDeleteDocument,
    isAdmin,
    isLoading,
  } = useStockItem({ stock });

  return (
    <Spin tip="Loading..." spinning={isLoading}>
      <List.Item key={stock.id}>
        <div>
          <Text strong>Name: </Text> {stock.name}
        </div>
        <div>
          <Text strong>Amount: </Text> {stock.amount}
        </div>
        <div>
          <Text strong>Price: </Text> {stock.price}
        </div>
        <div>
          {stock.images?.map((image, index) => (
            <Image key={index} width={100} src={image} />
          ))}
        </div>
        {isEditing && (
          <RegisterStocktakingForm
            onFormSubmit={onFormSubmit}
            form={form}
            initialData={stock}
            buttonLabel="Update"
          />
        )}
        <div className="mt-2 flex gap-x-4">
          {!isEditing && (
            <Button
              type="primary"
              onClick={() => setIsEditing(true)}
              icon={<EditOutlined />}
              disabled={!isAdmin}
            >
              Edit
            </Button>
          )}
          {!isEditing && (
            <Button
              type="primary"
              icon={<DeleteOutlined />}
              onClick={onDeleteDocument}
              disabled={!isAdmin}
            >
              Delete
            </Button>
          )}
        </div>
      </List.Item>
    </Spin>
  );
}
