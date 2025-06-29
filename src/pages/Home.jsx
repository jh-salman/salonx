
i
import TopStats from '../component/TopStats'
import CompanyHeader from '../component/CompanyHeader'
import ClientList from '../component/ClientList'

const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-black to-gray-900">
      
      <div className="flex flex-col  items-center justify-center">
     
        <TopStats />
        <CompanyHeader />
        <ClientList />
      </div>
    </div>
  )
}

export default Home