// Nav — section of the Solace landing page.
export default function Nav() {
  return (
    <div style={{ position: "relative", zIndex: "2", borderBottom: "1px solid rgba(58, 45, 25, 0.08)", background: "rgba(244, 237, 221, 0.7)", backdropFilter: "blur(10px)" }}>
      <div style={{ maxWidth: "1140px", margin: "0px auto", padding: "0px 28px", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
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
        <div className="flex items-center" style={{ gap: "22px" }}>
          <span className="lift" style={{ display: "inline-flex", alignItems: "center", gap: "7px", cursor: "pointer", padding: "13px 20px", borderRadius: "12px", background: "rgb(58, 51, 39)", color: "rgb(243, 236, 219)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", font: "600 13px / 1 Inter" }}>
            Get the app
          </span>
        </div>
      </div>
    </div>
  )
}
