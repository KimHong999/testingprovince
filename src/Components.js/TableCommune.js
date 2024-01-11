import { Pencil, Trash2 } from "lucide-react";
import React from "react";

export const TableCommune = ({communes, onDelete, onSelected}) => {
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
                    communes.map((commune)=>
                        <tr key={commune.id}>
                            <td>{commune.id}</td>
                            <td>{commune.namelatin}</td>
                            <td>{commune.namekh}</td>
                            <td>
                                <Pencil onClick={() => onSelected(commune.id) } />
                            </td>
                            <td>
                                <Trash2 onClick={() => onDelete(commune.id)} />
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