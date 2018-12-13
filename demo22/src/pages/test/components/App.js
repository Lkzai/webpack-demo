import React from 'react'
import { hot } from 'react-hot-loader'
import Common from '../../../commons/components/common'
import ComponentD from './ComponentD'


const App = () => (
    <h1>
        Test Change<br />
        <Common/>
        <ComponentD/>
    </h1>
)

export default hot(module)(App)