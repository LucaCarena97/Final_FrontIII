import { Card } from "../components/Card";

export function Favs() {
  let odontologos = JSON.parse(localStorage.getItem("odontologos"));
  return (
    <div>
      <h1>Odontologos favoritos</h1>
      {odontologos.map(function (item) {
        return (
          <Card
            name={item.name}
            username={item.username}
            key={item.id}
            id={item.id}
          />
        );
      })}
    </div>
  );
}
