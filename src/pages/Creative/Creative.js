import React from "react";
import Modal from "../../components/Modal/Modal";
import Tile from "../../components/Tile/Tile";
import design1 from "../../data/assets/design-1.png";
import design2 from "../../data/assets/design-2.png";
import design3 from "../../data/assets/design-3.png";
import design4 from "../../data/assets/design-4.png";
import design5 from "../../data/assets/design-5.png";
import design6 from "../../data/assets/design-6.png";
import design7 from "../../data/assets/design-7.png";
import design8 from "../../data/assets/design-8.png";
import design9 from "../../data/assets/design-9.png";
import design10 from "../../data/assets/design-10.png";
import design11 from "../../data/assets/design-11.png";
import design12 from "../../data/assets/design-12.png";
import "./Creative.scss";

export default function Creative() {
  return (
    <section className="creative">
      <h2 className="creative__title">
        — These design pieces were requested as marketing material, as well as
        for startup businesses, events, and personal use.
      </h2>

      <div className="creative__container">
        <Tile
          className="creative__tile"
          link="https://www.instagram.com/teamultraforce/guide/creatura-a-complete-guide-to-monsters-part-i/17872629164249897/"
          source={design1}
        />
        <Modal
          className="creative__tile"
          thumbnail={design2}
          source="https://res.cloudinary.com/teamultraforce/image/upload/v1656295427/Portfolio/2020_Calendar_ktsz2a.png"
        />
        <Modal
          className="creative__tile"
          thumbnail={design11}
          source="https://res.cloudinary.com/teamultraforce/image/upload/v1656428202/Portfolio/Dashboard-mockup_u35cb9.png"
        />
        <Modal
          className="creative__tile"
          thumbnail={design9}
          source="https://res.cloudinary.com/teamultraforce/image/upload/v1656428204/Portfolio/Q-Pon-Prints_SINGLE_gsddxj.png"
        />
        <Modal
          className="creative__tile"
          thumbnail={design3}
          source="https://res.cloudinary.com/teamultraforce/image/upload/v1656428203/Portfolio/Sunrise_Spring_Festival-F_wu0kyd.png"
        />
        <Modal
          className="creative__tile"
          thumbnail={design4}
          source="https://res.cloudinary.com/teamultraforce/image/upload/v1656428204/Portfolio/CAOT-Brochures-v3_Page_1_gpdnfp.png"
        />
        <Modal
          className="creative__tile"
          thumbnail={design12}
          source="https://res.cloudinary.com/teamultraforce/image/upload/v1656432040/Portfolio/PowerDraw-HME_m8qkph.png"
        />
        <Modal
          className="creative__tile"
          thumbnail={design10}
          source="https://res.cloudinary.com/teamultraforce/image/upload/v1656428201/Portfolio/JasonCertificate_30MinWebinar_o1dgzf.png"
        />
        
        <Modal
          className="creative__tile"
          thumbnail={design7}
          source="https://res.cloudinary.com/teamultraforce/image/upload/v1656428203/Portfolio/Total-Quality_BWmedialight_co2pdp.png"
        />
        <Modal
          className="creative__tile"
          thumbnail={design5}
          source="https://res.cloudinary.com/teamultraforce/image/upload/v1656431851/Portfolio/design-5_duav5b.png"
        />
        <Modal
          className="creative__tile"
          thumbnail={design6}
          source="https://res.cloudinary.com/teamultraforce/image/upload/v1656431879/Portfolio/design-6_cumh4k.png"
        />
        
        <Modal
          className="creative__tile"
          thumbnail={design8}
          source="https://res.cloudinary.com/teamultraforce/image/upload/v1656428203/Portfolio/Thousand-Steps-Logo_2018_jbijtk.png"
        />
        
        
      </div>
    </section>
  );
}
