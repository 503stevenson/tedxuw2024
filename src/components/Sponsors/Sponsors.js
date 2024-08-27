import React from 'react'
import './Sponsors.css'
import {
    AEF,
    bullfrogpowered,
    CIGI,
    Extempra,
    WUSA,
    plat_star,
    gold_stars,
    silver_stars
} from '../../assets/index'

const Sponsors = () => {
  return (
    <div className="sponsors-content">
        <p className="title">
            SPONSORS
        </p>
        <div className='sponsors'>
            <img src={Extempra} alt="Extempra logo"/>
        </div>
    </div>
  )
}

export default Sponsors;