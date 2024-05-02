//capitaine crochet fait de l'import-export
import { useState } from "react";
// l'homme qui murmurait à l'oreille du DOM
export default function MyApp() {
  //départ de 0
  const [count, setCount] = useState(0);
  // addition d'un au compteur
  function handleClick() {
    setCount(count + 1);
  }
  //résultat
  return (
    //section,titre, les compteurs sont synchros
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}
//affichage du total
function MyButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}
