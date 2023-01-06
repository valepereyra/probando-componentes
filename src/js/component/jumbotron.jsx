import React from "react";

const Jumbotron = function()  {
    return(
        <div className="jumbotron bg-secondary bg-opacity-10 mx-2 px-4"> 
            <h1 className="display-4 card-title text-start mt-3">A Warm, Welcome!</h1>
            <p className="lead card-text text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore recusandae vero voluptate deserunt at perferendis? Iste numquam, repudiandae libero cum voluptatum soluta, hic atque mollitia laudantium deleniti, rerum distinctio! Quasi.</p>
            <div className="d-flex align-items-start">
                <a className="btn btn-primary mb-5" href="#" role="button">Call to action!</a>
            </div>
        </div>
    );
    
   
};

export default Jumbotron;