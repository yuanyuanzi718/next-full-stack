"use client";
import React from "react";
// import styles from "./page.module.css";
import useSWR from "swr";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
import Image from "next/image";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());
function Dashboard() {
  const { data, error } = useSWR("https://jsonplaceholder.typicode.com/posts");
  // console.log(data, "111");
  // if (error) return <div>failed to load</div>;
  // if (isLoading) return <div>loading...</div>;
  return <div>Dashboard</div>;
}

export default Dashboard;
