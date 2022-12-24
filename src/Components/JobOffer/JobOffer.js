import React from 'react'
import "./JobOffer.css"
const JobOffer = () => {
  return (
    <div>
        <div className="job-offer-text-area text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="job-offer-text text-center">
                            <h2>Job Offers & Candidate </h2>
                            <p>It's easy. Simply post a job you need completed and receive competitive bids from freelancers within minutes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="job-offer-card-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="offer-nav d-flex justify-content-center">
                            <nav className='d-flex justify-content-center p-2'>
                                <ul>
                                    <li><a href="#">Jobs</a></li>
                                    <li><a href="#">Candidates</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default JobOffer
