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

const Main = ({ children }) => {
	return <main>{children}</main>
}

// Toggler
// Stepper
// Side Menu + Hamburger Menu

class App extends React.Component {
	state = {
		turnOffComponent: false,
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				turnOffComponent: true,
			})
		}, 10000)
	}

	render() {
		const { turnOffComponent } = this.state

		return (
			<div className='App'>
				<LayoutWithSideMenu>
					<Stepper>
						<div title={'Preparing'}>step 1</div>
						<div title={'Processing'}>step 2</div>
						<div title={'Submitting'}>step 3</div>
					</Stepper>
				</LayoutWithSideMenu>

				{/*
				
				*/}
				{/*
				<AlertWithClose title={'Alert with success'}>
					<strong>Success</strong>
				</AlertWithClose>


				<AlertWithClose showOnInit={true} title={'Alert with error'}>
					<strong>Error</strong>
				</AlertWithClose>


				<AlertWithClose title={'Alert with warning'}>
					<strong>Warning</strong>
				</AlertWithClose>
*/}

				{/*
				{!turnOffComponent && <LifecycleComponent turnOffComponent={turnOffComponent}/>}
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
