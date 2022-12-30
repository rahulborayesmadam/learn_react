import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import reducer from "../reducers/UserReducer";

const UserContext = createContext(null);

const initialState = {
  isLoading: false,
  isError: false,
  users: [],
  featureProducts: [],
};

const UserContextProvider = ({ children }) => {
  const [loginData, setLoginData] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  const getUsers = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const resp = await fetch(`${import.meta.env.VITE_API_KEY}/products`);
      const result = await resp.json();
      dispatch({ type: "SET_API_DATA", payload: result });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UserContext.Provider value={{ loginData, setLoginData, ...state }}>
      {children}
    </UserContext.Provider>
  );
};

//! Custom Hook
const useGlobalContext = () => {
  return useContext(UserContext);
};

export { UserContext, UserContextProvider, useGlobalContext };
