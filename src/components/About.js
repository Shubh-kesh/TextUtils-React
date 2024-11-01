
import React from 'react'


export default function About(props) {


    let myStyle={
        color: props.mode=== "dark"?'white':'#042743',
        backgroundColor: props.mode==="dark"?'rgb(36 74 104)':'white',  
    }

// const [myStyle, setmyStyle] = useState({
//     color:"black",
//     backgroundColor:"white"
// })

// const [btntext, setBtnText] = useState("Enable Dark Mode")

// const toggleStyle = ()=>{
//     if (myStyle.color ==="black"){
//         setmyStyle({
//             color:"white",
//             backgroundColor:"black",
//             border: "1px solid white"
//         })
//         setBtnText("Enable light Mode")
//     }
//     else {   
//         setmyStyle({
//         color:"black",
//         backgroundColor:"white"
//     })
//     setBtnText("Enable Dark Mode")

//     }
// }


  return (
    <>
    
    <div className="container" >
        <h1 className="my-3" style={{color: props.mode=== "dark"?'white':'#042743'}} >About Us </h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    
                    Text utils gives you a way to analyse your text quickly and efficiently. Be it word count, character count etc
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    TextUtils is a free character counter tool that provideds instant character count & word count statistically for a given
                    text. TextUtils reports the number of words and characteristic. This is suitable for writing text with word/character limit.

                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer,Safari, Opera. It
                    suits to count characters.
                </div>
                </div>
            </div>
        </div>
        {/* <div>
            <button type="button" onClick={toggleStyle} class="btn btn-primary my-3">{btntext}</button>
        </div> */}
    </div>
    </>
  )
}
