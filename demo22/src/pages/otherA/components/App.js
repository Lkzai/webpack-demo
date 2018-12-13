import React from 'react'
import { hot } from 'react-hot-loader'
import Common from '../../../commons/components/common'
import ComponentB from './ComponentB'


const App = () => (
    <h1>
        otherA<br />
        <Common/>
        <ComponentB/>
    </h1>
)

export default hot(module)(App)
