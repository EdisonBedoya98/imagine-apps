import {
  StocktakingFormData,
  StocktakingFormDataFormated,
} from "../models/interfaces/ImagineApps";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";

export function useStocktaking() {
  const [stocktaking, setStocktaking] = useState<StocktakingFormDataFormated[]>(
    []
  );
  const db = getFirestore();
  const [form] = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchStocktakingData();
  }, []);

  const fetchStocktakingData = async () => {
    setIsLoading(true);
    const firestore = getFirestore();
    const stocktakingCollection = collection(firestore, "stocktaking");

    try {
      const querySnapshot = await getDocs(stocktakingCollection);
      const data = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setStocktaking(data as StocktakingFormDataFormated[]);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmitNewStok = async (values: StocktakingFormData) => {
    setIsRegistering(true);
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
      setIsError(true);
    } finally {
      setIsRegistering(false);
    }
  };

  return {
    onSubmitNewStok,
    isLoading,
    isError,
    form,
    stocktaking,
    isRegistering,
  };
}
