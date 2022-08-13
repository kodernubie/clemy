import {Container} from "./container"
import {Border} from "./border"

class Box extends Container {

    constructor(parent, config) {

        super(parent, config)
    }

    getDefaultConfig(config) {

        config = super.getDefaultConfig(config)

        if (config.width == undefined) config.width = 200
        if (config.height == undefined) config.height = 200
        if (config.border == undefined) config.border = {left: true, right: true, top: true, bottom: true}
        
        return config
    }

    doBorderChanged(field) {

        this.border.applyStyle(this.element)
    }

    createElement() {

        this.border = new Border()
        this.border.on("changed", this.doBorderChanged.bind(this))

        this.element = document.createElement("div")
        this.element.style.position = "absolute"

        this.containerFrame = this.element
    }

    applyConfig(config) {

        super.applyConfig(config)

        if (this.config != undefined) {

            if (this.config.width != undefined) this.setWidth(this.config.width)
            if (this.config.height != undefined) this.setHeight(this.config.height)

            if (this.config.border != undefined) this.border.setValues(this.config.border)
        } 
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

export {Box}