import React from 'react'
import PropTypes from 'prop-types'

import ReduxComponent from './stores/ReduxComponent'
import './App.css'

// redux - przypomnienie
// prop-types - upewnianie się
// deploy na gh-pages - https://typeofweb.com/react-js-na-github-pages-dzieki-create-react-app/

const View = ({weatherData}) => {
	return <div>View {JSON.stringify(weatherData)}</div>
}

const Form = ({onChange, onClick, value}) => {
	return (
		<div>
			<input onChange={onChange} value={value}/>
			<button onClick={onClick}>click</button>
		</div>
	)
}

class Wrapper extends React.Component {
	render() {

		const {appState, onInputChange, onSubmit} = this.props

		return (
			<div>
				<div>
					<Form onChange={onInputChange} onClick={onSubmit} value={appState.input} />
					<View weatherData={appState.weatherData}/>
				</div>
			</div>
		)
	}
}

class App extends React.Component {

	state = {input:'', weatherData:[]}

	componentDidMount() {}
	onInputChange = (ev)=>{
		const {value} = ev.target
		// tu się zmienia stan
		console.log('someMethod',value)
		this.setState({
			input:value
		})
	}

	onSubmit = ()=>{
		console.log(this.state)
	}

	render() {
		return (
			<div className='App' style={{ margin: 30 }}>
				<ReduxComponent/>
			</div>
		)
	}
}

export default App
