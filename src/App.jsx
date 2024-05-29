import { useState } from "react";
import "./App.css";

function App() {
  const [isSubmitted, setIsSubmitted] = useState({
    infoForm: false,
    educationForm: false,
    workForm: false,
  });
  const [formData, setFormData] = useState({
    nameInput: "",
    email: "",
    tel: "",
    school: "",
    title: "",
    from: "",
    end: "",
    company: "",
    responsibilities: "",
    position: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    const { name } = e.target;
    console.log(e.target.name);
    const value = isSubmitted[name];
    console.log(`${name} value: ${value}`);
    setIsSubmitted((prev) => ({
      ...prev,
      [name]: !value,
    }));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  return (
    <div className="cv">
      <Info
        formData={formData}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        isSubmitted={isSubmitted}
      />
      <Studies
        formData={formData}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        isSubmitted={isSubmitted}
      />
      <Experience
        formData={formData}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        isSubmitted={isSubmitted}
      />
    </div>
  );
}

export default App;

function Info({ formData, handleSubmit, handleChange, isSubmitted }) {
  return (
    <section>
      <h1>Personal Information</h1>
      <form action="/" name="infoForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nameInput">Name</label>
          {isSubmitted.infoForm ? (
            formData.nameInput
          ) : (
            <input
              type="text"
              name="nameInput"
              required
              value={formData.name}
              onChange={handleChange}
            />
          )}
        </div>
        <div>
          <label htmlFor="email">Email</label>

          {isSubmitted.infoForm ? (
            formData.email
          ) : (
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          )}
        </div>
        <div>
          <label htmlFor="tel">Tel</label>
          {isSubmitted.infoForm ? (
            formData.tel
          ) : (
            <input
              type="number"
              required
              name="tel"
              value={formData.tel}
              onChange={handleChange}
            />
          )}
        </div>
        <button type="submit">{isSubmitted ? "Edit" : "Submit"}</button>
      </form>
    </section>
  );
}

function Studies({ formData, handleSubmit, handleChange, isSubmitted }) {
  const submitted = isSubmitted.educationForm;
  return (
    <section>
      <h1>Education</h1>
      <form action="#" name="educationForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="school">School</label>
          {submitted ? (
            formData.school
          ) : (
            <input type="text" name="school" required onChange={handleChange} />
          )}
        </div>
        <div>
          <label htmlFor="title">Study Title</label>
          {submitted ? (
            formData.title
          ) : (
            <input type="text" name="title" onChange={handleChange} required />
          )}
        </div>
        <div>
          <label htmlFor="from">Study From</label>
          {submitted ? (
            formData.from
          ) : (
            <input type="date" name="from" onChange={handleChange} />
          )}
        </div>
        <div>
          <label htmlFor="to">Study End</label>
          {submitted ? (
            formData.to
          ) : (
            <input type="date" name="to" onChange={handleChange} />
          )}
        </div>
        <button type="submit">{submitted ? "Edit" : "Submit"}</button>
      </form>
    </section>
  );
}

function Experience({ formData, handleSubmit, handleChange, isSubmitted }) {
  const submitted = isSubmitted.workForm;
  return (
    <section>
      <h1>Work Experience</h1>
      <form action="#" onSubmit={handleSubmit} name="workForm">
        <div>
          <label htmlFor="">Company</label>
          {submitted ? (
            formData.company
          ) : (
            <input type="text" onChange={handleChange} name="company" />
          )}
        </div>
        <div>
          <label htmlFor="position">Position</label>
          {submitted ? (
            formData.position
          ) : (
            <input type="text" onChange={handleChange} name="position" />
          )}
        </div>
        <div>
          <label htmlFor="responsibilities">Responsibilities</label>
          {submitted ? (
            formData.responsibilities
          ) : (
            <input
              type="text"
              onChange={handleChange}
              name="responsibilities"
            />
          )}
        </div>
        <button type="submit">{submitted ? "Edit" : "Submit"}</button>
      </form>
    </section>
  );
}
