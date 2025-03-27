export default function SectionHeader({ title }) {
  return (
    <div
      className="section-header"
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "15px",
        fontWeight: "400",
      }}
    >
      <h2>
        <span className="primary-color" style={{ marginRight: "0px" }}>
          #
        </span>
        <span>{title}</span>
      </h2>
      <span
        className="section-header-line"
        style={{
          flexGrow: "1",
          background: "var(--primary-color)",
          height: "1px",
        }}
      ></span>
    </div>
  );
}
