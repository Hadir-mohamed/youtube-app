import React, { useState, useMemo } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import MobileNavbar from "./components/mobileNavbar/MobileNavbar";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { AppContext } from "./context/context";
import LoadingLine from "./components/loading/LoadingLine";
import ErrorMessage from "./components/errorMessage/ErrorMessage";
import Spinner from "./components/loading/Spinner";

import "./App.scss";
const queryClient = new QueryClient();

function App() {
  const [searchTirm, setSearchTirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});
  const value = useMemo(
    () => ({
      searchTirm,
      setSearchTirm,
      setIsLoading,
      isLoading,
      setError,
      error,
    }),
    [searchTirm, isLoading, error]
  );

  if (error?.message) {
    return (
      <ErrorMessage
        subTitle={error?.message?.toString()}
        statusCode={error?.response?.data?.error?.code}
      />
    );
  }

  return (
    <AppContext.Provider value={value}>
      <QueryClientProvider client={queryClient}>
        <div className="youtube-app">
          <>
            {isLoading && window.innerWidth > 768 &&  <LoadingLine />}
            {isLoading && window.innerWidth <= 768 && <Spinner />}
            <Navbar />
            <MobileNavbar />
            <BrowserRouter>
              <Routes>
                <Route exact path="/" element={<Home />} />
              </Routes>
            </BrowserRouter>
          </>
        </div>
      </QueryClientProvider>
    </AppContext.Provider>
  );
}

export default App;
