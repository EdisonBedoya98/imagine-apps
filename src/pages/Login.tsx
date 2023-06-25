import { Button, Form, Input } from "antd";
import { Typography } from "antd";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export function Login() {
  const { Title } = Typography;
  const auth = getAuth();
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    signInWithEmailAndPassword(auth, values.username, values.password)
      .then((userCredential) => {
        console.log(
          "🚀 ~ file: Login.tsx:12 ~ .then ~ userCredential:",
          userCredential.user
        );
        // Signed in
        const user = userCredential.user;
        console.log("🚀 ~ file: Login.tsx:24 ~ .then ~ user:", user);
        navigate("/register-company");

        // ...
      })
      .catch((error) => {
        console.log("🚀 ~ file: Login.tsx:18 ~ onFinish ~ error:", error);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <main className="h-full min-h-screen grid items-center justify-center">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
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
    </main>
  );
}
