import { useState } from "react";
import "./App.css";
import Education from "./components/Education";
import Experience from "./components/Work";
import Info from "./components/Info";
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
      <Education
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
