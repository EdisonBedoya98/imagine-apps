import { List } from "antd";
import { CompanyItem } from "../components/CompanyItem";
import { NavBar } from "../components/NavBar";
import { RegisterCompanyInformationForm } from "../components/RegisterCompanyInformationForm";
import { CompanyInformation } from "../models/interfaces/ImagineApps";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];
export function ListCompanies() {
  const [collectionData, setCollectionData] = useState<CompanyInformation[]>(
    []
  );

  useEffect(() => {
    const fetchCollection = async () => {
      // Obtain the Firestore instance
      const firestore = getFirestore();

      // Define the collection you want to fetch
      const companiesCollection = collection(firestore, "companies");

      try {
        // Fetch the documents from the collection
        const querySnapshot = await getDocs(companiesCollection);

        // Process the documents and extract the data
        const data = querySnapshot.docs.map((doc) => doc.data());
        console.log(
          "🚀 ~ file: ListCompanies.tsx:35 ~ fetchCollection ~ data:",
          data
        );

        // Update the state with the collection data
        setCollectionData(data as CompanyInformation[]);
      } catch (error) {
        console.error("Error fetching collection: ", error);
      }
    };

    fetchCollection();
  }, []);
  return (
    <main>
      <NavBar />
      <section className="grid pt-6 ">
        <List
          header={<div>List companies</div>}
          bordered
          dataSource={collectionData}
          renderItem={(company) => <CompanyItem company={company} />}
        />
      </section>
    </main>
  );
}
