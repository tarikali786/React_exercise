import React, { memo } from "react";

export const Memo = memo(
  ({ formValue }) => {
    const date = new Date();
    console.log(`re-render ${date.getMinutes()}: ${date.getSeconds()}`);

    return (
      <div>
        <h1>Hello {formValue?.name}</h1>
      </div>
    );
  },
  (prevProp, nextProp) => prevProp.formValue.name === nextProp.formValue.name
);
