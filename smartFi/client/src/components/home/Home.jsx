import React, {useContext} from 'react';
import { AppContext } from '../../context/AppProvider';

export default function Home() {

    const {user} = useContext(AppContext);
    const {checking, saving} = user.accounts;

    return(
        <div className='py-52 h-screen bg-slate-900'>
            <div className='bg-slate-50'>
                <p className='font-semibold px-3 block border bg-gray-200'>{user.username}'s Overview</p>
                <div className='flex flex-col justify-center items-center bg-slate-50'>
                    <div className='flex items-center justify-between items-center border-b-2 w-full rounded-lg mx-auto py-4 px-2'>
                        <div className='flex justify-center items-center space-x-5 text-xl'>
                            <img className='' src="https://img.icons8.com/officel/40/000000/bank-cards.png" alt='debit card'/>
                            <p className='text-stone-800'>{checking.nickname.at(0).toUpperCase() + checking.nickname.slice(1) || 'Checking Account'}</p>
                        </div>
                        <div>
                            <p className='text-right'>Balance</p>
                            <p className='text-xl font-bold text-green-700'>${checking.balance || 0}.00</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between items-center border-b-2 w-full rounded-lg mx-auto py-4 px-2'>
                        <div className='flex justify-center items-center space-x-5 text-xl'>
                            <img className='' src="https://img.icons8.com/external-indigo-line-kalash/40/000000/external-safe-finance-banking-indigo-line-kalash-2.png" alt='safe'/>
                            <p className='text-stone-800'>{saving.nickname.at(0).toUpperCase() + saving.nickname.slice(1) || 'Savings Account'}</p>
                        </div>
                        <div>
                            <p className='text-right'>Balance</p>
                            <p className='text-xl font-bold text-green-700'>${saving.balance || 0}.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}