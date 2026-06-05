import Nav from "./Nav";
import Footer from "./Footer";

const contactInfo = [
  {
    name: "Nitin Goyal",
    image: "https://avatars.githubusercontent.com/u/3150?v=4",
    linkedin: "https://www.linkedin.com/in/nitin-k-g/",
    email: "goyal.niti@northeastern.edu",
    website: "https://www.github.com/nitin3150",
  },
  {
    name: "Utkarsh Dev",
    image: "src/assets/Forg.png",
    linkedin: "https://www.linkedin.com/in/utkarsh-dev-b7416616b/",
    email: "utkarshdev8349@gmail.com",
    website: "https://utkarshdev2.github.io/Personal_Homepage/",
  },
];

export default function Contact() {
  return (
      <section id="contact">
        <div className="section-label">Contact Us</div>
        <h2>
          Get in touch.
          <br />
          <span>We'd love to hear from you.</span>
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "1.5rem",
            marginTop: "2rem",
          }}
        >
          {contactInfo.map((contact) => (
            <div key={contact.name} className="op-card">
              <div className="contact-name">{contact.name}</div>
              <img
                src={contact.image}
                alt={contact.name}
                style={{
                  width: "100%",
                  maxWidth: "200px",
                  height: "auto",
                  marginBottom: "1rem",
                }}
              />
              <div className="op-title" style={{ marginBottom: "1rem" }}>
                Email:{" "}
                <a
                  href={`mailto:${contact.email}`}
                  style={{ color: "#b5b5b5" }}
                >
                  {contact.email}
                </a>
              </div>
              <div className="op-title" style={{ marginBottom: "0.5rem" }}>
                LinkedIn:{" "}
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#b5b5b5" }}
                >
                  View profile
                </a>
              </div>
              <div className="op-title">
                Website:{" "}
                <a
                  href={contact.website}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#b5b5b5" }}
                >
                  Visit site
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
  );
}
