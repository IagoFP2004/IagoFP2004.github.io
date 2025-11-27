export function Contacto() {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center justify-content-center mb-5 gap-3">
      <a
        href="https://www.linkedin.com/in/iago-francisco-p%C3%A9rez-b03a90289/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary px-4 py-3"
      >
        <i className="bi bi-linkedin pe-2"></i>
        LinkedIn
      </a>

      <a
        href="https://github.com/IagoFP2004"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-dark px-4 py-3"
      >
        <i className="bi bi-github pe-2"></i>
        GitHub
      </a>

      <a
        href="mailto:iagofranciscoperez@gmail.com"
        className="btn btn-danger px-4 py-3"
      >
        <i className="bi bi-envelope pe-2"></i>
        Email
      </a>

      <a
        href="mailto:iagofranciscoperez@gmail.com"
        className="btn btn-secondary px-4 py-3"
      >
        <i className="bi bi-instagram pe-2"></i>
        Instagram
      </a>
    </div>
  );
}
