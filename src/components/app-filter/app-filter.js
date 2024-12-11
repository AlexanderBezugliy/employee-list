
import './app-filter.css'


const AppFilter = ({onFilterSelect}) => {
    return (
        <div className="btn-group">

            <button className="btn btn-light"
                    type="button"
                    onClick={() => onFilterSelect('all')}  >
                Все сотрудники
            </button>

            <button className="btn btn-outline-light"
                    type="button"  
                    onClick={() => onFilterSelect('rise')}  >
                На повышение
            </button>

            <button className="btn btn-outline-light" 
                    type="button"  
                    onClick={() => onFilterSelect('moreThen1000')}  >
                З/П больше 1000$
            </button>
            
        </div>

    )
}

export default AppFilter