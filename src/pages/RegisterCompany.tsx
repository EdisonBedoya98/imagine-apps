import { doc, getFirestore, setDoc } from "firebase/firestore";
import { NavBar } from "../components/NavBar";
import { RegisterCompanyInformationForm } from "../components/RegisterCompanyInformationForm";
import { CompanyInformation } from "../models/interfaces/ImagineApps";
import { useForm } from "antd/es/form/Form";

export function RegisterCompany() {
  const db = getFirestore();
  const [form] = useForm();

  const onFormSubmit = async (values: CompanyInformation) => {
    try {
      // Primary key/ Document ID is the NIT
      await setDoc(doc(db, "companies", values.nit), values);
      form.resetFields();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <main>
      <NavBar />
      <section className="min-h-screen grid pt-6">
        <RegisterCompanyInformationForm
          buttonLabel="Add company"
          onFormSubmit={onFormSubmit}
          form={form}
        />
      </section>
    </main>
  );
}
