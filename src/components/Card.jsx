import React from "react";
import sc from './Card.module.css'

export default function Card({id, name, image, gender, height, species}) {
  return (
    <div className={sc.box}>
      <div className={sc.card}>
        <div className={sc.imgBx}>
          <img src={image} alt={`${name}`} />
        </div>
        <div className={sc.details}>
          <h2>{name}<br/>
            <span>{gender}</span>
            <span>{height}</span>
            <span>{species}</span>
          </h2>
        </div>
      </div>
    </div>
  )
}