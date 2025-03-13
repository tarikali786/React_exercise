import React, { memo, useMemo } from "react";

export const UseMemoComponent = memo(({ formValue }) => {
  const mathCal = (num) => {
    let res = 0;
    for (let i = Math.pow(num, 5); i >= 0; i--) {
      res += Math.atan(i) * Math.tan(i);
    }
    console.log(res);

    return res;
  };

  const result = useMemo(() => mathCal(formValue?.num), [formValue.num]);

  return (
    <div>
      <p>
        heloo <b>{formValue?.name || "There"}</b>, your Result is {result}
      </p>
    </div>
  );
});
