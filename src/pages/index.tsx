import React from "react";
import ArticleCard from "../components/ArticleCard";
import Header from "../components/Header";
import Layout from "../components/Layout";

const index = () => {
  return (
    <Layout>
      <Header />
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 sm:gap-12 xl:gap-16">
        <ArticleCard />
      </div>
    </Layout>
  );
};
export default index;
