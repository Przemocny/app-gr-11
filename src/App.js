import React from 'react'
import { BrowserRouter as Router, HashRouter, Switch, Route, Link } from 'react-router-dom'

import Header from './common/Header'
import Footer from './common/Footer'
import AlertWithClose from './common/AlertWithClose'
import Stepper from './common/Stepper'
import LayoutWithSideMenu from './common/LayoutWithSideMenu'

import Attention from './sections/Attention'
import AboutUs from './sections/AboutUs'
import Services from './sections/Services'
import ContactForm from './sections/Contact'
import LifecycleComponent from './sections/LifecycleComponent'

import './App.css'

const View1=() => {
	return <h1>View1</h1>
}

const View2 = () => {
	return <h1>View2</h1>
}

const Menu = () => {
	return (
		<ul>
			<li>
				<Link to='/view1'>View1</Link>
			</li>
			<li>
				<Link to='/view2'>View2</Link>
			</li>
		</ul>
	)
}

const Views = () => {
	return (
		<Switch>
			<Route exact path='/view1'>
				<View1 />
			</Route>
			<Route exact path='/view2'>
				<View2 />
			</Route>
		</Switch>
	)
}

class App extends React.Component {
	componentDidMount() {}

	render() {
		return (
			<div className='App' style={{ margin: 30 }}>
				<div />
				<Router>
					<div>
						<Menu />
						<Views />
					</div>
				</Router>
			</div>
		)
	}
}

export default App
