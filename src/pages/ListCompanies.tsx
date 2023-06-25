import { List } from "antd";
import { CompanyItem } from "../components/CompanyItem";
import { NavBar } from "../components/NavBar";
import { RegisterCompanyInformationForm } from "../components/RegisterCompanyInformationForm";
import { CompanyInformation } from "../models/interfaces/ImagineApps";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];
export function ListCompanies() {
  return (
    <main>
      <NavBar />
      <section className="grid pt-6 ">
        <List
          header={<div>List companies</div>}
          bordered
          dataSource={data}
          renderItem={(item) => <CompanyItem companyName={item} />}
        />
      </section>
    </main>
  );
}
