import React, { useEffect } from "react";
import { Form, Input, Modal } from "antd";
import MyUpload from "../../_components/MyUpload";
import dynamic from "next/dynamic";
// 动态引入,不在编译的时候做出来
const MyEditor = dynamic(() => import("../../_components/MyEditor"), {
  ssr: false,
});

interface Values {
  title: string;
  content: string;
}

interface CollectionCreateFormProps {
  open: boolean;
  onCreate: (values: Values) => void;
  onCancel: () => void;
  formData: any;
  imageUrl: string;
  setImageUrl: any;
  html: any;
  setHtml: any;
}

const Edit: React.FC<CollectionCreateFormProps> = ({ open, onCreate, onCancel, formData, imageUrl, setImageUrl, html, setHtml }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(formData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);
  return (
    <Modal
      open={open}
      title="编辑"
      okText="创建"
      cancelText="关闭"
      onCancel={onCancel}
      destroyOnClose={true}
      maskClosable={false}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate({ ...values, image: imageUrl, content: html });
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
      width={"75vw"}
    >
      <Form form={form} layout="vertical" preserve={false} name="form_in_modal" initialValues={{}}>
        <Form.Item
          label="标题"
          name="title"
          rules={[
            {
              required: true,
              message: "标题不能为空",
            },
          ]}
        >
          <Input placeholder="请输入标题" />
        </Form.Item>
        <Form.Item label="简介" name="desc">
          <Input.TextArea placeholder="请输入简介" />
        </Form.Item>
        <Form.Item label="封面">
          <MyUpload imageUrl={imageUrl} setImageUrl={setImageUrl} />
        </Form.Item>
        <Form.Item label="详情">
          <MyEditor html={html} setHtml={setHtml} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Edit;
