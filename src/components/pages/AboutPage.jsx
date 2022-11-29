import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-4 colAbout colAb1">
        Este proyecto fue realizado como un ejercicio de clase en el Bootcamp
        FullStack dictado por HackAcademy. Puedes ver mas en:{" "}
        <a
          className="githubLink"
          href="https://github.com/fgomensoro"
          target="_blank"
        >
          My Github
        </a>
      </div>

      <div className="col-4 colAbout">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
        numquam minima quas libero obcaecati tempore neque magni quis dolorum,
        vero quaerat reiciendis? Ipsa, reiciendis eligendi sunt vel inventore
        blanditiis praesentium.
      </div>
    </div>
  );
}

export default AboutPage;
