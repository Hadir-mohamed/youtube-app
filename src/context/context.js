import { createContext } from "react";

export const AppContext = createContext({
  searchTirm: "",
  setSearchTirm: (elm) => {},
  setIsLoading: (val) => {},
  isLoading: false,
  setError: (err) => {},
  error: {},
});
