import "./styles.css";

const human1 = {
  name: "tomo",
  age: 15,
  height: 165
};

console.log(human1);
const addHuman1 = {
  ...human1,
  height: 180
};

console.log(addHuman1);
export default function App() {
  return (
    <div className="App">
      <h1>{human1.age}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
