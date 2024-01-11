import React from "react";
import { Button } from "./Input";
import { Pencil, Trash2 } from "lucide-react";

export const TableProvnices = ({data=[], onSelected, onDelete}) => {

    
    return(
        <table className="table-fixed">
            <thead>
                <tr>
                <th>Province</th>
                <th>Total District</th>
                <th>Total Commune</th>
                <th>Total Village</th>
                <th>Edit</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>

                {
                    data.map((itemData)=>(
                        <tr key={itemData.id} >
                            <th>{itemData.namelatin}</th>
                            <th>{itemData.totalDistrict}</th>
                            <th>{itemData.totalCommune}</th>
                            <th>{itemData.totalVillage}</th>
                            <th>
                                <Pencil onClick={() => onSelected(itemData.id)} />
                            </th>
                            <th>
                                <Trash2 onClick={()=> onDelete(itemData.id)} />
                            </th>
                        </tr>
                    ))
                }

                {/* <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
                </tr> */}
            </tbody>
        </table>
    )
}