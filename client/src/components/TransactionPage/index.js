import React from 'react';
import Title from '../Title';

class TransactionPage extends React.Component {

    constructor(props) {
        super(props);
        this.handleEmployeeChange = this.handleEmployeeChange.bind(this);
        this.handleDepartmentChange = this.handleDepartmentChange.bind(this);
        this.handleCostChange = this.handleCostChange.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.state = {
            employee: '',
            department: '',
            cost: '',
            description: '',
            transactions: [{id: , description: '', }],
            employees: [
                {id: 0, name: "Israel"}, {id: 1 , name: "Betina"}, {id: 2 , name: "Play"},
                {id: 3 , name: "Rodrigo"}, {id: 4 , name: "Ayrton"}, {id: 5 , name: "Ygor"}],
            departments: [{id: 0, name: "Inovação"}, {id: 1 , name: "RH"}, {id: 2 , name: "Vendas"}]
        };
    }

    handleEmployeeChange(e) {
        this.setState({ employee: e.target.value });
    }
    
    handleDepartmentChange(e) {
        this.setState({ department: e.target.value });
    }

    handleCostChange(e) {
        this.setState({ cost: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        /* this.setState(prevState => ({
            employees: prevState.employees.concat({ id: prevState.employees.length, name }),
            search: ''
        })); */
    }


    render() {
        const {employees, departments} = this.state;
        return(
            <section>
                <Title txt="Nova Movimentação" />

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="funcID">Nome do Funcionário:</label>
                        <select id="funcID" onChange={this.handleEmployeeChange} value={this.state.employee}>
                            {employees.map(e => <option key={e.id} value={e.id}>{e.name}</option>)}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="costID">Nome do Departamento:</label>
                        <input  id="costID" onChange={this.handleCostChange} value={this.state.cost} maxLength="9" />
                    </div>

                    <button>Adicionar</button>
                </form>
            </section>
        )
    }
}

export default TransactionPage;