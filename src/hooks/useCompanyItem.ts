import { useNavigate } from "react-router-dom";
import {
  collection,
  deleteDoc,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { useState } from "react";
import { useForm } from "antd/es/form/Form";
import { useSelector } from "react-redux";
import { selectIsAdmin } from "../reducers/imagine-apps/imagine-app.selectors";
import { CompanyInformation } from "../models/interfaces/ImagineApps";
export function useCompanyItem({ company }: { company: CompanyInformation }) {
  const navigate = useNavigate();
  const db = getFirestore();
  const [form] = useForm();
  const isAdmin = useSelector(selectIsAdmin);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const documentRef = doc(collection(db, "companies"), company.nit);

  const onFormSubmit = async (companyData: CompanyInformation) => {
    setIsLoading(true);
    try {
      await updateDoc(documentRef, { ...companyData });
      form.resetFields();
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
    setIsEditing(false);
  };
  const onDeleteDocument = async () => {
    setIsLoading(true);
    try {
      await deleteDoc(documentRef);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isEditing,
    onFormSubmit,
    onDeleteDocument,
    isAdmin,
    navigate,
    isLoading,
    isError,
    setIsEditing,
    form,
  };
}
