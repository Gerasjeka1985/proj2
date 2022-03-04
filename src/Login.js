import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
            <section className="login-container login">
                <div className="login-text">
                    <h1>
                        Жизнь
                        в
                        миниатюре
                    </h1>
                    <p>
                        Изомерия едко оформляет триплетный Кодекс, таким образом,
                        сходные законы контрастирующего развития характерны и для процессов в психике.
                        Албания латентно восстанавливает свежеприготовленный раствор.
                    </p>
                    <p>
                        В связи с этим нужно подчеркнуть, что алеаторически выстроенный бесконечный канон
                        с полизеркальной векторно-голосовой структурой ничтожно программирует нонаккорд,
                        что известно даже школьникам.
                    </p>
                </div>
                <div className="login-forma">
                    <div className="login-forma__center center" >
                        <div className="btn-entry">
                            <button>Вход</button>
                        </div>
                        <div className="btn-registration">
                            <button>Регистрация</button>
                        </div>
                        <form className="form-reg reg">
                            <input className="reg__name" type="text" placeholder="Имя"></input>
                            <input className="reg__surname" type="text" placeholder="Фамилмя"></input>
                            <input className="reg__pass" type="password" placeholder="Пароль"></input>
                            <input className="reg__mail" type="text" placeholder="Почта"></input>
                            <input className="reg__sub" type="submit" />
                        </form>
                        <div className="center__regGoogle">
                            <a href="#">Зарегестрироваться с помощью Google</a>
                        </div>
                        <div className="center__reg">
                            <a href="#">Зарегестрироваться</a>
                        </div>
                        <div className="center__checkbox">
                            <input type="checkbox" />
                        </div>
                    </div>
                </div>
                <Link to="/">back to main</Link>
            </section>
        </>
    );
}

export default Login;