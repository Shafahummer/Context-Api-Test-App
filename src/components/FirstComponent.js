import React, { useState, useContext } from 'react';
import { MyContext } from '../context/context';

const FirstComponent = (props) => {
  const { state, dispatch } = useContext(MyContext)
  const [titleText, setTitleText] = useState("")

  return (
    <>
      <div style={{
        alignItems: "center",
        padding: 20,
        backgroundColor: "yellow",
        marginTop: 20,
        display: "flex",
        justifyContent: "center"
      }}>
        <div>
          <div>This is first FirstComponent:</div>
          <input
            value={titleText}
            onChange={(e) => {
              setTitleText(e.target.value)
            }}
          />
          <button onClick={() => {
            dispatch({ type: "ADD", payload: titleText })
            setTitleText("")
          }}>Add Title</button>
          {state.map((i) => (
            <div style={{ color: "red" }}>{i.title}</div>
          ))}
        </div>
      </div>
    </>
  );
}
export default FirstComponent;
