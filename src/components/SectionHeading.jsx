export default function SectionHeading({ number, title, children }) {
  return (
    <div className="section-heading" data-reveal>
      <div className="section-label">
        <span>{number}</span>
        <h2>{title}</h2>
      </div>
      {children && <p>{children}</p>}
    </div>
  );
}
