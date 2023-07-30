"use client";
import React from "react";
import { Button, Form, Input, Card, message } from "antd";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const nav = useRouter();
  const onFinish = async (values: any) => {
    const res = await fetch("/api/admin/login", {
      method: "POST",
      body: JSON.stringify(values),
    }).then((res) => res.json());
    if (res.success) {
      message.success("登录成功");
      nav.push("/admin/dashboard");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Card title="next全栈管理后台" bordered={false} className="mx-auto w-3/5 mt-20">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="Username" name="username" rules={[{ required: true, message: "Please input your username!" }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please input your password!" }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
