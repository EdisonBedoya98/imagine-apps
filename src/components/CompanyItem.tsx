import { Button, List } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import { RegisterCompanyInformationForm } from "./RegisterCompanyInformationForm";
import { useState } from "react";
import { CompanyInformation } from "../models/interfaces/ImagineApps";
import { useNavigate } from "react-router-dom";
import {
  collection,
  deleteDoc,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { useForm } from "antd/es/form/Form";
import { useSelector } from "react-redux";
import { selectIsAdmin } from "../reducers/imagine-apps/imagine-app.selectors";

export function CompanyItem({ company }: { company: CompanyInformation }) {
  const navigate = useNavigate();
  const db = getFirestore();
  const [form] = useForm();
  const isAdmin = useSelector(selectIsAdmin);

  const [isEditing, setIsEditing] = useState(false);
  const documentRef = doc(collection(db, "companies"), company.nit);

  const onFormSubmit = async (companyData: CompanyInformation) => {
    console.log(companyData);
    try {
      await updateDoc(documentRef, { ...companyData });
      console.log("Document updated successfully");
      form.resetFields();
    } catch (error) {
      console.error("Error updating document:", error);
    }
    setIsEditing(false);
  };
  const onDeleteDocument = async () => {
    //loading state
    console.log(
      "🚀 ~ file: CompanyItem.tsx:43 ~ onDeleteDocument ~ documentRef:",
      documentRef
    );
    try {
      await deleteDoc(documentRef);
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  return (
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
  );
}
