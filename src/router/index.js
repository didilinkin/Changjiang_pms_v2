import React        from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

// 引入组件
import RouterTemplate   from '../views/common/RouterTemplate'
import Test             from '../views/common/Test'


const SetRouter = () => (
    // <Router path={'/'} component={ RouterTemplate }>
    //     <Router exact path='/' component={  }>
    // </Router>
    <Router>
        <div>
            <h1><Link to="/">       测试: 去Template </Link></h1>
            <h1><Link to="/test">   测试: 去Test </Link></h1>

            <hr />

            <Route exact path="/" component={ RouterTemplate } />
            <Route path="/test" component={ Test } />
        </div>
    </Router>
)

export default SetRouter
