import './App.scss';

import Layout from 'components/Layout/Layout';
import Game from 'containers/Game/Game';

function App() {
    return (
        <div className="App">
            <Layout>
                <Game />
            </Layout> 
        </div>
    );
}

export default App;
