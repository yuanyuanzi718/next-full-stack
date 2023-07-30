import React from "react";
import AntdContainer from "./_components/AntdContainer";
export default function layout({ children }: any) {
  return (
    <div className="admin-main">
      <AntdContainer>{children}</AntdContainer>
    </div>
  );
}
