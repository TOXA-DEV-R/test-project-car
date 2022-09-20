/** @format */
import { useEffect, useState } from "react";
import { Pannellum } from "pannellum-react";
import outsideImage from "../assets/images/imgae_360.jpg";
import insideImage from "../assets/images/inside_360.jpg";

const View360Image = ({ isOutSide }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);

    setTimeout(() => {
      setLoading(true);
    }, 300);
  }, [isOutSide]);

  return (
    <>
      {loading ? (
        <Pannellum
          width="100%"
          height="100%"
          image={isOutSide === "outside" ? outsideImage : insideImage}
          pitch={10}
          yaw={180}
          hfov={110}
          autoLoad
          showZoomCtrl={false}
          onLoad={() => {
            console.log("panorama loaded");
          }}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default View360Image;
