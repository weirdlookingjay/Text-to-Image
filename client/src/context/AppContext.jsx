import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(true);

  const value = {
    user,
    setUser,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContextProvider;
