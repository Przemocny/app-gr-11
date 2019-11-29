import React from 'react';
import { connect } from 'react-redux';

// new way
import { startLoadingPosts, doneLoadingPosts, failedLoadingPosts, changeFilter  } from './async_store';
const actions = { startLoadingPosts, doneLoadingPosts, failedLoadingPosts, changeFilter  }

// // old way
// import { actions } from './old_store';

const dataFromApi = { posts: ['tytul1','tytul2','tytul3'] }

class StateViewer extends React.Component{

    componentDidMount(){
        const { startLoadingPosts, doneLoadingPosts, failedLoadingPosts, changeFilter } = this.props

        startLoadingPosts()

        // zapytanie axiosa
        setTimeout(()=>{
            doneLoadingPosts(dataFromApi)
        }, 3000)
    }

    render(){
        const {memory, startLoadingPosts, doneLoadingPosts, failedLoadingPosts, changeFilter } = this.props
        console.log(memory)
        return (<div>
            StateViewer <br/>
            {JSON.stringify(memory)}
            <input onChange={(ev)=>{
                changeFilter({filter:ev.target.value})
            }} value={memory.postsFilter}/>
            </div>)
    }
}

// const StateViewer = (props)=>{
//     console.log(props)
//     const {memory, add, subtract, reset} = props
//     return (<div>
//         StateViewer <br/>
//         {JSON.stringify(memory)}
//             <div>
//                 <button onClick={()=>{
//                     add(1)
//                 }}>+</button>
//                 <button onClick={()=>{
//                     subtract(1)
//                 }}>-</button>
//                 <button onClick={()=>{reset()}}>reset</button>

//             </div>
//         </div>)
// }


// w jaki sposób i jakie dane mają trafić do propsów konkretnego komponentu
const mapStateToProps = (state) => {
    return { 
        memory:state.posts
    }
}

// jakie akcje z danego stora mają być przekazane do propsów, "oraz mają działać"
const mapDispatchToActions = {
    ...actions
}

// connect - funkcja która łączy komponent ze storem reduxa wg zakodowanego schematu
export default connect(mapStateToProps, mapDispatchToActions)(StateViewer)