import React from 'react'

export default function About(props) {

    return (
    <div className='container' style={{backgroundColor: props.mode}}>
        <h1 className='my-3'>About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor: props.mode === 'dark'?'rgb(51 77 108)':'white', color: props.mode === 'dark'?'white':'black'}}>
      <strong>      Analyze Your Text      </strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={{backgroundColor: props.mode === 'dark'?'rgb(51 77 108)':'white', color: props.mode === 'dark'?'white':'black'}}>
      <div className="accordion-body">
      TextUtils gives you a way to analyze your text quickly and efficiently.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor: props.mode === 'dark'?'rgb(51 77 108)':'white', color: props.mode === 'dark'?'white':'black'}}>
      <strong>      Free to use      </strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{backgroundColor: props.mode === 'dark'?'rgb(51 77 108)':'white', color: props.mode === 'dark'?'white':'black'}}>
      <div className="accordion-body">
      TextUtils is a free character counter tool that provides real time character count & word count statistics for a given text. TextUtils reports the number of words and characters. Then it is suitable for writing text with word/character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor: props.mode === 'dark'?'rgb(51 77 108)':'white', color: props.mode === 'dark'?'white':'black'}}>
      <strong>      Browser Compatible      </strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{backgroundColor: props.mode === 'dark'?'rgb(51 77 108)':'white', color: props.mode === 'dark'?'white':'black'}}>
      <div className="accordion-body">
      This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc. 
      </div>
    </div>
  </div>
</div>
</div>
  )
}
