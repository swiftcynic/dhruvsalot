"use client";
import PageBanner from "@/components/PageBanner";
import GlitcheLayout from "@/layouts/GlitcheLayout";

import dynamic from "next/dynamic";

const Clients = dynamic(() => import("@/components/Clients"), {
  ssr: false,
});

const NotFoundPage = () => {
  return (
    <GlitcheLayout>
      <PageBanner 
        pageLink={"not-found"}
        pageName={"Error 404"}
        scrollFallback={
          <p style={{ marginBottom: 20 }}>
            Oops! The page you're looking for doesn't exist.
          </p>
        }
      />
    </GlitcheLayout>
  );
};

export default NotFoundPage;