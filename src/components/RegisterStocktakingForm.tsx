import { Button, Form, Input, InputNumber, Upload } from "antd";
import { useState } from "react";
import { StocktakingFormData } from "../models/interfaces/ImagineApps";
import { InboxOutlined } from "@ant-design/icons";

export function RegisterStocktakingForm({
  onFormSubmit,
}: {
  onFormSubmit: (companyData: StocktakingFormData) => void;
}) {
  const [componentDisabled, setComponentDisabled] = useState<boolean>(false);

  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
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
          name="image"
          valuePropName="fileList"
          getValueFromEvent={normFile}
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
          Add stock
        </Button>
      </Form.Item>
    </Form>
  );
}
