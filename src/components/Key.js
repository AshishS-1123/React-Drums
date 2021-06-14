import React from "react"

function onClickCall(handler_props) {
    const {key_name, item_id, call_back} = handler_props

    let audio_tag = document.getElementById(key_name)
    let div_tag = document.getElementById(item_id)

    div_tag.classList.add("key-pressed")

    audio_tag.currentTime = 0
    audio_tag.play()

    call_back(key_name)

    setTimeout(()=>{div_tag.classList.remove("key-pressed")}, 100)
}

function Key(props) {
    
    let handler_args = {...props}

    return (
        <React.Fragment>
            <div className = "drum-pad"
                 id = {props.item_id}
                 onClick = {()=>onClickCall(handler_args)}>

                    <h1 className = "button-div-title">{props.key_name}</h1>
                    <audio 
                        src={props.audio_path}
                        className="clip" 
                        id={props.key_name} >
                    </audio>

            </div>
        </React.Fragment>
    );
}


export default Key
