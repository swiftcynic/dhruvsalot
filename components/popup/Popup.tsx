"use client";
import { AppContext } from "@/context/context";
import { Fragment, useContext } from "react";
import EmbedPopup from "./EmbedPopup";
import ImageGallery from "./ImageGallery";
import ImageView from "./ImageView";
import ProjectPopup from "./ProjectPopup";
const Popup = () => {
  const context = useContext(AppContext);
  if (!context) return null;
  const { modal, portfolioModal, blogModal } = context;
  return (
    <Fragment>
      <EmbedPopup />
      <ImageView />
      <ImageGallery />
      {modal && portfolioModal && <ProjectPopup />}
    </Fragment>
  );
};
export default Popup;
