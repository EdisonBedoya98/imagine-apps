import { NavBar } from "../components/NavBar";
import { RegisterCompanyInformationForm } from "../components/RegisterCompanyInformationForm";
import { useRegisterCompany } from "../hooks/useRegisterCompany";
import { Spin } from "antd";

export function RegisterCompany() {
  const { isLoading, onRegisterCompany, form } = useRegisterCompany();
  return (
    <main>
      <NavBar />
      <section className="min-h-screen grid pt-6">
        <Spin tip="Loading..." spinning={isLoading}>
          <RegisterCompanyInformationForm
            buttonLabel="Add company"
            onFormSubmit={onRegisterCompany}
            form={form}
          />
        </Spin>
      </section>
    </main>
  );
}
