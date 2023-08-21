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
    label: "常用Hooks",
    children: [
      {
        key: "/admin/hooks/useState",
        label: "useState",
      },
      {
        key: "/admin/hooks/useEffect",
        label: "useEffect",
      },
      {
        key: "/admin/hooks/useRef",
        label: "useRef",
      },
      {
        key: "/admin/hooks/useImperativeHandle",
        label: "useImperativeHandle",
      },
      {
        key: "/admin/hooks/useContext",
        label: "useContext",
      },
      {
        key: "/admin/hooks/useMemo",
        label: "useMemo",
      },
      {
        key: "/admin/hooks/useCallback",
        label: "useCallback",
      },
    ],
  },
];
export default menuData;
