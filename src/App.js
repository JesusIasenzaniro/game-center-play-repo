import Home from './pages/Home';
import MemoryPage from './pages/MemoryPage';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div className='app'>
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/MemoryPage' component={MemoryPage} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
