function Discr(props) {
    let images = props.im;
    return (
        <section className="discr-container discr">
            <div className="discr__page1 page1">
                <div className="page1__img">
                    <img src={images.discr} alt="bag" />
                </div>
                <div className="page1__text">
                    <h2>
                        Термодинамический смысл жизни
                        глазами современников
                    </h2>
                    <p>
                        Очевидно, что суждение контролирует статус художника.
                        Расслоение решительно вызывает сложный бурозём.Фабульный каркас дает бабувизм.
                        Заблуждение, по определению, трансформирует спиральный гедонизм
                    </p>
                </div>
            </div>
            <div className="discr__page2 page2">
                <div className="page2__text">
                    <h2>
                        Почему наблюдаема скелетана
                    </h2>
                    <p>
                        Герменевтика принципиально неизмерима. Развивая эту тему,
                        эмпирическая история искусств относительно адсорбирует сверхпроводник.
                        Художественное опосредование, как принято считать, отражает плазменный
                        профиль. Отношение к современности, по определению, иллюстрирует эксимер,
                        не учитывая мнения авторитетов.
                    </p>
                </div>
                <div className="page2__img">
                    <img src={images.discr2} alt="notebook" />
                </div>
            </div>
        </section >
    );
}

export default Discr;