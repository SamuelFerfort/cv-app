import PropTypes from "prop-types";

Experience.propTypes = {
  formData: PropTypes.objectOf(PropTypes.string),
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  isSubmitted: PropTypes.objectOf(PropTypes.bool),
};

export default function Experience({
  formData,
  handleSubmit,
  handleChange,
  isSubmitted,
}) {
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
            <input
              type="text"
              onChange={handleChange}
              name="company"
              value={formData.company}
            />
          )}
        </div>
        <div>
          <label htmlFor="position">Position</label>
          {submitted ? (
            formData.position
          ) : (
            <input
              type="text"
              onChange={handleChange}
              name="position"
              value={formData.position}
            />
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
              value={formData.responsibilities}
            />
          )}
        </div>
        <button type="submit">{submitted ? "Edit" : "Submit"}</button>
      </form>
    </section>
  );
}
