import React from 'react'



const Dot = ({title, onChangeStep})=>{
    return (<span style={{marginRight:10}}><button onClick={onChangeStep}>{title}</button></span>)
}


class Stepper extends React.Component {

    state = {
        actualStep: 0
    }

    setStep = ( index )=>{

        const { children } = this.props
        this.setState({
            actualStep:index
        })
    }
 
	render() {
        const {children} = this.props
        const { actualStep } = this.state
        const actualChild = children[actualStep]

		return (
			<div style={{margin:20,  boxShadow:'3px 3px 5px rgba(0,0,0,0.5)'}}>
                <div style={{ display:'block', background: '#ddd', padding:10 }} >
                    {children.map((child, key)=>{
                        return (<Dot key={key} title={child.props.title} 
                            onChangeStep={()=>{
                                this.setStep(key)
                            }}/>)
                    })}
                </div>    
                <div style={{ display:'block', background: '#eee', padding:10 }} >
                    {actualChild.props.children}
                </div>    
			</div>
		)
	}
}

export default Stepper
