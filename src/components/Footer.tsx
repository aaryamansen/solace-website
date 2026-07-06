// Footer — section of the Solace landing page.
export default function Footer() {
  return (
    <div style={{ position: "relative", zIndex: "2", borderTop: "1px solid rgba(58, 45, 25, 0.1)", background: "rgba(58, 45, 25, 0.04)" }}>
      <div style={{ maxWidth: "1140px", margin: "0px auto", padding: "40px 28px", display: "flex", gap: "20px", alignItems: "center", justifyContent: "space-between", flexDirection: "column", textAlign: "center" }}>
        <div className="flex items-center gap-2.5">
          <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
            <g transform="rotate(32 16 16)">
              <path d="M16 3 C9.5 8.5 9.5 22 16 28.5 C22.5 22 22.5 8.5 16 3 Z" fill="#C2893B"></path>
              <path d="M16 4 L16 27.5" stroke="#3A3327" strokeWidth="1.3"></path>
              <path d="M16 9 L11 11 M16 13 L10.5 15.5 M16 17 L11 19.5 M16 9 L21 11 M16 13 L21.5 15.5 M16 17 L21 19.5" stroke="#3A3327" strokeWidth="0.8" opacity="0.55"></path>
            </g>
          </svg>
          <div className="flex items-center gap-1.5">
            <span style={{ font: "700 19px / 1 Inter", letterSpacing: "-0.6px", color: "rgb(58, 51, 39)" }}>
              Solace
            </span>
            <span style={{ font: "700 8px / 1 \"Space Mono\", monospace", letterSpacing: "1px", color: "rgb(190, 84, 64)", border: "1.2px solid rgb(190, 84, 64)", borderRadius: "4px", padding: "2px 4px" }}>
              AI
            </span>
          </div>
        </div>
        <div className="flex items-center" style={{ gap: "7px", font: "600 13px / 1.4 Inter", color: "rgb(138, 127, 105)" }}>
          Made with 
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#BE5440" stroke="#BE5440" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
          </svg>
           by 
          <span style={{ color: "rgb(58, 51, 39)", fontWeight: "700" }}>
            Synapse Inc.
          </span>
          <span style={{ color: "rgb(179, 168, 142)" }}>
            · makers of Daywise
          </span>
        </div>
        <div className="flex items-center" style={{ gap: "18px" }}>
          <a className="navlink" href="#">
            Privacy
          </a>
          <a className="navlink" href="#">
            Support
          </a>
        </div>
      </div>
    </div>
  )
}
