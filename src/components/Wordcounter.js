import React, {useState} from 'react'

export default function Wordcounter(props) {
  const [text, setText] = useState("");
  
 
  const onChange = (event) => {
    setText(event.target.value);
    console.log("on change");
  };
  return (
    <>
      <div className="container my-2">
        <h3>Responsive Paragraph Word Counter</h3>
        <div className="m-2 mb-2">
          <textarea
            className="form-control "
            placeholder="Enter your Text Here"
            value={text}
            onChange={onChange}
            id="exampleFormControlTextarea1"
            rows="8"
            style={{boxShadow:"none",border:"1px solid black"}}
          ></textarea>
        </div>
 
      </div>
      <div className="container">
        <h4>Word Count</h4>
        <p>
          {(text.split(" ")).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters
        </p>
      </div>
    </>
  );
}
