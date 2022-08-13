import {Container} from "./container"

class App extends Container{

    constructor(frame) {

        super(null)
        
        this.frame = frame
        this.containerFrame = frame

        this.containerFrame.style.position = "absolute"
    }
}

export {App} 