import React from 'react'
import { hot } from 'react-hot-loader'
import Common from '../../../commons/components/common'
import ComponentA from './ComponentA'

const App = () => (
    <h1>
        Index Changing!<br />
        <Common/>
        <ComponentA/>
    </h1>
)

export default hot(module)(App)