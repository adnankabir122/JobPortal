import React from 'react'
import DashboardMenu from '../DashboardTop/DashboardMenu'
import DashboardTop from '../DashboardTop/DashboardTop'
import Footer from '../Footer/Footer'
import TopNav from '../TopNav/TopNav'
const CandidateSavejobs = () => {
  return (
    <div>
      <TopNav />
      <div className="dashboard-with-menu">
        <DashboardTop />
        <DashboardMenu/>
      </div>
      <Footer/>
    </div>
  )
}

export default CandidateSavejobs
