import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Home from "./pages/Home";
import Articles from "./pages/Articles";
import ContactUs from "./pages/ContactUs";
import LoginRegister from "./pages/LoginRegister";
import UserLandingPage from "./pages/UserLandingPage";
import UserNavbar from "./components/UserNavbar";
import NotFound from "./pages/NotFound";
import RegistrationForm from "./components/RegistrationForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <ApolloProvider client={client}>
      <Router>
        {isLoggedIn ? <UserNavbar /> : <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/user" element={<UserLandingPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
