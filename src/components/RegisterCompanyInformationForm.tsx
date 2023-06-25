import { Button, Form, Input, InputNumber } from "antd";
import { useState } from "react";
import { CompanyInformation } from "../models/interfaces/ImagineApps";

export function RegisterCompanyInformationForm({
  onFormSubmit,
  buttonLabel,
}: {
  onFormSubmit: (companyData: CompanyInformation) => void;
  buttonLabel: string;
}) {
  const [componentDisabled, setComponentDisabled] = useState<boolean>(false);

  return (
    <Form
      labelCol={{ span: 5 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      className="justify-center items-center max-w-3xl"
      disabled={componentDisabled}
      onFinish={onFormSubmit}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please enter the name",
          },
        ]}
      >
        <Input autoComplete="name" />
      </Form.Item>

      <Form.Item
        label="Address"
        name="address"
        rules={[
          {
            required: true,
            message: "Please enter the address",
          },
        ]}
      >
        <Input autoComplete="street-address" />
      </Form.Item>

      <Form.Item
        label="NIT"
        name="nit"
        rules={[
          {
            required: true,
            message: "Please enter the NIT",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Phone"
        name="phone"
        rules={[
          {
            required: true,
            message: "Please enter the phone number",
          },
        ]}
      >
        <InputNumber autoComplete="tel" className="w-full" />
      </Form.Item>

      <Form.Item className=" flex justify-center">
        <Button type="primary" htmlType="submit">
          {buttonLabel}
        </Button>
      </Form.Item>
    </Form>
  );
}
