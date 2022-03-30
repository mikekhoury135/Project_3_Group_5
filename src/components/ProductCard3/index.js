import React from "react";
import Plate from "./images/45lb_plate.png";



function ProductCard() {
    return(
        <div className="card">
            <div className="card-image">
                {/* Product image from database */}
                <img src={Plate} alt="45lb plate"  style={{height: "100%", width: "100%"}}/>
            </div>
            <div className="card-content">
                {/* Product name and price from database */}
                <h3 className="card-name">45lb Plate</h3>
                <h5 className="card-price">$79.99</h5>
                <h5 className="cart-link">
                    <a href="">Add to Cart</a>
                </h5>
            </div>
        </div>
    )
}

export default ProductCard;