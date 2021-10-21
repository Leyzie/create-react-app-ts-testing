import React, {useState} from 'react';
import {NavBar} from './components/nav-bar/nav-bar';
import {MENU_NAME} from './constants/menu';
import {CounterComponent} from './components/two-btn/couneter';

function App() {
    const [activeMenu, setMenuValue] = useState(MENU_NAME.COUNTER);

    const renderPages = () => {
        switch (activeMenu) {
            case MENU_NAME.COUNTER:
                return (
                   <>
                       <div className="col s12 row center-align ">
                           <h1>Counter page</h1>
                           <CounterComponent/>
                       </div>
                   </>
                );
            default:
                return (
                    <>
                        <div className="col s12">
                            <h1>Empty page</h1>
                        </div>
                    </>
                );
        }
    }

    return (
        <>
            <NavBar setActivMenu={setMenuValue} activeMenu={activeMenu}/>
            <div className="row center-align">
                {renderPages()}
            </div>
        </>
    );
}

export default App;
