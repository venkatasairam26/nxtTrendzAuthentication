import {Route, Switch} from 'react-router-dom'

import Home from './components/Home/index'
import LogIn from './components/LoginForm/index'
import NotFound from './components/NotFound/index'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
