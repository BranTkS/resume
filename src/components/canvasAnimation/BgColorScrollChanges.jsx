import spacebg from '../../assets/images/planet-1702788.jpg'
import spaceGold from '../../assets/images/AltPlanet/planetNdarama.jpg'
import spaceShade from '../../assets/images/AltPlanet/planetShade.jpg'
import { useState } from 'react'

const whiteColor = 0xffffff;
const blackColor = 0x000000;
const orangeColor = 0xFB9000;



const BgColorScrollChanges = () => {

  const [currentBG, setCurrentBG] = useState(spacebg);

  const [currentCL, seturrentCL] = useState(whiteColor)


  return (
    { currentBG }
  )
}
const currentBackground = spacebg;
const currentColor = whiteColor;

export { currentBackground, currentColor };
