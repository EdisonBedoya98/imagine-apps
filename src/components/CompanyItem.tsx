import { Button, List, Spin } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import { RegisterCompanyInformationForm } from "./RegisterCompanyInformationForm";
import { CompanyInformation } from "../models/interfaces/ImagineApps";
import { useCompanyItem } from "../hooks/useCompanyItem";

export function CompanyItem({ company }: { company: CompanyInformation }) {
  const {
    isEditing,
    onFormSubmit,
    onDeleteDocument,
    isAdmin,
    navigate,
    isLoading,
    setIsEditing,
    form,
  } = useCompanyItem({ company });

  return (
    <Spin tip="Loading..." spinning={isLoading}>
      <List.Item
        actions={[
          !isEditing && (
            <Button
              type="primary"
              onClick={() => setIsEditing(true)}
              icon={<EditOutlined />}
              disabled={!isAdmin}
            >
              Edit
            </Button>
          ),
          !isEditing && (
            <Button
              type="primary"
              icon={<DeleteOutlined />}
              onClick={onDeleteDocument}
              disabled={!isAdmin}
            >
              Delete
            </Button>
          ),
          !isEditing && (
            <Button
              type="primary"
              icon={<RocketOutlined />}
              onClick={() => navigate(`/stocktaking?company=${company.nit}`)}
            >
              Stocktaking
            </Button>
          ),
        ]}
      >
        {company.name}
        {isEditing && (
          <RegisterCompanyInformationForm
            buttonLabel="Update"
            onFormSubmit={onFormSubmit}
            initialData={company}
            form={form}
          />
        )}
      </List.Item>
    </Spin>
  );
}
