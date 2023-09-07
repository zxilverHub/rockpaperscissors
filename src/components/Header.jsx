import logo from "../images/logo.svg"
import { useSelector } from "react-redux"
import "./header.css"

function Header() {
    const score = useSelector( state => state.score )

  return (
    <div className='header'>
        <img src={ logo } alt="logo" />
        <div className="score-board">
            <h1>SCORE</h1>
            <p className="score">{score}</p>
        </div>
    </div>
  )
}

export default Header