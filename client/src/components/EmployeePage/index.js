import React from 'react';
import Title from '../Title';
import Table from '../Table';
import DepartmentSelect from '../DepartmentSelect';

class EmployeePage extends React.Component {

    constructor(props) {
        super(props);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.state = {
            search: '',
            employees: [
                {id: 0, name: "Israel"}, {id: 1 , name: "Betina"}, {id: 2 , name: "Play"},
                {id: 3 , name: "Rodrigo"}, {id: 4 , name: "Ayrton"}, {id: 5 , name: "Ygor"}],
            departments: [{id: 0, name: "Inovação"}, {id: 1 , name: "RH"}, {id: 2 , name: "Vendas"}]
        };
    }

    handleSearchChange(e) {
        this.setState({ search: e.target.value });
    }
    
    handleDelete(id) {
        this.setState(prevState => ({
            employees: prevState.employees.filter(emp => emp.id !== id)
        }));
    }

    handleSubmit(e) {
        e.preventDefault();
        const {search, depValue} = this.state;
        let name = search.trim();
        
        if(!name.length) {
            alert('Digite o nome do funcinário primeiro');
            return;
        }
        if(depValue === 'none') {
            alert('É preciso escolher um departamento');
            return;
        }

        this.setState(prevState => ({
            employees: prevState.employees.concat({ id: prevState.employees.length, name }),
            search: ''
        }));
    }


    render() {
        const {employees, departments} = this.state;
        const search = this.state.search.toLowerCase();
        const employeesFiltered = employees.filter(emp => emp.name.toLowerCase().includes(search));

        return(
            <section>
                <Title txt="Novo Funcionário" />

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="searchID">Nome do Funcionário:</label>
                        <input id="searchID" onChange={this.handleSearchChange} value={this.state.search} maxLength="200" />
                    </div>

                    <div>
                        <label htmlFor="departamentID">Nome do Departamento:</label>
                        <DepartmentSelect departments={departments} />
                    </div>

                    <button>Adicionar</button>
                </form>

                <Table feed={employeesFiltered} handleDelete={this.handleDelete} />
            </section>
        )
    }
}

export default EmployeePage;