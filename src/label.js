import {BaseComponent} from "./base"
import {Font} from "./font"
import {Border} from "./border"

class Label extends BaseComponent {

    constructor(parent, config) {

        super(parent, config)
    }

    doFontChanged(field) {

        this.font.applyStyle(this.element)
    }

    doBorderChanged(field) {

        this.border.applyStyle(this.element)
    }

    getDefaultConfig(config) {

        config = super.getDefaultConfig(config)

        if (config.title == undefined) config.title = "Label"
        if (config.width == undefined) config.width = "fit-content"
        if (config.height == undefined) config.height = "fit-content"

        return config
    }

    createElement() {

        this.font = new Font()
        this.font.on("changed", this.doFontChanged.bind(this))

        this.border = new Border()
        this.border.on("changed", this.doBorderChanged.bind(this))

        this.element = document.createElement("div")
        this.element.style.position = "absolute"
    }

    applyConfig(config) {

        super.applyConfig(config)

        if (this.config != undefined) {

            if (this.config.title != undefined) this.setTitle(this.config.title)
            if (this.config.width != undefined) this.setWidth(this.config.width)
            if (this.config.height != undefined) this.setHeight(this.config.height)
            
            if (this.config.font != undefined) this.font.setValues(this.config.font)
            if (this.config.border != undefined) this.border.setValues(this.config.border)
        } 
    }

    setFocusable(focusable) {
        this.focusable = focusable
    }

    setTitle(title) {
        this.title = title

        if (this.element != undefined) {
            this.element.innerHTML = title
        } 
    }

    getTitle() {

        return this.title
    }

    setWidth(width) {

        this.width = width
        this.applyStyle("width", width)
    }

    setHeight(height) {

        this.height = height
        this.applyStyle("height", height)
    }
}

export {Label}