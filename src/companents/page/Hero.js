import React from 'react';

const Hero = () => {
    return (
        <div id="hero">
            <div id="bac">
                <div className="container">
                    <div className="hero">
                        <div className="header">


                                <a href="#House"><p>Дома</p></a>


                                <a href="#market"><p>Рынок</p></a>

                                <a href="#cemetery"><p>Кладбище</p></a>


                        </div>
                        <div className="heroBlock">
                            <h1 className="heroTitle">Место котрые мы обслуживаем</h1>
                            <h2>Мы обслуживаем Рынок,несколько дома,Кладбище,и дороги Айхала</h2>
                            <p>Инфармационая сайт от АйхалЦентра</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;