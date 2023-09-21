import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import helloImage from "./Hello.svg";
const FormAndTable = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [formData, setFormData] = useState({
    name: "",
    age: "",

    class: "",
    percentage: "",
    dob: "",
  });
  const [tableData, setTableData] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((Data) => ({ ...Data, [name]: value }));
  };

  const Submit = () => {
    setTableData([...tableData, formData]);
    setFormData({ name: "", age: "", class: "", percentage: "", dob: "" });
  };

  return (
    <div>
      <p className="text-2xl font-bold text-red-600">Sachin Marx</p>
      <img src={helloImage} alt="Hello" />
      <form onSubmit={handleSubmit(Submit)}>
        <div className="col-4 m-2">
          <input
            className="form-control"
            type="text"
            name="name"
            {...register("name", { required: true })}
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter Ur Name"
          />
          {errors.name && <p>{"This Is Required Field"}</p>}
          <br />
        </div>
        <div className="col-4 m-2">
          <input
            className="form-control"
            type="number"
            name="age"
            {...register("age", { required: true })}
            value={formData.age}
            onChange={handleInputChange}
            placeholder="Enter Ur Age"
          />
          {errors.age && <p>{"This Is Required Field"}</p>}
        </div>
        <br />
        <div className="col-4 m-2">
          <input
            className="form-control"
            type="text"
            name="class"
            {...register("class", { required: true })}
            value={formData.class}
            onChange={handleInputChange}
            placeholder="Enter Ur Class"
          />
          {errors.class && <p>{"This Is Required Field"}</p>}
        </div>
        <br />
        <div className="col-4 m-2">
          <input
            className="form-control"
            type="number"
            name="percentage"
            {...register("percentage", { required: true })}
            value={formData.percentage}
            onChange={handleInputChange}
            placeholder="Enter Ur Percentage"
          />
          {errors.class && <p>{"This Is Required Field"}</p>}
        </div>
        <br />
        <div className="col-4 m-2">
          <input
            className="form-control"
            type="date "
            name="dob"
            {...register("dob", { required: true })}
            value={formData.dob}
            onChange={handleInputChange}
            placeholder="Enter Ur DateOfBirth"
          />
          {errors.dob && <p>{"This Is Required Field"}</p>}
        </div>
        <br />
        <button className="btn btn-dark m-2 col-1" type="submit">
          Click
        </button>
      </form>
      <br />
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Class</th>
            <th>Percentage</th>
            <th>DateOfBirth</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.class}</td>
              <td>{data.percentage}</td>
              <td>{data.dob}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormAndTable;
