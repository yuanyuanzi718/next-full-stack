"use client";
import React, { useState, useEffect } from "react";
import { Button, Card, Input, Table, Form, Space, message, Popconfirm } from "antd";
import { PlusOutlined, SearchOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import Edit from "./edit";
import Image from "next/image";

interface DataType {
  image: any;
  id: string;
  title: string;
  content: string;
}

const typeEnum = [
  {
    value: "sport",
    label: "体育",
  },
  {
    value: "economy",
    label: "经济",
  },
  {
    value: "health",
    label: "健康",
  },
  {
    value: "cars",
    label: "汽车",
  },
];

export default function ArticlesPage() {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState([]);
  const [query, setQuery] = useState({ per: 10, page: 1, title: "" });
  const [currentId, setCurrentId] = useState(null);
  const [formData, setFormData] = useState({});
  const [total, setTotal] = useState(0);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [html, setHtml] = useState("<p>hello</p>"); // 富文本

  useEffect(() => {
    console.log("1");

    fetch(`/api/admin/articles?per=${query.per}&page=${query.page}&title=${query.title}`)
      .then((res) => res.json())
      .then((res) => {
        setList(res.data.list);
        setTotal(res.data.total);
      });
    console.log("2");
  }, [query]);

  const onCreate = async (values: any) => {
    if (currentId) {
      const res = await fetch(`/api/admin/articles/${currentId}`, {
        method: "PUT",
        body: JSON.stringify(values),
      }).then((res) => res.json());
      if (res.success) {
        message.success("修改成功");
        setOpen(false);
        setQuery({ ...query });
      }
    } else {
      const res = await fetch("/api/admin/articles", {
        method: "POST",
        body: JSON.stringify(values),
      }).then((res) => res.json());
      if (res.success) {
        message.success("新建成功");
        setOpen(false);
        setQuery({ ...query });
      }
    }
  };

  // 新增/编辑
  const editForm = async (type: string, record?: any) => {
    switch (type) {
      case "create":
        setOpen(true);
        setCurrentId(null);
        setFormData({});
        setImageUrl("");
        setHtml("");
        break;
      case "update":
        const resData = await fetch(`/api/admin/articles/${record.id}`, {
          method: "GET",
        }).then((res) => res.json());
        if (resData.success) {
          setFormData(resData.data);
        }
        setOpen(true);
        setCurrentId(record.id);
        setImageUrl(record.image);
        setHtml(record.content);
        break;
      case "delete":
        const res = await fetch(`/api/admin/articles/${record.id}`, {
          method: "DELETE",
        }).then((res) => res.json());
        if (res.success) {
          message.success("删除成功");
          setQuery({ ...query });
        }
        break;
    }
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "标题",
      dataIndex: "title",
      key: "title",
      width: "20%",
    },
    {
      title: "新闻类型",
      dataIndex: "newsType",
      key: "newsType",
      width: "20%",
      render: (_, { newsType }: any) => {
        let tem = "";
        typeEnum.forEach((item) => {
          if (newsType === item.value) {
            tem = item.label;
          }
        });
        return tem;
      },
    },
    {
      title: "简介",
      dataIndex: "desc",
      key: "content",
      width: "20%",
    },
    {
      title: "封面",
      width: "20%",
      render: (_, record) => {
        if (record.image) {
          return <Image src={record.image} alt={record.title} width={80} height={80} />;
        }
      },
    },
    {
      title: "操作",
      width: "20%",
      render: (_, record) => (
        <Space>
          <Button
            size="small"
            icon={<EditOutlined />}
            type="primary"
            onClick={() => {
              editForm("update", record);
            }}
          />
          <Popconfirm
            title="是否确实删除?"
            onConfirm={() => {
              editForm("delete", record);
            }}
          >
            <Button size="small" icon={<DeleteOutlined />} type="primary" danger />
          </Popconfirm>
        </Space>
      ),
    },
  ];
  return (
    <Card
      title="文章管理"
      extra={
        <>
          <Button
            icon={<PlusOutlined />}
            type="primary"
            onClick={() => {
              editForm("create");
              setImageUrl("");
            }}
          />
        </>
      }
    >
      <Form
        layout="inline"
        onFinish={(values) => {
          setQuery({ ...query, title: values.title });
        }}
      >
        <Form.Item label="标题" name="title">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item>
          <Button icon={<SearchOutlined />} type="primary" htmlType="submit" />
        </Form.Item>
      </Form>
      <Table
        style={{ marginTop: 20 }}
        dataSource={list}
        columns={columns}
        rowKey={(record: any) => record.id}
        pagination={{
          total,
          onChange(page) {
            setQuery({ ...query, page });
          },
        }}
      />
      <Edit
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
        formData={formData}
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
        html={html}
        setHtml={setHtml}
      />
    </Card>
  );
}
