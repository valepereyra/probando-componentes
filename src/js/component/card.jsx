import React from "react";

const Card = function () {
    return (

        <div className="card">
            <div className="card mx-1 my-1">
                <img src="https://imagenes.elpais.com/resizer/obwasKJGC7V9gf8v64a77mMczw8=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/OA7MOGJ43VVXSDWCDCGZZB2PRA.jpg" width="500" height="350" className="card-img-top" alt="..." />

                <div className="card-body text-start">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="card-footer text-start">
                    <h5>$0000</h5>
                </div>
            </div >
        </div>

    );


};

export default Card;