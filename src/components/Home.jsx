import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../actions/index';
import Cards from './Cards'
import Card from './Card';
import sc from './Home.module.css'


export default function Home() {

  const dispatch = useDispatch();
  const allCharacters = useSelector(state => state.allCharacters);

  useEffect( () => {
    dispatch(getCharacters());
  },[dispatch]);

  
  return (
    <div className={sc.container}>
      <div>
        <h1>STAR WARS BATTLE APP</h1>
      </div>

      {allCharacters.length&&<Cards random={[allCharacters[18],allCharacters[4]]}/>}

      <div className={sc.containerCard}>
        {
          allCharacters.length ? allCharacters.map(ch => {
          return (
            <div className={sc.cards} key={ch.id}>
              <Card 
                id={ch.id}
                key={ch.id}
                name={ch.name}
                image={ch.image}
                gender={ch.gender}
                height={ch.height}
                species={ch.species}
              />
            </div>
          )
        })
        :
          (
            <div className={sc.containerLoading}>
              <div className={sc.loading}>
                <div className={`${sc.loadingSkeleton} ${sc.titleSkeleton}`}></div>
                <div className={`${sc.loadingSkeleton} ${sc.descriptionSkeleton}`}></div>
              </div>
              <div className={sc.loading}>
                <div className={`${sc.loadingSkeleton} ${sc.titleSkeleton}`}></div>
                <div className={`${sc.loadingSkeleton} ${sc.descriptionSkeleton}`}></div>
              </div>
              <div className={sc.loading}>
                <div className={`${sc.loadingSkeleton} ${sc.titleSkeleton}`}></div>
                <div className={`${sc.loadingSkeleton} ${sc.descriptionSkeleton}`}></div>
              </div>
            </div>
          )
        }
      </div>

    </div>
  )
}