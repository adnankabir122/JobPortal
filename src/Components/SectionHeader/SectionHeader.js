import React from 'react'
import "./SectionHeader.css"
const SectionHeader = (props) => {
  const title = props.title
  return (
    <div>
      <div className="section-header">
        <div className="container">
          <h1 className='text-dark text-center'>{title}</h1>
        </div>
      </div>
    </div>
  )
}

export default SectionHeader
