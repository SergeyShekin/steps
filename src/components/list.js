function List({ data, handleDelete }) {

    const sortedData = data.sort((a, b) => {
        if ((a.listDate) > (b.listDate)) return 1;
        if ((a.listDate) == (b.listDate)) return 0;
        if ((a.listDate) < (b.listDate)) return -1;
    });
    
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
                        {sortedData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.listDate}</td>
                                <td>{item.listDistance}</td>
                                <td className="td-button"><button className="buttonDelete" onClick={() => handleDelete(item.id)}>✘</button></td>
                            </tr>))}
                    </tbody>  
                </table>    
            </div>
        </div>
    );
}

export default List;