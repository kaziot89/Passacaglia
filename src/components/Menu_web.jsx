import { useState } from "react";

const Menu_Web = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        width: "1440px",
        height: "80px",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "24px",
      }}
    >
      {/* O FUNDACJI z rozwijanym menu */}
      <div style={{ position: "relative" }}>
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          O FUNDACJI
        </button>
        {open && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              //   right: 0,
              color: "white",
              backgroundColor: "#4A727B",
              boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
              margin: "32px 0 0 0 ",
              width: "160px",
              padding: "8px 0",
              fontWeight: "100",
              zIndex: "10",
            }}
          >
            <a
              href="#misja"
              style={{
                display: "block",
                padding: "8px 16px",
                color: "white",
              }}
            >
              NASZA MISJA
            </a>
            <a
              href="#zarzad"
              style={{ display: "block", padding: "8px 16px", color: "white" }}
            >
              ZESPÓŁ
            </a>
            <a
              href="#historia"
              style={{ display: "block", padding: "8px 16px", color: "white" }}
            >
              MEDIA O NAS
            </a>
          </div>
        )}
      </div>

      {/* Reszta linków */}
      <a href="#projekty">PROJEKTY</a>
      <a href="#aktualnosci">AKTUALNOŚCI</a>
      <a href="#kontakt">KONTAKT</a>

      {/* Wesprzyj */}
      <a
        href="#wesprzyj"
        style={{
          backgroundColor: "#BC7F79",
          color: "white",
          padding: "10px 20px",
          borderRadius: "25px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        WESPRZYJ
      </a>
    </div>
  );
};

export default Menu_Web;
