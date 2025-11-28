import React, {useState} from "react"
function ColorPicker(){

    const [color, setColor] = useState("#ffffff")

    function handleChangeColor(event){
        setColor(event.target.value)
    }

    return(
        <div className="color-picker-container">
            <h1>Color picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label htmlFor="">Select a color</label>
            <input type="color" value={color} onChange={handleChangeColor}name="" id="" />
        </div>  

    )
}
export default ColorPicker