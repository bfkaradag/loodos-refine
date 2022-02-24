import { useTranslate, IResourceComponentsProps } from "@pankod/refine-core";
import {
  Form,
  Input,
} from "@pankod/refine-antd";

import "react-mde/lib/styles/css/react-mde-all.css";

import { IPost } from "interfaces";

export const SignUp: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();

  return (
      <Form layout="vertical">
        <Form.Item
          label={t("posts.fields.title")}
          name="title"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
  );
};
