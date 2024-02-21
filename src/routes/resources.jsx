import Nav from "../components/Nav";

export default function Resources() {
  return (
    <>
      <Nav />
      <h1> Resources </h1>
      <h2> CSMC</h2>
      <ul>
        <li>
          <a href="https://calendar.google.com/calendar/embed?src=c_81690d32e6d77b11c493f08af00e77c1a8059983f16c8b870c69e57566fb0206%40group.calendar.google.com&ctz=America%2FNew_York">
            CSMC Google Calendar of Events
          </a>
        </li>
      </ul>
      <h2> Jobs and Internships</h2>
      <ul>
        <li>
          Good places to look for jobs: Linkedin, Handshake, Indeed, Wellfound
          (startups)
        </li>
        <li>
          <a href="https://github.com/poteto/hiring-without-whiteboards">
            GitHub repository that contains jobs that have a good interview
            process
          </a>
        </li>
      </ul>
    </>
  );
}
