import React, {useContext, useState} from 'react';
import { AppContext } from '../../context/AppProvider';
import ProfileForm from './ProfileForm';
import AddressForm from './AddressForm';

export default function Profile() {
    
    // Gathering user information & Functions
    const {user, editPersonalInfo, editAddressInfo} = useContext(AppContext);

    // Account details
    const {username, email, password, _id} = user;
    const {checking, saving} = user.accounts;
    const accountDetails =[
        {title: 'User Name', data: username},
        {title: 'Email Address', data: email},
        {title: 'Password', data: password || '********'}
    ] 
    

    // Input for editing personal information
    const {firstName, lastName, phone} = user.profile;
    const [editPersonal, setEditPersonal] = useState(false);
    const profileInputs = {firstName: firstName || '', lastName: lastName || '', phone: phone || ''};
    const [profileInput, setProfileInput] = useState(profileInputs);
    // Makes phone number in (xxx)xxx-xxxx format
    const normalizeInput = (value, previousValue) => {
        if (!value) return value;
        const currentValue = value.replace(/[^\d]/g, '');
        const cvLength = currentValue.length;
        
        if (!previousValue || value.length > previousValue.length) {
            if (cvLength < 4) return currentValue;
            if (cvLength < 7) return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`;
            return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3, 6)}-${currentValue.slice(6, 10)}`;
        }
    };
    const profileData = [
        {title: 'First Name', data: firstName || 'No First Name'},
        {title: 'Last Name', data: lastName || 'No Last Name'},
        {title: 'Phone', data: normalizeInput(phone) || '###-###-###'}
    ]
    
    const handleProfileChanges = e => {
        const {name, value} = e.target;
        setProfileInput(prevInput => ({...prevInput, [name]: value}));
    }
    const profileHasValues = Object.values(user.profile).some(x => x === null || x === '')

    // Input for editing address information
    const {street1, street2, city, state, county, zip} = user.profile.address;
    const [editAddress, setEditAddress] = useState(false);
    const addressInputs = {street1: street1 || '', street2: street2 || '', city: city || '', state: state || '', county: county || '' , zip: zip || ''}
    const [addressInput, setAddressInput] = useState(addressInputs)
    const addressData = [
        {title: 'Street 1', data: street1 || 'No Street 1'},
        {title: 'Street 2', data: street2 || 'No Street 2'},
        {title: 'City', data: city || 'No City'},
        {title: 'State', data: state || 'No State'},
        {title: 'County', data: county || 'No County'},
        {title: 'Zip Code', data: zip || 'No Zip Code'},
    ]
    const handleAddressChanges = e => {
        const {name, value} = e.target;
        setAddressInput(prevInput => ({...prevInput, [name]: value}));
    }

    // Update Address Prompt
    const addressHasValues = Object.values(user.profile.address).some(x => x === null || x === '') 
    
    // Profile Form Object && Function that handles Edit
    const profileWithAddress = {profile: { address: {street1, street2, city, state, county, zip}, ...profileInput }}
    const handleProfileEdit = e => {
        e.preventDefault();
        editPersonalInfo(profileWithAddress, _id);
        setEditPersonal(!editPersonal);
    }
    
    // Address Form Object && Function that handles Edit
    const addressWithProfile = {profile: {firstName, lastName, phone, address: addressInput}} 
    const handleAddressEdit = e => {
        e.preventDefault();
        editAddressInfo(addressWithProfile, _id)
        setEditAddress(!editAddress);
    }

    return(
        <div className='py-20 bg-slate-900'>
            <div className='text-neutral-800'>
                <div className='flex flex-col justify-center items-center bg-white w-1/3 mx-auto rounded-lg py-4'>
                    <img src="https://img.icons8.com/fluency/96/000000/name.png" alt=''/>
                    <p className='text-2xl font-bold'>
                        {username}
                    </p> 
                </div> 
            </div>
            <div className='w-5/6 flex flex-col justify-around bg-white m-auto mt-5 rounded-xl'> 
                <div className='text-center flex flex-col space-y-3 border-b-2 py-9'>
                    <p className='text-2xl font-semibold text-neutral-900'>Account Details</p>
                    <div className='text-center flex flex-col space-y-3 flex-wrap justify-center '>
                            {
                                accountDetails.map((item, i) => (
                                    <div key={i} className='px-10'>
                                        <p className='block text-gray-700 text-lg font-semibold '>{item.title}</p>
                                        <p className='w-full py-2 px-3 text-center text-xl text-gray-700 leading-tight'>{item.data}</p>
                                    </div>
                                ))
                            }
                        </div>
                </div>
                
                {/* Personal Information & Edit Form */}
                {!editPersonal ? 
                    <div className='text-center flex flex-col space-y-3 border-b-2 pb-10'>
                        {profileHasValues ?
                            <div className='bg-red-600 mx-5 rounded-b-xl border-2 border-red-400 shadow-lg py-2'>
                                    <p className='text-center text-sky-100 text-sm px-2'>
                                        Update your profile information
                                    </p>
                            </div>
                            
                            : 
                            
                            <></>
                        }
                        <button
                            onClick={() => setEditPersonal(!editPersonal)} 
                            className='ml-64 mt-3'
                        >
                            <i className="fa-regular fa-pen-to-square hover:shadow-xl hover:border-3 hover:border-gray-600 hover:text-gray-400 text-gray-600 border-2 border-gray-100 p-1 rounded-lg"></i>
                        </button>
                        <p className='py-3 text-center text-2xl font-semibold text-neutral-900'>Personal Information</p>
                        <div className='text-center flex flex-col space-y-3 flex-wrap justify-center '>
                            {
                                profileData.map((item, i) => (
                                    <div key={i} className='px-10'>
                                        <p className='block text-gray-700 text-lg font-semibold '>{item.title}</p>
                                        <p className='w-full py-2 px-3 text-center text-xl text-gray-700 leading-tight'>{item.data}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    : 

                    <div className='text-center flex flex-col space-y-3 pb-10'>  
                        <button className='ml-64 mt-3' onClick={() => setEditPersonal(!editPersonal)}><i className="fa-solid fa-xmark hover:shadow-xl hover:border-3 hover:border-gray-600 hover:text-gray-400 text-gray-600 border-2 border-gray-100 p-1 rounded-lg px-2"></i></button>
                        <ProfileForm 
                            handleChange={handleProfileChanges} 
                            handleProfileEdit={handleProfileEdit} 
                            normalizeInput={normalizeInput}
                            inputs={profileInput}  
                        />
                    </div>
                }
                
                {/* Edit Address Information */}
                {!editAddress ? 
                    <div className='text-center flex flex-col space-y-3 border-b-2 pb-4'>
                        {addressHasValues ?
                            <div className='bg-red-600 mx-5 rounded-b-xl border-2 border-red-400 shadow-lg py-2'>
                                    <p className='text-center text-sky-100 text-sm px-2'>
                                        Update your address by adding a valid mailing address
                                    </p>
                            </div>
                            
                            : 
                            
                            <></>
                        }
                        <div>
                            
                        </div>
                        <button className='ml-64 mt-3' onClick={() => setEditAddress(!editAddress)}><i className="fa-regular fa-pen-to-square hover:shadow-xl hover:border-3 hover:border-gray-600 hover:text-gray-400 text-gray-600 border-2 border-gray-100 p-1 rounded-lg"></i></button>
                        <p className='text-2xl font-semibold text-neutral-900'>Address</p>
                        <div className='flex flex-col flex-wrap space-y-3 justify-center items-center'>
                            {
                                addressData.map((item, i) => (
                                    <div key={i}>
                                        <p className='block text-gray-700 text-sm font-bold'>{item.title}</p>
                                        <p className='w-full py-3 px-3 text-center text-gray-700 leading-tight'>{item.data}</p>    
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    : 

                    <div className='text-center flex flex-col space-y-3 pb-10'>
                        <button className='ml-64 mt-3' onClick={() => setEditAddress(!editAddress)}><i className="fa-solid fa-xmark hover:shadow-xl hover:border-3 hover:border-gray-600 hover:text-gray-400 text-gray-600 border-2 border-gray-100 p-1 rounded-lg px-2"></i></button>
                        <AddressForm 
                            inputs={addressInput} 
                            handleChange={handleAddressChanges} 
                            handleAddressEdit={handleAddressEdit} 
                        />
                    </div>
                }

                {/* Account Information */}
                <div className=' flex flex-col space-y-3 py-4'>
                    <p className='text-center text-2xl font-semibold text-neutral-900'>
                        Accounts
                    </p>
                    <div className='border-b-2 py-2'>
                        <p className='text-center text-md font-bold text-neutral-600 mb-2'>Checking - {checking.nickname.toUpperCase() || 'Account'}</p>
                        <div className='flex justify-around items-center flex-wrap'>
                            <p>Nickname: {checking.nickname || 'No Nickname'}</p>
                            <p>Balance: ${checking.balance}.00</p>
                        </div>
                    </div>

                    <div className='py-2'>
                        <p className='text-center text-md font-bold text-neutral-600 mb-2'>Savings - {saving.nickname.toUpperCase() || 'Account'} </p>
                        <div className='flex justify-around items-center flex-wrap'>
                            <p>Nickname: {saving.nickname}</p>
                            <p>Balance: ${saving.balance}.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}