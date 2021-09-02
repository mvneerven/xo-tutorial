
import ExoExampleRoute from '../modules/ExoExampleRoute';
import examples from '../examples';

class HomeRoute extends ExoExampleRoute {

    async run(){

        return await examples[this.index].f.apply(this)
        
    }

}

export default HomeRoute;