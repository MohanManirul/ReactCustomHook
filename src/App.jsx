
import useFetch from './components/useFetch';
import useFetchApi from './components/useFetchApi';



const App = () => {

    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

    const [ apiData, loading, error ] = useFetchApi("https://jsonplaceholder.typicode.com/posts");
    console.log(apiData);
    
    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error:{error}</p>;

    return (
        <div>
            <p>Posts:</p>


        {

            apiData.map((post) => (
                    <p key={post.id}>{post.title}</p>
                
            ))

        }

         
        </div>
    );
};

export default App;