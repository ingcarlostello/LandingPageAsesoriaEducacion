import React from 'react';
import picturePlan from '../img/Assets/brochure.png';
import pictureChoosePlan from '../img/Assets/elegir-plan.png';
import discount from '../img/Assets/discount.png';
import garantia from '../img/Assets/garantia.png';
import '../styles/Plans.css';

const Plans = () => {
    return (
        <section id="plans">
            <div className="plans__text-wrapper text-center">
                <h1 className="display-4 titulo-plan">¡Tenemos planes para todos<br />los presupuestos!</h1>
               <div className="separator-line-how-works"></div>
                <p className="subtitulo-plan">Adicional a la calidad y metodología ágil implementada,<br />puedes elegir el tiempo que necesitan tus hijos<br /> </p>
            </div>
            <div className="row ml-3 mr-3">
                <div className="col-sm col-md col-lg-4 h-25">
                    <div className="d-flex align-items-center justify-content-center position-relative">
                        <img src={picturePlan} alt="plan 1" className="brochure img-fluid" />
                        <div className="price position-absolute text-center">
                            <p className="value">$25.000</p>
                            <p className="type">PLAN 1</p>
                        </div>
                        <div className="info-plan position-absolute">
                            <span className="number-plan position-absolute">1</span>
                            <span className="description-plan position-absolute"><strong>HORA</strong><br /> DE CLASE ONLINE<br />EN VIVO</span>
                            <div className="benefits-plan">
                                <p>- Tips academicos</p>
                                <p>- Clases Programadas</p>
                                <p>- Mas informacion</p>
                            </div>
                            <img className="choose-planBtn position-absolute" src={pictureChoosePlan} alt="elegir plan"/>
                        </div>
                    </div>                    
                </div>
                <div className="col-sm col-md col-lg-4 h-25">
                    <div className="d-flex align-items-center justify-content-center position-relative">
                        <img src={picturePlan} alt="plan 1" className="brochure img-fluid" />
                        <div className="price position-absolute text-center">
                            <p className="value">$125.000</p>
                            <p className="type">PLAN 2</p>
                        </div>
                        <div className="info-plan position-absolute">
                            <span className="number-plan position-absolute">4</span>
                            <span className="description-plan position-absolute"><strong>HORA</strong><br /> DE CLASE ONLINE<br />EN VIVO</span>
                            <div className="benefits-plan">
                                <p>- Tips academicos</p>
                                <p>- Clases Programadas</p>
                                <p>- Mas informacion</p>
                            </div>
                            <img className="choose-planBtn position-absolute" src={pictureChoosePlan} alt="elegir plan"/>
                        </div>
                    </div>                    
                </div>
                <div className="col-sm col-md col-lg-4 h-25">
                    <div className="d-flex align-items-center justify-content-center position-relative">
                        <img src={picturePlan} alt="plan 1" className="brochure img-fluid" />
                        <div className="price position-absolute text-center">
                            <p className="value">$125.000</p>
                            <p className="type">PLAN 3</p>
                        </div>
                        <div className="info-plan position-absolute">
                            <span className="number-plan position-absolute">8</span>
                            <span className="description-plan position-absolute"><strong>HORA</strong><br /> DE CLASE ONLINE<br />EN VIVO</span>
                            <div className="benefits-plan">
                                <p>- Tips academicos</p>
                                <p>- Clases Programadas</p>
                                <p>- Mas informacion</p>
                            </div>
                            <img className="choose-planBtn position-absolute" src={pictureChoosePlan} alt="elegir plan"/>
                        </div>
                    </div>                    
                </div>
            </div>

            <div className="row mt-5 ml-3 mr-3 d-flex align-items-center justify-content-center">
                
                <div className="col-sm col-md col-lg-4 h-25">
                    <div className="d-flex align-items-center justify-content-center position-relative">
                        <div className="position-absolute discount-logo">
                            <img className="img-discount" src={discount} alt="descuenti"/>
                        </div>
                        <img src={picturePlan} alt="plan 1" className="brochure img-fluid" />
                        <div className="price position-absolute text-center">
                            <p className="value">$25.000</p>
                            <p className="type">PLAN PROMO</p>
                        </div>
                        <div className="info-plan position-absolute">
                            <span className="number-plan position-absolute">1</span>
                            <span className="description-plan position-absolute"><strong>HORA</strong><br /> DE CLASE ONLINE<br />EN VIVO</span>
                            <div className="benefits-plan">
                                <p>- Tips academicos</p>
                                <p>- Clases Programadas</p>
                                <p>- Mas informacion</p>
                            </div>
                            <img className="choose-planBtn position-absolute" src={pictureChoosePlan} alt="elegir plan"/>
                        </div>
                    </div>                    
                </div>
                <div className="col-sm col-md col-lg-1 h-25">

                </div>
                <div className="col-sm col-md col-lg-4 h-25">
                    <div className="d-flex align-items-center justify-content-center position-relative">
                        <div className="position-absolute discount-logo">
                            <img className="img-discount" src={garantia} alt="descuenti"/>
                        </div>
                        <img src={picturePlan} alt="plan promo" className="brochure img-fluid" />
                        <div className="price position-absolute text-center">
                            <p className="value">$125.000</p>
                            <p className="type">PLAN PREMIUM</p>
                        </div>
                        <div className="info-plan position-absolute">
                            <span className="number-plan position-absolute">4</span>
                            <span className="description-plan position-absolute"><strong>HORA</strong><br /> DE CLASE ONLINE<br />EN VIVO</span>
                            <div className="benefits-plan">
                                <p>- Tips academicos</p>
                                <p>- Clases Programadas</p>
                                <p>- Mas informacion</p>
                            </div>
                            <img className="choose-planBtn position-absolute" src={pictureChoosePlan} alt="elegir plan"/>
                        </div>
                    </div>                    
                </div>
            </div>
        </section>
    );
};

export default Plans;