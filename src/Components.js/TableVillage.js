import { Pencil, Trash2 } from "lucide-react";
import React from "react";

export const TableVillage = ({villages, onDelete, onSelected}) => {
    return(
        <table className="table-fixed">
            <thead>
                <tr>
                <th>ID Commune</th>
                <th>Name Latin</th>
                <th>Name Khmer</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>

                {
                    villages.map((village)=>
                        <tr key={village.id}>
                            <td>{village.id}</td>
                            <td>{village.namelatin}</td>
                            <td>{village.namekh}</td>
                            <td>
                                <Pencil onClick={() => onSelected(village.id)} />
                            </td>
                            <td>
                                <Trash2 onClick={()=> onDelete(village.id)} />
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