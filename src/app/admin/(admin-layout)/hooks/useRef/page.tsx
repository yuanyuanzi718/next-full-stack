"use client";
import React, { useRef } from "react";
import { Divider, Typography, Card } from "antd";
const { Title, Paragraph } = Typography;

function UseRef() {
  let ref = useRef(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  function inputHandleClick() {
    inputRef?.current?.focus();
  }

  function handleClick() {
    ref.current = ref.current + 1;
    alert("You clicked " + ref.current + " times!");
  }
  return (
    <div>
      <Typography>
        <Title>useRef</Title>
        <Paragraph>可让您引用渲染不需要的值</Paragraph>
        <Paragraph>使用 ref 操作 DOM</Paragraph>
      </Typography>
      <Divider />
      <Card title="可让您引用渲染不需要的值" style={{ width: 500 }}>
        <button onClick={handleClick}>点击!</button>
      </Card>
      <Card title="使用 ref 操作 DOM" style={{ width: 500 }}>
        <input ref={inputRef} />
        <button onClick={inputHandleClick}>获取焦点</button>
      </Card>
    </div>
  );
}

export default UseRef;
