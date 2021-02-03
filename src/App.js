import './App.scss';

import Layout from 'components/Layout/Layout';
import Landing from 'containers/Landing/Landing';

function App() {
    return (
        <div className="App">
            <Layout>
                <Landing />
            </Layout>
        </div>
    );
}

export default App;
