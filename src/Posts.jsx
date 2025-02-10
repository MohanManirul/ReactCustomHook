import React from 'react';

const Posts = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/posts");
    return (
        <div>
            
        </div>
    );
};

export default Posts;