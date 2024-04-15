import { useState } from "react";
import data from "./data";

export const Person = (props) => {
  const { image, name, age } = props;
  return (
    <article className="person">
      <img src={image} alt={name} className="img" />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
      <br />
    </article>
  );
};

export const List = ({ people }) => {
  return (
    <section>
      {people.map((person) => (
        <Person key={person.id} {...person}></Person>
      ))}
    </section>
  );
};

const App = () => {
  const [people, setPeople] = useState(data);
  const handleClick = () => {
    setPeople([]);
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays todays</h3>
        <List people={people}></List>
        <button type="button" className="btn btn-block" onClick={handleClick}>
          Clear all
        </button>
      </section>
    </main>
  );
};
export default App;
