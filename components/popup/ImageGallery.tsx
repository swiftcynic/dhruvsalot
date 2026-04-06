import { AppContext } from "@/context/context";
import FsLightbox from "fslightbox-react";
import { Fragment, useContext } from "react";
const ImageGallery = () => {
  const ctx = useContext(AppContext);
  if (!ctx) return null;
  const { gallery, setGallery } = ctx;

  return (
    <Fragment>
      <FsLightbox
        toggler={gallery}
        sources={[
          "images/works/work1.jpg",
          "images/works/work2.jpg",
          "images/works/work3.jpg",
          "images/works/work4.jpg",
        ]}
      />
    </Fragment>
  );
};
export default ImageGallery;
