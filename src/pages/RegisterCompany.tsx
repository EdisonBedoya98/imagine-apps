import { NavBar } from "../components/NavBar";
import { RegisterCompanyInformationForm } from "../components/RegisterCompanyInformationForm";

export function RegisterCompany() {
  return (
    <main>
      <NavBar />
      <section className="min-h-screen grid pt-6">
        <RegisterCompanyInformationForm
          buttonLabel="Add company"
          onFormSubmit={(data) => console.log(data)}
        />
      </section>
    </main>
  );
}
