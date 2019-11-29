import React from 'react'
import ReduxComponent from './stores/ReduxComponent'
import './App.css'



class App extends React.Component {
	componentDidMount() {}

	render() {
		return (
			<div className='App' style={{ margin: 30 }}>
				<ReduxComponent/>
			</div>
		)
	}
}

export default App
