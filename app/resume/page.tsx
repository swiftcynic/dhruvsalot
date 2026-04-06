"use client";
import PageBanner from "@/components/PageBanner";
import GlitcheLayout from "@/layouts/GlitcheLayout";

import dynamic from "next/dynamic";
const Clients = dynamic(() => import("@/components/Clients"), {
  ssr: false,
});

const ResumePage = () => {
  return (
    <GlitcheLayout>
      <PageBanner 
        pageLink={"resume"}
        pageName={"Resume"}
        scrollFallback={
          <a href="/DHRUV%20SALOT.pdf" download className="btn">
              Download Resume (PDF)
          </a>
        }
      />
    </GlitcheLayout>
  );
};
export default ResumePage;
