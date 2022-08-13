class EventEmitter {

    constructor() {

        this.handlerMap = {}
        this.eventHandler = undefined
    }

    setEventHandler(obj) {

        this.eventHandler = obj
    } 

    on(name, handler) {

        var list = this.handlerMap[name] 
        
        if (list == undefined) list = []
        
        if (list.indexOf(handler) <= 0) list.push(handler)

        this.handlerMap[name] = list
    }

    emit(name, param) {

        var list = this.handlerMap[name]

        if (list != undefined) {

            if (param == undefined) param = []
                
            for (var i in list) {

                if (typeof list[i] === 'function') list[i](...param)
                else if ((typeof list[i] === 'string') && 
                            (this.eventHandler != undefined) && 
                            (this.eventHandler[list[i]] != undefined)) this.eventHandler[list[i]].apply(this.eventHandler, param)
            } 
        }
    }
}

export {EventEmitter}
