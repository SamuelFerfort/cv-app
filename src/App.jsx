import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="cv">
      <Info />
      <Studies />
      <Experience />
    </div>
  );
}

export default App;

function Info() {
  return (
    <section>
      <h1>Personal Information</h1>
      <form action="/">
        <div>
          <label htmlFor="">Name</label>
          <input type="text" required />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" required />
        </div>
        <div>
          <label htmlFor="">Tel</label>
          <input type="number" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

function Studies() {
  return (
    <section>
      <h1>Education</h1>
      <form action="#">
        <div>
          <label htmlFor="">School</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Study Title</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Study From</label>
          <input type="date" />
        </div>
        <div>
          <label htmlFor="">Study End</label>
          <input type="date" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

function Experience() {
  return (
    <section>
      <h1>Work Experience</h1>
      <form action="#">
        <div>
          <label htmlFor="">Company</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Position</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Responsibilities</label>
          <input type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
