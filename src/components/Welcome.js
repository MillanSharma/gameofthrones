import React, { useState } from 'react'
import "./Welcome.css"
function Welcome() {
  return (
    <div className='welcome__container'>
        <div className='description'><h4>
  Based on the best-selling book series 
  "A Song of Ice and Fire" by George R.R.
   Martin, this sprawling HBO drama is set
    in a world where summers span several 
    decades and winters can last a lifetime.</h4>
  </div>
  <div className='description1'><h4>
 As conflict erupts in the kingdoms of men,
  an ancient enemy rises once again to 
  threaten them all. Meanwhile,the last 
  heirs of a recently usurped dynasty plot 
  to take back their homeland from across
  the Narrow Sea.</h4>
  </div>
  <div className='description2'><h4>
  Years after a rebellion spurred by a stolen
  bride to be and the blind ambitions of a 
  mad King, Robert of the house Baratheon 
  sits on the much desired Iron Throne.</h4>
  </div>
  </div>
  
  )
}

export default Welcome