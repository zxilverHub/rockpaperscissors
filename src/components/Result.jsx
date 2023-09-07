import "./result.css"
import { useSelector, useDispatch } from "react-redux"
import rockIcon from "../images/icon-rock.svg"
import scissorsIcon from "../images/icon-scissors.svg"
import paperIcon from "../images/icon-paper.svg"
import { useEffect, useState } from "react"
import { playAgain } from "../features/AppSlice"
import { addScore } from "../features/AppSlice"

function Result() {
  const dispatch = useDispatch();
  const picked = useSelector( state => state.pick );
  const computerPicked = useSelector(state => state.randomPick );

  const [result, setResult] = useState(null);

  const itemPicked = {
    scissors: scissorsIcon,
    paper: paperIcon,
    rock: rockIcon
  }

  useEffect(() => {
    if(picked === computerPicked)
      setResult("DRAW")
    else if(picked === "scissors")
      setResult(computerPicked === "paper"? "WIN": "LOSE" )
    else if(picked === "paper")
      setResult(computerPicked === "rock"? "WIN": "LOSE")
    else if(picked === "rock")
      setResult(computerPicked === "scissors"? "WIN":"LOSE")

  }, [picked, computerPicked])

  if(result === "WIN") {
    setTimeout(() => {
      dispatch(addScore())
    }, 1500)
  }

  return (
    <div className="result">
      <div className={`item-picked ${ picked } ${ result === "WIN"? "winner":"" }`}>
        <div className="inner-item">
          <img src={ itemPicked[`${picked}`] } alt={picked} />
        </div>
      </div>

      <div className="play-again">
        <p className="result-title">{ `${result!=="DRAW"? "YOU ": ""}` }{result}</p>
        <button className="play-again-btn" onClick={() => dispatch(playAgain())}>
            PLAY AGAIN
        </button>
      </div>

      <div className={`item-picked ${ computerPicked } ${result==="WIN" || result==="DRAW"? "":"winner"}`}>
        <div className="inner-item">
          <img src={ itemPicked[`${computerPicked}`] } alt="computer pick" />
        </div>
      </div>
    </div>
  )
}

export default Result