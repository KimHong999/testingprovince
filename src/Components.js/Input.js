export const TextInput = ({label, type="text", value, name, onChange }) =>{
    return(
        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                {label}
            </label>
            </div>
            <div className="md:w-2/3">
            <input type={type} value={value} name={name} onChange={onChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"></input>
            </div>
        </div>
    )
}

export const Button = ({label, onClick, type="button"}) => {
    return(
        <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
            <button onClick={onClick} type={type} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                {label}
            </button>
            </div>
        </div>
    )
}

export const TextSelect = ({label, placeholder, name, value, onChange, options=[] }) => {
    return(
        <div className="md:w-1/3">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <select name={name} value={value} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="" >{placeholder}</option>
            {
                options.map(item => <option key={item.id} value={item.id} >{item.namelatin}</option>)
            }
            </select>
        </div>
    )
}