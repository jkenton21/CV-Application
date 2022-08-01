// ExperienceForm.js
/* ExperienceForm component experience info entry for the CV */

import React, { useState } from "react";
import Experience from "./Experience";

const ExperienceForm = (props) => {
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [jobStart, setJobStart] = useState("");
  const [jobEnd, setJobEnd] = useState("");
  const [responsibilities, setResponsibilities] = useState("");

  const submitted = props.submitted;
  const id = props.id;
  const addJob = props.addJob;
  const cancelJob = props.cancelJob;
  return submitted === false ? (
    <div className="Experience form">
      <form>
        <label htmlFor="title">Title:</label>
        <input
          value={title}
          type="text"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Software Engineer"
        />
        <label htmlFor="company">Company:</label>
        <input
          value={company}
          type="text"
          id="company"
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Monsters Inc."
        />
        <label htmlFor="location">Location:</label>
        <input
          value={location}
          type="text"
          id="location"
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Kansas City, MO"
        />
        <label htmlFor="jobStart">Start Date:</label>
        <input
          value={jobStart}
          type="text"
          id="jobStart"
          onChange={(e) => setJobStart(e.target.value)}
          placeholder="06/2017"
        />
        <label htmlFor="end">End Date:</label>
        <input
          value={jobEnd}
          type="text"
          id="jobEnd"
          onChange={(e) => setJobEnd(e.target.value)}
          placeholder="06/2022"
        />
        <label htmlFor="responsibilities">Job Responsibilities:</label>
        <textarea
          value={responsibilities}
          id="responsibilities"
          onChange={(e) => setResponsibilities(e.target.value)}
          placeholder="Job responsibilities"
        />
      </form>
      <div className="btn-container">
        <button onClick={addJob}>
          Add Job
        </button>
        <button onClick={() => cancelJob(id)}>
          Delete
        </button>
      </div>
    </div>
  ) : (
    <Experience
      company={company}
      title={title}
      location={location}
      jobStart={jobStart}
      jobEnd={jobEnd}
      responsibilities={responsibilities}
    />
  );
};

export default ExperienceForm;