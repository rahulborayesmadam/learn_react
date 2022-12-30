import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/UserContext";
import Button from "../shared/Button";

const Welcome = () => {
  const {
    loginData: { name, email },
    users,
    isLoading,
  } = useGlobalContext();
  const navigate = useNavigate();
  console.log(users, "users");
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div
      className="card mt-10"
      style={{ padding: "20px 40px", display: "grid", placeItems: "center" }}
    >
      Welcome name: <strong>{name}</strong>
      <p>
        <strong>{email}</strong>
      </p>
      <Button className="btn-secondary" onClick={() => navigate("/")}>
        Go Back
      </Button>
    </div>
  );
};

export default Welcome;
