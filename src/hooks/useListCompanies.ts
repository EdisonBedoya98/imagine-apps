import { CompanyInformation } from "../models/interfaces/ImagineApps";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
export function useListCompanies() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [collectionData, setCollectionData] = useState<CompanyInformation[]>(
    []
  );

  useEffect(() => {
    getCompaniesFromDB();
  }, []);

  const getCompaniesFromDB = async () => {
    setIsLoading(true);
    try {
      const firestore = getFirestore();
      const companiesCollection = collection(firestore, "companies");
      const querySnapshot = await getDocs(companiesCollection);
      const data = querySnapshot.docs.map((doc) => doc.data());
      setCollectionData(data as CompanyInformation[]);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    collectionData,
    isLoading,
    isError,
  };
}
