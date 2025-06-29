import React from 'react'
import Svg from '../component/svg'
import Chart from '../component/Chart'
import TopStats from '../component/TopStats'
import CompanyHeader from '../component/CompanyHeader'
import ClientList from '../component/ClientList'

const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-black to-gray-900">
      
      <div className="flex flex-col  items-center justify-center">
        {/* <Svg /> */}
        {/* <Chart /> */}
        <TopStats />
        <CompanyHeader />
        <ClientList />
      </div>
    </div>
  )
}

export default Home