import { jobs } from "../data/jobs";
import SectionHeading from "./SectionHeading";
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
                    <li key={b}>{b}</li>
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
