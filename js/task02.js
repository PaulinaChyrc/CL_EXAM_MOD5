import React from "react";
import ReactDOM from "react-dom";

function UserCard(props) {
  const isValid =
    props.name.length > 0 &&
    props.surname.length > 0 &&
    props.address.length > 0 &&
    props.city.length > 0 &&
    (props.postcode.length === 5 || props.postcode.length === 6);
  if (isValid) {
    return (
      <div class="card">
        <div>
          <h5>
            {props.name} {props.surname}
          </h5>
          <div>{props.address}</div>
          <div>
            {props.postcode} {props.city}
          </div>
        </div>
      </div>
    );
  } else {
    return <div class="alert alert-danger">Dane są nieprawidłowe!</div>;
  }
}

function App() {
  return (
    <UserCard
      name={"Ziutek"}
      surname={"Kowalski"}
      address={"Kwiatowa 5"}
      postcode={"55-555"}
      city={"Trzebrzeszyn"}
    />
  );
}

/**
 * Nie modyfikujcie kodu poniżej!
 */
ReactDOM.render(<App />, document.getElementById("app"));
export { App, UserCard };
