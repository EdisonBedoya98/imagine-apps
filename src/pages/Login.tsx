import { Button, Form, Input, Spin } from "antd";
import { Typography } from "antd";
import { useLogin } from "../hooks/useLogin";

export function Login() {
  const { Title } = Typography;
  const { onLogIn, isLoading } = useLogin();

  return (
    <main className="h-full min-h-screen grid items-center justify-center">
      <Spin tip="Loading..." spinning={isLoading}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onLogIn}
          autoComplete="off"
        >
          <Title className="text-center">Imagine Apps</Title>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    </main>
  );
}
