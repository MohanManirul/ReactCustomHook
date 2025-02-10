
import CardExample from './components/CardExample';
import Accordion from './components/Accordion';
import Avatar from './components/Avatar';
import Badge from './components/Badge';
import AlertDialog from './components/AlertDialog';
import Header from './components/Header';
import Footer from './components/Footer';
import RightBar from './components/RightBar';
import CircularProgressBar from './components/CircularProgressBar';
import DashboardCard from './components/DashboardCard';

import useFetch from './components/useFetch';
import useFetchApi from './components/useFetchApi';



const App = () => {

    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

    const [ apiData, loading, error ] = useFetchApi("https://jsonplaceholder.typicode.com/posts");

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error:{error}</p>;

    return (
        <div>
            <p>Posts:</p>

        {
            apiData.map((post)=>{
                <p key={post.id}>{post.title}</p>
            })
        }

        <h2>Simple JSON Fetch</h2>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>

            <CardExample />
            <hr />
            <button className='btn btn-success'>Click me</button>
            <br />
            <Accordion />
            <hr />
            <Avatar />
            <br />
            <Badge/>
            <hr />
            <AlertDialog />
            <hr />
            <Header />
            <hr />
            <Footer />
            <hr />
            <RightBar />
            <hr />
            <CircularProgressBar/>
            <hr />
            <DashboardCard/>
        </div>
    );
};

export default App;