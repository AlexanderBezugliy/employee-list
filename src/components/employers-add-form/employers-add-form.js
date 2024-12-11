import { Component } from 'react';

import './employers-add-form.css';

class EmployersAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onNameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    onSalaryChange = (e) => {
        this.setState({
            salary: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        //ПРОВЕРКА на пустое поле
        const {name, salary} = this.state;
        if (!name || !salary) {
            alert('Пожалуйста, заполните все поля с данными !');

            return;
        }

        this.props.onAddItem(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }
    
    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
    
                <h3>Добавьте нового сотрудника</h3>
    
                <form className="add-form d-flex" 
                      onSubmit={this.onSubmit}  >
    
                    <input type="text" 
                           className="form-control new-post-label" 
                           placeholder="Как его зовут?"
                           value={name}   //ЧТО БЫ СДЕЛАТЬ КОМПОНЕНТ УПРАВЛЯЕМЫМ
                           name="name" 
                           onChange={this.onNameChange}/>
    
                    <input type="number" 
                           className="form-control new-post-label" 
                           placeholder="З/П в $?"
                           value={salary} //ЧТО БЫ СДЕЛАТЬ КОМПОНЕНТ УПРАВЛЯЕМЫМ
                           name="salary" 
                           onChange={this.onSalaryChange}/>
    
                    <button type="submit" 
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployersAddForm;

