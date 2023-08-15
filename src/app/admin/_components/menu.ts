import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined, DashboardOutlined } from "@ant-design/icons";
import React from "react";

const menuData: any = [
  {
    key: "/admin/articles",
    icon: React.createElement(UserOutlined),
    label: "文章管理",
  },
  {
    key: "/admin/hooks",
    icon: React.createElement(UserOutlined),
    label: "Hooks大全",
    children: [
      {
        key: "/admin/hooks/useState",
        label: "useState",
      },
    ],
  },
];
export default menuData;
