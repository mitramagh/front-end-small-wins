import React from "react";
import { useState } from "react";
import "./NewPlanForm.css";

export interface NewPlanFormProps {
    makePlanCallback:( idea:string, planner:string) => void;
}
function NewPlanForm(props:NewPlanFormProps): JSX.Element {
    const [formData, setFormData]=useState('')

    const newPlanForm=(e:React.FormEvent) => {
        e.preventDefault();
        if (!formData) return;
        props.makePlanCallback(formData,'');
        setFormData('');
    }
    return (
        <form onSubmit={newPlanForm}>
            <label htmlFor="formData"></label>
            <input value={formData} onChange={ e => setFormData(e.target.value)} type="text" className="form-control" />
            <button type="submit" className="btn btn-primary my=2 rounded-pill"> Add your Plan</button>
        </form>
    );

}

export default NewPlanForm;
