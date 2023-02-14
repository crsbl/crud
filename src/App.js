import "./constant.css";
import "./App.css";
import "./Appresponsive.css";

import { useState } from "react";

function App() {
  const [statePerson, setStatePerson] = useState([
    { name: "d", lastName: "Ortega", phone: "+569 448568" },
    { name: "C", lastName: "Ortega", phone: "+569 448568" },
    { name: "C", lastName: "Ortega", phone: "+569 448568" },
    { name: "C", lastName: "Ortega", phone: "+569 448568" },
  ]);

  const [inputsForm, setInputsForm] = useState({
    name: "",
    lastName: "",
    phone: "",
  });

  const changeInputs = (e) => {
    setInputsForm({
      ...inputsForm,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const [stateForm, setStateForm] = useState({
    stateSelection: 3,
  });

  const [stateSelection, setStateSelection] = useState(null);

  let stateDisable = true;

  let styleForm = {};

  switch (stateForm.stateSelection) {
    case 0:
      stateDisable = false;
      styleForm = { display: "flex", background: "rgb(201, 224, 201)" };
      break;

    case 1:
      stateDisable = false;
      styleForm = { display: "flex", background: "rgb(219, 219, 195)" };
      break;
    case 2:
      stateDisable = true;
      styleForm = { display: "flex", background: "rgb(214, 190, 190)" };
      break;
    case 3:
      styleForm = { display: "none", background: "" };
      break;
    default:
      break;
  }

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <div>
          <div className="flexRow">
            <button
              onClick={() => {
                setStateForm({ stateSelection: 0 });
                setInputsForm({ name: "", lastName: "", phone: "" });
                setStateSelection(null);
              }}
            >
              Agregar
            </button>
            <button
              onClick={() => {
                setStateForm({ stateSelection: 1 });
                setInputsForm({
                  name: "seleccione",
                  lastName: "seleccione",
                  phone: "seleccione",
                });
                setStateSelection(null);
              }}
            >
              Modificar
            </button>
            <button
              onClick={() => {
                setStateForm({ stateSelection: 2 });
                setInputsForm({
                  name: "seleccione",
                  lastName: "seleccione",
                  phone: "seleccione",
                });
                setStateSelection(null);
              }}
            >
              Eliminar
            </button>
            <button
              onClick={() => {
                setStateForm({ stateSelection: 3 });
                setStateSelection(null);
              }}
            >
              Cancelar
            </button>
          </div>

          <form
            style={styleForm}
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flexColumn"
          >
            <h2>
              {stateForm.stateSelection === 0 ? "Ingrese nuevo usuario" : ""}
              {stateForm.stateSelection === 1
                ? "Seleccione usuario a modificar"
                : ""}
              {stateForm.stateSelection === 2
                ? "Seleccione usuario a eliminar"
                : ""}
            </h2>
            <div >
              <div className="flexColumn">
                <h3>Nombre</h3>
                <input
                  name="name"
                  value={inputsForm.name}
                  onChange={changeInputs}
                  disabled={stateDisable}
                ></input>
              </div>
              <div className="flexColumn">
                <h3>Apellido</h3>
                <input
                  value={inputsForm.lastName}
                  onChange={changeInputs}
                  name="lastName"
                  disabled={stateDisable}
                ></input>
              </div>
              <div className="flexColumn">
                <h3>Telefono</h3>
                <input
                  value={inputsForm.phone}
                  onChange={changeInputs}
                  name="phone"
                  disabled={stateDisable}
                ></input>
              </div>
            </div>
            <button
              onClick={() => {
                if (
                  inputsForm.name.length > 0 &&
                  inputsForm.lastName.length > 0 &&
                  inputsForm.phone.length > 0
                ) {
                  switch (stateForm.stateSelection) {
                    case 0:
                      setStatePerson([
                        ...statePerson,
                        {
                          name: inputsForm.name,
                          lastName: inputsForm.lastName,
                          phone: inputsForm.phone,
                        },
                      ]);
                      setInputsForm({ name: "", lastName: "", phone: "" });
                      setStateForm({ stateSelection: 3 });
                      break;
                    case 1:
                      if (stateSelection === null) {
                        alert("Seleccione persona");
                      } else {
                        let array = statePerson;
                        array[stateSelection] = {
                          name: inputsForm.name,
                          lastName: inputsForm.lastName,
                          phone: inputsForm.phone,
                        };
                        setStatePerson([...array]);
                        setStateSelection(null);
                        setInputsForm({ name: "", lastName: "", phone: "" });
                        setStateForm({ stateSelection: 3 });
                      }

                      break;
                    case 2:
                      if (stateSelection === null) {
                        alert("Seleccione persona");
                      } else {
                        setStatePerson(
                          statePerson.filter(
                            (list, index) => index !== stateSelection
                          )
                        );
                        setStateSelection(null);
                        setInputsForm({ name: "", lastName: "", phone: "" });
                        setStateForm({ stateSelection: 3 });
                      }

                      break;
                    default:
                      break;
                  }
                } else {
                  alert("falta completar");
                }
              }}
            >
              {stateForm.stateSelection === 0 ? "Guardar" : ""}
              {stateForm.stateSelection === 1 ? "Modificar" : ""}
              {stateForm.stateSelection === 2 ? "Eliminar" : ""}
            </button>
          </form>

          <div className="flexColumn">
            <div className="flexRow">
              <h3>Nombre</h3>
              <h3>Apellido</h3>
              <h3>Telefono</h3>
            </div>
            <div className="flexColumn">
              {statePerson.map((listPerson, index) => {
                return (
                  <div
                    style={
                      stateSelection === index
                        ? { backgroundColor: "rgb(108, 110, 117)" }
                        : { backgroundColor: "" }
                    }
                    onClick={() => {
                      switch (stateForm.stateSelection) {
                        case 1:
                          setInputsForm({
                            name: listPerson.name,
                            lastName: listPerson.lastName,
                            phone: listPerson.phone,
                          });
                          setStateSelection(index);

                          break;
                        case 2:
                          setInputsForm({
                            name: listPerson.name,
                            lastName: listPerson.lastName,
                            phone: listPerson.phone,
                          });
                          setStateSelection(index);
                          break;
                        default:
                          break;
                      }
                    }}
                    className="flexRow"
                  >
                    <h3
                      style={
                        stateSelection === index
                          ? { color: "white" }
                          : { color: "" }
                      }
                    >
                      {listPerson.name}
                    </h3>
                    <h3
                      style={
                        stateSelection === index
                          ? { color: "white" }
                          : { color: "" }
                      }
                    >
                      {listPerson.lastName}
                    </h3>
                    <h3
                      style={
                        stateSelection === index
                          ? { color: "white" }
                          : { color: "" }
                      }
                    >
                      {listPerson.phone}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
