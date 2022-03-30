import React from "react";

function ProductCard() {
    return(
        <div className="card">
            <div className="card-image">
                {/* Product image from database */}
                <img src=""></img>
            </div>
            <div className="card-content">
                {/* Product name and price from database */}
                <h3 className="card-name">ProductName</h3>
                <h5 className="card-price">Price</h5>
            </div>
        </div>
    )
}

export default ProductCard;