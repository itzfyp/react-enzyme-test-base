import React from "react";

const AuthContext = React.createContext({ isAuth: false, update: () => {} });

export default AuthContext;
