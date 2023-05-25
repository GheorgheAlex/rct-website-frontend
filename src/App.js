import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import { HelmetProvider } from "react-helmet-async";
import WebRedirect from "./components/WebRedirect";
import PageNotFound from "./components/pages/NotFound/PageNotFound";
import { routerPaths } from "./utils/routerPaths";
import Blog from './components/pages/Blog/Blog';


function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/" element={<WebRedirect />} />
        <Route path={routerPaths.home} element={<Home />} />
        <Route path={routerPaths.blog} element={<Blog />} />

      </Routes>
    </HelmetProvider>
  );
}

export default App;
