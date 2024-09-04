import HeaderBox from '@/components/ui/HeaderBox';
import RightSideBar from '@/components/ui/RightSideBar';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import { Jolly_Lodger } from 'next/font/google';
import React from 'react';

const Home = () => {
    const loggedIn = {firstName: 'Rash', lastName: 'Juma', email:'contact@jJuma.pro'} as User;
    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox 
                        type ="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || 'Guest'}
                        subtext ="Manage and access your account's transactions efficiently."
                    />

                    <TotalBalanceBox 
                        accounts = {[]}
                        totalBanks = {1}
                        totalCurrentBalance = {28250.59}
                    />

                </header>
                RECENT TRANSACTIONS
            </div>
            <RightSideBar 
                user={loggedIn}
                transactions={[]}
                banks={[{currentBalance:234.56}, {currentBalance:324.78}]}
            />
        </section>
    )
}

export default Home;