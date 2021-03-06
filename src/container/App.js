import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom'
import { renderRoutes, matchRoutes } from 'react-router-config'
import Header from '../components/Header';
import actions from '../store/actions/session';
import styles from './App.css';
import withStyle from '../withStyle';
class App extends Component {
  render() {
    return (
      <Fragment>
        <Header staticContext={this.props.staticContext} />
        {/* <div className='container' style={{ marginTop: 70 }}> */}
        <div className='container' className={styles.app}>
          {/* 如何拿到App路由的component对象 
          react-router-config 把 这个 值挂载到当前对象上面了
          */}

          {renderRoutes(this.props.route.routes)}

          {/* 那算是找到问题所在了. 因为这个报错 找了很久很久的错误!!! */}
          {/* {renderRoutes(this.props.route.routes)} */}
        </div>
      </Fragment>
    );
  }
}

App.loadData = function (store) {
  return store.dispatch(actions.getUser());
}

export default withStyle(App, styles)