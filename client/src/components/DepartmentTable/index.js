import React from 'react';

const Table = props => {
    const {feed} = props;
    const rows = feed.map(row => (
        <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td><button onClick={() => props.handleDelete(row.id)}>X</button></td>
        </tr>
    ));

    return(
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>X</th>
                </tr>
            </thead>
            <tbody>
                {rows.length === 0 ? <tr><td colSpan="3">Parece que não há nenhum cadastrado..</td></tr> : rows}
            </tbody>
        </table>
    )
};

export default Table;