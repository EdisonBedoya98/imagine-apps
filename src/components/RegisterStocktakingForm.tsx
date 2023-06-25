import { Button, Form, FormInstance, Input, InputNumber, Upload } from "antd";
import {
  StocktakingFormData,
  StocktakingFormDataFormated,
} from "../models/interfaces/ImagineApps";
import { InboxOutlined } from "@ant-design/icons";
import { useRegisterStocktakingForm } from "../hooks/useRegisterCompanyInformationForm";

export function RegisterStocktakingForm({
  onFormSubmit,
  form,
  initialData,
  buttonLabel,
}: {
  onFormSubmit: (companyData: StocktakingFormData) => void;
  form: FormInstance<StocktakingFormData>;
  initialData?: StocktakingFormDataFormated;
  buttonLabel: string;
}) {
  const { isAdmin, normaliseFileToBase64 } = useRegisterStocktakingForm();
  return (
    <Form
      labelCol={{ span: 5 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      className="justify-center items-center max-w-3xl"
      disabled={!isAdmin}
      onFinish={onFormSubmit}
      form={form}
      initialValues={initialData}
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
        <Input />
      </Form.Item>

      <Form.Item
        label="Amount"
        name="amount"
        rules={[
          {
            required: true,
            message: "Please enter an amount",
          },
        ]}
      >
        <InputNumber className="w-full" />
      </Form.Item>

      <Form.Item
        label="Price"
        name="price"
        rules={[
          {
            required: true,
            message: "Please enter the price",
          },
        ]}
      >
        <InputNumber className="w-full" />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[
          {
            required: true,
            message: "Please enter the description",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Imagen">
        <Form.Item
          name="images"
          valuePropName="fileList"
          getValueFromEvent={normaliseFileToBase64}
          noStyle
          rules={[
            {
              required: true,
              message: "Please enter an image",
            },
          ]}
        >
          <Upload.Dragger name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload.
            </p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>
      <Form.Item className="flex justify-center">
        <Button type="primary" htmlType="submit">
          {buttonLabel}
        </Button>
      </Form.Item>
    </Form>
  );
}
