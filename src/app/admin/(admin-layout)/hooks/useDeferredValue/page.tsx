"use client";
import { useState, useDeferredValue, Suspense } from "react";
import { Divider, Typography, Card } from "antd";

const { Title, Paragraph, Text, Link } = Typography;

function UseDeferredValue() {
  const [query, setQuery] = useState("");
  // 将用户输入的值推迟到下一次渲染周期中更新
  const deferredValue = useDeferredValue(query);
  return (
    <div>
      <Typography>
        <Title>useDeferredValue</Title>
        <Paragraph>1. 它能够将某个值的更新推迟到下一次渲染周期，从而减少渲染的次数，提高性能(节流)。</Paragraph>
      </Typography>
      <Divider />
      <Card title="示例" style={{ width: 500 }}>
        <label>
          Search albums:
          <input value={query} onChange={(e) => setQuery(e.target.value)} />
        </label>
        <Suspense fallback={<h2>Loading...</h2>}>
          <p>{query}</p>
        </Suspense>
      </Card>
    </div>
  );
}

export default UseDeferredValue;
