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
  silver_stars,
  AFEF,
  Riptide,
  MEF,
  Fantuan
} from '../../assets/index'

const Sponsors = () => {
  return (
    <div className="sponsors-content">
      <p className="title">
        SPONSORS
      </p>
      <div className='diamond-sponsors'>
        <p className='sponsor-tier'>Diamond Sponsors</p>
        <div className='silver-images'>
          <img src={MEF} alt="MEF logo" />
        </div>
      </div>
      <div className='plat-sponsors'>
        <p className='sponsor-tier'>Platinum Sponsors</p>
        <div className='silver-images'>
          <img src={Extempra} alt="Extempra logo" />
          <img src={Riptide} alt="Riptide logo" />
        </div>
      </div>
      <div className='gold-sponsors'>
        <p className='sponsor-tier'>Gold Sponsors</p>
        <div className='silver-images'>
          <img src={CIGI} alt="Centre for International Governance Innovation logo" />
          <img src={Fantuan} alt="Fantuan logo" />
        </div>
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
        <div className='silver-images'>
          <img src={bullfrogpowered} alt="bullfrogpowered logo" />
        </div>
      </div>
    </div>
  )
}

export default Sponsors;