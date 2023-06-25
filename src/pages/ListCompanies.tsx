import { List, Spin } from "antd";
import { CompanyItem } from "../components/CompanyItem";
import { NavBar } from "../components/NavBar";
import { useListCompanies } from "../hooks/useListCompanies";

export function ListCompanies() {
  const { collectionData, isLoading } = useListCompanies();
  return (
    <main>
      <NavBar />
      <section className="grid pt-6 ">
        <Spin tip="Loading..." spinning={isLoading}>
          <List
            header={<div>List companies</div>}
            bordered
            dataSource={collectionData}
            renderItem={(company) => <CompanyItem company={company} />}
          />
        </Spin>
      </section>
    </main>
  );
}
