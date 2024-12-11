
import EmployersListItem from '../employers-list-item/employers-list-item';

import './employers-list.css';


const EmployersList = ({data, onDelete, onToggleIncrease, onToggleRise}) => {

    const elements = data.map(item => {
        return (
            <EmployersListItem  name={item.name} 
                                salary={item.salary}
                                increase={item.increase}
                                key={item.id}
                                like={item.like} 
                                
                                onDelete={() => onDelete(item.id)} 
                                
                                onToggleIncrease={() => onToggleIncrease(item.id)}
                                onToggleRise={() => onToggleRise(item.id)}  /> 
        )
    })


    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployersList;