import xo from "@mvneerven/xo-js";

class ExoExampleRoute extends xo.route {
    title = "Home";

    menuIcon = "ti-home";

    async render(path) {
        this._index = parseInt(path.substring(1));
        if(isNaN(this._index)) this._index = 0
        
        this.area.add(await this.run())
    }

    get area() {
        return pwa.UI.areas.form;
    }

    async run(){
        return "No form rendered"
    }

    get index(){
        return this._index;
    }

}

export default ExoExampleRoute;