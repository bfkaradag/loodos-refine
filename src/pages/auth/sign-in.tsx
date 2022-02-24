import { useTranslate, IResourceComponentsProps } from "@pankod/refine-core";
import {
    Button,
    Checkbox,
  Form,
  Input,
} from "@pankod/refine-antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import "react-mde/lib/styles/css/react-mde-all.css";

import { IPost } from "interfaces";

export const SignIn: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Form
    name="normal_login"
    initialValues={{ remember: true }}
    onFinish={onFinish}
    style={{
        maxWidth:"300px",
        margin:"40px auto"
    }}
  >
    <Form.Item
      name="username"
      rules={[{ required: true, message: 'Please input your Username!' }]}
    >
      <Input prefix={<UserOutlined/>} placeholder="Username" />
    </Form.Item>
    <Form.Item
      name="password"
      rules={[{ required: true, message: 'Please input your Password!' }]}
    >
      <Input
        prefix={<LockOutlined  />}
        type="password"
        placeholder="Password"
      />
    </Form.Item>
    <Form.Item>
      <Form.Item name="remember" valuePropName="checked" noStyle>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <a  href="">
        Forgot password
      </a>
    </Form.Item>

    <Form.Item>
      <Button type="primary" htmlType="submit">
        Log in
      </Button>
      Or <a href="">register now!</a>
    </Form.Item>
  </Form>
  );
};
