import Header from "./components/Header/header";
import Presentation from "./components/Presentation/presentation";
import Description from "./components/Description/description";
import Slider from "./components/Slider/slider";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Gallery = () => {
  const { commandId: artId } = useParams();


  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_API_URL + `${artId}.json`
      )
      .then((response) => setData(response.data));
  }, []);

  
  return (
    <div>
      {data && artId<2 && (
        <>
          <Header
            artist={data?.artistShort?.fullname}
            artName={data?.fullname}
          />
          <Presentation
            image={data?.imageUrl}
            artName={data?.fullname}
            paintInfo={data?.artistShort}
            dimensions={data?.dimensions}
            category={data?.category}
            creationYear={data?.creationYear}
            price={data?.price}
          />
          <Description
            description={data?.description}
            materials={data?.materials}
            meduims={data?.mediums}
            subjects={data?.subjects}
            styles={data?.styles}
          />

          <Slider images={data?.otherArtworkImages} />
        </>
      )}
      {
       artId > 1 &&
       <h1> BAD REQUEST </h1>
      }
    </div>
  );
};

export default Gallery;
