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
  }


  return (
    <div className={currentBg}>
      {/* <Button text={`Расчет платежей`} typeOfButton={`big-button-background`} onClick={changeBackground} /> */}

      <Modal />

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
