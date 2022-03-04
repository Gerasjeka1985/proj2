import React from 'react';

function Slider(props) {
    let data = props.images;
    let currImg = React.createRef();

    function changeImg(e) {
        console.log(currImg.current)
        console.log(e.target.src);

    }

    return (
        <section className="slider-container">
            <div className="slider-container__track">
                {data.map(item => <div key={item.key} ref={currImg} onClick={changeImg}><img src={item.src} /></div>)}
            </div>
        </section >
    );
}

export default Slider;