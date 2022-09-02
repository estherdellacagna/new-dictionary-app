import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css"

export default function Meaning(props) {
   

  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function(definition, index) {
        return (
          <div key={index}>
            <section>
                <div className="definition">{definition.definition}</div>
                <br />
                <div className="example">{definition.example}</div>
            </section>
          </div>
        );
      })}
      <section>
        <Synonyms synonyms={props.meaning.synonyms} />
      </section>
    </div>
  );
}
