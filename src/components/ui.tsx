import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { fetchType } from "../app";
interface UiProps {
  handleClick: () => void;
  handleChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  text: string;
  array?: fetchType | any;
}
type recipe = {
  recipe: {
    image: string;
    label: string;
    ingredients: {
      text: string;
    }[];
  };
};
function Ui({ handleChange, handleClick, text, array }: UiProps) {
  const [spinner, setSpinner] = React.useState<string>("spinner-blur");
  function spinnerTime() {
    setTimeout(() => {
      setSpinner("");
    }, 3000);
  }

  spinnerTime();
  return (
    <>
      <div className={spinner}>
        <div className="spinner"></div>
      </div>
      <div className="main">
        <div className="header">
          <h1 className="header-one">
            Recipe app <br />{" "}
            <span className="header-span">Find your like recipes!</span>
          </h1>
        </div>
        <input
          onChange={handleChange}
          onKeyPress={(e) => {
            if (text) {
              if (e.key === "Enter") {
                handleClick();
                setSpinner("spinner-blur");
                spinnerTime();
              }
            }
          }}
          type="text"
          value={text}
        />
        <button
          onClick={() => {
            if (text) {
              handleClick();
              setSpinner("spinner-blur");
              spinnerTime();
            }
          }}
        >
          Search
        </button>
        <div className="results">
          {array &&
            array.hits.map((element: recipe, id: number) => {
              return (
                <div key={id} className="recipe">
                  <LazyLoadImage
                    effect="blur"
                    alt="image"
                    src={element.recipe.image}
                  />
                  <p className="label">{element.recipe.label}</p>
                  <h3>Ingredients:</h3>
                  <ul>
                    {element.recipe.ingredients.map((ing, id) => {
                      return <li key={id}>{ing.text}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Ui;
