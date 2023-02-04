import { createContext } from "react";

export const AppContext = createContext({
  searchTirm: "",
  setSearchTirm: (elm) => {},
  setIsLoading: (val) => {},
  isLoading: true,
  setError: (err) => {},
  error: {},
});
