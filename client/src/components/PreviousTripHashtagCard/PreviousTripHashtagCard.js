import React from "react";
import "./PreviousTripHashtagCard.css";
import "../../App.css";

// Function based React Component
const PreviousTripHashtagCard = props => {
  console.log(props);
  // Default Class to apply to Component
  let classList = `prev-hash-card-container`;
  let classListHashtags = `prev-hash-card-container hashtags`;

  if (props.data.length === 0 && props.type === "trips") {
    return (
      <div className={classList}>
        <div className="trips-content-container">
          <h1>Previous Trips</h1>
          <div className="no-trips-container">{props.children}</div>
        </div>
      </div>
    );
  }
  if (props.data.length > 0 && props.type === "trips") {
    if (props.data.length <= 10) {
      return (
        <div className={classList}>
          <div className="trips-content-container">
            <h1>Previous Trips</h1>
            <div className="trips-names-container">
              {props.data.map(item => {
                return <div className="single-trip-container">{item}</div>;
              })}
            </div>
          </div>
        </div>
      );

      // if props.data is greater than 10 trips trim it down to the latest 10 trips
    } else if (props.data.length > 10) {
      let dataLength = props.data.length - 1;
      let trimmedData = props.data.slice(dataLength - 10, dataLength);
      return (
        <div className={classList}>
          <div className="trips-content-container">
            <h1>Previous Trips</h1>
            <div className="trips-names-container">
              {trimmedData.map(item => {
                return <div className="single-trip-container">{item}</div>;
              })}
            </div>
          </div>
        </div>
      );
    }
  }
  // Issues:
  // 1. each item will have to link to some sort of search page that uses the hashtag as a search query.
  /* 2. one way I think we could handle this component is by passing in an array of hashtags that is already trimmed?
     not sure how we're going to be handling this hashtag system. I'm thinking we could have some functionality
     that keeps a count of every hashtag posted as its posted and stores that number in the database?*/
  if (props.data.length > 0 && props.type === "hashtags") {
    return (
      <div className={classListHashtags}>
        <div className="trips-content-container">
          <h1>Trending Hashtags</h1>
          <div className="trips-names-container">
            {props.data.map((item, key) => {
              return (
                <div className="single-hashtag-container">
                  <div>
                    <h3>
                      {key + 1} <a href="#">{item}</a>
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
    // not totally sure what this should display when it's empty. Hypothetically it would never even be empty?
  } else if (props.data.length === 0 && props.type === "hashtags") {
    return (
      <div className={classListHashtags}>
        <div className="trips-content-container">
          <h1>Previous Trips</h1>
          <div className="no-trips-container">
            <h2>No hashtags yet!</h2>
          </div>
        </div>
      </div>
    );
  }
};

export default PreviousTripHashtagCard;
