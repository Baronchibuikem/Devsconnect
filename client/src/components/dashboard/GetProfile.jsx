import React from "react";

const GetProfile = (props) => {
  return (
    <div className="mt-3 text-center">
      <div className=" my-3">
        <div className="row ml-5">
          <div className="col-md-6 col-sm-12 text-uppercase">
            <h5 className="text-left text-uppercase">Handle</h5>
          </div>
          <div className="col-md-6 col-sm-12">
            <p className="mb-3 text-left">{props.profile.handle}</p>
          </div>
        </div>
      </div>
      <div className=" my-3">
        <div className="row ml-5">
          <div className="col-md-6 col-sm-12 text-uppercase">
            <h5 className="text-left text-uppercase">status</h5>
          </div>
          <div className="col-md-6 col-sm-12">
            {" "}
            <p className="mb-3 text-left">{props.profile.status}</p>
          </div>
        </div>
      </div>
      <div className=" my-3">
        <div className="row ml-5">
          <div className="col-md-6 col-sm-12 text-uppercase">
            <h5 className="text-left text-uppercase">Company</h5>
          </div>
          <div className="col-md-6 col-sm-12">
            <p className="mb-3 text-left"> {props.profile.company}</p>
          </div>
        </div>
      </div>
      <div className=" my-3">
        <div className="row ml-5">
          <div className="col-md-6 col-sm-12 text-uppercase">
            <h5 className="text-left text-uppercase">Website</h5>
          </div>
          <div className="col-md-6 col-sm-12">
            {" "}
            <p className="mb-3 text-left">{props.profile.website}</p>
          </div>
        </div>
      </div>
      <div className=" my-3">
        <div className="row ml-5">
          <div className="col-md-6 col-sm-12 text-uppercase">
            <h5 className="text-left text-uppercase">Location</h5>
          </div>
          <div className="col-md-6 col-sm-12">
            <p className="mb-3 text-left"> {props.profile.location}</p>
          </div>
        </div>
      </div>
      <div className=" my-3">
        <div className="row ml-5">
          <div className="col-md-6 col-sm-12">
            <h5 className="text-left text-uppercase">Twitter</h5>
          </div>
          <div className="col-md-6 col-sm-12">
            <p className="mb-3 text-left"> {props.profile.social.twitter}</p>
          </div>
        </div>
      </div>
      <div className=" my-3">
        <div className="row ml-5">
          <div className="col-md-6 col-sm-12">
            <h5 className="text-left text-uppercase">Facebook</h5>
          </div>
          <div className="col-md-6 col-sm-12">
            <p className="mb-3 text-left"> {props.profile.social.facebook}</p>
          </div>
        </div>
      </div>
      <div className=" my-3">
        <div className="row ml-5">
          <div className="col-md-6 col-sm-12">
            <h5 className="text-left text-uppercase">SKills</h5>
          </div>
          <div className="col-md-6 col-sm-12">
            {" "}
            <div className="text-left">
              {props.profile.skills.map((skill) => (
                <div>
                  <div key={skill._id}>
                    {skill} {""},
                  </div>
                  {""}
                </div>
              ))}
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default GetProfile;
