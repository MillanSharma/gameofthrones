import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./HouseM.css"
import useCollapse from 'react-collapsed';
function HouseM() {
    const config = {
        duration:1300
    }
const [items,setItems] =useState([]);
const { getCollapseProps, getToggleProps } = useCollapse(config);
useEffect(() => {
        axios
          .get("https://www.anapioficeandfire.com/api/houses")
          .then((response) => setItems(response.data))
          .catch((err) => console.log(err));

      }, []);
      let arr = Array(items.length).fill(false)
      const [isExpanded, setExpanded] = useState(arr);
  return (
    <div className='houseM__container'>
       <div className='houseM__innerContainer'>
            {items.map((item,key=item.name)=>(
              <div  key={key} className="houseM__content">
                <div className='collapsible'>
               <div className='header' {...getToggleProps(
                {
                    onClick:()=>setExpanded((prevExpanded)=>!prevExpanded)
                }
               )}
               >
                {item.name}</div>
               <div {...getCollapseProps()}>
                <div className='content'>
                       <p>Coat of Arms:<br/>{item.coatOfArms}</p> 
               <p>Region: <br/>{item?.region}</p>
               <p>Words:<br/>{item?.words}</p>
               </div>
               </div>
              </div>
            </div>
                ))}
        </div>

    </div>
  )
}

export default HouseM