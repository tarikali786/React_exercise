import React, { memo } from "react";

export const UseCallbackComponent = memo(({ printName }) => {
  const date = new Date();
  console.log(
    `useCallBack re-render ${date.getMinutes()}: ${date.getSeconds()}`
  );

  return printName();
});
