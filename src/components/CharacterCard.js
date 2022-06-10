import React, { useEffect, useState } from "react";
import "./CharacterCard.css";
import axios from "axios";
import Loader from "./Loader";

function CharacterCard() {
  const [characters, setCharacter] = useState([]);
  let [pageNumber, setPageNumber] = useState(2);
  const [isLoading, setIsLoading] = useState(false);

  let api = `https://www.anapioficeandfire.com/api/characters?page=${pageNumber}`;

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(api)
      .then((response) => {
        setCharacter(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [api]);

  return (
    <div className="character__container">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="character__inner">
            {characters.map((character, key = character.url) => {
              if (character.name?.length !== 0) {
                return (
                  <div className="character" key={key}>
                    <img
                      src={`https://ui-avatars.com/api/?name=${character?.name}}&&background=101010&color=fff`}
                    />

                    <div className="character__desc">
                      <span>Name: {character?.name}</span>
                      <p>Aliase: {character?.aliases[0]}</p>
                      <h4>Gender: {character?.gender}</h4>
                      <p>Culture: {character?.culture}</p>
                      <p>
                        Part of {character.books.length}
                        {character.books.length === 1 ? " Book" : " Books"}
                      </p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="pagination">
            <div className="buttonWrapper">
              <button
                onClick={() => {
                  if (pageNumber === 2) return;
                  setPageNumber((pageNumber) => pageNumber - 1);
                }}
              >
                Prev
              </button>
              <button
                onClick={() => setPageNumber((pageNumber) => pageNumber + 1)}
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CharacterCard;
