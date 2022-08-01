// EducationForm.js
/* EducationForm component contains education info entry for the CV */

import React, { useState } from "react";
import Education from "./Education";

const EducationForm = (props) => {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const submitted = props.submitted;
  const id = props.id;
  const addSchool = props.addSchool;
  const cancelSchool = props.cancelSchool;
  return submitted === false ? (
    <div className="Education form">
      <form>
        <label htmlFor="school">University:</label>
        <input
          value={school}
          type="text"
          id="school"
          onChange={(e) => setSchool(e.target.value)}
          placeholder="University of Kansas"
        />
        <label htmlFor="degree">Degree:</label>
        <input
          value={degree}
          type="text"
          id="degree"
          onChange={(e) => setDegree(e.target.value)}
          placeholder="Computer Science"
        />
        <label htmlFor="start">Start Date:</label>
        <input
          value={start}
          type="text"
          id="start"
          onChange={(e) => setStart(e.target.value)}
          placeholder="08/2013"
        />
        <label htmlFor="end">End Date:</label>
        <input
          value={end}
          type="text"
          id="end"
          onChange={(e) => setEnd(e.target.value)}
          placeholder="05/2017"
        />
      </form>
      <div className="btn-container">
        <button onClick={addSchool}>
          Add School
        </button>
        <button onClick={() => cancelSchool(id)}>
          Delete
        </button>
      </div>
    </div>
  ) : (
    <Education school={school} degree={degree} start={start} end={end} />
  );
};

export default EducationForm;