
import './App.css'
import Banner from './components/layouts/Banner'
import ChosseAgengy from './components/layouts/ChosseAgengy'
import ClientReview from './components/layouts/ClientReview'
import Development from './components/layouts/Development'
import Footer from './components/layouts/Footer'
import RecentWork from './components/layouts/RecentWork'
import Services from './components/layouts/Services'
import Success from './components/layouts/Success'

function App() {
 

  return (
    <>
     <Banner/>
     <Success/>
     <Services/>
     <RecentWork/>
     <ChosseAgengy/>
     <ClientReview/>
     <Development/>
     <Footer/>
       
    </>
  )
}

export default App
