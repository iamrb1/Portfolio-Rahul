import SectionHeading from "./SectionHeading";
export default function About() {
  return (
    <section id="about" className="section container">
      <SectionHeading number="01" title="About">
        Background and education
      </SectionHeading>
      <div className="about-layout">
        <h2 data-reveal>
          About me
        </h2>
        <div className="prose" data-reveal>
          <p>
            Since I was a kid, I've been into building things, whether it was
            Lego sets, Minecraft redstone, or pillow forts. I first got into
            programming at eight with a Lego NXT robot.
          </p>
          <p>
            I graduated from Michigan State University in 2025 with a B.S. in
            Computer Science. Today, I’m an Associate Product Manager at Ford
            Motor Company, learning across teams through a rotational program.
          </p>
          <p>
            My work spans embedded systems, web applications, and automotive
            software. Outside work, I spend time on car modifications, hardware
            projects, and photography.
          </p>
          <dl className="facts">
            <div>
              <dt>Education</dt>
              <dd>Michigan State University</dd>
            </div>
            <div>
              <dt>Degree</dt>
              <dd>B.S. Computer Science, 2025</dd>
            </div>
            <div>
              <dt>GPA</dt>
              <dd>3.85 / 4.0</dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>Dearborn, Michigan</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
