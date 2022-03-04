import React from 'react';
import Slider from './Slider';
import Discr from './Discr';
import Slider2 from './Slider2';
import { Link } from 'react-router-dom';

function Home(props) {

    const homeNav = {
        footer: {
            texts: [

                { "discr": "придумать" },
                { "discr": "придумать" },
                { "discr": "придумать" },
                { "discr": "придумать" },
            ],
            text2: [

                { "discr": "придумать" },
                { "discr": "придумать" },
                { "discr": "придумать" },
                { "discr": "придумать" },
            ],
            social: [
                { 'src': './images/socials/socials.svg' },
                { 'src': './images/socials/socials2.svg' },
                { 'src': './images/socials/socials3.svg' }
            ]
        },
        slr2: [
            { "link": "#", "src": "./images/slide2_1.png" },
            { "link": "#", "src": "./images/slide2_2.png" },
            { "link": "#", "src": "./images/slide2_3.png" },
        ],
        backImg: './images/logo.svg',
        nav: [
            { "link": "#", "text": "Главная" },
            { "link": "#", "text": "Каталог" },
            { "link": "#", "text": "доставка" },
            { "link": "#", "text": "продумать" },
        ],
        icons: [
            { "link": "#", "src": "./images/profile.png" },
            { "link": "#", "src": "./images/korzina.png" },
            { "link": "#", "src": "./images/poisk.png" },
        ],
        slider: [
            { 'src': './images/sld/1.png', 'key': "one" },
            { 'src': './images/sld/2.png', 'key': "two" },
            { 'src': './images/sld/3.png', 'key': "middle" },
            { 'src': './images/sld/4.png', 'key': "four" },
            { 'src': './images/sld/5.png', 'key': "five" },
        ],
        discr: './images/bag.png',
        discr2: './images/notebook.png',

    }

    return (
        <>
            <section className="header-container">
                <div className="header-container__logo">
                    <img src={homeNav.backImg} alt="car" />
                </div>
                <div className="header-container__icons">
                    {homeNav.icons.map(item =>
                        <div className='elemIcons'>
                            <Link to={item.link}> <img src={item.src} /></Link>
                        </div>)}
                </div>
                <div className="header-container__discr">
                    <p>Какой-нибудь</p>
                    <p>забавный слоган</p>
                    <button >Просмотреть продукт</button>
                </div>
                <div className='login-btn'>
                    <button><Link to="/login">login</Link></button>
                </div>

            </section>
            <Slider images={homeNav.slider} />
            <Discr im={homeNav} />
            <Slider2 data={homeNav.slr2} />
        </>

    );
}

export default Home;