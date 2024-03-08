import { useState, useRef, useEffect } from "react";
import "./Todo.css";

export default function Todo(props){

    const [todoList, setTodoList] = useState([]);
    const [buttonFlag, setButtonFlag] = useState(false);
    const [buttonFinishedFlag, setButtonFinishedFlag] = useState(false);
    const inputRef = useRef();


    function buttonHanlder(){
        setButtonFlag(true);   
    }

    function InputHanlder(){
        setButtonFinishedFlag(true);   
    }

    useEffect(()=>{
        if(buttonFinishedFlag){
            inputRef.current.contentEditable = "false";
        }
       
    },[buttonFinishedFlag])


    useEffect(()=>{
        if(buttonFlag){
            inputRef.current.focus();
        }
       
    },[buttonFlag])


    function handleDragEnd(){
        console.log("Dragged");
        props.setCreatedList(inputRef.current.innerHTML)
    }
    

    return(
    <>
        
        <div className='TodoContainer'>
                  
                    {todoList.map((index) => {
                        return(
                            <div>{todoList[index]}</div>
                        )
                    })}
                    {!buttonFlag && <div className="button Todo"  onClick={buttonHanlder}>add</div>}
                    {buttonFlag && 
                    <div>
                        <div  ref={inputRef} onDragEnd={handleDragEnd}  spellCheck="false" draggable={true} contentEditable="true" className="todoInput"></div>
                        <div className="button Finished"  onClick={InputHanlder}>done</div>
                    </div>
                    }
        </div>
       
    </>    
    )
}