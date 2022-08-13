import {BaseComponent} from "./base"

class Container extends BaseComponent {

    constructor(parent, config) {

        super(parent, config)

        this.childs = []
    }

    getContainerFrame() {

        return this.containerFrame
    }

    setEventHandler(obj) {

        super.setEventHandler(obj)
    
        for (var i in this.childs) {

            if (this.childs[i].setEventHandler != undefined)
                this.childs[i].setEventHandler(obj)
        }
    } 

    appendChild(comp) {

        if (this.childs.indexOf(comp) < 0) {

            var element = comp.getElement()

            if ((this.containerFrame != undefined) &&
                (element != undefined)) {

                this.containerFrame.appendChild(element)
            }

            this.childs.push(comp)
        } 
    }
}

export {Container}