import React, { useEffect, useState } from "react";
import { Button, TextInput, TextSelect } from "./Input";

export const CommuneForm = ({onSave, provinces, districts, selected, onEdit}) => {

    const [form, setForm] = useState({namelatin:"", namekh:"", province_id:"", district_id:""})
    const [selectDropdown, setselectDropdown] = useState("")
    const [district, setDistrict] = useState([])
    
    

    const onChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setForm({
            ...form,
            [name]:value
        })

        if(name === "province_id"){
            setselectDropdown(value)
        }
        
    }
    // console.log("form", form)
    // console.log("se",selectDropdown)

    // console.log("dis",districts)

    const onSaveCommune = () => {
        onSave(form)
        setForm({namelatin:"", namekh:"",province_id:"" , district_id:""})
    }

    const onEditCommune = () =>{
        // setForm({...form})
        onEdit(form)
        setForm({namelatin:"", namekh:"", province_id:"", district_id:""})
    }

    useEffect(() => {     
        // console.log()
        setDistrict(districts.filter((dist)=>dist.province_id===selected.province_id)) 
        setForm(selected)
    },[selected])

    // console.log("select",selected)
    // console.log("dis",districts)
    // console.log("se",selectOn)

    useEffect(()=>{
        setDistrict(districts.filter((dis)=>dis.province_id===selectDropdown))
    },[selectDropdown])
    
    

    return(
        <div className="w-full max-w-lg" >
            <div className="text-xl" >Commune Form</div>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <TextInput label="Name Latin" value={form.namelatin} name="namelatin" onChange={onChange} />
                <TextInput label="Name Khmer" value={form.namekh} name="namekh" onChange={onChange} />

                <TextSelect label="Province Name: " placeholder="select Province" name="province_id" value={form.province_id} onChange={onChange} options={provinces} />

                <TextSelect label="District Name" placeholder="Select District" name="district_id" value={form.district_id} onChange={onChange} options={district} />


                <div className="flex mt-5">
                    <Button label="Save" onClick={onSaveCommune} />
                    <Button label="Update" onClick={onEditCommune} />
                </div>
                
            </form>
        </div>
    )
}