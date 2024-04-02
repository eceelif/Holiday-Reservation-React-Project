import React from "react";
import { useForm } from "react-hook-form";

function UserInformationForm({ defaultValues, onSubmit }) {
  const { register, handleSubmit } = useForm({
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col">
          Name:
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            {...register("firstName")}
          />
        </div>
        <div className="col">
          Last name:
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            {...register("lastName")}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          {...register("email")}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          {...register("password")}
        />
      </div>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          {...register("isChecked")}
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default UserInformationForm;
