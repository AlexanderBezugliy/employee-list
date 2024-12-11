import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';



class App extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John Clarc', salary: 1500, increase: true, id: 1, like: true},
                {name: 'Smith Johnson', salary: 700, increase: false, id: 2, like: false},
                {name: 'Alex Brown', salary: 1200, increase: false, id: 3, like: false},
                {name: 'Max Wilson', salary: 900, increase: false, id: 4, like: false}
            ],

            term: '', //строчка символов по которой мы будем фильтровать
            filter: '' //В начале мы добавили в state новое свойство — filter(чтобы хранить значение текущего фильтра)
        }
        this.maxId = 5;
        
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            like: false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items
        }
        
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({
            term: term
        })
    }

    //функции для фильтрации сотрудников(в зависимости от значения фильтра, функция возвращает отфильтрованный массив)
    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.like)
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000)
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    onToggleIncrease = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if ( item.id === id) {
                    return { ...item, increase: !item.increase}
                }

                return item;
            })
        }))
    }

    onToggleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if ( item.id === id) {
                    return { ...item, like: !item.like}
                }

                return item;
            })
        }))
    }



    render() {
        const {data, term, filter} = this.state

        const employers = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;

        const visibleData = this.filterPost(this.searchEmp(data, term), filter);
        

        return (
            <div className="app">
                <AppInfo employers={employers} increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter onFilterSelect={this.onFilterSelect}/>
                </div>
                
                <EmployersList data={visibleData} 
                               onDelete={this.deleteItem}
                               onToggleIncrease={this.onToggleIncrease}
                               onToggleRise={this.onToggleRise}  />

                <EmployersAddForm onAddItem={this.addItem}/>
            </div>
        )
    } 
}

export default App;