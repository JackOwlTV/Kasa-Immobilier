import React, { useState } from "react";
import Footer from "../components/footer";
import LogementBanner from "../components/logementbanner";
import LogementTitle from "../components/logementtitle";
import LogementHost from "../components/logementhost";
import Tag from "../components/tag";
import Rate from "../components/rate";
import Collapse from "../components/Collapse";
import "../styles/pages/Logement.css";
import { logementList } from "../data/logementsList";
import { useParams } from "react-router-dom";
import Error404 from "./error";
import ArrowBanner from "../components/arrowbanner";

export default function Logement() {
  const { id } = useParams();
  const logement = logementList.find((logement) => logement.id === id);
  const rates = [1, 2, 3, 4, 5];
  const [activeBanner, setActiveBanner] = useState(0);

  const handleClickNextBanner = () => {
    if (activeBanner === logement.pictures.length - 1) {
      setActiveBanner(0);
    } else {
      setActiveBanner(activeBanner + 1);
    }
  };

  const handleClickPreviousBanner = () => {
    if (activeBanner === 0) {
      setActiveBanner(logement.pictures.length - 1);
    } else {
      setActiveBanner(activeBanner - 1);
    }
  };

  if (!logement) {
    return <Error404 />;
  }
  return (
    <div>
      <div className="logement-banner">
        <div className="arrows-banner-zone">
          <ArrowBanner
            onClick={handleClickPreviousBanner}
            className={
              logement.pictures.length > 1
                ? "arrow-left fa-solid fa-chevron-up"
                : null
            }
          />
          <ArrowBanner
            onClick={handleClickNextBanner}
            className={
              logement.pictures.length > 1
                ? "arrow-right fa-solid fa-chevron-up"
                : null
            }
          />
        </div>
        {logement.pictures.map((e, index) => (
          <LogementBanner
            className={`img-banner ${index === activeBanner ? "active-banner" : ""
              }`}
            key={index}
            imgSrc={e}
            title={`${logement.title} - Bannière n°${activeBanner + 1}`}
          />
        ))}
        <span className="counter">
          {logement.pictures.length > 1
            ? `${activeBanner + 1}/${logement.pictures.length}`
            : null}
        </span>
      </div>
      <div className="description-zone">
        <div className="logement-title-and-description">
          <LogementTitle title={logement.title} location={logement.location} />
          <div className="tag-zone">
            {logement.tags.map((e, index) => (
              <Tag key={index} tag={e} />
            ))}
          </div>
        </div>
        <div className="logement-host-and-rates">
          <div className="host-zone">
            <LogementHost
              hostPicture={logement.host.picture}
              hostName={logement.host.name}
            />
          </div>
          <div className="rates-zone">
            {rates.map((e, index) => (
              <Rate
                key={index}
                color={parseInt(logement.rating) >= e ? "colored" : ""}
              />
            ))}
          </div>
        </div>
      </div>
      <ul className="collapses">
        <Collapse
          label="Description"
          description={logement.description}
          openByDefault={false}
        />
        <Collapse
          label="Équipements"
          description={logement.equipments.map((e, index) => (
            <span key={index}>{e}</span>
          ))}
          openByDefault={false}
        />
      </ul>
      <Footer />
    </div>
  );
}
