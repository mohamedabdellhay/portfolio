import "./style.css";

export default function Contact({ img, title, link }) {
  return (
    <>
      <div className="contact">
        <div> {img}</div>
        <div>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="color-grey"
          >
            {title}
          </a>
        </div>
      </div>
    </>
  );
}
