import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Result from "./Result";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [result, setResult] = useState(null);
  const [loaded,setloaded]= useState(false);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load(){
    setloaded(true);
    search();
  }
  if(loaded){
  return (
    <div className="Dictionary">
      <section>
        <h1>Dictionary App</h1>
        <h2>What word would you like to look up?</h2>
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
        </form>
        <div className="hint">Suggested words: Yoga, forest, sunset..</div>
      </section>
      <Result result={result} />
    </div>
  );
  }
  else{
    load();
    return "Loading";
  }
}
