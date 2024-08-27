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
      <div className='plat-sponsors'>
        <img src={Extempra} alt="Extempra logo" />
      </div>
      <div className='gold-sponsors'>
        <img src={CIGI} alt="Centre for International Governance Innovation logo" />
      </div>
      <div className='silver-sponsors'>
        <img src={AEF} alt="AEF logo" />
        <img src={WUSA} alt="WUSA logo" />
      </div>
      <div className='bronze-sponsors'>
        <img src={bullfrogpowered} alt="bullfrogpowered logo" />
      </div>
    </div>
  )
}

export default Sponsors;