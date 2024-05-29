export default function Education({
  formData,
  handleSubmit,
  handleChange,
  isSubmitted,
}) {
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
            <input
              type="text"
              name="school"
              required
              onChange={handleChange}
              value={formData.school}
            />
          )}
        </div>
        <div>
          <label htmlFor="title">Study Title</label>
          {submitted ? (
            formData.title
          ) : (
            <input
              type="text"
              name="title"
              onChange={handleChange}
              required
              value={formData.title}
            />
          )}
        </div>
        <div>
          <label htmlFor="from">Study From</label>
          {submitted ? (
            formData.from
          ) : (
            <input
              type="date"
              name="from"
              onChange={handleChange}
              value={formData.from}
            />
          )}
        </div>
        <div>
          <label htmlFor="to">Study End</label>
          {submitted ? (
            formData.to
          ) : (
            <input
              type="date"
              name="to"
              onChange={handleChange}
              value={formData.to}
            />
          )}
        </div>
        <button type="submit">{submitted ? "Edit" : "Submit"}</button>
      </form>
    </section>
  );
}
