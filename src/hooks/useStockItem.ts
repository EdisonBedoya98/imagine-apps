import { useState } from "react";
import {
  StocktakingFormData,
  StocktakingFormDataFormated,
} from "../models/interfaces/ImagineApps";
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
export function useStockItem({
  stock,
}: {
  stock: StocktakingFormDataFormated;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const db = getFirestore();
  const [form] = useForm();
  const isAdmin = useSelector(selectIsAdmin);

  const stocktakingRef = doc(collection(db, "stocktaking"), stock.id);

  const onFormSubmit = async (stockItem: StocktakingFormData) => {
    setIsLoading(true);
    try {
      await updateDoc(stocktakingRef, { ...stockItem });
      setIsEditing(false);
      form.resetFields();
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  const onDeleteDocument = async () => {
    setIsLoading(true);
    try {
      await deleteDoc(stocktakingRef);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    isEditing,
    setIsEditing,
    form,
    onFormSubmit,
    onDeleteDocument,
    isAdmin,
    isLoading,
    isError,
  };
}
