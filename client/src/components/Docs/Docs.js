import './Docs.sass';

const contract = require('../../docs/dogovor.pdf').default;

const Docs = () => {
    return(
        <div className='Docs'>
            <h1>Документы</h1>
            <p>Станадартный договор аренды автомобиля для ознакомления можно скачать на этой странице. Также можете ознакомиться и с другими документами.</p>
            <p>В договор могут быть внесены изменения в соответствии с договоренностями при согласовании аренды.</p>
            <p>Если нужны какие-либо еще документы, мы обязательно вышлем.</p>
            <div className="pdf">
                <h2>Скачать:</h2>
                <a href={contract} target="_blank">Стандартный договор аренды машины</a>
            </div>
            
            
        </div>
    )
}

export default Docs;