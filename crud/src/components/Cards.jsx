import React from 'react'
import Form from './Card'

export default function Cards(props) {
  const {cardsList, onChange} = props;

  const getCards = () => {
    onChange();
  }

    const formsRender = cardsList.map((element)=>{
      if(element.id){
        return(
          <div key={element.id} id={element.id} className="card">
            <Form value={element.content} onChange = {getCards}/>
          </div>
        )
      };
    })
      

  return (
    <div className='cards'>
      {formsRender}
    </div>
  )
}
