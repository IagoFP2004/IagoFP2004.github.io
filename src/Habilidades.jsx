export function Habilidades() {
  return (
    <div className="row row-cols-1 row-cols-md-3 justify-content-center g-4 mb-5 px-3 px-md-5">
      
      <div className="col">
        <div className="p-4 h-100 d-flex flex-column align-items-center rounded-3 text-center shadow-sm bg-body-tertiary border border border
        ">
          <h3>Frontend</h3>
          <img
            src="https://skillicons.dev/icons?i=js,html,css,bootstrap,tailwind,react"
            alt="Frontend Skills"
            className="pt-3 img-fluid"
          />
        </div>
      </div>

      <div className="col">
        <div className="p-4 h-100 d-flex flex-column align-items-center rounded-3 text-center shadow-sm bg-body-tertiary border border border
        ">
          <h3>Backend</h3>
          <img
            src="https://skillicons.dev/icons?i=php,symfony,mysql,docker,nginx,java"
            alt="Backend Skills"
            className="pt-3 img-fluid"
          />
        </div>
      </div>

      <div className="col">
        <div className="p-4 h-100 d-flex flex-column align-items-center rounded-3 text-center shadow-sm bg-body-tertiary border border border
        ">
          <h3>Tools</h3>
          <img
            src="https://skillicons.dev/icons?i=git,github,linux,vscode,postman,phpstorm,figma"
            alt="Tools Skills"
            className="pt-3 img-fluid"
          />
        </div>
      </div>

    </div>
  );
}
