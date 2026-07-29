import Button from './components/UI/buttons/Button';
import Tag from './components/UI/tags/Tag';
import Input from './components/UI/inputs/Input';
import Modal from './components/modals/Modal'
import { useState } from 'react';
import './app.css';

function App() {

  const [currentBg, setCurrentBg] = useState('main-page');

  const changeBackground = () => {
    setCurrentBg('grey-page');
    setModalIsActive(true);
    setMainButton(false);
  }

  const [modalIsActive, setModalIsActive] = useState(false);

  const [mainButton, setMainButton] = useState(true);

  return (
    <div className={currentBg}>
      <Button text={`Расчет платежей`} typeOfButton={mainButton ? 'big-button-background' : 'big-button-background-none'} onClick={changeBackground} />

      <Modal isActive={modalIsActive} />

      {/* <Button text={`Рассчитать`} typeOfButton={`text-button`} onClick={qwe()} />
      <Button text={`Кнопка`} typeOfButton={`big-button`} />
      <Button text={`Кнопка`} typeOfButton={`big-button-background`} />
      <Button text={`Кнопка`} typeOfButton={`small-button`} />
      <Button text={`Кнопка`} typeOfButton={`small-button-background`} />
      <Tag price={`32 000 ₽`} text={`5 лет 5 мес.`} isActive={`tag active`} />
      <Tag price={`32 000 ₽`} text={`5 лет 5 мес.`} isActive={`tag`} />
      <Input placeholder={`Текст`} text={`Текст`} /> */}
    </div >
  )
}

export default App
