import {BaseComponent} from "./base"

class CheckBox extends BaseComponent {

    constructor(parent, config) {

        super(parent, config)
    }

    getDefaultConfig(config) {

        config = super.getDefaultConfig(config)

        if (config.width == undefined) config.width = 120
        
        return config
    }

    createElement() {

        /*
            <label class="checkbox">
                <input type="checkbox">
                <span>Remember me</span>
            </label>
        */
        this.element = document.createElement("label")
        this.element.style.position = "absolute"
        this.element.className = "checkbox"

        subInput = document.createElement("input")
        subInput.type = "checkbox"

        subLabel = document.createElement("span")
        subLabel.innerHTML = this.title

        var self = this 
        subInput.onfocus = function() {
            self.emit("focus")
        }

        subInput.onblur = function() {
            self.emit("lostFocus")
        }

        subInput.onblur = function() {
            self.emit("lostFocus")
        }
    }

    applyConfig(config) {

        super.applyConfig(config)

        if (this.config != undefined) {

            if (this.config.type != undefined) this.setType(this.config.type)
            if (this.config.width != undefined) this.setWidth(this.config.width)
            
            if (this.config.size != undefined) this.size =this.config.size

            this.updateClass()
        } 
    }

    setType(type) {
        this.type = type
        
        if (this.element != undefined) this.element.type = this.type 
    }

    focus() {

        if (this.element != undefined) this.element.focus()
    }

    setWidth(width) {

        this.width = width
        this.applyStyle("width", width)
    }

    updateClass() {

        if (this.element != undefined) {

            var classList = "input"

            switch (this.color) {
                case "white" :
                case "light" :
                case "dark" :
                case "primary" :
                case "link" :
                case "info" :
                case "success" :
                case "warning" :
                case "danger" :
                        classList += " is-" + this.color
                        break
            }

            switch (this.size) {
                case "small" :
                case "normal" :
                case "medium" :
                case "large" :
                        classList += " is-" + this.size
                        break
            }

            this.element.className = classList
        }
    }

    setSize(size) {

        this.size = size

        this.updateClass()
    }

    setColor(color) {

        this.color = color

        this.updateClass()
    }
}

export {CheckBox}