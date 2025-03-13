import { useState } from "react";
import "./App.css";
import { Form } from "./page/form";
import { Memo } from "./page/hooks";

function App() {
  const [formValue, setFormValue] = useState({ name: "", age: "" });
  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center flex-col ">
      <div className="w-1/2 h-1/2 border p-5">
        <form action="" className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="name"
            value={formValue?.name}
            className="border p-2 rounded-md"
            onChange={handleInputChange}
            name="name"
          />
          <input
            type="text"
            placeholder="age"
            value={formValue?.age}
            className="border p-2  rounded-md "
            onChange={handleInputChange}
            name="age"
          />
        </form>
        <Memo formValue={formValue} />
      </div>
    </div>
  );
}

export default App;
