"use client";
import { AppContext } from "@/context/context";
import FsLightbox from "fslightbox-react";
import Isotope from "isotope-layout";
import {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const galleryImages: Record<number, string[]> = {
  1: [
    "images/works/work3.jpg",
    "images/works/work3a.jpg",
    "images/works/work3b.jpg",
    "images/works/work3c.jpg",
  ],
  2: [
    "images/works/work5.jpg",
    "images/works/work2.jpg",
    "images/works/work3.jpg",
    "images/works/work4.jpg",
  ],
};

const RecentWorks = () => {
  // Isotope
  const isotope = useRef<InstanceType<typeof Isotope> | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    // Initialize Isotope with the actual DOM node instead of a selector string
    if (!containerRef.current) return;
    isotope.current = new Isotope(containerRef.current, {
      itemSelector: ".box-item",
      // layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".box-item",
      },
      transitionDuration: "0.75s",
    });

    return () => {
      // cleanup on unmount
      isotope.current?.destroy();
      isotope.current = null;
    };
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  
  type FilterKey =
    | "*"
    | "f-app"
    | "f-rl"
    | "f-dl"
    | "f-computer-vision"
    | "f-big-data"
    | "f-data-viz"
    | "f-game";

  interface HandleFilterKeyChange {
    (key: FilterKey): () => void;
  }

  const handleFilterKeyChange: HandleFilterKeyChange = useCallback(
    (key: FilterKey) => () => {
      setFilterKey(key);
    },
    []
  );

  interface ActiveBtn {
    (value: FilterKey): string;
  }

  const activeBtn: ActiveBtn = (value: FilterKey): string =>
    value === filterKey ? "glitch-effect" : "";

  const [activeGallaryImage, setActiveGallaryImage] = useState(1);
  const [gallery, setGallery] = useState(false);

  const appContext = useContext(AppContext);
  if (!appContext) {
    throw new Error("AppContext must be used within an AppContext.Provider");
  }
  const { modalToggle, setPortfolioModal } = appContext;

  return (
    <Fragment>
      <FsLightbox
        toggler={gallery}
        sources={galleryImages[activeGallaryImage]}
      />
      <div className="section works section_" id="section-works">
        <div className="content">
          <div className="title">
            <div className="title_inner">Recent Works</div>
          </div>
          <div className="filter-menu">
            <div className="filters">
              <div className="btn-group">
                <label
                  data-text="All"
                  className={`c-pointer ${activeBtn("*")}`}
                  onClick={handleFilterKeyChange("*")}
                >
                  <input
                    type="radio"
                    name="fl_radio"
                    defaultValue=".box-item"
                  />
                  All
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="App"
                  className={`c-pointer ${activeBtn("f-app")}`}
                  onClick={handleFilterKeyChange("f-app")}
                >
                  <input type="radio" name="fl_radio" defaultValue=".f-app" />
                  App
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="RL"
                  className={`c-pointer ${activeBtn("f-rl")}`}
                  onClick={handleFilterKeyChange("f-rl")}
                >
                  <input type="radio" name="fl_radio" defaultValue=".f-rl" />
                  RL
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="DL"
                  className={`c-pointer ${activeBtn("f-dl")}`}
                  onClick={handleFilterKeyChange("f-dl")}
                >
                  <input type="radio" name="fl_radio" defaultValue=".f-dl" />
                  DL
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="Computer Vision"
                  className={`c-pointer ${activeBtn("f-computer-vision")}`}
                  onClick={handleFilterKeyChange("f-computer-vision")}
                >
                  <input type="radio" name="fl_radio" defaultValue=".f-image-processing" />
                  Computer Vision
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="Big Data"
                  className={`c-pointer ${activeBtn("f-big-data")}`}
                  onClick={handleFilterKeyChange("f-big-data")}
                >
                  <input
                    type="radio"
                    name="fl_radio"
                    defaultValue=".f-big-data"
                  />
                  Big Data
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="Data Viz"
                  className={`c-pointer ${activeBtn("f-data-viz")}`}
                  onClick={handleFilterKeyChange("f-data-viz")}
                >
                  <input
                    type="radio"
                    name="fl_radio"
                    defaultValue=".f-data-viz"
                  />
                  Data Viz
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="Game"
                  className={`c-pointer ${activeBtn("f-game")}`}
                  onClick={handleFilterKeyChange("f-game")}
                >
                  <input
                    type="radio"
                    name="fl_radio"
                    defaultValue=".f-game"
                  />
                  Game
                </label>
              </div>
            </div>
          </div>
          <div className="box-items portfolio-items" ref={containerRef}>

            <div className="box-item f-big-data f-data-viz">
              <div className="image">
                <a
                  href="https://github.com/swiftcynic/EFPS-Stack"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/works/work1.jpg" alt="Work 1" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-social-github" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Big Data | Data Viz</div>
                <a href="https://github.com/swiftcynic/EFPS-Stack" className="name has-popup-link">
                  Distributed Web Server Log Analysis
                </a>
              </div>
            </div>

            <div className="box-item f-game">
              <div className="image">
                <a
                  href="https://swiftcynic.github.io/filler"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/works/work2.jpg" alt="Work 2" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-ios-game-controller-b" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Game</div>
                <a href="https://github.com/swiftcynic/filler" className="name has-popup-link">
                  Filler
                </a>
              </div>
            </div>

            <div className="box-item f-dl f-rl">
              <div className="image">
                <a
                  href="#gallery-1"
                  onClick={() => {
                    setGallery(!gallery);
                    setActiveGallaryImage(1);
                  }}
                  className="has-popup-gallery"
                >
                  <img src="images/works/work3.jpg" alt="Work 3" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-image" />
                      </span>
                    </span>
                  </span>
                </a>
                <div id="gallery-1" className="mfp-hide">
                  <a href="images/works/work3.jpg" />
                  <a href="images/works/work3a.jpg" />
                  <a href="images/works/work3b.jpg" />
                  <a href="images/works/work3c.jpg" />
                </div>
              </div>
              <div className="desc">
                <div className="category">DL | RL</div>
                <a href="https://github.com/swiftcynic/ml-agents" className="name has-popup-gallery">
                  Autonomous Flight Agent Training
                </a>
              </div>
            </div>

            <div className="box-item f-app">
              <div className="image">
                <a
                  href="https://play.google.com/store/apps/details?id=atomicasher.qrscanner&pcampaignid=web_share"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/works/work4.jpg" alt="Work 4" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-social-android" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">App</div>
                <a href="https://play.google.com/store/apps/details?id=atomicasher.qrscanner&pcampaignid=web_share" className="name has-popup-link">
                  QR Code Safety
                </a>
              </div>
            </div>

            <div className="box-item f-app">
              <div className="image">
                <a
                  href="https://play.google.com/store/apps/details?id=com.atomicasher.wablink&pcampaignid=web_share"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/works/work5.jpg" alt="Work 5" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-social-android" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">App</div>
                <a href="https://play.google.com/store/apps/details?id=com.atomicasher.wablink&pcampaignid=web_share" className="name has-popup-link">
                  WABlink
                </a>
              </div>
            </div>
            
            <div className="box-item f-dl f-computer-vision">
              <div className="image">
                <a
                  href="https://colab.research.google.com/drive/19W5neRKkyqWGWVxIg8puNB9SBQr3-nc7?usp=share_link"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/works/work6.jpg" alt="Work 6" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">DL | Computer Vision</div>
                <a href="https://colab.research.google.com/drive/19W5neRKkyqWGWVxIg8puNB9SBQr3-nc7?usp=share_link" className="name has-popup-link">
                  Crop Pest Detection
                </a>
              </div>
            </div>


            {/* <div className="box-item f-rl">
              <div className="image">
                <a
                  href="https://play.google.com/store/apps/details?id=atomicasher.qrscanner&pcampaignid=web_share"
                  className="has-popup-video"
                >
                  <img src="images/works/work4.jpg" alt="Work 4" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-videocamera" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Video</div>
                <a
                  href="https://youtu.be/S4L8T2kFFck"
                  className="name has-popup-video"
                >
                  Coffee Cup In Hand
                </a>
              </div>
            </div>
            <div className="box-item f-dl">
              <div className="image">
                <a
                  href="https://beshley.com/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/works/work8.jpg" alt="Work 8" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Links</div>
                <a href="https://beshley.com/" className="name has-popup-link">
                  Love &amp; Care Ceramic Bottles
                </a>
              </div>
            </div>
            <div className="box-item f-computer-vision">
              <div className="image">
                <a href="images/works/work4.jpg" className="has-popup-image">
                  <img src="images/works/work4.jpg" alt="Work 4" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-image" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Image</div>
                <a
                  href="images/works/work4.jpg"
                  className="name has-popup-image"
                >
                  Shopping gift bag
                </a>
              </div>
            </div>
            <div className="box-item f-big-data">
              <div className="image">
                <a
                  href="#gallery-2"
                  className="has-popup-gallery"
                  onClick={() => {
                    setGallery(!gallery);
                    setActiveGallaryImage(2);
                  }}
                >
                  <img src="images/works/work5.jpg" alt="Work 5" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-images" />
                      </span>
                    </span>
                  </span>
                </a>
                <div id="gallery-2" className="mfp-hide">
                  <a href="images/works/work5.jpg" />
                  <a href="images/works/work2.jpg" />
                  <a href="images/works/work3.jpg" />
                  <a href="images/works/work4.jpg" />
                </div>
              </div>
              <div className="desc">
                <div className="category">Gallery</div>
                <a href="#gallery-2" className="name has-popup-gallery">
                  Amore Mio Three Cups
                </a>
              </div>
            </div>
            <div className="box-item f-data-viz">
              <div className="image">
                <a
                  href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                  className="has-popup-music"
                >
                  <img src="images/works/work6.jpg" alt="Work 6" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-music-note" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Music</div>
                <a
                  href="https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F221650664&show_artwork=true"
                  className="name has-popup-music"
                >
                  Marta Veludo Beautiful Poster
                </a>
              </div>
            </div>
            <div className="box-item f-game">
              <div className="image">
                <a href="images/works/work7.jpg" className="has-popup-image">
                  <img src="images/works/work7.jpg" alt="Work 7" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-image" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Image</div>
                <a
                  href="images/works/work7.jpg"
                  className="name has-popup-image"
                >
                  Minimal Poster Frame
                </a>
              </div>
            </div>
            <div className="box-item f-game">
              <div className="image">
                <a
                  href="#popup-1"
                  className="has-popup-media"
                  onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal(true);
                  }}
                >
                  <img src="images/works/work3.jpg" alt="Work 3" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-ios-plus-empty" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Content</div>
                <a
                  href="#popup-1"
                  className="name has-popup-media"
                  onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal(true);
                  }}
                >
                  Cardboard Box
                </a>
              </div>
            </div>
            <div className="box-item f-game">
              <div className="image">
                <a
                  href="#popup-2"
                  className="has-popup-media"
                  onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal(true);
                  }}
                >
                  <img src="images/works/work3.jpg" alt="Work 3" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-ios-plus-empty" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Content</div>
                <a
                  href="#popup-2"
                  className="name has-popup-media"
                  onClick={(e) => {
                    e.preventDefault();
                    modalToggle(true);
                    setPortfolioModal(true);
                  }}
                >
                  Cardboard Box
                </a>
              </div>
            </div> */}
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default RecentWorks;
