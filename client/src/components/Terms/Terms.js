import './Terms.sass';

const Terms = () => {
    return (
        <div className="Terms">

            <h1>Условия аренды</h1>

            <div className='block'>
                <p>Полные условия аренды Вы можете посмотереть в типовом договоре аренды в разделе "Документы"</p>
                <p>Возможно изменение условий по договоренности</p>
            </div>
            <div className='block'>                
                <h2>Водитель (арендатор)</h2>
                <hr />
                <p>Возраст от 22 лет</p>
                <p>Стаж вождения более 2 лет</p>
            </div>
            <div className='block'>
                <h2>Документы</h2>
                <hr />
                <p>Водительское удостоверение</p>
                <p>Паспорт гражданина РФ</p>
            </div>
            <div className='block'>
                <h2>Залог</h2>
                <hr />
                <p>Базовый залог составляет 5 000 рублей.</p>
                <p>Залог возвращается при возврате автомобиля.</p>
                <p>Залог может быть удержн в случае нарушения правил эксплуатации арендуемого автомобиля. Например, в случае неоднократных нарушений скоростного режима (допускается: по городу не более 70 км/ч, область не более 100 км/ч). В этих случаях возможно полное или частичное удержание залогового депозита на срок до 1 месяца. Так же удержание залога может произойти при повреждениях автомобиля - ДТП без второго участника или если клиент виноват в ДТП.</p>
            </div>
            <div className='block'>
                <h2>Лимиты пробега и территория эксплутации</h2>
                <hr />
                <p>Лимит пробега в сутки - 250 км</p>
                <p>Пробег сверх лимита - 10 рублей/км</p>
                <p>При заключении договора клиент должен сообщить планируемые регионы эксплуатации авто.</p>
            </div>
            <div className='block'>
                <h2>Оплата</h2>
                <hr />
                <p>Оплата производится при получении автомобиля. Возможна оплата наличными и банковским переводом. Во всех случаях производится 100% предоплата.</p>
            </div>
            <div className='block'>
                <h2>Получение и возврат автомобиля</h2>
                <hr />
                <p>Машина передается по акту приема-передачи в чистом виде и в полной комплектации. Совместно с клиентом проводится осмотр автомобиля, в акт вносятся замечания по автомобилю, пробег, количество топлива.</p>
                <p>Возврат машины осуществляется с количеством топлива, которым был принят клиентом.</p>
                <p>Транспорт необходимо вернуть в чистом виде, либо клиентом оплачиваенся мойка в размере 500 рублей.</p>
            </div>
            <div className='block'>
                <h2>Возврат машины раньше заявленного срока</h2>
                <hr />
                <p>При возврате автомобиля раньше установленного срока возможен перерасчет. Пересчет и возврат денежных средств осуществляется при условии, что Вы предупредили о возврате авто минимум за сутки до запланированного срока возврата.</p>
                <h2>Возврат машины позже заявленного срока</h2>
                <p>Превышение лимита аренды автомобиля по времени стоит 10% от суточной стоимости авто до 5-го часа аренды. После 5-го часа автоматически клиент платит за полные сутки аренды авто.</p>
            </div>
            <div className='block'>
                <h2>Эксплуатация</h2>
                <hr />
                <p>Автомобиль не предоставляется для работы в такси.</p>
                <p>Клиент самостоятельно осуществляет заправку автомобиля.</p>
                <p>Клиент должен следить за состоянием машины, обо всех отклонениях от нормы немедленно сообщать арендодателю.</p>
                <p>Запрещается эксплуатация автомобиля в режимах перегрузок.</p>
                <p>Клиент должен соблюдать правила дорожного движения при эксплуатации автомобиля.</p>
                <p>Парковка на стоянку возможна в любых местах.</p>
                <p>Клиент ответственен за сохранность автомобиля.</p>
            </div>
            <div className='block'>
                <h2>Продление аренды</h2>  
                <hr />          
                <p>По окончании срока действия договора, он может быть продлен по желанию Арендатора. О намерении продления аренды необходимо сообщить не менее, чем за сутки до окончания срока аренды. Оплата также должна быть произведена в этот срок.</p>
            </div>
            <div className='block'>
                <h2>Длительная аренда</h2>
                <hr />   
                <p>При аренеде более 8 дней клиент должен предоставлять автомобиль на осмотр 1 раз в 7 дней.</p>
            </div>
        </div>
    )
}

export default Terms;