import Nav from "../components/Nav";
import allOfficers from "../officers.json";

export default function Officers() {
  // prettier-ignore
  const officersHtml = <>
    <h1>CSMC Officers Through The Years</h1>

    {allOfficers.map(yearOfficers => <YearOfficers key={yearOfficers.year} {...yearOfficers} />)}
  </>;

  const notes = (
    <>
      <h2>Notes</h2>

      <p>
        By popular vote, the committee was reduced to five members at the end of
        the 2004-2005 school year.
      </p>
      <p>
        The 2004-2005 school year was the last that CSMC adhered to a rigid
        committee structure. Under the rigid committee structure, students were
        elected to specific positions regardless of their class year.
      </p>
      <p>
        All email addresses are <code>@oberlin.edu</code>.
      </p>
    </>
  );

  return (
    <>
      <Nav />
      {officersHtml}
      {notes}
    </>
  );
}

export function YearOfficers({ year, structured, members }) {
  return (
    <>
      <h2>{year}</h2>
      <table className="officers">
        <thead>
          <tr>
            <th className="left">{structured ? "Role" : "Name"}</th>
            <th className="right">{structured ? "Name" : "Email"}</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={`${member.role}: ${member.name}, ${member.email}`}>
              <td className="left">{structured ? member.role : member.name}</td>
              <td className="right">
                {structured ? member.name : <code>{member.email}</code>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
