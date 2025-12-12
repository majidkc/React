import React, {useState, useEffect, useRef} from "react"


function StopWatch(){

    const [isRunning, setRunning] = useState(false)
    const [elapseTime, setElapseTime] = useState(0)
    const intervalIdRef = useRef(null)
    const startTimeRef = useRef(0)
     
    useEffect(()=>{
        if(isRunning){
            intervalIdRef.current =  setInterval(()=>{
                setElapseTime(Date.now() - startTimeRef.current)
            }, 10)
        }

        return() =>{
            clearInterval(intervalIdRef.current)
        }
    },[isRunning])

    function start(){
        setRunning(true)
        startTimeRef.current = Date.now() - elapseTime
    }

    function stop(){
        setRunning(false)
    }

    function reset(){
        setElapseTime(0)
        setRunning(false)
    }

    function formatTime(){
        let hours = Math.floor(elapseTime / (1000 * 60 * 60))
        let minuts = Math.floor(elapseTime / (1000 * 60) % 60)
        let seconds = Math.floor(elapseTime / (1000) % 60)
        let milliseconds = Math.floor((elapseTime %1000)  / 60)

        return `${minuts}: ${seconds}: ${milliseconds}`
    }

    return(
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button onClick={start} className="start-button">start</button>
                <button onClick={stop} className="stop-button">sop</button>
                <button onClick={reset} className="reset-button">reset</button>

            </div>
        </div>
    )
}
export default StopWatch