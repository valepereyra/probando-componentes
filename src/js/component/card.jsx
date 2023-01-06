import React from "react";

const Card = function()  {
    return(

        <div className="card">
            <img src="https://imagenes.elpais.com/resizer/obwasKJGC7V9gf8v64a77mMczw8=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/OA7MOGJ43VVXSDWCDCGZZB2PRA.jpg" width="500" height="350" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, alias eum.</p>
            </div>
            <div class="card-footer">
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    );
    
   
};

export default Card;