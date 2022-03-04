function Nav(props) {
    let data = props.data
    return (
        <>
            <header className="static-container">
                <ul>
                    {data.nav.map(item => <li><a href={item.link}>{item.text}</a></li>)}
                </ul>
            </header>
        </>
    );
}

export default Nav;