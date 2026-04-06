"use client";
import useClickOutside from "@/utility/useClickOutside";
import { Fragment, useEffect, useState, type RefObject } from "react";
import ReactPlayer from "react-player";

const EmbedPopup_ = ({
  close,
  videoID,
}: {
  close: (value?: boolean) => void;
  videoID: string | null;
}) => {
  const domNode = useClickOutside(() => {
    close(false);
  }) as RefObject<HTMLDivElement | null>;

  return (
    <Fragment>
      <div className="mfp-bg mfp-ready" onClick={() => close(false)}></div>
      <div
        className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
        tabIndex={-1}
        style={{ overflow: "hidden auto" }}
      >
        <div className="mfp-container popup-container mfp-s-ready mfp-iframe-holder">
          <div className="mfp-content" ref={domNode}>
            <div className="mfp-iframe-scaler">
              <button
                title="Close (Esc)"
                type="button"
                className="mfp-close"
                onClick={() => close()}
              >
                ×
              </button>
              <ReactPlayer {...({ url: videoID ?? "https://www.youtube.com/watch?v=dQw4w9WgXcQ", playing: true } as any)} />
            </div>
          </div>
          <div className="mfp-preloader">Loading...</div>
        </div>
      </div>
    </Fragment>
  );
};

const EmbedPopup = () => {
  const [video, setVideo] = useState(false);
  const [videoValue, setVideoValue] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      const a = document.querySelectorAll<HTMLAnchorElement>("a");
      a.forEach((link) => {
        if (
          link.href.includes("youtu.be") ||
          link.href.includes("vimeo.com") ||
          link.href.includes("soundcloud.com")
        ) {
          link.addEventListener("click", (e) => {
            e.preventDefault();
            setVideoValue(link.href);
            setVideo(true);
          });
        }
      });
    }, 600);
  }, [video]);

  return (
    video && <EmbedPopup_ close={() => setVideo(false)} videoID={videoValue} />
  );
};

export default EmbedPopup;
