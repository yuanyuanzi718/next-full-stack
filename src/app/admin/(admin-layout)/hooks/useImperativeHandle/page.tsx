"use client";
import React, { useRef } from "react";
import { Divider, Typography, Card } from "antd";
import Edit from "./Edit";
const { Title, Paragraph } = Typography;

function UseImperativeHandle() {
  let ref: any = useRef(null);

  return (
    <div>
      <Typography>
        <Title>useImperativeHandle</Title>
        <Paragraph>向父组件公开自定义引用</Paragraph>
        <Paragraph>暴露你自己的命令式方法</Paragraph>
      </Typography>
      <Divider />
      <Card title="向父组件公开自定义引用" style={{ width: 500 }}>
        <button
          onClick={() => {
            ref?.current?.zizujian("xixixi");
          }}
        >
          给子组件传值
        </button>
        <Edit ref={ref} />
      </Card>
    </div>
  );
}

export default UseImperativeHandle;
