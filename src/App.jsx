import Button from './components/UI/buttons/Button';
import Tag from './components/UI/tags/Tag';

function App() {

  const qwe = () => { }

  return (
    <>
      <Button text={`Рассчитать`} typeOfButton={`text-button`} onClick={qwe()} />
      <Button text={`Кнопка`} typeOfButton={`big-button`} />
      <Button text={`Кнопка`} typeOfButton={`big-button-background`} />
      <Button text={`Кнопка`} typeOfButton={`small-button`} />
      <Button text={`Кнопка`} typeOfButton={`small-button-background`} />
      <Tag price={`32 000 ₽`} text={`5 лет 5 мес.`} isActive={`tag active`} />
      <Tag price={`32 000 ₽`} text={`5 лет 5 мес.`} isActive={`tag`} />
    </>
  )
}

export default App
