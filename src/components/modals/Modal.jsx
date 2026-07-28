import Button from '/src/components/UI/buttons/Button';
import Tag from '/src/components/UI/tags/Tag';
import Input from '/src/components/UI/inputs/Input';
import { useState } from 'react';
import './modal.css';

function Modal() {

    const [selectedMonth, setSelectedMonth] = useState(12);
    const countOfMonth = [12, 24, 36, 48];

    const changeMonth = (month) => {
        setSelectedMonth(month);
    }

    const [inputValue, setInputValue] = useState('');

    const correctInput = (e) => {
        const rawValue = e.target.value;
        const onlyDigits = rawValue.replace(/\D/g, '');
        if (onlyDigits === '') {
            setInputValue('');
            return;
        }
        const formattedValue = Number(onlyDigits).toLocaleString('ru-RU');

        setInputValue(formattedValue);

    }

    return (
        <div className='modal'>

            <button className="close-btn" aria-label="Close modal">&times;</button>
            <h1>Платежи по кредиту</h1>
            <div className='modal-desc'>
                <span>
                    Введите сумму кредита и выберите срок, на который вы хотите его оформить.
                </span>
                <span>
                    Мы автоматически рассчитаем для вас ежемесячный платеж, чтобы вы могли лучше спланировать свои финансы.
                </span>
            </div>
            <Input text={`Ваша сумма кредита`} placeholder={`Введите данные`} value={inputValue} onChange={correctInput} />
            <Button text={`Рассчитать`} typeOfButton={`text-button`} />
            <div className='countOfMonth'>
                <span>
                    Количество месяцев?
                </span>
                {countOfMonth.map(month => {
                    return <Tag content={month} key={month} isActive={month === selectedMonth} onClick={() => changeMonth(month)} />
                })}
            </div>

            <Button text={`Добавить`} typeOfButton={`big-button`} />



        </div>
    )
}

export default Modal
