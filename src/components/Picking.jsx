import "./picking.css"
import rockIcon from "../images/icon-rock.svg"
import scissorsIcon from "../images/icon-scissors.svg"
import paperIcon from "../images/icon-paper.svg"
import { useDispatch } from "react-redux"
import { setPick } from "../features/AppSlice"
import { useState } from "react"

function Picking() {
  const dispatch = useDispatch();
  const [isClick, setIsClick] = useState(false);

  const items = [ 
    { picked: "paper", img: paperIcon },
    { picked: "scissors",  img: scissorsIcon },
    { picked: "rock",  img: rockIcon },
  ]

  const handlePick =(item)=> {
    let n = Math.floor(Math.random() * 3);
    setIsClick(true);

    setTimeout(() => {
      dispatch( setPick({ item: item, rand: items[n].picked }) )
      setIsClick(false);
    }, 850)
  }

  return (
    <div className={`picking ${ isClick? "spin": "" }`}>

      { items.map((item, i) => (
        <div className="circle" key={i} 
          onClick={() => handlePick(item.picked)}>

          <div className="pick-img">
            <img src={ item.img } alt={ item.picked } />
          </div>
        </div>
      ) ) }

    </div>
  )
}

export default Picking