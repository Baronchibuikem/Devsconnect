import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../../assets/css/Dashboard.css";
import GetUserProfile from "./GetProfile";
import GetUserEducation from "./GetEducation";
import GetUserExperience from "./GetExperience";
import { getCurrentProfile } from "../../store/actions/profileActions";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginTop: 60,
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const dispatch = useDispatch();

  const params = useSelector((state) => ({
    profile: state.profilereducer.profile,
  }));

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, [dispatch]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section id="tabs" className="project-tab mt-5 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav>
              <div
                className="nav nav-tabs nav-fill"
                id="nav-tab"
                role="tablist"
              >
                <a
                  className="nav-item nav-link active"
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="#nav-home"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  Profile
                </a>
                <a
                  className="nav-item nav-link"
                  id="nav-profile-tab"
                  data-toggle="tab"
                  href="#nav-profile"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Experience
                </a>
                <a
                  className="nav-item nav-link"
                  id="nav-contact-tab"
                  data-toggle="tab"
                  href="#nav-contact"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  Education
                </a>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <GetUserProfile profile={params.profile} />
              </div>
              <div
                className="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <GetUserExperience experience={params.profile} />
              </div>
              <div
                className="tab-pane fade"
                id="nav-contact"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                <GetUserEducation education={params.profile} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
