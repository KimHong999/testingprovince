import React, { useEffect, useState } from "react";
import { Button, TextInput, TextSelect } from "./Input";

export const VillageForm = ({onSave, provinces, districts, communes, selected, onEdit}) => {
    const [form, setForm] = useState({namelatin:"", namekh:"", province_id:"", district_id:"", commune_id:"" })

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({
            ...form,
            [name] : value
        })
    }

    const onSaveVillage = () => {
        onSave(form)
        setForm({namelatin:"", namekh:"", province_id:"", district_id:"", commune_id:""})
    }

    const onEditVillage = () => {
        onEdit(form)
    }

    useEffect(() => {
        setForm(selected)
    },[selected])

    return(
        <div className="w-full max-w-lg" >
            <div className="text-xl" >Village Form</div>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <TextInput label="Name Latin" value={form.namelatin} name="namelatin" onChange={onChange} />
                <TextInput label="Name Khmer" value={form.namekh} name="namekh" onChange={onChange} />

                <TextSelect label="Province Name:" placeholder="Select Province" name="province_id" value={form.province_id} onChange={onChange} options={provinces}  />

                <TextSelect label="District Name:" placeholder="Select District" name="district_id" value={form.district_id} onChange={onChange} options={districts} />

                <TextSelect label="Commune Name:" placeholder="Select Commune" name="commune_id" value={form.commune_id} onChange={onChange} options={communes} />

               <div className="flex mt-5">
                <Button label="Save" onClick={onSaveVillage} />
                <Button label="Update" onClick={onEditVillage} />
               </div>
            </form>
        </div>
    )
}