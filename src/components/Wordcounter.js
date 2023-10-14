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
          ></textarea>
        </div>
 
      </div>
      <div className="container">
        <h4>Word Count</h4>
        <p>
          {(text==="")?0:text.split(" ").length} words and {text.length} characters
        </p>
      </div>
    </>
  );
}
