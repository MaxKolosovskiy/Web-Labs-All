import React from 'react';
import '../styles/Reviews.css';

const getRandomAvatar = () => {
  const randomGender = Math.random() < 0.5 ? 'male' : 'female';
  const randomQuery = Math.floor(Math.random() * 1000);
  return `https://xsgames.co/randomusers/avatar.php?g=${randomGender}&random=${randomQuery}`;
};

const Reviews = () => {
  return (
      <div className="review-wrapper">
        <h2>
          <span className="underline-light_blue">Our satisfied customers</span>
        </h2>
        <div className="review-div">
          <div className="flex-row">
            <div className="review-item eachdiv col-2">
              <div className="user-details">
                <div className="img-box">
                  <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQlT8zHc1mqjQHcAbFHThC8bpscABdlHPjWQb3nA5uI4NoUPAbnUnCIr6_CqiMdpsjFtcWqKKoEj-IBSRMXapgXBA" alt="kli4ko" />
                </div>
                <div className="det-box">
                  <p className="name">Vitaliy Volodymyrovych Klitschko</p>
                  <p className="designation">Verified Buyer</p>
                </div>
              </div>
              <div className="review-content">
                <h4 className="review-title">Impressive Luxury Sedan</h4>
                <p className="review-text">
                  "I recently bought a premium sedan from this dealership, and the experience has been outstanding. The car delivers exceptional performance and unmatched comfort. I'm extremely satisfied with my choice and highly recommend this place to anyone passionate about cars."
                </p>
              </div>
            </div>
            

            {/* Add more review items here */}
          </div>
        </div>
        <button className="view-more-btn">View more</button>
      </div>
  );
};

export default Reviews;