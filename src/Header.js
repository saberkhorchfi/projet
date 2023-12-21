import React from "react";
import "./Header.css";

function Header() {
  return (
    
    <div className="header">
      <img  src="https://www.impactnutrition.com.tn/wp-content/uploads/2022/09/cropped-Logo-impact.png" className="img1"></img>
      <div>
      <input type="text" className="rech" placeholder="Rechercher dans le catalogue"
        name="s" autocomplete="off"></input>
      <input type="hidden" name="post_type" value="product"></input>
      <button type="submit" class="searchsubmit" className="rech1">
        Rechercher
      </button>
      </div>
      
      <a href="" title="Mon compte"></a>
      
        <span class="wd-tools-icon"></span>

        <button className="buut2">
          <img src="https://ps.w.org/login-customizer/assets/icon-256x256.png?rev=2455454" className="img3"></img>
        </button>
      </div>
     
    
  );
}

export default Header;
