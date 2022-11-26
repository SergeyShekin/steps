import React, { useState } from "react";
import shortid from "shortid";
import moment from 'moment';

function Form ({ handleForm }) {

    const [form, setForm] = useState({
        listDate: "",
        listDistance: ""     
    });

     const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const onSubmitFromForm = (e) => {
        e.preventDefault();
        let workout = {
            id: shortid.generate(),
            listDate: moment(form.listDate).format("DD.MM.YYYY"),
            listDistance: Number(form.listDistance)
        };
        handleForm(workout);
        setForm({ listDate: "",  listDistance: "" });
    };

    return ( 
        <form className="form" onSubmit={onSubmitFromForm}>
            <div className="input-wrapper">
                <label className="label-date" htmlFor="listDate">Дата (ДД.ММ.ГГ)</label>
                <input className="input-date" type="date" name="listDate" required onChange={handleChange} value={form.listDate} />
            </div>
            <div className="input-wrapper">
                <label className="label-number" htmlFor="listDistance">Пройдено км</label>
                <input className="input-number" type="text" name="listDistance" required onChange={handleChange} value={form.listDistance} />
            </div>
            <button className="button">OK</button>
        </form>
    );
}

export default Form;