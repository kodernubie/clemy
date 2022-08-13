function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $5c447b097a3f2944$exports = {};

$parcel$export($5c447b097a3f2944$exports, "EventEmitter", () => $5c447b097a3f2944$export$4fae95256245c8c0);
class $5c447b097a3f2944$export$4fae95256245c8c0 {
    constructor(){
        this.handlerMap = {};
        this.eventHandler = undefined;
    }
    setEventHandler(obj) {
        this.eventHandler = obj;
    }
    on(name, handler) {
        var list = this.handlerMap[name];
        if (list == undefined) list = [];
        if (list.indexOf(handler) <= 0) list.push(handler);
        this.handlerMap[name] = list;
    }
    emit(name, param) {
        var list = this.handlerMap[name];
        if (list != undefined) {
            if (param == undefined) param = [];
            for(var i in list){
                if (typeof list[i] === "function") list[i](...param);
                else if (typeof list[i] === "string" && this.eventHandler != undefined && this.eventHandler[list[i]] != undefined) this.eventHandler[list[i]].apply(this.eventHandler, param);
            }
        }
    }
}


var $590e09e25023eb1b$exports = {};

$parcel$export($590e09e25023eb1b$exports, "Font", () => $590e09e25023eb1b$export$89abf52a030e56ee);

class $590e09e25023eb1b$export$89abf52a030e56ee extends (0, $5c447b097a3f2944$export$4fae95256245c8c0) {
    constructor(){
        super();
        this.color = "black";
        this.size = 12;
        this.bold = false;
        this.italics = false;
        this.underline = false;
    }
    setValues(values) {
        if (values != undefined) {
            if (values.color != undefined) this.color = values.color;
            if (values.size != undefined) this.size = values.size;
            if (values.italics != undefined) this.italics = values.italics;
            if (values.underline != undefined) this.underline = values.underline;
            if (values.bold != undefined) this.bold = values.bold;
            this.emit("changed", [
                "all"
            ]);
        }
    }
    applyStyle(element) {
        if (element != undefined) {
            element.style["color"] = this.color;
            element.style["font-size"] = this.size;
            if (this.bold) element.style["font-weight"] = "bold";
            else element.style["font-weight"] = "normal";
            if (this.underline) element.style["text-decoration"] = "underline";
            else element.style["text-decoration"] = "";
            if (this.italics) element.style["font-style"] = "italic";
            else element.style["font-style"] = "normal";
        }
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
        this.emit("changed", "color");
    }
    setSize(size) {
        this.size = size;
        this.emit("changed", "size");
    }
    setBold(bold) {
        this.bold = bold;
        this.emit("changed", "bold");
    }
    setItalics(italics) {
        this.italics = italics;
        this.emit("changed", "italics");
    }
    setUnderline(underline) {
        this.underline = underline;
        this.emit("changed", "underline");
    }
}


var $efb1577351e04c62$exports = {};

$parcel$export($efb1577351e04c62$exports, "Border", () => $efb1577351e04c62$export$d8e9c9d63e86d41e);

class $efb1577351e04c62$export$d8e9c9d63e86d41e extends (0, $5c447b097a3f2944$export$4fae95256245c8c0) {
    constructor(config){
        super();
        config = this.getDefaultConfig(config);
        this.setValues(config);
    }
    getDefaultConfig(config) {
        if (config == undefined) config = {};
        if (config.left == undefined) config.left = false;
        if (config.top == undefined) config.top = false;
        if (config.right == undefined) config.right = false;
        if (config.bottom == undefined) config.bottom = false;
        if (config.width == undefined) config.width = "thin";
        if (config.color == undefined) config.color = "black";
        if (config.style == undefined) config.style = "solid";
        return config;
    }
    setValues(values) {
        if (values != undefined) {
            if (values.left != undefined) this.left = values.left;
            if (values.top != undefined) this.top = values.top;
            if (values.right != undefined) this.right = values.right;
            if (values.bottom != undefined) this.bottom = values.bottom;
            if (values.width != undefined) this.width = values.width;
            if (values.color != undefined) this.color = values.color;
            if (values.style != undefined) this.style = values.style;
            this.emit("changed", [
                "all"
            ]);
        }
    }
    applyStyle(element) {
        if (element != undefined) {
            if (this.top) {
                if (this.topWidth != undefined) element.style["border-top-width"] = this.topWidth;
                else element.style["border-top-width"] = this.width;
                if (this.topColor != undefined) element.style["border-top-color"] = this.topColor;
                else element.style["border-top-color"] = this.color;
                if (this.topStyle != undefined) element.style["border-top-style"] = this.topStyle;
                else element.style["border-top-style"] = this.style;
            } else element.style["border-top"] = "";
            if (this.left) {
                if (this.leftWidth != undefined) element.style["border-left-width"] = this.leftWidth;
                else element.style["border-left-width"] = this.width;
                if (this.leftColor != undefined) element.style["border-left-color"] = this.leftColor;
                else element.style["border-left-color"] = this.color;
                if (this.leftStyle != undefined) element.style["border-left-style"] = this.leftStyle;
                else element.style["border-left-style"] = this.style;
            } else element.style["border-left"] = "";
            if (this.right) {
                if (this.rightWidth != undefined) element.style["border-right-width"] = this.rightWidth;
                else element.style["border-right-width"] = this.width;
                if (this.rightColor != undefined) element.style["border-right-color"] = this.rightColor;
                else element.style["border-right-color"] = this.color;
                if (this.rightStyle != undefined) element.style["border-right-style"] = this.rightStyle;
                else element.style["border-right-style"] = this.style;
            } else element.style["border-right"] = "";
            if (this.bottom) {
                if (this.bottomWidth != undefined) element.style["border-bottom-width"] = this.bottomWidth;
                else element.style["border-bottom-width"] = this.width;
                if (this.bottomColor != undefined) element.style["border-bottom-color"] = this.bottomColor;
                else element.style["border-bottom-color"] = this.color;
                if (this.bottomStyle != undefined) element.style["border-bottom-style"] = this.bottomStyle;
                else element.style["border-bottom-style"] = this.style;
            } else element.style["border-bottom"] = "";
        }
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
        this.emit("changed", "color");
    }
    setWidth(width) {
        this.width = width;
        this.emit("changed", "width");
    }
    setStyle(style) {
        this.style = style;
        this.emit("changed", "style");
    }
}


var $8857867ee3ddfad5$exports = {};

$parcel$export($8857867ee3ddfad5$exports, "BaseComponent", () => $8857867ee3ddfad5$export$55ae5207ce896a6b);

class $8857867ee3ddfad5$export$55ae5207ce896a6b extends (0, $5c447b097a3f2944$export$4fae95256245c8c0) {
    constructor(parent, config){
        super();
        this.parent = parent;
        this.config = this.getDefaultConfig(config);
        this.createElement();
        this.applyConfig();
        if (this.parent != undefined && this.parent.appendChild != undefined) this.parent.appendChild(this);
    }
    getDefaultConfig(config) {
        if (config == undefined) config = {};
        if (config.id == undefined) config.id = crypto.randomUUID();
        if (config.left == undefined) config.left = 0;
        if (config.top == undefined) config.top = 0;
        return config;
    }
    getElement() {
        return this.element;
    }
    createElement() {
        this.element = undefined;
    }
    applyConfig() {
        if (this.config != undefined) {
            if (this.config.id != undefined) this.setId(this.config.id);
            if (this.config.left != undefined) this.setLeft(this.config.left);
            if (this.config.top != undefined) this.setTop(this.config.top);
        }
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    setLeft(left) {
        this.left = left;
        if (this.element != undefined) this.element.style.left = this.left;
    }
    setTop(top) {
        this.top = top;
        if (this.element != undefined) this.element.style.top = this.top;
    }
    applyStyle(name, val) {
        if (this.element != undefined) this.element.style[name] = val;
    }
}


var $bbe6a237c87c63ed$exports = {};

$parcel$export($bbe6a237c87c63ed$exports, "Container", () => $bbe6a237c87c63ed$export$42a852a2b6b56249);

class $bbe6a237c87c63ed$export$42a852a2b6b56249 extends (0, $8857867ee3ddfad5$export$55ae5207ce896a6b) {
    constructor(parent, config){
        super(parent, config);
        this.childs = [];
    }
    getContainerFrame() {
        return this.containerFrame;
    }
    setEventHandler(obj) {
        super.setEventHandler(obj);
        for(var i in this.childs)if (this.childs[i].setEventHandler != undefined) this.childs[i].setEventHandler(obj);
    }
    appendChild(comp) {
        if (this.childs.indexOf(comp) < 0) {
            var element = comp.getElement();
            if (this.containerFrame != undefined && element != undefined) this.containerFrame.appendChild(element);
            this.childs.push(comp);
        }
    }
}


var $e05782b8f6baf6a3$exports = {};

$parcel$export($e05782b8f6baf6a3$exports, "App", () => $e05782b8f6baf6a3$export$86fbec116b87613f);

class $e05782b8f6baf6a3$export$86fbec116b87613f extends (0, $bbe6a237c87c63ed$export$42a852a2b6b56249) {
    constructor(frame){
        super(null);
        this.frame = frame;
        this.containerFrame = frame;
        this.containerFrame.style.position = "absolute";
    }
}


var $7256ed866e50d4e0$exports = {};

$parcel$export($7256ed866e50d4e0$exports, "Button", () => $7256ed866e50d4e0$export$353f5b6fc5456de1);

class $7256ed866e50d4e0$export$353f5b6fc5456de1 extends (0, $8857867ee3ddfad5$export$55ae5207ce896a6b) {
    constructor(parent, config){
        super(parent, config);
    }
    getDefaultConfig(config) {
        config = super.getDefaultConfig(config);
        if (config.focusable == undefined) config.focusable = true;
        if (config.title == undefined) config.title = "Button";
        return config;
    }
    createElement() {
        if (this.config.focusable) this.element = document.createElement("button");
        else this.element = document.createElement("a");
        this.element.className = "button";
        this.element.style.position = "absolute";
        var self = this;
        this.element.onclick = function() {
            self.emit("click");
        };
        this.element.onfocus = function() {
            self.emit("focus");
        };
        this.element.onblur = function() {
            self.emit("lostFocus");
        };
    }
    applyConfig(config) {
        super.applyConfig(config);
        if (this.config != undefined) {
            if (this.config.icon != undefined) this.icon = this.config.icon;
            if (this.config.title != undefined) this.title = this.config.title;
            this.updateTitle();
            if (this.config.color != undefined) this.color = this.config.color;
            if (this.config.size != undefined) this.size = this.config.size;
            this.updateClass();
        }
    }
    setFocusable(focusable) {
        this.focusable = focusable;
    }
    setIcon(icon) {
        this.icon = icon;
        this.updateTitle();
    }
    setTitle(title) {
        this.title = title;
        this.updateTitle();
    }
    updateTitle() {
        if (this.element != undefined) {
            var inHtml = "";
            if (this.icon != undefined && this.icon != "") inHtml += "<span class='icon is-small'><i class='fa fa-" + this.icon + "'></i></span>";
            if (this.title != undefined && this.title != "") inHtml += "<span>" + this.title + "</span>";
            this.element.innerHTML = inHtml;
        }
    }
    getTitle() {
        return this.title;
    }
    focus() {
        if (this.element != undefined) this.element.focus();
    }
    setColor(color) {
        this.color = color;
        this.updateClass();
    }
    updateClass() {
        if (this.element != undefined) {
            var classList = "button";
            switch(this.color){
                case "white":
                case "light":
                case "dark":
                case "primary":
                case "link":
                case "info":
                case "success":
                case "warning":
                case "danger":
                    classList += " is-" + this.color;
                    break;
            }
            switch(this.size){
                case "small":
                case "normal":
                case "medium":
                case "large":
                    classList += " is-" + this.size;
                    break;
            }
            this.element.className = classList;
        }
    }
    setSize(size) {
        this.size = size;
        this.updateClass();
    }
    setColor(color) {
        this.color = color;
        this.updateClass();
    }
}


var $63e2507866f11d0b$exports = {};

$parcel$export($63e2507866f11d0b$exports, "Label", () => $63e2507866f11d0b$export$b04be29aa201d4f5);



class $63e2507866f11d0b$export$b04be29aa201d4f5 extends (0, $8857867ee3ddfad5$export$55ae5207ce896a6b) {
    constructor(parent, config){
        super(parent, config);
    }
    doFontChanged(field) {
        this.font.applyStyle(this.element);
    }
    doBorderChanged(field) {
        this.border.applyStyle(this.element);
    }
    getDefaultConfig(config) {
        config = super.getDefaultConfig(config);
        if (config.title == undefined) config.title = "Label";
        if (config.width == undefined) config.width = "fit-content";
        if (config.height == undefined) config.height = "fit-content";
        return config;
    }
    createElement() {
        this.font = new (0, $590e09e25023eb1b$export$89abf52a030e56ee)();
        this.font.on("changed", this.doFontChanged.bind(this));
        this.border = new (0, $efb1577351e04c62$export$d8e9c9d63e86d41e)();
        this.border.on("changed", this.doBorderChanged.bind(this));
        this.element = document.createElement("div");
        this.element.style.position = "absolute";
    }
    applyConfig(config) {
        super.applyConfig(config);
        if (this.config != undefined) {
            if (this.config.title != undefined) this.setTitle(this.config.title);
            if (this.config.width != undefined) this.setWidth(this.config.width);
            if (this.config.height != undefined) this.setHeight(this.config.height);
            if (this.config.font != undefined) this.font.setValues(this.config.font);
            if (this.config.border != undefined) this.border.setValues(this.config.border);
        }
    }
    setFocusable(focusable) {
        this.focusable = focusable;
    }
    setTitle(title) {
        this.title = title;
        if (this.element != undefined) this.element.innerHTML = title;
    }
    getTitle() {
        return this.title;
    }
    setWidth(width) {
        this.width = width;
        this.applyStyle("width", width);
    }
    setHeight(height) {
        this.height = height;
        this.applyStyle("height", height);
    }
}


var $b25a2404e7d2771e$exports = {};

$parcel$export($b25a2404e7d2771e$exports, "Box", () => $b25a2404e7d2771e$export$e71c4d32a2263218);


class $b25a2404e7d2771e$export$e71c4d32a2263218 extends (0, $bbe6a237c87c63ed$export$42a852a2b6b56249) {
    constructor(parent, config){
        super(parent, config);
    }
    getDefaultConfig(config) {
        config = super.getDefaultConfig(config);
        if (config.width == undefined) config.width = 200;
        if (config.height == undefined) config.height = 200;
        if (config.border == undefined) config.border = {
            left: true,
            right: true,
            top: true,
            bottom: true
        };
        return config;
    }
    doBorderChanged(field) {
        this.border.applyStyle(this.element);
    }
    createElement() {
        this.border = new (0, $efb1577351e04c62$export$d8e9c9d63e86d41e)();
        this.border.on("changed", this.doBorderChanged.bind(this));
        this.element = document.createElement("div");
        this.element.style.position = "absolute";
        this.containerFrame = this.element;
    }
    applyConfig(config) {
        super.applyConfig(config);
        if (this.config != undefined) {
            if (this.config.width != undefined) this.setWidth(this.config.width);
            if (this.config.height != undefined) this.setHeight(this.config.height);
            if (this.config.border != undefined) this.border.setValues(this.config.border);
        }
    }
    setWidth(width) {
        this.width = width;
        this.applyStyle("width", width);
    }
    setHeight(height) {
        this.height = height;
        this.applyStyle("height", height);
    }
}


var $28fbac336cbd10c1$exports = {};

$parcel$export($28fbac336cbd10c1$exports, "Edit", () => $28fbac336cbd10c1$export$6ed0965c9443aaa6);

class $28fbac336cbd10c1$export$6ed0965c9443aaa6 extends (0, $8857867ee3ddfad5$export$55ae5207ce896a6b) {
    constructor(parent, config){
        super(parent, config);
    }
    getDefaultConfig(config) {
        config = super.getDefaultConfig(config);
        if (config.type == undefined) config.type = "text";
        if (config.width == undefined) config.width = 120;
        return config;
    }
    createElement() {
        this.element = document.createElement("input");
        this.element.style.position = "absolute";
        this.element.className = "input";
        var self = this;
        this.element.onfocus = function() {
            self.emit("focus");
        };
        this.element.onblur = function() {
            self.emit("lostFocus");
        };
    }
    applyConfig(config) {
        super.applyConfig(config);
        if (this.config != undefined) {
            if (this.config.type != undefined) this.setType(this.config.type);
            if (this.config.width != undefined) this.setWidth(this.config.width);
            if (this.config.size != undefined) this.size = this.config.size;
            this.updateClass();
        }
    }
    setType(type) {
        this.type = type;
        if (this.element != undefined) this.element.type = this.type;
    }
    focus() {
        if (this.element != undefined) this.element.focus();
    }
    setWidth(width) {
        this.width = width;
        this.applyStyle("width", width);
    }
    updateClass() {
        if (this.element != undefined) {
            var classList = "input";
            switch(this.color){
                case "white":
                case "light":
                case "dark":
                case "primary":
                case "link":
                case "info":
                case "success":
                case "warning":
                case "danger":
                    classList += " is-" + this.color;
                    break;
            }
            switch(this.size){
                case "small":
                case "normal":
                case "medium":
                case "large":
                    classList += " is-" + this.size;
                    break;
            }
            this.element.className = classList;
        }
    }
    setSize(size) {
        this.size = size;
        this.updateClass();
    }
    setColor(color) {
        this.color = color;
        this.updateClass();
    }
}


var $a70e04dd2d30b721$exports = {};

$parcel$export($a70e04dd2d30b721$exports, "CheckBox", () => $a70e04dd2d30b721$export$ea5f704b89d806f6);

class $a70e04dd2d30b721$export$ea5f704b89d806f6 extends (0, $8857867ee3ddfad5$export$55ae5207ce896a6b) {
    constructor(parent, config){
        super(parent, config);
    }
    getDefaultConfig(config) {
        config = super.getDefaultConfig(config);
        if (config.width == undefined) config.width = 120;
        return config;
    }
    createElement() {
        /*
            <label class="checkbox">
                <input type="checkbox">
                <span>Remember me</span>
            </label>
        */ this.element = document.createElement("label");
        this.element.style.position = "absolute";
        this.element.className = "checkbox";
        subInput = document.createElement("input");
        subInput.type = "checkbox";
        subLabel = document.createElement("span");
        subLabel.innerHTML = this.title;
        var self = this;
        subInput.onfocus = function() {
            self.emit("focus");
        };
        subInput.onblur = function() {
            self.emit("lostFocus");
        };
        subInput.onblur = function() {
            self.emit("lostFocus");
        };
    }
    applyConfig(config) {
        super.applyConfig(config);
        if (this.config != undefined) {
            if (this.config.type != undefined) this.setType(this.config.type);
            if (this.config.width != undefined) this.setWidth(this.config.width);
            if (this.config.size != undefined) this.size = this.config.size;
            this.updateClass();
        }
    }
    setType(type) {
        this.type = type;
        if (this.element != undefined) this.element.type = this.type;
    }
    focus() {
        if (this.element != undefined) this.element.focus();
    }
    setWidth(width) {
        this.width = width;
        this.applyStyle("width", width);
    }
    updateClass() {
        if (this.element != undefined) {
            var classList = "input";
            switch(this.color){
                case "white":
                case "light":
                case "dark":
                case "primary":
                case "link":
                case "info":
                case "success":
                case "warning":
                case "danger":
                    classList += " is-" + this.color;
                    break;
            }
            switch(this.size){
                case "small":
                case "normal":
                case "medium":
                case "large":
                    classList += " is-" + this.size;
                    break;
            }
            this.element.className = classList;
        }
    }
    setSize(size) {
        this.size = size;
        this.updateClass();
    }
    setColor(color) {
        this.color = color;
        this.updateClass();
    }
}




export {$5c447b097a3f2944$export$4fae95256245c8c0 as EventEmitter, $590e09e25023eb1b$export$89abf52a030e56ee as Font, $efb1577351e04c62$export$d8e9c9d63e86d41e as Border, $8857867ee3ddfad5$export$55ae5207ce896a6b as BaseComponent, $bbe6a237c87c63ed$export$42a852a2b6b56249 as Container, $e05782b8f6baf6a3$export$86fbec116b87613f as App, $7256ed866e50d4e0$export$353f5b6fc5456de1 as Button, $63e2507866f11d0b$export$b04be29aa201d4f5 as Label, $b25a2404e7d2771e$export$e71c4d32a2263218 as Box, $28fbac336cbd10c1$export$6ed0965c9443aaa6 as Edit, $a70e04dd2d30b721$export$ea5f704b89d806f6 as CheckBox};
//# sourceMappingURL=module.js.map
