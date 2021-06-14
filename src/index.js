import React from 'react';
import ReactDOM from 'react-dom';

import Key from "./components/Key"
import {audio_data} from "./audio_data"

import "./index.css"

function handleKeyPressed(event) {
    switch(event.code[3]) {
        case "Q":
        case "W":
        case "E":
        case "A":
        case "S":
        case "D":
        case "Z":
        case "X":
        case "C": break
        default: return
    }
    const audio_tag = document.getElementById(event.code[3])

    audio_tag.parentElement.classList.add("key-pressed")
    audio_tag.currentTime = 0
    audio_tag.play()
    setTimeout(()=>{audio_tag.parentElement.classList.remove("key-pressed")}, 100)

    

}
class App extends React.Component
{
    constructor(props) {
        super(props)
        this.state = {text: ""}
    }

    componentDidMount() {
        document.addEventListener("keypress", handleKeyPressed);
    }

    key_press_notify(key_name) {
        this.setState({text: key_name})
    }

    render()
    {
        const keys_array = audio_data.map( (item) => {
            return <Key key = {item.id}
                        item_id = {item.id} 
                        key_name = {item.key_name}
                        audio_path = {item.audio_path}
                        call_back = {(text) => {this.key_press_notify(text)}}
                    ></Key>
        })

        return (
            <div id="drum-machine">
                <div id="display">
                    <p>{this.state.text}</p>
                    {keys_array}
                </div>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById("root"))
