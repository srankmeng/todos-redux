import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import TodoListPage from './containers/todoListPage'
import TodoDetailPage from './containers/todoDetailPage'
import reducers from './reducers'
import './style.css'

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};
const store = createStore(
    reducers,
    persistedState,
)

store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>

  	<Router history={history}>
      <Route path="/" component={TodoListPage} />
      <Route path="/detail" component={TodoDetailPage}>
        <Route path="/detail/:itemId" component={TodoDetailPage}/>
      </Route>  
      <Route path="*" component={TodoListPage}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)
