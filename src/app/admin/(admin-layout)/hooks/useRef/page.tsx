"use client";
import React, { useState, useEffect } from "react";
import { Divider, Typography, Card } from "antd";
import { useRouter } from "next/navigation";

const { Title, Paragraph, Text, Link } = Typography;

interface PostData {
  title?: string;
  id?: number;
  body?: string;
  userId?: number;
}
function UseRef() {
  const nav = useRouter();
  const [postData, setPostData] = useState<PostData>({});
  const [count, setCount] = useState(1);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) => response.json());
      setPostData(res);
    };
    getData();

    return () => {
      alert("模仿生命周期=>组件卸载前执行(取消订阅、解绑事件、清除定时器等操作)");
    };
  }, []);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${count}`).then((response) => response.json());
      setPostData(res);
    };
    getData();
  }, [count]);
  return (
    <div>
      <Typography>
        <Title>useRef</Title>
        <Paragraph>可让您引用渲染不需要的值</Paragraph>
      </Typography>
      <Divider />
      <Card title="组件渲染后执行(获取接口数据)" style={{ width: 500 }}>
        <p>{postData.title}</p>
        <p>{postData.id}</p>
        <p>{postData.body}</p>
        <p>{postData.userId}</p>
      </Card>
      <Card title="组件重新渲染后(某个状态改变获取接口数据)" style={{ width: 500 }}>
        <button onClick={() => setCount(count + 1)}>count</button>
      </Card>
      <Card title="组件卸载前执行(取消订阅、解绑事件、清除定时器等操作)" style={{ width: 500 }}>
        <button
          onClick={() => {
            nav.push("/admin/hooks/useState");
          }}
        >
          前往useState页面,卸载组件
        </button>
      </Card>
    </div>
  );
}

export default UseRef;
