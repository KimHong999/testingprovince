
import { useMemo, useState } from 'react';
import { ProvinceForm } from './Components.js/ProvinceForm';
import { uuidv4 } from './utils';
import { TableProvnices } from './Components.js/TableProvnices';
import { DistrictForm } from './Components.js/DistrictForm';
import { TableDistrict } from './Components.js/TableDistrict';
import { CommuneForm } from './Components.js/CommuneForm';
import { TableCommune } from './Components.js/TableCommune';
import provinceData from './data/provinces'
import districtData from './data/districts'
import { VillageForm } from './Components.js/VillageForm';
import { TableVillage } from './Components.js/TableVillage';

function App() {

  const[provinces, setProvinces] = useState(provinceData);
  const[districts, setDistricts] = useState(districtData);
  const[communes, setCommunes] = useState([]);
  const[villages, setVillages] = useState([]);
  // const[selected, setSelected] = useState({province:[], district:[]})
  const[selectProvince, setSelectProvince] = useState({})
  const[selectDistrict, setSelectDistrict] = useState({})
  const[selectCommune, setSelectCommune] = useState({})
  const[selectVillage, setSelectVillage] = useState({})


  // Sum All Data
  const data = useMemo (()=>{
    const result = provinces.map((province)=>{
      // const sumDistrict = districts.filter((district)=>district.province_id === province.id)
      // const sumCommune = communes.filter((commune)=>sumDistrict.filter((district)=>district.id === commune.district_id))
      // const sumVillage = villages.filter((village)=>sumCommune.filter((commune)=>commune.id === village.commune_id))
      const districtResults = districts.filter(
        (district) => district.province_id === province.id
      );
      console.log(districtResults);

      const communeResults = communes.filter(
        (commune) =>
          districtResults.filter(
            (district) => district.id === commune.district_id
          ).length
        //[] : true
        // [].length = 0: false
      );

      const villageResults = villages?.filter((vil) =>
        communeResults?.find((com) => com.id === vil.commune_id)
      );
      
      return{
        // id:uuidv4(),
        ...province,
        totalDistrict :  districtResults.length,
        totalCommune : communeResults.length,
        totalVillage : villageResults.length
      }
    })    

    return result 
  },[provinces, districts, communes, villages])
  // console.log("Sum data",data)
  console.log("com",communes)


  //  ***** Provinces *****
  // Save Provinces
  const onSaveProvince = (param) =>{
    const id = uuidv4()
    const newProvince = {
      ...param,
      id:id
    }
    setProvinces(provinces.concat(newProvince))
  }
  // console.log("Provinces: ", provinces)

  // Edit Province
  const editProvince = (param) =>{
    setProvinces(provinces.map((province)=>province.id === param.id ? {...province, ...param} : province))
    // console.log("param",param)
  }

  // select Item
  const provinceSelected = (id) =>{
    setSelectProvince(provinces.find((province)=>province.id === id))
    console.log("selected",id)
  }

  // Delete Province
  const deleteProvince = (id) =>{
    setProvinces(provinces.filter((province) => province.id !== id))
    setDistricts(districts.filter((district)=>district.province_id !==  id))
    setCommunes(communes.filter((commune)=>commune.province_id !== id))
    setVillages(villages.filter((village)=>village.province_id !== id))
    // console.log("delete Province", param)
  }
  //  ***** End Provinces *****




    // select all item testing
    // const selectedItem = (id) => {
    //   const selectProvince = provinces.find((province)=>province.id === id)
    //   const selectDistrict = districts.find((district)=> district.id === id )

    //   if (selectProvince) {
    //     setSelected((pre) => ({
    //       ...pre,
    //       province: [...pre.province, selectProvince],
    //     }));
    //   }

    //   if(selectDistrict){
    //     setSelected((pre)=>({
    //       ...pre,
    //       district: [...pre.district, selectDistrict]
    //     }))
    //   } 
     
    //   console.log("select item",id)
      
    // }
    // console.log("select",selected)




  //  ***** District *****
  // Save Districts
  const onSaveDistricts = (param) => {
    const id = uuidv4()
    const newDistrict ={
      ...param,
      id:id
    }
    setDistricts(districts.concat(newDistrict))
  }
  // console.log("Districts: ", districts)

  // select Districts
  const districtSelected = (id) => {
    setSelectDistrict(districts.find((district)=>district.id === id))
  }

  // Delete Districts 
  const deleteDistrict = (id) =>{
    setDistricts(districts.filter((district)=> district.id !== id ))
    setCommunes(communes.filter((commune)=>commune.district_id !== id))
    setVillages(villages.filter((village)=>village.district_id !== id))
  }

  // Edit Districts
  const editDistrict = (param) =>{
    setDistricts(districts.map((district)=>district.id === param.id ? {...district, ...param} : district))
  }
  // ***** End Districts *****

  



  // ***** Commune *****
  // Save Communes
  const onSaveCommunes = (param) => {
    const id = uuidv4();
    setCommunes((pre)=>{
      return[
        ...pre,
        {
          ...param,
          id:id
        }
      ]
    })
  }
  // console.log("Communes: ", communes)

  // Delete Commune
  const deleteCommune = (id) =>{
    setCommunes(communes.filter((commune)=>commune.id !== id ))
    setVillages(villages.filter((village)=>village.id !== id))
  }

  // select commune
  const communeSelected = (id) => {
    setSelectCommune(communes.find((commune)=>commune.id === id))
    // console.log("commune",id)
  }

  // Edit commune
  const editCommune = (param) => {
    setCommunes(communes.map((commune)=>commune.id === param.id ? {...commune, ...param} : commune))
    // setDistricts(districts.map((district)=>district.province_id === id ? {...district, ...param} : district))
    // setProvinces(provinces.map((province)=>province.id===id?{...province,...param}:province))
  } 

  // ***** End Commune



  // ***** Villages *****
  // Save Villages
  const onSaveVillages = (param) => {
    setVillages((pre)=>{
      return[
        ...pre,
        {
          ...param,
          id:uuidv4()
        }
      ]
    })
  }
  // console.log("Villages: ",villages)

  // delete village
  const deleteVillage = (id) =>{
    setVillages(villages.filter((village)=>village.id !== id))
  }

  // select village
  const villageSelected = (id) => {
    setSelectVillage(villages.find((village) => village.id === id ))
  }

  // update village
  const editVillage = (param) => {
    setVillages(villages.map((village) => village.id === param.id ? {...village, ...param} : village))
  }

  // ***** End Villages ******
  
  return (
    <div >
      {/* form and Table Province */}
      <div className='grid grid-cols-2'>
        <ProvinceForm onSave={onSaveProvince} selected={selectProvince} onEdit={editProvince}  />

        <TableProvnices data={data} onSelected={provinceSelected} onDelete={deleteProvince} />
      </div>


      {/* form and Table District */}
      <div className='grid grid-cols-2'>
        <DistrictForm onSave={onSaveDistricts} provinces={provinces} selected={selectDistrict} onEdit={editDistrict} />

        <TableDistrict districts={districts} onDelete={deleteDistrict} onSelected={districtSelected} />
      </div>


      {/* form and table commune */}
      <div className='grid grid-cols-2' >
        <CommuneForm onSave={onSaveCommunes} provinces={provinces} districts={districts} selected={selectCommune} onEdit={editCommune} />

        <TableCommune communes={communes} onDelete={deleteCommune} onSelected={communeSelected} />
      </div>


      {/* form and table village */}
      <div className='grid grid-cols-2'  >
        <VillageForm onSave={onSaveVillages} provinces={provinces} districts={districts} communes={communes} selected={selectVillage} onEdit={editVillage} />

        <TableVillage villages={villages} onDelete={deleteVillage} onSelected={villageSelected} />
      </div>
    </div>
  );
}

export default App;
