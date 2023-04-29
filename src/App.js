import Footer from './components/Footer'
import Navigation from './components/Navigation'
import React, { useState } from 'react'
import Home from './components/tabs/Home'
import Contact from './components/tabs/Contact'
import Projects from './components/tabs/Projects'
import Resume from './components/tabs/Resume'

function App() {
  // Set the current tab to 'Home'
  const [currentTab, setCurrentTab] = useState('Home')

  // Render the tab based on the state of currentTab
  const renderTab = () => {
      if (currentTab === 'Home') {
          return <Home/>
      }
      if (currentTab === 'Contact') {
          return <Contact/>
      }
      if (currentTab === 'Projects') {
          return <Projects/>
      }
      return <Resume/>     
  }

  const handleTabChange = (tab) => setCurrentTab(tab)

  return (
    <div>
      <Navigation currentTab={currentTab} handleTabChange={handleTabChange} />
      {renderTab()}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
