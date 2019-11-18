import React, { useState, useEffect } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "agayan"
  });

  function handleChangeInput(value, name) {
    setFormData({
      ...formData,
      [name]: value
    });
  }
  console.log(formData);

  return (
    <div className="form">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={e => handleChangeInput(e.target.value, e.target.name)}
      />
      <label>Name</label>
      <br />
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={e => handleChangeInput(e.target.value, e.target.name)}
      />
      <label>Email</label>
      <br />
      <input
        type="password"
        name="pass"
        value={formData.pass}
        onChange={e => handleChangeInput(e.target.value, e.target.name)}
      />
      <label>Pass</label>
      <br />
      <input
        type="password"
        name="confirm"
        value={formData.confirm}
        onChange={e => handleChangeInput(e.target.value, e.target.name)}
      />
      <label>Confirm</label>
      <button>Submit</button>
      <br />
    </div>
  );
};

export default Form;
