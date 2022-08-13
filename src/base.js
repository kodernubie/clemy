import {EventEmitter} from "./eventemitter"

class BaseComponent extends EventEmitter {

    constructor(parent, config) {

        super()

        this.parent = parent
        this.config = this.getDefaultConfig(config)

        this.createElement()

        this.applyConfig()

        if ((this.parent != undefined) && 
            (this.parent.appendChild != undefined)) {
            this.parent.appendChild(this)
        }
    }

    getDefaultConfig(config) {

        if (config == undefined) config = {}

        if (config.id == undefined) config.id = crypto.randomUUID()
        if (config.left == undefined) config.left = 0
        if (config.top == undefined) config.top = 0
        
        return config 
    }
    
    getElement() {

        return this.element
    }

    createElement() {

        this.element = undefined
    }

    applyConfig() {

        if (this.config != undefined) {
        
            if (this.config.id != undefined) this.setId(this.config.id)
            if (this.config.left != undefined) this.setLeft(this.config.left)
            if (this.config.top != undefined) this.setTop(this.config.top)
        }
    }

    getId() {

        return this.id
    }

    setId(id) {

        this.id = id
    }

    setLeft(left) {

        this.left = left

        if (this.element != undefined) {

            this.element.style.left = this.left
        } 
    }

    setTop(top) {

        this.top = top

        if (this.element != undefined) {

            this.element.style.top = this.top
        } 
    }

    applyStyle(name, val) {

        if (this.element != undefined) {

            this.element.style[name] = val
        }
    }
}

export {BaseComponent}