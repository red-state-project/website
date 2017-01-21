import React from 'react';

const Slide1 = ({ width }) => {

  return (
    <div className="page-1-container">
      <div>
        <div style={{ width: width / 2, float: 'left', height: 200 }} />
        <div style={{ width: width / 2, float: 'left', marginTop: 110 }} >
          <p className="page1-title">HE</p>
          <p className="page1-title">RED</p>
          <p className="page1-title">STATE</p>
          <p className="page1-title">PROJECT</p>
        </div>
      </div>
    </div>
  )
}

export default Slide1;