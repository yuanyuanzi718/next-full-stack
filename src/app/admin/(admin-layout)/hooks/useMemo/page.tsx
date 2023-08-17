"use client";
import React, { useState, useMemo } from "react";
import { Divider, Typography, Card } from "antd";
const { Title, Paragraph, Text, Link } = Typography;

function UseMemo() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);
  const [c, setC] = useState(3);

  const memoizedValue = useMemo(() => {
    console.log("computeExpensiveValue");
    return a * b;
  }, [a, b]);
  return (
    <div>
      <Typography>
        <Title>useMemo</Title>
        <Paragraph>可让您缓存重新渲染之间的计算结果</Paragraph>
        <Paragraph>
          2. 用法<Text code>const memoizedValue = useMemo(() ={">"} computeExpensiveValue(a, b), [a, b])</Text>
        </Paragraph>
      </Typography>
      <Divider />
      <Card title="useMemo" style={{ width: 500 }}>
        <p>{`a: ${a}`}</p>
        <p>{`b: ${b}`}</p>
        <p>{`a * b: ${memoizedValue}`}</p>
        <button onClick={() => setA(a + 1)}>a+1</button>
        <button onClick={() => setB(b + 1)}>b+1</button>
      </Card>
    </div>
  );
}

export default UseMemo;
