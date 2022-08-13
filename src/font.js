import {EventEmitter} from "./eventemitter"

class Font extends EventEmitter {

    constructor() {
        super()

        this.color = "black"
        this.size = 12
        this.bold = false
        this.italics = false
        this.underline = false
    }

    setValues(values) {

        if (values != undefined) {

            if (values.color != undefined) this.color = values.color
            if (values.size != undefined) this.size = values.size
            if (values.italics != undefined) this.italics = values.italics
            if (values.underline != undefined) this.underline = values.underline            
            if (values.bold != undefined) this.bold = values.bold

            this.emit("changed", ["all"])
        }
    }

    applyStyle(element) {

        if (element != undefined) {

            element.style["color"] = this.color
            element.style["font-size"] = this.size

            if (this.bold) 
                element.style["font-weight"] = "bold"
            else
                element.style["font-weight"] = "normal"

            if (this.underline) 
                element.style["text-decoration"] = "underline"
            else
                element.style["text-decoration"] = ""

            if (this.italics) 
                element.style["font-style"] = "italic"
            else
                element.style["font-style"] = "normal"
        }
    }

    getColor() {

        return this.color
    }

    setColor(color) {

        this.color = color
        this.emit("changed", "color")
    }

    setSize(size) {

        this.size = size
        this.emit("changed", "size")
    }

    setBold(bold) {

        this.bold = bold
        this.emit("changed", "bold")
    }

    setItalics(italics) {

        this.italics = italics
        this.emit("changed", "italics")
    }

    setUnderline(underline) {

        this.underline = underline
        this.emit("changed", "underline")
    }
}

export {Font}