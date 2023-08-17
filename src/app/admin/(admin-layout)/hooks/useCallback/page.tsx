"use client";
import React, { useState, useCallback } from "react";
import { Divider, Typography, Card } from "antd";
const { Title, Paragraph, Text } = Typography;

function UseCallback() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("刘备");

  const handleClick = useCallback(() => {
    alert("触发useCallback");
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <Typography>
        <Title>useCallback</Title>
        <Paragraph>1. 用于优化函数组件的性能。它可以缓存函数本身，避免每次渲染时都创建一个新的函数，从而提高组件的性能</Paragraph>
        <Paragraph>
          2. 用法
          <Text code>const memoizedCallback = useCallback(fn, dependencies)</Text>
        </Paragraph>
      </Typography>
      <Divider />
      <Card title="会触发useCallback" style={{ width: 500 }}>
        <p>Count: {count}</p>
        <button onClick={handleClick}>Increase Count</button>
      </Card>
      <Card title="不会触发useCallback" style={{ width: 500 }}>
        <p>name: {name}</p>
        <button
          onClick={() => {
            setName(name === "刘备" ? "曹操" : "刘备");
          }}
        >
          修改名字
        </button>
      </Card>
    </div>
  );
}

export default UseCallback;
