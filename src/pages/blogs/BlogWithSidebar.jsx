import React from "react";
import { Layout } from "../../layouts/Layout";
import { BlogPagination } from "../../components/blogs/BlogPagination";
import { BlogAllSidebar } from "../../components/blogs/BlogAllSidebar";
import { BlogContainer } from "../../components/blogs/BlogContainer";

export const BlogWithSidebar = () => {
  return (
    <Layout
      header={1}
      footer={3}
      breadcrumbTitle={"Blog"}
      breadcrumbSubtitle={"Blog"}
    >
      <BlogContainer>
        <BlogAllSidebar />

        <div className="td_height_60 td_height_lg_40" />

      </BlogContainer>
    </Layout>
  );
};
