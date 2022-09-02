import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms && props.synonyms.length > 0) {
    return (
      <div className="synonyms">
        
          <h4>Synonyms:</h4>
          <ul>
            {props.synonyms.map(function(synonym, index) {
              return (
                <li key={index} className="synonym">
                  {" "}
                  {synonym}{" "}
                </li>
              );
            })}
          </ul>
       
      </div>
    );
  } else {
    return null;
  }
}
