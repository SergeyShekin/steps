function List({ data }) {
    
    return (
        <div> 
            <div className="table-head">
                <div className="table-head__row">Дата (ДД.ММ.ГГ)</div>
                <div className="table-head__row">Пройдено км</div>
                <div className="table-head__row">Действия</div>
            </div>
            <div className="table-wrapper">
                <table className="table">
                    <tbody className="table-body">
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.listDate}</td>
                                <td>{item.listDistance}</td>
                                <td><button className="buttonDelete">✘</button></td>
                            </tr>))}
                    </tbody>  
                </table>    
            </div>
        </div>
    );
}

export default List;