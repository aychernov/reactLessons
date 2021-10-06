import logo from './logo.svg';
import './App.css';

const App = () => {
    return (
        <div>
            <Header/>
            <Technologies/>
        </div>
    );
}

const Header = () => {
    return (
        <div>
            <a href="#">Home</a>
            <a href="#">News feed</a>
            <a href="#">Messages</a>
        </div>
    )
}

const Technologies = () => {
    return(
        <div>
            <ul>
                <li>1</li>
                <li>1</li>
                <li>1</li>
            </ul>
        </div>
    )
}


export default App;
