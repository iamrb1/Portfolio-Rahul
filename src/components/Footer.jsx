export default function Footer() {
  return (
    <footer className="container footer">
      <a className="wordmark" href="#home">
        rb<span>.</span>
      </a>
      <p>© {new Date().getFullYear()} Rahul Baragur</p>
      <a href="#home">Back to top</a>
    </footer>
  );
}
