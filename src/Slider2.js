function Slider2(props) {
    let data = props.data;
    return (
        <section className="second-sliderContainer container">
            {data.map(item =>
                <div className="element">
                    <img src={item.src} alt="moovie" />
                </div>
            )}
            <buttin className="container__btn-L">
                Left
            </buttin>
            <buttin className="container__btn-R">
                right
            </buttin>
        </section>
    );


}

export default Slider2;