import React, {useState} from 'react'

export default function Textform(props) {

  const [text,setText] = useState("Enter text here");
  const [countDifferent,countText] = useState(0);

  const handleUpClick = ()=>{
    //console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Upper Case", "success")
  }

  const handleLowClick = ()=>{
    //console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lower Case", "success")
  }
  const handleClearText = ()=>{
    setText("")
    props.showAlert("All text are clear", "success")
  }
  const countDifferentWords = ()=>{
    const newText = text.trim().split(/\s+/);

    const textCount = new Set(newText);
    countText(textCount.size);
    
    
  }
  const handleCopy = ()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard", "success")
  }
  


  const handleOnChange = (event)=>{    //event handling
    //console.log("onChange");
    setText(event.target.value)
  }

   
  // text = Enter text here 2 // wrong way to set state
  // setText("Enter text here 2"); correct way to set state

  return (

    <>
    <div className="container" style={{color: props.mode ==='dark'?'white':'#042743'}}>
        <h1 className='my-2'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode ==='dark'?'rgb(36, 74, 104)':'white', color: props.mode ==='dark'?'white':'#042743' }} onChange={handleOnChange} id="myBox" rows="8">

        </textarea>
        </div>
        <button disabled={text.length ===0}className={`btn btn-${props.buttonColor} mx-2 my-1`} onClick={handleUpClick}>Convert to Upper Case</button>
        <button disabled={text.length ===0}className={`btn btn-${props.buttonColor} mx-2 my-1`} onClick={handleLowClick}>Convert to Lower Case</button>
        <button disabled={text.length ===0}className={`btn btn-${props.buttonColor} mx-2 my-1`} onClick={handleClearText}>Clear text</button>
        <button disabled={text.length ===0}className={`btn btn-${props.buttonColor} mx-2 my-1`} onClick={countDifferentWords}>Count Different Words</button>
        <button disabled={text.length ===0}className={`btn btn-${props.buttonColor} mx-2 my-1`} onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>Total characters:- {text.length} , Total words:- {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}, Different Word:- {countDifferent}</p>
      <h2>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</h2>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing to Preview"}</p>
    </div>
    </>
  )
}
// /\s+/ is the regular expression which shows wider space

//value is text but when we do any changes it will execute handleonChange event then we will even object 
// text is assigning a value at every event (after doing any change)

// The `handleOnChange` function is a handler that responds to changes in the `<textarea>` element, meaning it runs every time you type something into the textarea. Let's break it down:

// ### Code:
// ```javascript
// const handleOnChange = (event) => {
//   console.log("onChange");
//   setText(event.target.value);
// };
// ```

// ### Explanation:

// 1. **Parameter `event`:**
//    - The `handleOnChange` function takes an `event` as its argument. This `event` is automatically passed by the browser whenever the `onChange` event occurs. The `onChange` event is triggered each time the user changes the content of the `<textarea>`.

// 2. **`console.log("onChange")`:**
//    - This line simply logs the string "onChange" to the console every time the user interacts with the textarea. It's useful for debugging to ensure the function is being called when expected.

// 3. **`event.target.value`:**
//    - `event.target` refers to the DOM element that triggered the event (in this case, the `<textarea>` element).
//    - `event.target.value` refers to the current value (or text) of the textarea. So, as the user types into the textarea, this value reflects the current text inside it.

// 4. **`setText(event.target.value)`:**
//    - `setText` is the function provided by the `useState` hook to update the value of the `text` state variable.
//    - This line updates the `text` state with whatever the user has typed into the textarea, i.e., the current value of the textarea (`event.target.value`).
//    - React will then re-render the component and reflect the updated `text` in the textarea, as the `value` of the textarea is bound to the `text` state (`<textarea ... value={text} ...>`).

// ### Flow:
// - When you type in the textarea, the `onChange` event is triggered.
// - This event calls `handleOnChange`.
// - `handleOnChange` captures the new value of the textarea and updates the state `text` using `setText`.
// - Because the component's `value` attribute is linked to the state (`value={text}`), the updated state is reflected back in the textarea, ensuring what you type is displayed.

// This cycle makes sure that the UI is always in sync with the state, enabling controlled components in React.


// In the code, `/\s+/` is a **regular expression (regex)** used to split the text into words. Here's a breakdown of what it does:

// - **`\s`**: This is a shorthand character class in regex that matches any whitespace character. Whitespace characters include:
//   - A regular space (` `)
//   - A tab (`\t`)
//   - A newline (`\n`)
//   - A carriage return (`\r`)
//   - Other Unicode spaces

// - **`+`**: This is a quantifier in regex that matches **one or more** of the preceding element (in this case, `\s`). So, it means "one or more whitespace characters."

// ### Combined: `/\s+/`
// - This pattern matches **one or more consecutive whitespace characters**. 
// - It is used in the `split()` function to divide the input text into individual words, regardless of how many spaces (or other whitespace) are between the words.

// For example:
// - Input: `"Hello    world  from  React"`
// - The regex `/\s+/` will treat the multiple spaces as a single delimiter, splitting the string into: `["Hello", "world", "from", "React"]`.

// This ensures that even if the user has multiple spaces or tabs between words, they are treated as a single separator when splitting.


// Certainly, Shubhansh! Let's break down this line step by step so that it’s easy to follow.

// ```javascript
// text.split(" ").filter((element) => { return element.length !== 0 });
// ```

// ### 1. `text.split(" ")`
// - **Purpose:** This part splits the string `text` into an array of substrings based on spaces.
// - **Explanation:** The `split(" ")` method takes a string and breaks it up wherever there is a space (`" "`). Each word or standalone character (anything separated by spaces) will become an element in an array.
// - **Example:** If `text` is `"Hello World  "`, then `text.split(" ")` will give `["Hello", "World", "", ""]`.

// ### 2. `.filter((element) => { return element.length !== 0 })`
// - **Purpose:** This part filters out any empty strings from the array created by `split`.
// - **Explanation:** The `filter` method goes through each `element` in the array and checks if the `length` of the `element` is not zero (`element.length !== 0`).
//   - If an element has a length of zero (like an empty string `""`), it will be removed from the resulting array.
//   - If it has a length greater than zero (indicating a word or character), it will stay in the array.
// - **Example:** For `["Hello", "World", "", ""]`, `filter` will remove `""`, resulting in `["Hello", "World"]`.

// ### Final Result
// After executing the entire line, any empty strings from the `split` result are removed, leaving only meaningful words or characters.