// "use client";
import React from "react";

async function getData() {
  const res = await fetch(process.env.URL + "/api/news/sport", {
    method: "GET",
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function SportPage() {
  const data = await getData();
  console.log(data, "qianduan");
  // useEffect(() => {
  //   fetch(`/api/news/sport`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res, "res");
  //     });
  // }, []);

  return (
    <div>
      <ul>
        {data.data.map((item: any) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default SportPage;
