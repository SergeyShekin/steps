import React, { useState } from "react";
import shortid from "shortid";

function Form ({ handleForm }) {

    const [date, setDate] = useState();
    const [distance, setDistance] = useState();

    const handleDate = (e) => setDate(e.target.value);
    const handleDistance = (e) => setDistance(Number(e.target.value));

    const onSubmitFromForm = (e) => {
        e.preventDefault();
        handleForm({
            id: shortid.generate(),
            listDate: date,
            listDistance: distance 
        });
    };

    return ( 
        <form className="form" onSubmit={onSubmitFromForm}>
            <div className="input-wrapper">
                <label className="label-date" htmlFor="date">Дата (ДД.ММ.ГГ)</label>
                <input className="input-date" type="date" name="date" required onChange={handleDate} value={date}/>
            </div>
            <div className="input-wrapper">
                <label className="label-number" htmlFor="number">Пройдено км</label>
                <input className="input-number" type="text" name="number" required onChange={handleDistance} value={distance}/>
            </div>
            <button className="button">OK</button>
        </form>
    );
}

export default Form;