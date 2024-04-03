import '../static/css/App.css';

import FunctionalGreetings from "../components/FunctionalGreetings";
import FunctionalGreetingsWithProps from "../components/FunctionalGreetingsWithProps";

const App = () => {
    return (
        <div className='App'>
            <FunctionalGreetings/>
            <FunctionalGreetingsWithProps greeting='Nice to meet you!' name='Mike' age='32'/>
        </div>
    );
}

export default App