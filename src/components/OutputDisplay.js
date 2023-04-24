import React from 'react';

const OutputDisplay = ({data}) => {
    return (
        <div>
            <h1>Output Display</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <p>{data}</p>
        </div>
    );
};

export default OutputDisplay;