import { Button, List, Typography } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import { StocktakingFormData } from "../models/interfaces/ImagineApps";
import { RegisterStocktakingForm } from "./RegisterStocktakingForm";

export function StockItem({ companyName }: { companyName: string }) {
  const [isEditing, setIsEditing] = useState(false);

  const onFormSubmit = (companyData: StocktakingFormData) => {
    console.log(companyData);
    setIsEditing(false);
  };

  return (
    <List.Item
      actions={[
        !isEditing && (
          <Button
            type="primary"
            onClick={() => setIsEditing(true)}
            icon={<EditOutlined />}
          >
            Edit
          </Button>
        ),
        !isEditing && (
          <Button
            type="primary"
            icon={<DeleteOutlined />}
            onClick={() => console.log("Deleteee")}
          >
            Delete
          </Button>
        ),
      ]}
    >
      <Typography.Text mark>[ITEM]</Typography.Text> {companyName}
      {isEditing && <RegisterStocktakingForm onFormSubmit={onFormSubmit} />}
    </List.Item>
  );
}
