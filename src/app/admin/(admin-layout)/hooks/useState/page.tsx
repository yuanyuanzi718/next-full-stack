"use client";
import React, { useState } from "react";
import { Divider, Typography, Card } from "antd";

const { Title, Paragraph, Text, Link } = Typography;

function UseState() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Typography>
        <Title>useState</Title>
        <Paragraph>1. 可让您向组件添加状态变量,可让您将状态更新为不同的值并触发重新渲染。</Paragraph>
        <Paragraph>
          2. 用法<Text code>const [state, setState] = useState(initialState);</Text>
        </Paragraph>
      </Typography>
      <Divider />
      <Card title="示例" style={{ width: 500 }}>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -1
        </button>
        <p>{count}</p>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +1
        </button>
      </Card>
    </div>
  );
}

export default UseState;
