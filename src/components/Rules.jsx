import "./rules.css"
import { useSelector, useDispatch } from "react-redux";
import { showRule } from "../features/AppSlice";
import imgRule from "../images/image-rules.svg";
import closeIcon from "../images/icon-close.svg";
import { useRef } from "react";

function Rules() {
    const dispatch = useDispatch();
    const isshowRule = useSelector( state => state.isShowRule );
    const modalRef = useRef();

    const displayRule = {
        scale: isshowRule? "1": "0",
        borderRadius: isshowRule? "0px": "50%"
    }

    const handleShowBtn = ()=> {
        if(isshowRule)
            modalRef.current.style.animation = "showModalR .3s ease 1 forwards"
        
        setTimeout(() => {
            dispatch(showRule()) 
        }, 350)
    }

  return (
    <div className="rules" 
        style={displayRule}
        onClick={handleShowBtn}>

        <div className="rule-modal" ref={modalRef}>
            <div className="modal-nav">
                <h2>RULES</h2>
                <button className="modal-close-btn">
                    <img src={ closeIcon } alt="close" />
                    <span className="none">close</span>
                </button>
            </div>
            <div className="rules-img">
                <img src={imgRule} alt="rules" />
            </div>
        </div>

    </div>
  )
}

export default Rules