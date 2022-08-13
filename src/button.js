import {BaseComponent} from "./base"

class Button extends BaseComponent {

    constructor(parent, config) {

        super(parent, config)
    }

    getDefaultConfig(config) {

        config = super.getDefaultConfig(config)

        if (config.focusable == undefined) config.focusable = true
        if (config.title == undefined) config.title = "Button"
        
        return config
    }

    createElement() {

        if (this.config.focusable) {

            this.element = document.createElement("button")
        } else {
            this.element = document.createElement("a")
        }

        this.element.className = "button"
        this.element.style.position = "absolute"

        var self = this
        this.element.onclick = function() {
            self.emit("click")
        }

        this.element.onfocus = function() {
            self.emit("focus")
        }

        this.element.onblur = function() {
            self.emit("lostFocus")
        }
    }

    applyConfig(config) {

        super.applyConfig(config)

        if (this.config != undefined) {

            if (this.config.icon != undefined) this.icon = this.config.icon
            if (this.config.title != undefined) this.title = this.config.title

            this.updateTitle()

            if (this.config.color != undefined) this.color =this.config.color
            if (this.config.size != undefined) this.size =this.config.size

            this.updateClass()
        } 
    }

    setFocusable(focusable) {
        this.focusable = focusable
    }

    setIcon(icon) {
        this.icon = icon
        this.updateTitle() 
    }

    setTitle(title) {
        this.title = title
        this.updateTitle()
    }

    updateTitle() {

        if (this.element != undefined) {

            var inHtml = ""

            if ((this.icon != undefined) && (this.icon != ""))
                inHtml += "<span class='icon is-small'><i class='fa fa-" + this.icon + "'></i></span>"

            if ((this.title != undefined) && (this.title != ""))
                inHtml += "<span>" + this.title + "</span>"

            this.element.innerHTML = inHtml
        }
    }

    getTitle() {

        return this.title
    }

    focus() {

        if (this.element != undefined) this.element.focus()
    }

    setColor(color) {

        this.color = color
        this.updateClass()
    }

    updateClass() {

        if (this.element != undefined) {

            var classList = "button"

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

export {Button}