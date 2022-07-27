import './Contacts.sass';

const Contacts = () => {
    return(
        <div className="Contacts">
            <h1>Контакты:</h1>
            <p><i class="fa fa-telegram" aria-hidden="true"></i><span>Telegram:</span> @matizco</p>
            <p><i class="fa fa-phone" aria-hidden="true"></i><span>Телефон:</span> мы работаем над этим, скоро все будет</p>
            <p><i class="fa fa-envelope" aria-hidden="true"></i><span>E-mail:</span> мы работаем над этим, скоро все будет</p>
            <p><i class="fa fa-map-signs" aria-hidden="true"></i><span>Адрес:</span> г. Челябинск, ул. Бейвеля, 72</p>

            <iframe className='map' src="https://yandex.ru/map-widget/v1/?um=constructor%3A297fbc0832c27a0879d6ace129c8b3bb6a7fe0531f83df322593451b09176b06&amp;source=constructor" /* width="1000" height="300" */ frameborder="0"></iframe>
        </div>
    )
}

export default Contacts;