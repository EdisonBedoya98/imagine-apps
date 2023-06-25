import { Button, Image, List } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import {
  StocktakingFormData,
  StocktakingFormDataFormated,
} from "../models/interfaces/ImagineApps";
import { RegisterStocktakingForm } from "./RegisterStocktakingForm";
import { collection, deleteDoc, doc, getFirestore } from "firebase/firestore";
import { useForm } from "antd/es/form/Form";
import { Typography } from "antd";
import { useSelector } from "react-redux";
import { selectIsAdmin } from "../reducers/imagine-apps/imagine-app.selectors";

const { Text } = Typography;

export function StockItem({ stock }: { stock: StocktakingFormDataFormated }) {
  const [isEditing, setIsEditing] = useState(false);
  const db = getFirestore();
  const [form] = useForm();
  const isAdmin = useSelector(selectIsAdmin);

  const documentRef = doc(collection(db, "stocktaking"), stock.id);

  const onFormSubmit = (companyData: StocktakingFormData) => {
    console.log(companyData);
    setIsEditing(false);
    form.resetFields();
  };
  const onDeleteDocument = async () => {
    //loading state

    try {
      await deleteDoc(documentRef);
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  return (
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
  );
}
