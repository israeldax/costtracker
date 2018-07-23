import React from 'react';

class DepartmentSelect extends React.Component {

    constructor(props) {
        super(props);
        this.state = { selected: 'none', values: [] };
        this.handleSelectedChange = this.handleSelectedChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSelectedChange(e) {
        this.setState({
            values: this.state.values.filter(v => v.id != e.target.value)
        });
    }

    handleChange(e) {
        let element = this.props.departments.find(d => d.id == e.target.value);

        this.setState({ 
            values: this.state.values.concat(element),
            selected: 'none'    
        });
    }

    render() {
        const {values, selected} = this.state;
        const {departments} = this.props;

        const selects = values.map(select => (
            <select key={select.id} onChange={this.handleSelectedChange}>
                <option value="change">{select.name}</option>
                <option value={select.id}>Mudar Departamento</option>
            </select>
        ));

        const filteredDepartments = values.length ? departments.filter(dep => !values.some(v => v.id == dep.id)) : departments;

        return (
            <div>
                {selects}
                <select value={selected} onChange={this.handleChange} >
                    <option value="none">
                        {(values.length > 0 || departments.length) ? 'Selecione um departamento' : 'Sem departamentos cadastrados'}
                    </option>
                    {filteredDepartments.map(dep => <option key={dep.id} value={dep.id}>{dep.name}</option>)}
                </select>
            </div>
        )
    }
}

export default DepartmentSelect;
