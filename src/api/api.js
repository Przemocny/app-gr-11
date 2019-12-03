// create read update delete
import axios from 'axios'

const url = 'https://api.futurecollars.pl/api/todos'

class TodoResource {

    host = 'https://api.futurecollars.pl'
    endpoint = '/api/todos'

    add(todo){
        // dodaj todosa
        return axios.post(this.host + this.endpoint, todo).then((response)=>{
            console.log('TodoApi.add', response)
            return response
        })
    }
    update(todoID, toUpdate){
        // aktualizacja na podstawie id
    }
    remove(todoID){
        // usuwanie na podstawie id
    }
    list(){
        // pobierz mi wszystkie todosy z serwera
    }
}

const TodoAPI = new TodoResource()

export default TodoAPI






