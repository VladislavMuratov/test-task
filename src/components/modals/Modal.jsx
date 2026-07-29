import Button from '/src/components/UI/buttons/Button';
import Tag from '/src/components/UI/tags/Tag';
import Input from '/src/components/UI/inputs/Input';
import { useEffect, useRef, useState } from 'react';
import './modal.css';

function Modal({ isActive, onClose }) {
    const modalRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                onClose();
            }
        };

        if (isActive) {
            document.addEventListener('mousedown', handleClickOutside);
        };

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [isActive, onClose])


    const [selectedMonth, setSelectedMonth] = useState(12);
    const countOfMonth = [12, 24, 36, 48];


    const changeMonth = (month) => {
        setSelectedMonth(month);
    }


    const changeFrequency = (freq) => {
        setFrequencyPayment(freq);
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


    const [frequencyPayment, setFrequencyPayment] = useState('В месяц');
    const countOfFrequency = ['В год', 'В месяц'];

    const [calculateVisible, setCalculateVisible] = useState(false);

    const [calculateValue, setCalculateValue] = useState();

    const [inputRequired, setInputRequired] = useState(false);

    const calculate = (inputValue, selectedMonth, frequencyPayment) => {
        const numberInputValue = +inputValue.replace(/\s/g, '');

        if (numberInputValue !== 0) {
            setCalculateVisible(true);

            let result;

            if (frequencyPayment === 'В месяц') {
                result = Math.round(numberInputValue / selectedMonth);
            } else {
                result = Math.round((numberInputValue / selectedMonth) * 12);
            }

            setCalculateValue(result.toLocaleString('ru-RU'));
        } else {
            setInputRequired(true);
        }
    }

    return (
        <div className={isActive ? 'modal' : 'modal-none'} ref={modalRef}>

            <button className="close-btn" aria-label="Close modal" onClick={onClose}>&times;</button>
            <h1>Платежи по кредиту</h1>
            <div className='modal-desc'>
                <span>
                    Введите сумму кредита и выберите срок, на который вы хотите его оформить.
                </span>
                <span>
                    Мы автоматически рассчитаем для вас ежемесячный платеж, чтобы вы могли лучше спланировать свои финансы.
                </span>
            </div>
            <Input text={`Ваша сумма кредита`} placeholder={`Введите данные`} value={inputValue} onChange={correctInput} className={inputRequired ? 'input required' : 'input'} />
            <Button text={`Рассчитать`} typeOfButton={`text-button`} onClick={() => calculate(inputValue, selectedMonth, frequencyPayment)} />
            <div className='countOfMonth'>
                <span>
                    Количество месяцев?
                </span>
                {countOfMonth.map(month => {
                    return <Tag content={month} key={month} isActive={month === selectedMonth} onClick={() => changeMonth(month)} />
                })}
            </div>

            <div className={calculateVisible ? 'calculate-true' : 'calculate-false'}>
                <div className='frequency-payment'>
                    <span>
                        Итого ваш платеж по кредиту:
                    </span>
                    {countOfFrequency.map(freq => {
                        return <Tag content={freq} key={freq} isActive={freq === frequencyPayment} onClick={() => changeFrequency(freq)} />
                    })}
                </div>

                <span className='calculate-value'>{calculateValue}</span>


                <Button text={`Добавить`} typeOfButton={`big-button`} />
            </div>





        </div>
    )
}

export default Modal
