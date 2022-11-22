import Card from "../../../Main/Cards";
import check from "../../../../assets/images/check.png";
import timer from "../../../../assets/images/sablier.png";
import delivry from "../../../../assets/images/delivry.png";
import map from "../../../../assets/images/map.png";
import eye from "../../../../assets/images/eye.png";
import ar from "../../../../assets/images/ar.png";

const capitalize = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() +
  (lowerRest ? rest.join("").toLowerCase() : rest.join(""));

const Presentation = ({
  image,
  artName,
  paintInfo,
  dimensions,
  category,
  creationYear,
  price,
}) => {
  return (
    <Card>
      <div class="artContainer">
        <div class="MainImage">
          <img src={image}></img>
          <div className="artAction">
            <button><img src={eye} height={32} width={32} /> <span>View in a Room</span> </button>
            <button><img src={ar} height={32} width={32} /> <span>AR View</span> </button>
          </div>
        </div>
        <div class="MainInformation">
          <h2>{artName}</h2>
          <section className="globalInformation">
            <h3>{paintInfo?.fullname}</h3>
            <h4>{capitalize(paintInfo?.country || " ")}</h4>
            <h5>
              {category}, {creationYear}
            </h5>
            <h5>
              {dimensions?.width} W x {dimensions?.height} H x{" "}
              {dimensions?.depht} D in
            </h5>
            <h2>{price} $</h2>
          </section>
          <div class="actions">
            <div class="group">
              <button class="offer">
                <span>Make an offer</span>
                <div class="bg"></div>
              </button>
              <button class="acquire">Acquire</button>
            </div>
          </div>
          <div className="delivry">
            <span>
              <img src={timer} height={32} width={32} /> PRE-RESERVE FOR 24
              HOURS
            </span>
            <span>
              <img src={check} height={32} width={32} /> 200$ estimated delivry
              fee for France{" "}
            </span>
          </div>
          <div className="delivryInformation">
            <p>
              In order to obtain an accruate delivry fee, please enter your
              country and zip code:
            </p>
            <div className="delivryInput">
              <input
                class="effect"
                type="text"
                placeholder="City"
              />
              <input
                class="effect"
                type="text"
                placeholder="Zip code"
              />
            </div>
          </div>

          <div className="delivryFinalisation">
          <span>
              <img src={delivry} height={32} width={32} /> Delivry Fee is 200$
        </span>
        <span>
              <img src={map} height={32} width={32} /> Free PickUp in Belgium, Bruxelles
        </span>
        <span>
              <img src={check} height={32} width={32} /> Try 14 days at home for free
        </span>
          </div>
          
        </div>
      </div>
    </Card>
  );
};

export default Presentation;
