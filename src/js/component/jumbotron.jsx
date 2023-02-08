import React from "react";

const Jumbotron = function () {
    return (
        <>
            {/* Detalles del producto */}
            <div className="card mb-3 mx-1 my-3">
                <div className="row g-0">
                    <div className="col-md-1 d-flex justify-content-center d-flex align-items-center">
                        {/* Imagenes pequenas del producto */}
                        <div className="card d-flex align-items-center mx-2 border border-0">
                            <img src="https://f.fcdn.app/imgs/b8bec7/elreydelentretenimiento.com/erdeuy/5ba9/original/catalogo/6770463441035_azul_1/460x460/carpa-autoarmable-4-personas-camping-automatica-carpa-autoarmable-4-personas-camping-automatica.jpg" className="card-img my-2 img-thumbnail" alt="..." />
                            <img src="https://f.fcdn.app/imgs/b8bec7/elreydelentretenimiento.com/erdeuy/5ba9/original/catalogo/6770463441035_azul_1/460x460/carpa-autoarmable-4-personas-camping-automatica-carpa-autoarmable-4-personas-camping-automatica.jpg" className="card-img mb-2 img-thumbnail" alt="..." />
                            <img src="https://f.fcdn.app/imgs/b8bec7/elreydelentretenimiento.com/erdeuy/5ba9/original/catalogo/6770463441035_azul_1/460x460/carpa-autoarmable-4-personas-camping-automatica-carpa-autoarmable-4-personas-camping-automatica.jpg" className="card-img mb-2 img-thumbnail" alt="..." />
                            <img src="https://f.fcdn.app/imgs/b8bec7/elreydelentretenimiento.com/erdeuy/5ba9/original/catalogo/6770463441035_azul_1/460x460/carpa-autoarmable-4-personas-camping-automatica-carpa-autoarmable-4-personas-camping-automatica.jpg" className="card-img mb-2 img-thumbnail" alt="..." />
                        </div>
                    </div>
                    {/* Imagen grande del producto */}
                    <div className="col-md-7">
                        <img src="https://f.fcdn.app/imgs/b8bec7/elreydelentretenimiento.com/erdeuy/5ba9/original/catalogo/6770463441035_azul_1/460x460/carpa-autoarmable-4-personas-camping-automatica-carpa-autoarmable-4-personas-camping-automatica.jpg" className="img-fluid rounded-start" alt="..." />
                    </div>
                    {/* Form con detalles del producto */}
                    <div className="col-md-4 d-flex align-items-center">
                        <form className="card-body mb-5 mx-3">
                            {/* Nombre y descripcion */}
                            <div className="d-flex">
                                <div className="w-100 text-start"><h2>Nombre Producto</h2></div>
                                <div className="p-2 flex-shrink-1">
                                    <i className="fa  fa-ligth fa-heart"></i></div>
                            </div>
                            <p className="card-text text-start text-muted">This is a wider card with supporting text below.</p>
                            {/* Reviews del producto */}
                            <div className="text-start"><i className="fa fa-solid fa-star text-start"></i><i className="fa fa-solid fa-star"></i><i className="fa fa-solid fa-star"></i><i className="fa fa-solid fa-star"></i><i className="fa fa-duotone fa-star-half"></i> (3)</div>
                            {/* Precio */}
                            <h3 className="card-title d-flex justify-content-start my-3">$0000</h3>
                            {/* Calendario seleccion periodo de alquiler */}
                            <div className="row g-5 mb-3 d-flex justi">
                                <div className="col-md-5 text-start">
                                    <label for="desde" className="form-label">Desde:</label>
                                    <input type="date" className="form-control" id="desde" />
                                </div>
                                <div className="col-md-5 text-start">
                                    <label for="hasta" className="form-label text-start">Hasta:</label>
                                    <input type="date" className="form-control" id="hasta" />
                                </div>
                            </div>
                            {/* Seleccion de cantidad */}
                            <div className="row row-cols-lg-auto g-3 align-items-center">
                                <div className="col-12 align-items-center">
                                    <h6>Cantidad</h6>
                                </div>
                                <div className="col-12">
                                    <select className="form-select" id="inlineFormSelectPref">
                                        <option selected>1 unidad</option>
                                        <option value="1">1 unidad</option>
                                        <option value="2">1 unidad</option>
                                        <option value="3">1 unidad</option>
                                    </select>
                                </div>
                            </div>

                            <h6 className="card-text text-start">Stock</h6>

                            <button
                                className="btn btn-primary container mt-3 "
                                type="button"
                                id="enviar"
                            >
                                Anadir al carrito
                            </button>
                            <button
                                className="btn btn-primary container mt-3"
                                type="button"
                                id="enviar"
                            >
                                Alquilar ahora
                            </button>
                        </form>
                    </div>
                </div>

                <div className="accordion row g-0" id="accordionPanelsStayOpenExample">
                    {/* Texto descriptivo del producto */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                            <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                Descripción del producto
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div className="accordion-body text-start">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, repudiandae omnis eligendi ut, cupiditate sunt earum, voluptates iure ullam ea adipisci dolorem natus eos deleniti nihil. Architecto corporis consequuntur neque?
                            </div>
                        </div>
                    </div>
                    {/* Tamano y Dimensiones */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                            <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                Tamano y Dimensiones
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                <ul className="text-start">
                                    <li>Capacidad: 3</li>
                                    <li>Peso: 980 g</li>
                                    <li>Tipo: Playera</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Opiniones del producto */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                            <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                Opiniones del producto                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                            <div className="accordion-body text-start">
                                <h4> 4.5 <i className="fa fa-solid fa-star"></i><i className="fa fa-solid fa-star"></i><i className="fa fa-solid fa-star"></i><i className="fa fa-solid fa-star"></i><i className="fa fa-duotone fa-star-half"></i> (3)</h4>
                                <div>
                                    <p><i className="fa fa-solid fa-star"></i><i className="fa fa-solid fa-star"></i><i className="fa fa-solid fa-star"></i></p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore architecto, dignissimos odio aliquam, voluptates ut aperiam eligendi iste quasi, asperiores molestiae laudantium? Maxime quas tempora in quasi cum, similique itaque!</p>
                                </div>
                                <hr />
                                <div>
                                    <p><i className="fa fa-solid fa-star"></i><i className="fa fa-solid fa-star"></i><i className="fa fa-solid fa-star"></i></p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore architecto, dignissimos odio aliquam, voluptates ut aperiam eligendi iste quasi, asperiores molestiae laudantium? Maxime quas tempora in quasi cum, similique itaque!</p>
                                </div>
                                <hr />
                                <div>
                                    <p><i className="fa fa-solid fa-star"></i><i className="fa fa-solid fa-star"></i><i className="fa fa-solid fa-star"></i></p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore architecto, dignissimos odio aliquam, voluptates ut aperiam eligendi iste quasi, asperiores molestiae laudantium? Maxime quas tempora in quasi cum, similique itaque!</p>
                                </div>




                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );


};

export default Jumbotron;