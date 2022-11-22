import { useState } from "react";
import dash from "../../../../assets/images/dash.png";
import Ldash from "../../../../assets/images/Ldash.png";

const Slider = ({ images }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  function slide(direction) {
    var container = window.document.getElementById("container");
    var scrollCompleted = 0;
    var slideVar = setInterval(function () {
      if (direction == "left" && scrollPosition > 0) {
        setScrollPosition(scrollPosition - 1);
        container.scrollLeft -= 20;
      } else if (scrollPosition < 32) {
        setScrollPosition(scrollPosition + 1);
        container.scrollLeft += 20;
      }
      scrollCompleted += 10;

      if (scrollCompleted >= 100) {
        window.clearInterval(slideVar);
      }
    }, 50);
  }

  return (
    <div class="sliderContainer">
      <section id="container">
        <div id="posts">
          {images.map((img, index) => {
            return <img className="image" alt="Art" src={img} />;
          })}
        </div>
      </section>

      {scrollPosition === 0 ? (
        <></>
      ) : (
        <button
          className="prev"
          type="button"
          
          onClick={() => {
            slide("left");
          }}
        >
          <img src={Ldash} height={32} width={32} />
        </button>
      )}
      {scrollPosition === 30 ? (
        <></>
      ) : (
        <button
          className="next"
          type="button"
          onClick={() => {
            slide("right");
          }}
        >
         <img src={dash} height={32} width={32} />
        </button>
      )}
    </div>
  );
};

export default Slider;
