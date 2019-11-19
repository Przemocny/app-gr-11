import React from 'react'

// funkcyjny - nie ma lifecyclemethods
// const Test = () => {
//     return (<div style={{textAlign:'center', padding:10}}>Test</div>)
// }


class LifecycleComponent extends React.Component {


    state = {
        'imBusy':false,
        'counter':0
    }

    timer = null

    

    // constructor(){
    //     super()

    //     // jeśli chcemy uzywać w konstruktorze słowa "this", to musimy wywołać metodę super()
    //     // metoda super() odwołuje się do komponentu po którym dziedziczy nasz komponent czyli React.Component

    //     // wywoływana tylko raz na początku
    //     // deklarujemy stan komponentu bądź "przypinamy metody"
    //     // ale nie wolno nam zmieniac tu stanu
    //     console.log('constructor')

    //     this.

    //     this.timer = null

    //     // stary sposób przypinania metod do kontekstu komponentu
    //     // this.customAjaxMethod = this.customAjaxMethod.bind(this)
    // }

    customAjaxMethod = () => {
        this.timer = setInterval(()=>{
            console.log('tick')
            this.setState({
                counter: this.state.counter + 1
            })
        }, 1000)
    }

    componentDidMount(){
        // obsługa rzeczy asynchronicznych (dłużej trwających)
        // ajax (axios), setTimeout, setInterval, socket
        // możemy już zmieniac stan
        // tutaj można używać "this"

        console.log('componentDidMount')
        this.customAjaxMethod()
    }

    render(){
        // nie robimy tutaj jakichś obliczeń, kalkulacji
        // metoda render służy tylko do wyświetlania JSX zależnego od stanu i propsów
        console.log('render')
        const {imBusy, counter} = this.state
        return (<div style={{textAlign:'center', padding:10}}>{JSON.stringify(counter)}</div>)
    }

    componentDidUpdate(previousProps, previousState){
        // ma dostep do this
        // zmiana warunkowa komponentu oparta o stan albo propsy
        console.log('componentDidUpdate', previousProps, previousState, this.state, this.props)
    }

    componentWillUnmount(){
        // wymontowywać tutaj działania asynchroniczne, lub obciążające pamięc
        console.log('componentWillUnmount')
        clearInterval(this.timer)
    }

}

export default LifecycleComponent