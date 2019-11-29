import { createSlice } from '@reduxjs/toolkit'

const {actions, reducer} = createSlice({
	name: 'posts',
	
	initialState: { 
		imBusy:false, imWithError:false, posts:[], 
		filteredPosts:[], actualPostId:'', 
		postsFilter:'', errorMsg:'' 
	},

	reducers: {
		startLoadingPosts(state, action){
			state.imBusy = true
		},
		doneLoadingPosts(state, action){
			state.imBusy = false
			state.posts = action.payload.posts
		},
		failedLoadingPosts(state,action){
			state.imBusy = false
			state.imWithError = true
			state.errorMsg = action.payload.msg
		},
		changeFilter(state, action){
			state.postsFilter = action.payload.filter
			state.filteredPosts = state.posts.filter((element)=>{ return element.includes(action.payload.filter)})
		}

	}

})

export const { startLoadingPosts, doneLoadingPosts, failedLoadingPosts, changeFilter } = actions

export default reducer
