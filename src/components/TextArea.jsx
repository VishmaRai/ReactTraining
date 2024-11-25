import { useState } from "react";
import Warning from "./Warning";

export default function TextArea() {

const [text, setText] = useState("");
const [showWarning, setShowWarning] = useState(false);

const handleChange = (event) => {
  let newText = event.target.value;
  if(newText.includes("<script>")){
    // alert("You can't use script tags here!");
    setShowWarning(true);
    return;
  }else{
    setShowWarning(false);
    setText(newText);
  }}

  return (
<>
      <textarea 
      className="textarea"
      onChange={handleChange}
      value={text}
      placeholder="Enter your text"
      spellCheck={false}
       id="" rows={12}/>

   <Warning showWarning={showWarning}/>
  </>
  )
}

