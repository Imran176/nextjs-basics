import React from "react";

const user = (props) => (
  <div>
    <h3>Users Info</h3>

    <div className="user-info">
      <h5>{props.name}</h5>
      <p>{props.age}</p>
    </div>

    <style jsx>{`
      .user-info {
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }

      .user-info h5,
      .user-info p {
        margin: 0 0 1rem 0;
      }

      .user-info h5 {
        color: red;
      }

      .user-info p {
        color: purple;
        font-weight: bold;
      }
    `}</style>
  </div>
);

export default user;
