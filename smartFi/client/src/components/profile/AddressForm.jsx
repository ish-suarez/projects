import React from 'react'

export default function AddressForm({inputs: {street1, street2, city, state, county, zip}, handleChange, handleAddressEdit}) {

    const inputData = [
        {
            label: 'Street 1',
            type: 'text',
            name: 'street1',
            value: street1,
            placeholder: 'Street 1'
        },
        {
            label: 'Street 2',
            type: 'text',
            name: 'street2',
            value: street2,
            placeholder: 'Street 2'
        },
        {
            label: 'City',
            type: 'text',
            name: 'city',
            value: city,
            placeholder: 'City'
        },
        {
            label: 'State',
            type: 'text',
            name: 'state',
            value: state,
            placeholder: 'State'
        },
        {
            label: 'County',
            type: 'text',
            name: 'county',
            value: county,
            placeholder: 'County'
        },
        {
            label: 'Zip Code',
            type: 'text',
            name: 'zip',
            value: zip,
            placeholder: 'Zip Code'
        }
    ]

    return (
        <div>
            <p className='text-2xl font-semibold text-neutral-900'>Address</p>
            <form className='text-center flex flex-wrap justify-center items-center border-b-2 pb-4'>
                <div className='text-center flex flex-col space-y-3 flex-wrap justify-center items-center py-2 px-4'>
                    {
                        inputData.map((item, i) => (
                            <div key={i} className=''>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor={item.name}>
                                    {item.label}
                                </label>
                                <input className='shadow appearance-none border rounded py-2 px-3 text-center text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    type={item.type}
                                    name={item.name}
                                    value={item.value}
                                    onChange={handleChange}
                                    placeholder={item.placeholder}
                                />
                            </div>
                        ))
                    }

                </div>
                <button onClick={handleAddressEdit} className='text-sm py-3 my-3 bg-slate-800 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='button'>Submit Changes</button>
            </form>
        </div>
    )
}