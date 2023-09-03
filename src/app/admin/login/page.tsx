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
    console.log(res, "res");

    if (res.success) {
      message.success("登录成功");
      nav.push("/admin/articles");
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
        <Form.Item label="账号" name="username" rules={[{ required: true, message: "请输入你的账号!" }]}>
          <Input placeholder="admin" />
        </Form.Item>

        <Form.Item label="密码" name="password" rules={[{ required: true, message: "请输入你的密码!" }]}>
          <Input.Password placeholder="admin" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
