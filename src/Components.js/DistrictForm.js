import React, { useEffect, useState } from "react";
import { Button, TextInput, TextSelect } from "./Input";

export const DistrictForm = ({onSave, provinces, selected, onEdit}) => {

    const[form, setForm] = useState({namelatin:"", namekh:"", province_id:""})

    const onChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setForm({
            ...form,
            [name] : value
        })
    }

    const onSaveDistrict = () => {
        onSave(form)
        setForm({namelatin:"", namekh:"", province_id:""})
    }

    const onUpdateDistrict = () => {
        onEdit(form)
    }

    useEffect(()=>{
        setForm(selected)
    },[selected])

    return(
        <div className="w-full max-w-lg" >
            <div className="text-xl" >District Form</div>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <TextInput label="Name Latin" value={form.namelatin} name="namelatin" onChange={onChange} />
                <TextInput label="Name Khmer" value={form.namekh} name="namekh" onChange={onChange} />

                <TextSelect label="Province Name: " placeholder="Select Province" name="province_id" value={form.province_id} onChange={onChange} options={provinces} />

                <div className="flex mt-5">
                    <Button onClick={onSaveDistrict} label="Save" />
                    <Button label="Update" onClick={onUpdateDistrict} />
                </div>
            </form>
        </div>
    )
}