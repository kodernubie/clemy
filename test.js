import {App, Button, Label, Box, Edit} from './src'

class TestApp extends App {
    constructor(frame) {

        super(frame)
        this.label = new Label(this, {left: 10, 
            top: 10, 
            title: "Test Label",
            font : {color: "red", size: 22, italics: true, bold: true},
            border : {left: true, right: false, top: false, bottom: true}
        })

        this.button = new Button(this, {left: 100, 
                                        top: 100,
                                        icon: "floppy-o",
                                        title: "",
                                        color: "white"
                                    })

        this.button2 = new Button(this, {left: 145, 
                                        top: 100,
                                        icon: "floppy-o",
                                        color: "primary",
                                        size: "large"
                                    })

        this.button2.on("focus", function() {
            console.log("button 2 focus")
        })

        this.button2.on("lostFocus", function() {
            console.log("button 2 lost focus")
        })

        // this.button2.on("click", function() {
        //     console.log("button 2 click")
        // })
        
        this.button2.on("click", "doEvent")
        this.setEventHandler(this)

        this.box = new Box(this, {left: 200, top: 200, width: 400, height: 400})

        this.button3 = new Button(this.box, {focusable: false, 
            left: 10, 
            top: 10,
            icon: "folder-open-o",
            title: ""
        })

        this.button4 = new Button(this.box, {focusable: false, 
            left: 55, 
            top: 10,
            icon: "floppy-o",
            title: ""
        })

        this.edit1 = new Edit(this.box, {left: 55, 
            top: 55,
            with: 150,
            size: "small"
        })

        this.edit2 = new Edit(this.box, {type: "password", left: 55, 
            top: 105,
            with: 150
        })
    }

    doEvent() {

        console.log("masuk do event")
    }
}

window.TestApp = TestApp
