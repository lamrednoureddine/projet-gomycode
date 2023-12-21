import ItemsList from "./ItemsList";
import Offer from "./Offer"
import "./style.css";
function Menu() {
  return (
    <div className="app">
     
      <Offer/>
        <ItemsList/>
      </div>
    // </div>
  );
}

export default Menu;