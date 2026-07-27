import Button from './components/UI/buttons/Button';

function App() {

  return (
    <>
      <Button text={`Рассчитать`} typeOfButton={`text`} />
      <Button text={`Кнопка`} typeOfButton={`big1`} />
      <Button text={`Кнопка`} typeOfButton={`big2`} />
      <Button text={`Кнопка`} typeOfButton={`small1`} />
      <Button text={`Кнопка`} typeOfButton={`small2`} />
    </>
  )
}

export default App
