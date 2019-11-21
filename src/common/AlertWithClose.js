import React from 'react'

class AlertWithClose extends React.Component {

    state = {
        isShowed: false
    }

    toggle = ()=>{
        const { isShowed } = this.state
        this.setState({
            isShowed:!isShowed
        })
    }

    componentDidMount(){
        const { showOnInit } = this.props

        if(showOnInit){
            console.log('showOnInit jest', showOnInit)
            this.setState({
                isShowed: showOnInit
            })
        }

    }

	render() {
        const { isShowed } = this.state
        const { children, title } = this.props
        const icon = isShowed ? 'x' : 'v'

		return (
			<div style={{margin:20, boxShadow:'3px 3px 5px rgba(0,0,0,0.5)'}}>
				<a style={{ display:'block', background: '#ddd', padding:10 }} onClick={this.toggle}>
					<h3>{icon}{' '}{title}</h3>
                </a>
                <div className={['animated', isShowed ? 'fadeIn' : 'fadeOut'].join(' ')} style={{ background: '#eee', padding:10 }}>
                    <h5>{children}</h5>
                </div>
			</div>
		)
	}
}

export default AlertWithClose
