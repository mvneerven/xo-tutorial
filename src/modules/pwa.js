import xo from "@mvneerven/xo-js";
import examples from '../examples';

class PWA extends xo.pwa {

    async routerReady() {
        const hr = document.createElement("hr");
        pwa.UI.areas.nav.add(hr);

        pwa.UI.areas.nav.add(await this.getSelector());
        
        const hash = document.location.hash;
        if(hash && hash.split("//")[1]){
            let index = parseInt(hash.split("//")[1]);
            document.querySelector("[data-pwa-area='nav'] select").selectedIndex =    index;
        }
        this.selectExample();    
    }

    async getSelector(){
        const schema = {
            type: "dropdown",
            name: "selector",
            items: examples.map(i=>{
                return {
                    name: "Example: " + i.n,
                    value: 0
                }
            })
        }
        const dd = await xo.form.run(schema);
        dd.addEventListener("change", this.selectExample.bind(this))
        return dd
    }

    selectExample(e){
        
        e = e || {target: document.querySelector("[data-pwa-area='nav'] select")}
        const i = e.target.selectedIndex;
        document.location.hash = "#//" + i;

        document.querySelector("body > h1").innerHTML = `ExoForm - ${e.target.options[i].innerHTML}`         
    }
}

export default PWA;
