import React from 'react';
import Title from '../Title';
import Table from '../Table';

class DepartamentPage extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.state = {
            search: '',
            departaments: [
                {id: 0, name: "Inovação"}, {id: 1 , name: "RH"}, {id: 2 , name: "Contabilidade"},
                {id: 3 , name: "Diretoria"}, {id: 4 , name: "Pessoal"}, {id: 5 , name: "Vendas"}]
        };
    }

    handleChange(e) {
        this.setState({ search: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        let name = this.state.search.trim();

        if(!name.length) return;

        this.setState(prevState => ({
            departaments: prevState.departaments.concat({ id: prevState.departaments.length, name }),
            search: ''
        }));
    }

    handleDelete(id) {
        this.setState(prevState => ({
            departaments: prevState.departaments.filter(dep => dep.id !== id)
        }));
    }

    render() {
        const {departaments} = this.state;
        const search = this.state.search.toLowerCase();
        const departamentsFiltered = departaments.filter(dep => dep.name.toLowerCase().includes(search));

        return(
            <section>
                <Title txt="Novo Departamento" />

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="searchID">Nome:</label>
                    <input id="searchID" onChange={this.handleChange} value={this.state.search} maxLength="100" />
                    <button>Adicionar</button>
                </form>

                <Table feed={departamentsFiltered} handleDelete={this.handleDelete} />
            </section>
        )
    }
}

export default DepartamentPage;