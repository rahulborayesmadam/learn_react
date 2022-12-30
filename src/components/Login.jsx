import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/UserContext";
import Button from "../shared/Button";
import Card from "../shared/Card";
import Input from "../shared/Input";

const Login = () => {
  const { setLoginData } = useGlobalContext();
  const [data, setData] = useState({
    name: "",
    email: "",
  });
  const { name, email } = data;
  const canLogin = name !== "" && email !== "";
  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setLoginData(data);
    if (name && email) {
      navigate("/profile");
    }
  };

  return (
    <Card>
      <form className="d-flex" onSubmit={handleFormSubmit}>
        <h2>Login</h2>
        <div>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            placeholder="name"
            autoComplete="off"
          />
        </div>
        <div className="mt-5">
          <Input
            type="text"
            name="email"
            value={email}
            onChange={handleInputChange}
            placeholder="email"
            autoComplete="off"
          />
        </div>

        <Button
          className="btn-primary mt-10"
          type="submit"
          disabled={!canLogin}
        >
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default Login;
