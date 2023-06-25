import { useForm } from "antd/es/form/Form";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useState } from "react";
import { CompanyInformation } from "../models/interfaces/ImagineApps";

export function useRegisterCompany() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const db = getFirestore();
  const [form] = useForm();

  const onRegisterCompany = async (values: CompanyInformation) => {
    setIsLoading(true);
    try {
      // Primary key/ Document ID is the NIT
      await setDoc(doc(db, "companies", values.nit), values);
      form.resetFields();
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    isError,
    onRegisterCompany,
    form,
  };
}
