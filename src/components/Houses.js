import React, { useState ,useEffect} from 'react'
import "./Houses.css";
import axios from "axios"
import HouseM from "./HouseM.js";
function Houses() {
    const [items,setItems] =useState([]);
    const [windowWidth, setWindowWidth] = useState(0);
    let resizeWindow = () => {
      setWindowWidth(window.innerWidth);
    };
  
    // for taking care of the window size to display accordingly
    useEffect(() => {
      resizeWindow();
      window.addEventListener("resize", resizeWindow);
      return () => window.removeEventListener("resize", resizeWindow);
    }, []);


    useEffect(() => {
        axios
          .get("https://www.anapioficeandfire.com/api/houses")
          .then((response) => setItems(response.data))
          .catch((err) => console.log(err));
      }, []);
  return (
    <> 
    {windowWidth <= 710 ? ( 
   <HouseM />
    ):<>
    <div className='page__container'>
      <div className='about__container'>
        
        <div className='scrollable__container'>
            {items.map((item,key=item.name)=>(
              <div  key={key}
              className={`scrolls__${item.name.substring(item.name.lastIndexOf(" ")+1)}`}>
               <div className={`scrolls__img${item.name.substring(item.name.lastIndexOf(" ")+1)}`}/>
               <div className='scroll__title'><h2>{item.name}</h2></div>
               <div 
                    className='scroll__content'>
                       <p>Coat of Arms:<br/>{item.coatOfArms}</p> 
               <p>Region: <br/>{item?.region}</p>
           <p>Titles:<br/>{item?.titles}</p>
               <p>Founded:<br/>{item?.founded}</p>
               <p>Words:<br/>{item?.words}</p>
              </div>
            </div>
                ))}
        </div>
    </div>
    </div>
    </>}
                </>
  )
}

export default Houses;