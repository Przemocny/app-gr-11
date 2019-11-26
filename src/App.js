import React from 'react'

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


// // ref - link do jakichs danych
// const a = {"key": 0 }
// const b = a
// b == a && a === b

// // bez ref - kopia niepowiązana
// const c = {...a} || Object.assign({}, {}, a)
// c == a && c !== a


class App extends React.Component {

	input = React.createRef(null)
	input1 = React.createRef(null)
	input2 = React.createRef(null)

	componentDidMount() {
		// console.log('ref', this.input.current)
		// console.log('ref', this.input2)
		this.input.current.focus()
		console.log('ref', this.input2)

		const {offsetHeight, offsetLeft, offsetTop } = this.input2.current

		console.log('ref',  {offsetHeight, offsetLeft, offsetTop })



	}

	render() {
		return (
			<div className='App'>
				<input ref={this.input} placeholder="input" style={{margin:10}}

				onKeyDown={(event)=>{
					if(event.key === "Enter"){
						this.input1.current.focus()
					}
				}}
				
				/>
				<input ref={this.input1}
				onKeyDown={(event)=>{
					if(event.key === "Enter"){
						this.input2.current.focus()
					}
				}}
				placeholder="input" style={{margin:10}}/>
				<input ref={this.input2} 
				onKeyDown={(event)=>{
					if(event.key === "Enter"){
						// this.onSubmit()
					}
				}}
				placeholder="input" style={{margin:10}}/>
			</div>
		)
	}
}

export default App
