import React from 'react'
import DashboardMenu from '../DashboardTop/DashboardMenu'
import DashboardTop from '../DashboardTop/DashboardTop'
import TopNav from '../TopNav/TopNav'
import Footer from '../Footer/Footer'
const CandidateResume = () => {
  return (
    <div>
      <TopNav />
      <div className="dashboard-with-menu">
        <DashboardTop />
        <DashboardMenu />
      </div>
      <Footer/>
    </div>
  )
}

export default CandidateResume
