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
        <p className='sponsor-tier'>Platinum Sponsors</p>
        <img src={Extempra} alt="Extempra logo" />
      </div>
      <div className='gold-sponsors'>
        <p className='sponsor-tier'>Gold Sponsors</p>
        <img src={CIGI} alt="Centre for International Governance Innovation logo" />
      </div>
      <div className='silver-sponsors'>
        <p className='sponsor-tier'>Silver Sponsors</p>
        <div className='silver-images'>
          <img src={AEF} alt="AEF logo" />
          <img src={WUSA} alt="WUSA logo" />
        </div>
      </div>
      <div className='bronze-sponsors'>
        <p className='sponsor-tier'>Bronze Sponsors</p>
        <img src={bullfrogpowered} alt="bullfrogpowered logo" />
      </div>
    </div>
  )
}

export default Sponsors;