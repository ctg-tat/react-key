const UserPage = () => {
    return(
        <section className="userpage">
            <div className="wrapper userpage-display">
                <div className="column">
                    <img src="src/assets/images/ava.png" alt=""/>
                </div>

                <div className="column column2">
                    <div className="characteristics">

                        <div className="characteristic">
                            <div className="characteristic-name">
                                Email:
                            </div>

                            <div className="characteristic-value">
                                kamilochka@mail.ru
                            </div>
                        </div>

                        <div className="characteristic">
                            <div className="characteristic-name">
                                Телефон:
                            </div>

                            <div className="characteristic-value">
                                +7 987 654 32 21
                            </div>
                        </div>

                        <div className="characteristic">
                            <div className="characteristic-name">
                                Адрес:
                            </div>

                            <div className="characteristic-value">
                                г. Москва ул. Победы д.23
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserPage;