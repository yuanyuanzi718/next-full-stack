"use client";
import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined, DashboardOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { useRouter, usePathname } from "next/navigation";
const { Header, Sider, Content } = Layout;

function AntdContainer({ children }: any) {
  const nav = useRouter();
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [current, setCurrent] = useState(pathname);

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["/admin/dashboard"]}
          selectedKeys={[current]}
          onClick={({ key }) => {
            setCurrent(key);
            nav.push(key);
          }}
          items={[
            {
              key: "/admin/dashboard",
              icon: <DashboardOutlined />,
              label: "看板",
            },
            {
              key: "/admin/user",
              icon: <UserOutlined />,
              label: "用户信息",
            },
            {
              key: "/admin/articles",
              icon: <UserOutlined />,
              label: "文章管理",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "12px",
            padding: "8px",
            minHeight: 280,
            background: colorBgContainer,
            overflow: "auto",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
export default AntdContainer;
