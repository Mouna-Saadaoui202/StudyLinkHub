import React from "react";
import { Layout } from "../../layouts/Layout";
import { EventAll } from "../../components/events/EventAll";

export const Event = () => {
  return (
    <Layout breadcrumbTitle={"Event"} breadcrumbSubtitle={"Event"} header={1}footer={3}>
      <EventAll />
    </Layout>
  );
};
