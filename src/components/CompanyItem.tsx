import { Button, List, Typography } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import { RegisterCompanyInformationForm } from "./RegisterCompanyInformationForm";
import { useState } from "react";
import { CompanyInformation } from "../models/interfaces/ImagineApps";
import { useNavigate } from "react-router-dom";

export function CompanyItem({ companyName }: { companyName: string }) {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  const onFormSubmit = (companyData: CompanyInformation) => {
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
        !isEditing && (
          <Button
            type="primary"
            icon={<RocketOutlined />}
            onClick={() => navigate(`/stocktaking?company=${companyName}`)}
          >
            Stocktaking
          </Button>
        ),
      ]}
    >
      <Typography.Text mark>[ITEM]</Typography.Text> {companyName}
      {isEditing && (
        <RegisterCompanyInformationForm
          buttonLabel="Update"
          onFormSubmit={onFormSubmit}
        />
      )}
    </List.Item>
  );
}
