import React from "react";

const GetProfile = (props) => {
  return (
    <div className="mt-3 text-center">
      <div className=" my-3">
        <h5>Handle</h5>
        <hr />

        <p className="mb-3">{props.profile.handle}</p>
      </div>
      <div className=" my-3">
        <h5>status</h5>
        <hr />
        <p className="mb-3">{props.profile.status}</p>
      </div>
      <div className=" my-3">
        <h5>Company</h5>
        <hr />
        <p className="mb-3"> {props.profile.company}</p>
      </div>
      <div className=" my-3">
        <h5>Website</h5>
        <hr />
        <p className="mb-3">{props.profile.website}</p>
      </div>
      <div className=" my-3">
        <h5>Location</h5>
        <hr />
        <p className="mb-3"> {props.profile.location}</p>
      </div>
      <div className=" my-3">
        <h5>Twitter</h5>
        <hr />
        <p className="mb-3"> {props.profile.social.twitter}</p>
      </div>
      <div className=" my-3">
        <h5>Facebook</h5>
        <hr />
        <p className="mb-3"> {props.profile.social.facebook}</p>
      </div>
      <div className=" my-3">
        <h5>SKills</h5>
        <hr />
        <p className="mb-3">
          {" "}
          {props.profile.skills.map((skill) => (
            <div>
              <div key={skill._id}>
                {skill} {""},
              </div>
              {""}
            </div>
          ))}
        </p>
      </div>
    </div>
  );
};

export default GetProfile;
