import React from 'react'

const SuggestionButtons = ({items}) => {
  return (
    <div className='suggestion-btn '>

        {
            items.map((item)=>(
                <button>{item}</button>
                
            ))
        }
        
      

      
    </div>
  )
}



export default SuggestionButtons
