import React from "react";
import Card from './Card'
import cs from './Home.module.css'

export default function Cards({random}) {
  return (
    <div className={cs.containerCard}>
      {
        random.map(c => 
          <Card
            id={c.id}
            key={c.id}
            name={c.name}
            image={c.image}
            gender={c.gender}
            height={c.height}
            species={c.species}
          />)
      }
      
    </div>
  )
}