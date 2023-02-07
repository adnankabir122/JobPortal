import React from 'react'
import LeftPanel from '../BrowseJob/LeftPanel'
import CandidatesCardContainer from './CandidatesCardContainer'

const CandiatesArea = () => {
  return (
    <div className="candidates-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12">
            <LeftPanel />
          </div>
          <div className="col-lg-9 col-md-12">
            <CandidatesCardContainer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CandiatesArea
