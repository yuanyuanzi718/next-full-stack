"use client";
import React, { useState } from "react";
import { Divider, Typography, Card } from "antd";
import { UserContext } from "./userContext";
import Edit from "./Edit";
const { Title, Paragraph } = Typography;

function UseContext() {
  const [user, setUser] = useState("刘备");
  return (
    <UserContext.Provider value={{ user }}>
      <div>
        <Typography>
          <Title>useContext</Title>
          <Paragraph>可让您从组件读取和订阅上下文</Paragraph>
        </Typography>
        <Divider />
        <Card title="父组件" style={{ width: 500 }}>
          <p>{user}</p>
          <button
            onClick={() => {
              setUser(user === "刘备" ? "曹操" : "刘备");
            }}
          >
            修改Context内容
          </button>
        </Card>
        <Card title="子组件" style={{ width: 500 }}>
          <Edit />
        </Card>
      </div>
    </UserContext.Provider>
  );
}

export default UseContext;
