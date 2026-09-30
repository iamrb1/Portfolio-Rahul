import { jobs } from "../data/jobs";
import SectionHeading from "./SectionHeading";
// Emphasize outcomes and deliverables without changing the résumé wording.
const highlights = [
  "30% shorter feature delivery cycles", "50% reduction in screen load time",
  "30 Battery Energy Control Module requirements", "90 minutes to 5 minutes",
  "Lincoln Navigator health widget prototype", "product requirements (PRD)",
  "C++ steering-wheel prototype", "over 70%", "2 production-ready",
  "over 100 end-to-end test cases", "over 400", "50% faster", "30%", "10%", "50%",
];
function emphasize(text) {
  const match = highlights.find((phrase) => text.includes(phrase));
  if (!match) return text;
  const index = text.indexOf(match);
  return <>{emphasize(text.slice(0, index))}<strong>{match}</strong>{emphasize(text.slice(index + match.length))}</>;
}
export default function WorkExperience() {
  return (
    <section id="workexperience" className="section section-tinted">
      <div className="container">
        <SectionHeading number="02" title="Experience">
          Roles and responsibilities
        </SectionHeading>
        <div className="timeline" data-timeline>
          {jobs.map((job) => (
            <article className="job" key={job.id}>
              <div className="job-meta">
                <span className="timeline-dot" />
                <p className="eyebrow">{job.period}</p>
                <p>{job.location}</p>
                {job.period.includes("Present") && (
                  <span className="status">Current role</span>
                )}
              </div>
              <div className="job-content" data-reveal>
                <p className="company">{job.company}</p>
                <h3>{job.role}</h3>
                <ul>
                  {job.bullets.map((b) => (
                    <li key={b}>{emphasize(b)}</li>
                  ))}
                </ul>
                <div className="tags">
                  {job.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
