import React from 'react'


class Layout extends React.Component {

    state = {
        isShowed: false
    }

    toggle = ()=>{
        const { isShowed } = this.state
        this.setState({
            isShowed:!isShowed
        })
    }


    render(){
        const { children } = this.props
        const { isShowed } = this.state

        return (
            <div>
            <div className={'top-menu'}>
                <button onClick={this.toggle}>menu</button>
            </div>
            <div className={['animated','side-menu', isShowed ? 'active' : 'no-active'].join(' ')}>
                <ul>
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                </ul>
            </div>
            <div className={['animated','main-view', !isShowed ? 'full-width' : ''].join(' ')}>
                {children}
            </div>
            </div>
        )
    }
}

export default Layout