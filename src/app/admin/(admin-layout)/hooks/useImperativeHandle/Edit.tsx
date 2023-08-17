import React, { useImperativeHandle, forwardRef } from "react";

// eslint-disable-next-line react/display-name
const Edit = forwardRef(function (props, ref) {
  useImperativeHandle(ref, () => {
    return {
      zizujian,
    };
  });

  const zizujian = (value: string) => {
    alert("我是子组件获取到父组件给我传的值:" + value);
  };
  return (
    <div>
      <hr />
      子组件
    </div>
  );
});

export default Edit;
