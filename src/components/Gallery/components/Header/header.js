import dash from "../../../../assets/images/dash.png";

const Header = ({ artist, artName, ...props }) => {
  return (
    <div class="header">
      <span className="elements">Home <b>{">"}</b></span>
      <span className="elements">Painting <b>{">"}</b> </span>
      <span className="elements">{artist} <b>{">"}</b></span>
      <span className="elements">Artworks <b>{">"}</b></span>
      <span className="elements">{artName}</span>
    </div>
  );
};

export default Header;
