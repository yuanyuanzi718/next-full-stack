"use client";
import React from "react";
import { Button, Card, Input, Table, Form } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";

export default function User() {
  const dataSource = [
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号",
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
  ];

  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address",
    },
  ];
  return (
    <Card
      title="用户信息"
      extra={
        <>
          <Button icon={<PlusOutlined />} type="primary"></Button>
        </>
      }
    >
      <Form layout="inline">
        <Form.Item label="名字">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item>
          <Button icon={<SearchOutlined />} type="primary" />
        </Form.Item>
      </Form>
      <Table style={{ marginTop: 20 }} dataSource={dataSource} columns={columns} />
    </Card>
  );
}
