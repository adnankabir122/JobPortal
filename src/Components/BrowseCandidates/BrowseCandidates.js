import React from 'react'
import ApplyNow from '../ApplyNow/ApplyNow'
import Footer from '../Footer/Footer'
import SectionHeader from '../SectionHeader/SectionHeader'
import TopNav from '../TopNav/TopNav'
import "./BrowseCandidates.css"
import CandiatesArea from './CandiatesArea'


const BrowseCandidates = () => {
  return (
    <div>
      <TopNav/>
      <SectionHeader title="Browse Candidates" />
      <CandiatesArea/>
      <ApplyNow />
      <Footer />
    </div>
  )
}

export default BrowseCandidates
