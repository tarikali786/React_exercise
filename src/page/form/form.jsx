import React, { useState } from "react";

export const Form = ({ formValue, setFormValue }) => {
  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
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
  );
};
