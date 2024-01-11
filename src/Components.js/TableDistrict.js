import React from "react";
import { Button } from "./Input";
import { Pencil, Trash2 } from "lucide-react";

export const TableDistrict = ({districts, onSelected, onDelete, data=[]}) => {
    return(
        <table className="table-fixed">
            <thead>
                <tr>
                <th>ID District</th>
                <th>Name Latin</th>
                <th>Name Khmer</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>

                {
                    districts.map((district)=>
                        <tr key={district.id}>
                            <td>{district.id}</td>
                            <td>{district.namelatin}</td>
                            <td>{district.namekh}</td>
                            <td>
                                <Pencil onClick={()=> onSelected(district.id) } />
                            </td>
                            <td>
                                <Trash2 onClick={()=> onDelete(district.id)} />
                            </td>
                        </tr>
                    )
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