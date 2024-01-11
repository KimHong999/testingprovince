import React, { useEffect, useState } from "react";
import { Button, TextInput } from "./Input";

export const ProvinceForm = ({onSave, selected, onEdit}) => {

    const[form, setForm] = useState({ namelatin:"", namekh:""})

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({
            ...form,
            [name]:value
        })
        
    }

    const onSaveProvince = () => {
        onSave(form)
        setForm({namelatin:"", namekh:""})
    }

    useEffect(()=>{
        setForm(selected)
    },[selected])

    // console.log("sele",selected)
    // console.log("form",form)

    // console.log("update", onUpdate)

    const handleUpdateProvince = () => {
        onEdit(form)
        // console.log("update",form)
    }

    return (
        <div className="w-full max-w-lg">
            <div className="text-xl">Province Form</div>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"> 
                <TextInput label="Name Latin: " name="namelatin" value={form.namelatin} onChange={onChange}  />

                <TextInput label="Name Khmer: " name="namekh" value={form.namekh} onChange={onChange} />
                
                <div className="flex">
                    <Button label="Save" onClick={onSaveProvince}  />

                    <Button label="Update" onClick={handleUpdateProvince} />
                </div>
            </form>
        </div>
        
    )
}