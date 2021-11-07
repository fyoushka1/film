import Header from "./components/Header/Header";
import Home from "./page/Home/Home";
import {Route} from 'react-router-dom'
import Film from "./page/Film/Film";


function App() {

  return (
    <div className="App">
			<Header/>
			<Route exact path='/' component={Home} />
			<Route exact path='/film' component={Film} />
    </div>
  );
}

export default App;
