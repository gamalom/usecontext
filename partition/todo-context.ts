import { createContext } from "react";
import { TodoContextType } from "./type";

export const TodoContext = createContext<TodoContextType | undefined>(
  undefined,
);
