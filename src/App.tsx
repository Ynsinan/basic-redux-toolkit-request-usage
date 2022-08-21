import React, { useEffect } from "react";
import "./App.css";
import {
  fetchData,
  getCharacters,
  getSelectedCharacter,
  setSelectedCharacter,
  loadingSelector,
  unSelectCharacter,
} from "./slice/store/apiSlice";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { CharacterTypes } from "global";

function App() {
  const characters: CharacterTypes[] = useAppSelector(getCharacters);
  const loading: boolean = useAppSelector(loadingSelector);
  const selectedCharacter: CharacterTypes[] =
    useAppSelector(getSelectedCharacter);
  const dispatch = useAppDispatch();

  const setSelect = (character: CharacterTypes) => {
    dispatch(setSelectedCharacter(character));
  };

  const unSelect = (character: CharacterTypes) => {
    dispatch(unSelectCharacter(character));
    console.log(selectedCharacter);
  };
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    console.log(selectedCharacter);
  }, [selectedCharacter]);
  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <div
        className="wrapper"
        style={{
          display: "flex",
          justifyContent: "center",
          width: "80%",
          margin: "0 auto",
          flexWrap: "wrap",
        }}
      >
        <h2>List of Characters</h2>
        {loading ? (
          <div>
            <h1>Loading...</h1>
          </div>
        ) : (
          characters &&
          characters.map((character, index) => (
            <div style={{ border: "1px solid black" }} key={index}>
              <p>{character.name}</p>
              <p>{character.gender}</p>
              <button onClick={() => setSelect(character)}>select</button>
            </div>
          ))
        )}
        {selectedCharacter &&
          selectedCharacter.map((character, index) => (
            <div key={index}>
              <p>{character.name}</p>
              <p>{character.gender}</p>
              <button onClick={() => unSelect(character)}>Unselect</button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
