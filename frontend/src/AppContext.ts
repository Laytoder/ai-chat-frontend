import React from "react";
import { AppContextType } from "./types";

const AppContext = React.createContext<AppContextType>(null!);

export default AppContext;
