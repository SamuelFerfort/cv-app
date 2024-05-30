export default function Info({
  formData,
  handleSubmit,
  handleChange,
  isSubmitted,
}) {
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
              value={formData.nameInput}
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
              type="tel"
              required
              name="tel"
              value={formData.tel}
              onChange={handleChange}
            />
          )}
        </div>
        <button type="submit">
          {isSubmitted.infoForm ? "Edit" : "Submit"}
        </button>
      </form>
    </section>
  );
}
