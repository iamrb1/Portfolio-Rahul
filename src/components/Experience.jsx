import SectionHeading from "./SectionHeading";
const groups = [
  [
    "Languages",
    ["Python", "C / C++", "JavaScript", "TypeScript", "Java", "Groovy", "SQL"],
  ],
  [
    "Applications",
    [
      "React",
      "Node.js",
      "Next.js",
      "Tailwind CSS",
      "HTML / CSS",
      "Flask",
      "Firebase",
    ],
  ],
  [
    "Systems & tools",
    [
      "AUTOSAR",
      "Android Studio",
      "REST APIs",
      "CI/CD",
      "GitHub",
      "Pandas",
      "NumPy",
    ],
  ],
];
export default function Experience() {
  return (
    <section id="experience" className="section container toolkit">
      <SectionHeading number="05" title="Toolkit">
        Languages, frameworks, and tools
      </SectionHeading>
      <div className="toolkit-grid">
        {groups.map(([name, skills]) => (
          <div key={name} data-reveal>
            <h3>{name}</h3>
            <p>{skills.join(" · ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
