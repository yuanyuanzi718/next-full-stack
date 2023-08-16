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
function UseEffect() {
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
        <Title>useEffect</Title>
        <Paragraph>
          useEffect是React的另一个核心钩子函数,用于在函数组件中添加副作用。副作用是指与组件渲染无关的行为,如访问网络、操作DOM元素、订阅事件等。使用useEffect可以让我们在组件渲染后执行这些副作用,而无需使用类组件和生命周期方法
        </Paragraph>
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

export default UseEffect;
