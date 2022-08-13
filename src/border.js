import {EventEmitter} from "./eventemitter"

class Border extends EventEmitter {

    constructor(config) {
        super()

        config = this.getDefaultConfig(config)

        this.setValues(config)
    }

    getDefaultConfig(config) {

        if (config == undefined) config = {}

        if (config.left == undefined) config.left = false
        if (config.top == undefined) config.top = false
        if (config.right == undefined) config.right = false
        if (config.bottom == undefined) config.bottom = false
        if (config.width == undefined) config.width = "thin"
        if (config.color == undefined) config.color = "black"
        if (config.style == undefined) config.style = "solid"
        
        return config 
    }

    setValues(values) {

        if (values != undefined) {

            if (values.left != undefined) this.left = values.left
            if (values.top != undefined) this.top = values.top
            if (values.right != undefined) this.right = values.right
            if (values.bottom != undefined) this.bottom = values.bottom            
            if (values.width != undefined) this.width = values.width
            if (values.color != undefined) this.color = values.color
            if (values.style != undefined) this.style = values.style

            this.emit("changed", ["all"])
        }
    }

    applyStyle(element) {

        if (element != undefined) {

            if (this.top) {

                if (this.topWidth != undefined) 
                    element.style["border-top-width"] = this.topWidth
                else
                    element.style["border-top-width"] = this.width

                if (this.topColor != undefined) 
                    element.style["border-top-color"] = this.topColor
                else 
                    element.style["border-top-color"] = this.color

                if (this.topStyle != undefined) 
                    element.style["border-top-style"] = this.topStyle
                else 
                    element.style["border-top-style"] = this.style
            } else
                element.style["border-top"] = ""
            
            if (this.left) {

                if (this.leftWidth != undefined) 
                    element.style["border-left-width"] = this.leftWidth
                else
                    element.style["border-left-width"] = this.width

                if (this.leftColor != undefined) 
                    element.style["border-left-color"] = this.leftColor
                else 
                    element.style["border-left-color"] = this.color

                if (this.leftStyle != undefined) 
                    element.style["border-left-style"] = this.leftStyle
                else 
                    element.style["border-left-style"] = this.style
            } else
                element.style["border-left"] = ""
            
            if (this.right) {

                if (this.rightWidth != undefined) 
                    element.style["border-right-width"] = this.rightWidth
                else
                    element.style["border-right-width"] = this.width

                if (this.rightColor != undefined) 
                    element.style["border-right-color"] = this.rightColor
                else 
                    element.style["border-right-color"] = this.color

                if (this.rightStyle != undefined) 
                    element.style["border-right-style"] = this.rightStyle
                else 
                    element.style["border-right-style"] = this.style
            } else
                element.style["border-right"] = ""

            if (this.bottom) {

                if (this.bottomWidth != undefined) 
                    element.style["border-bottom-width"] = this.bottomWidth
                else
                    element.style["border-bottom-width"] = this.width

                if (this.bottomColor != undefined) 
                    element.style["border-bottom-color"] = this.bottomColor
                else 
                    element.style["border-bottom-color"] = this.color

                if (this.bottomStyle != undefined) 
                    element.style["border-bottom-style"] = this.bottomStyle
                else 
                    element.style["border-bottom-style"] = this.style
            } else
                element.style["border-bottom"] = ""
        }
    }

    getColor() {

        return this.color
    }

    setColor(color) {

        this.color = color
        this.emit("changed", "color")
    }

    setWidth(width) {

        this.width = width
        this.emit("changed", "width")
    }

    setStyle(style) {

        this.style = style
        this.emit("changed", "style")
    }
}

export {Border}