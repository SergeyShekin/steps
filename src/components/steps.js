import React, { useState } from "react";
import Form from "./form";
import List from "./list";

function Steps() {

    const [data, setData] = useState([
        {id: 1, listDate: "17.10.2022", listDistance: 2},
        {id: 2, listDate: "18.10.2022", listDistance: 3}
    ]);
        
    const handleForm = (newEntry) => {
        const index = data.findIndex((item) => item.listDate === newEntry.listDate);
        if (index === -1) {
            setData((prev) => [...prev, newEntry]);            
        } else { 
            setData((prev) => {
                const editData = [...prev];
                editData[index].listDistance += 1;
                return editData;
            });        
        }
    };

    const handleDelete = (id) => {
        const result = data.filter((item) => item.id !== id);
        setData(result);
    };

    return ( 
        <div className="container">
            <Form handleForm={handleForm} />
            <List data={data} handleDelete={handleDelete}/>
        </div>
     );
}

export default Steps;