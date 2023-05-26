import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import { HelmetProvider } from "react-helmet-async";
import WebRedirect from "./components/WebRedirect";
import PageNotFound from "./components/pages/NotFound/PageNotFound";
import { routerPaths } from "./utils/routerPaths";
import Blog from "./components/pages/Blog/Blog";
import Article from "./components/pages/Article/Article";

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/" element={<WebRedirect />} />
        <Route path={routerPaths.home} element={<Home />} />
        <Route path={routerPaths.blog} element={<Blog />} />
        <Route path={routerPaths.articlePage} element={<Article />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
