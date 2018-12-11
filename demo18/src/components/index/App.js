import React from 'react'
import { hot } from 'react-hot-loader'
import { cube } from './test.js';

const App = () => (
    <h1>
        Index Changin<br />

    </h1>
)

console.log(cube());

export default hot(module)(App)