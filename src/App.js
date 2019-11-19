import React from 'react'

import Header from './common/Header'
import Footer from './common/Footer'

import Attention from './sections/Attention'
import AboutUs from './sections/AboutUs'
import Services from './sections/Services'
import ContactForm from './sections/Contact'

import LifecycleComponent from './sections/LifecycleComponent'


import './App.css'

const Main = ({ children }) => {
  return <main>{children}</main>
}


class App extends React.Component {

	state = {
		'turnOffComponent':false
	}

	componentDidMount(){
		setTimeout(()=>{
			this.setState({
				turnOffComponent:true
			})
		}, 10000)
	}

	render(){
		const {turnOffComponent} = this.state

		return (
			<div className='App'>
				{!turnOffComponent && <LifecycleComponent turnOffComponent={turnOffComponent}/>}
				
			{/*
			<Header />
				<Main>
					<Attention selectedLang={'pl'} subTitle={'Mogę coś wpisać'}/>
					<AboutUs/>
					<Services />
					<ContactForm/>
				</Main>
				<Footer />
			*/}
				
			</div>
		)
	}

	
	
}

export default App
