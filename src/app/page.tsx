"use client";
import { Card, Typography, FloatButton } from "antd";
const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <div style={{ width: 1200, margin: "50px auto" }}>
      <Typography>
        <Title>项目介绍</Title>
        <Paragraph>
          下班后,周末时,喜欢学一些新的技术,
          Next.js13.4是一个大的更新,自我认为next.js在Vercel公司带领下会成为前端技术框架的主流.学习思考框架中一些主流的技术
        </Paragraph>
        <Paragraph>
          <ul>
            <li>app路由器</li>
            <li>SSR/CSR</li>
            <li>嵌套管线和布局</li>
            <li>简化的数据获取</li>
            <li>流式处理和暂停</li>
            <li>内置SEO支持</li>
            <li>Turbopack</li>
            <li>服务器操作...</li>
          </ul>
        </Paragraph>
        <Title>项目</Title>
        <div style={{ display: "flex", gap: 50 }}>
          <Card title="新闻前台" extra={<a href="/news">地址</a>} style={{ width: 300 }}></Card>
          <Card title="新闻管理后台" extra={<a href="/admin/login">地址</a>} style={{ width: 300 }}></Card>
        </div>
      </Typography>
    </div>
  );
}
