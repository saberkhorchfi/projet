import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./Parte3.css";

function Parte3() {
  return (
    <div className="part4">
      <DropdownButton id="dropdown-basic-button" title="Our brands" className="drop">
        <img src="https://teecycle.org/wp-content/uploads/2020/05/6-Nutrition-Brands-That-Serve-Supreme-Quality-Whey-Protein.jpg"></img>
      
    </DropdownButton>
      <button className="b">Our packs</button>
      <button className="b">Clothing and accessories</button>
    </div>
  );
}

export default Parte3;
