function Footer(props) {
    let data = props.data;
    return (
        <>
            <div className="fooh2">
                <h3>Жизнь в Миниатюре</h3>
            </div>
            <section className="footer-container">

                <ul>Надо придумать 1
                    {data.texts.map(item =>
                        <li>{item.discr}</li>
                    )}
                </ul>
                <ul>Надо придумать 2
                    {data.text2.map(item =>
                        <li>{item.discr}</li>
                    )}
                </ul>
                <div className="footer-container__social">
                    {data.social.map(item =>
                        <div>
                            <img src={item.src} />
                        </div>
                    )}
                </div>
            </section>
        </>



    );
}

export default Footer;