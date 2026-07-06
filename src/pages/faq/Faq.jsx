import React from "react";
import { Layout } from "../../layouts/Layout";
import { FaqAll } from "../../components/faqs/FaqAll";
import { BlogNine } from "../../components/blogs/BlogNine";

export const Faq = () => {
  return (
    <Layout breadcrumbTitle={"Faqs"} breadcrumbSubtitle={"Faqs"} header={1}footer={3}>
      {/* faqs */}
      <FaqAll />

      </Layout>
  );
};
