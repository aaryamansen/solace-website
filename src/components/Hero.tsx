// Hero — section of the Solace landing page.
import img0 from '../assets/landing/img0.png'
import img1 from '../assets/landing/img1.png'

export default function Hero() {
  return (
    <div style={{ position: "relative", zIndex: "2" }}>
      <div style={{ maxWidth: "1140px", margin: "0px auto", padding: "48px 28px 64px", display: "flex", gap: "56px", alignItems: "center", justifyContent: "center", flexDirection: "column", textAlign: "center" }}>
        <div style={{ width: "auto", maxWidth: "470px", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <span style={{ display: "inline-flex", transform: "rotate(-3deg)", border: "1.5px solid rgb(190, 84, 64)", color: "rgb(190, 84, 64)", font: "700 8.5px / 1 \"Space Mono\", monospace", letterSpacing: "1px", textTransform: "uppercase", padding: "4px 7px", borderRadius: "4px", background: "rgba(255, 255, 255, 0.55)" }}>
            AI · private · on-device
          </span>
          <h1 style={{ font: "800 52px / 1.03 Inter", letterSpacing: "-1.6px", margin: "20px 0px 0px" }}>
            Not Screen Time.
            <br />
            A Screen Companion.
          </h1>
          <p style={{ font: "500 16px / 1.6 Inter", color: "rgb(138, 127, 105)", marginTop: "18px", maxWidth: "440px" }}>
            Solace is an AI that actually sees what you're seeing &amp; makes sure you're always using the phone for what you really want. Four companions for your attention.
          </p>
          <div className="flex" style={{ gap: "12px", marginTop: "28px", justifyContent: "center", flexWrap: "wrap" }}>
            <span className="lift" style={{ display: "inline-flex", alignItems: "center", gap: "7px", cursor: "pointer", padding: "13px 20px", borderRadius: "12px", background: "rgb(58, 51, 39)", color: "rgb(243, 236, 219)", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "initial", font: "600 13px / 1 Inter" }}>
              Download for iOS 
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </span>
            <span className="lift" style={{ display: "inline-flex", alignItems: "center", gap: "7px", cursor: "pointer", padding: "13px 20px", borderRadius: "12px", background: "transparent", color: "rgb(58, 51, 39)", border: "1.5px solid rgb(58, 51, 39)", font: "600 13px / 1 Inter" }}>
              Get it on Android
            </span>
          </div>
          <div className="flex items-center" style={{ gap: "6px", marginTop: "18px", color: "rgb(179, 168, 142)", font: "600 11px / 1 Inter" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock">
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
             Nothing ever leaves your phone.
          </div>
        </div>
        <div style={{ position: "relative", flexShrink: "0" }}>
          <div style={{ position: "absolute", inset: "-34px", background: "radial-gradient(circle, rgba(190, 84, 64, 0.12), transparent 70%)", zIndex: "0" }}></div>
          <div style={{ position: "relative", zIndex: "1" }}>
            <div style={{ width: "337.92px", height: "670.72px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>
              <div style={{ transform: "scale(1.28)" }}>
                <div style={{ width: "264px", height: "524px", borderRadius: "40px", border: "7px solid rgb(20, 18, 14)", overflow: "hidden", position: "relative", background: "rgb(0, 0, 0)", boxShadow: "rgba(20, 15, 8, 0.5) 0px 34px 60px -26px", flexShrink: "0" }}>
                  <div style={{ position: "absolute", top: "9px", left: "0px", right: "0px", display: "flex", justifyContent: "center", zIndex: "6" }}>
                    <div style={{ width: "70px", height: "18px", background: "rgb(20, 18, 14)", borderRadius: "14px" }}></div>
                  </div>
                  <div style={{ position: "absolute", inset: "0px" }}>
                    <div style={{ position: "absolute", inset: "0px", background: "linear-gradient(165deg, rgb(36, 26, 16), rgb(13, 8, 5))", overflow: "hidden" }}>
                      <svg viewBox="0 0 160 160" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: "0px", width: "100%", height: "100%" }}>
                        <g>
                          <circle cx="80" cy="90" r="48" fill="#191a1e"></circle>
                          <circle cx="80" cy="90" r="48" fill="none" stroke="#3a3b42" strokeWidth="3"></circle>
                          <rect x="118" y="84" width="46" height="12" rx="6" fill="#2a2b30" transform="rotate(-14 141 90)"></rect>
                          <ellipse cx="74" cy="88" rx="28" ry="23" fill="#f3ead2"></ellipse>
                          <circle cx="84" cy="83" r="11" fill="#e8a83a"></circle>
                          <path d="M62 46 q7 -7 0 -15 q-7 -8 0 -16 M86 44 q7 -7 0 -15 q-7 -8 0 -16 M104 50 q7 -7 0 -15" fill="none" stroke="#fff" strokeWidth="2.4" opacity="0.3"></path>
                        </g>
                      </svg>
                      <div style={{ position: "absolute", inset: "0px", background: "radial-gradient(120% 85% at 50% 40%, transparent 40%, rgba(0, 0, 0, 0.5))" }}></div>
                      <div style={{ position: "absolute", inset: "0px", opacity: "0.09", mixBlendMode: "overlay", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}></div>
                    </div>
                    <div className="flex" style={{ position: "absolute", top: "26px", left: "14px", right: "14px", gap: "4px", zIndex: "4" }}>
                      <div style={{ flex: "1 1 0%", height: "2.5px", borderRadius: "3px", background: "rgb(255, 255, 255)", opacity: "1" }}></div>
                      <div style={{ flex: "1 1 0%", height: "2.5px", borderRadius: "3px", background: "rgb(255, 255, 255)", opacity: "0.35" }}></div>
                      <div style={{ flex: "1 1 0%", height: "2.5px", borderRadius: "3px", background: "rgb(255, 255, 255)", opacity: "0.35" }}></div>
                      <div style={{ flex: "1 1 0%", height: "2.5px", borderRadius: "3px", background: "rgb(255, 255, 255)", opacity: "0.35" }}></div>
                    </div>
                    <div style={{ position: "absolute", top: "40px", left: "16px", zIndex: "4", font: "600 14px / 1 Inter", color: "rgb(255, 255, 255)" }}>
                      Reels
                    </div>
                    <div style={{ position: "absolute", top: "38px", right: "14px", zIndex: "4", background: "rgb(194, 137, 59)", color: "rgb(255, 255, 255)", font: "700 9px / 1 \"Space Mono\", monospace", letterSpacing: "0.5px", textTransform: "uppercase", padding: "6px 9px", borderRadius: "6px", boxShadow: "rgba(0, 0, 0, 0.3) 0px 3px 8px" }}>
                      ↻ 7 in a row
                    </div>
                    <div style={{ position: "absolute", left: "14px", right: "56px", bottom: "150px", color: "rgb(255, 255, 255)", zIndex: "4" }}>
                      <div style={{ font: "600 12px / 1 Inter" }}>
                        @midnight.bites
                      </div>
                      <div style={{ font: "400 11.5px / 1.4 Inter", marginTop: "5px", opacity: "0.92" }}>
                        3am snack hacks 🍳
                      </div>
                    </div>
                    <div className="flex flex-col items-center" style={{ position: "absolute", right: "12px", bottom: "146px", gap: "14px", color: "rgb(255, 255, 255)", zIndex: "4" }}>
                      <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#fff" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart">
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                        </svg>
                        <span style={{ font: "600 8px / 1 Inter", marginTop: "3px" }}>
                          12k
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle">
                          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                        </svg>
                        <span style={{ font: "600 8px / 1 Inter", marginTop: "3px" }}>
                          88
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-1" style={{ position: "absolute", top: "66px", right: "14px", zIndex: "5" }}>
                      <div style={{ width: "46px", height: "56px", position: "relative", transform: "rotate(0deg)", filter: "drop-shadow(rgba(58, 45, 25, 0.22) 0px 6px 9px)" }}>
                        <div style={{ position: "absolute", inset: "0px", background: "rgb(251, 248, 240)", borderRadius: "4px" }}></div>
                        <div style={{ position: "absolute", inset: "3.91px", background: "rgb(191, 211, 238)", borderRadius: "2px", overflow: "hidden" }}>
                          <img src={img0} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "52% 32%" }} />
                        </div>
                        <span style={{ position: "absolute", left: "-3px", top: "-3px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(22, 15, 8)" }}></span>
                        <span style={{ position: "absolute", left: "-3px", top: "53px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(22, 15, 8)" }}></span>
                        <span style={{ position: "absolute", left: "4.66667px", top: "-3px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(22, 15, 8)" }}></span>
                        <span style={{ position: "absolute", left: "4.66667px", top: "53px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(22, 15, 8)" }}></span>
                        <span style={{ position: "absolute", left: "12.3333px", top: "-3px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(22, 15, 8)" }}></span>
                        <span style={{ position: "absolute", left: "12.3333px", top: "53px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(22, 15, 8)" }}></span>
                        <span style={{ position: "absolute", left: "20px", top: "-3px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(22, 15, 8)" }}></span>
                        <span style={{ position: "absolute", left: "20px", top: "53px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(22, 15, 8)" }}></span>
                        <span style={{ position: "absolute", left: "27.6667px", top: "-3px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(22, 15, 8)" }}></span>
                        <span style={{ position: "absolute", left: "27.6667px", top: "53px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(22, 15, 8)" }}></span>
                        <span style={{ position: "absolute", left: "35.3333px", top: "-3px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(22, 15, 8)" }}></span>
                        <span style={{ position: "absolute", left: "35.3333px", top: "53px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(22, 15, 8)" }}></span>
                        <span style={{ position: "absolute", left: "43px", top: "-3px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(22, 15, 8)" }}></span>
                        <span style={{ position: "absolute", left: "43px", top: "53px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(22, 15, 8)" }}></span>
                        <span style={{ position: "absolute", left: "-3px", top: "-3px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(22, 15, 8)" }}></span>
                        <span style={{ position: "absolute", left: "43px", top: "-3px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(22, 15, 8)" }}></span>
                        <span style={{ position: "absolute", left: "-3px", top: "5px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(22, 15, 8)" }}></span>
                        <span style={{ position: "absolute", left: "43px", top: "5px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(22, 15, 8)" }}></span>
                        <span style={{ position: "absolute", left: "-3px", top: "13px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(22, 15, 8)" }}></span>
                        <span style={{ position: "absolute", left: "43px", top: "13px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(22, 15, 8)" }}></span>
                        <span style={{ position: "absolute", left: "-3px", top: "21px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(22, 15, 8)" }}></span>
                        <span style={{ position: "absolute", left: "43px", top: "21px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(22, 15, 8)" }}></span>
                        <span style={{ position: "absolute", left: "-3px", top: "29px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(22, 15, 8)" }}></span>
                        <span style={{ position: "absolute", left: "43px", top: "29px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(22, 15, 8)" }}></span>
                        <span style={{ position: "absolute", left: "-3px", top: "37px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(22, 15, 8)" }}></span>
                        <span style={{ position: "absolute", left: "43px", top: "37px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(22, 15, 8)" }}></span>
                        <span style={{ position: "absolute", left: "-3px", top: "45px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(22, 15, 8)" }}></span>
                        <span style={{ position: "absolute", left: "43px", top: "45px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(22, 15, 8)" }}></span>
                        <span style={{ position: "absolute", left: "-3px", top: "53px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(22, 15, 8)" }}></span>
                        <span style={{ position: "absolute", left: "43px", top: "53px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(22, 15, 8)" }}></span>
                      </div>
                      <span style={{ display: "inline-flex", transform: "rotate(0deg)", border: "1.5px solid rgb(94, 123, 78)", color: "rgb(94, 123, 78)", font: "700 8.5px / 1 \"Space Mono\", monospace", letterSpacing: "1px", textTransform: "uppercase", padding: "4px 7px", borderRadius: "4px", background: "rgba(20, 18, 14, 0.4)" }}>
                        watching
                      </span>
                    </div>
                    <div style={{ position: "absolute", left: "14px", right: "14px", bottom: "14px", background: "rgb(243, 236, 219)", borderRadius: "8px", padding: "14px", zIndex: "6", boxShadow: "rgba(0, 0, 0, 0.4) 0px -8px 24px" }}>
                      <div className="flex items-center gap-2.5">
                        <div style={{ width: "38px", height: "46px", position: "relative", transform: "rotate(0deg)", filter: "drop-shadow(rgba(58, 45, 25, 0.22) 0px 6px 9px)" }}>
                          <div style={{ position: "absolute", inset: "0px", background: "rgb(251, 248, 240)", borderRadius: "4px" }}></div>
                          <div style={{ position: "absolute", inset: "3.23px", background: "rgb(191, 211, 238)", borderRadius: "2px", overflow: "hidden" }}>
                            <img src={img1} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "52% 32%" }} />
                          </div>
                          <span style={{ position: "absolute", left: "-3px", top: "-3px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(243, 236, 219)" }}></span>
                          <span style={{ position: "absolute", left: "-3px", top: "43px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(243, 236, 219)" }}></span>
                          <span style={{ position: "absolute", left: "3.33333px", top: "-3px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(243, 236, 219)" }}></span>
                          <span style={{ position: "absolute", left: "3.33333px", top: "43px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(243, 236, 219)" }}></span>
                          <span style={{ position: "absolute", left: "9.66667px", top: "-3px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(243, 236, 219)" }}></span>
                          <span style={{ position: "absolute", left: "9.66667px", top: "43px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(243, 236, 219)" }}></span>
                          <span style={{ position: "absolute", left: "16px", top: "-3px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(243, 236, 219)" }}></span>
                          <span style={{ position: "absolute", left: "16px", top: "43px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(243, 236, 219)" }}></span>
                          <span style={{ position: "absolute", left: "22.3333px", top: "-3px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(243, 236, 219)" }}></span>
                          <span style={{ position: "absolute", left: "22.3333px", top: "43px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(243, 236, 219)" }}></span>
                          <span style={{ position: "absolute", left: "28.6667px", top: "-3px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(243, 236, 219)" }}></span>
                          <span style={{ position: "absolute", left: "28.6667px", top: "43px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(243, 236, 219)" }}></span>
                          <span style={{ position: "absolute", left: "35px", top: "-3px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(243, 236, 219)" }}></span>
                          <span style={{ position: "absolute", left: "35px", top: "43px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(243, 236, 219)" }}></span>
                          <span style={{ position: "absolute", left: "-3px", top: "-3px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(243, 236, 219)" }}></span>
                          <span style={{ position: "absolute", left: "35px", top: "-3px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(243, 236, 219)" }}></span>
                          <span style={{ position: "absolute", left: "-3px", top: "3.57143px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(243, 236, 219)" }}></span>
                          <span style={{ position: "absolute", left: "35px", top: "3.57143px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(243, 236, 219)" }}></span>
                          <span style={{ position: "absolute", left: "-3px", top: "10.1429px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(243, 236, 219)" }}></span>
                          <span style={{ position: "absolute", left: "35px", top: "10.1429px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(243, 236, 219)" }}></span>
                          <span style={{ position: "absolute", left: "-3px", top: "16.7143px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(243, 236, 219)" }}></span>
                          <span style={{ position: "absolute", left: "35px", top: "16.7143px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(243, 236, 219)" }}></span>
                          <span style={{ position: "absolute", left: "-3px", top: "23.2857px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(243, 236, 219)" }}></span>
                          <span style={{ position: "absolute", left: "35px", top: "23.2857px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(243, 236, 219)" }}></span>
                          <span style={{ position: "absolute", left: "-3px", top: "29.8571px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(243, 236, 219)" }}></span>
                          <span style={{ position: "absolute", left: "35px", top: "29.8571px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(243, 236, 219)" }}></span>
                          <span style={{ position: "absolute", left: "-3px", top: "36.4286px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(243, 236, 219)" }}></span>
                          <span style={{ position: "absolute", left: "35px", top: "36.4286px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(243, 236, 219)" }}></span>
                          <span style={{ position: "absolute", left: "-3px", top: "43px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(243, 236, 219)" }}></span>
                          <span style={{ position: "absolute", left: "35px", top: "43px", width: "6px", height: "6px", borderRadius: "50%", background: "rgb(243, 236, 219)" }}></span>
                        </div>
                        <div>
                          <div style={{ font: "700 8px / 1 \"Space Mono\", monospace", letterSpacing: "1.5px", textTransform: "uppercase", color: "rgb(190, 84, 64)" }}>
                            Vigil is stepping in
                          </div>
                          <div style={{ font: "700 17px / 1.05 Caveat", color: "rgb(58, 51, 39)", marginTop: "3px" }}>
                            You're tired, not curious. Come up for air?
                          </div>
                        </div>
                      </div>
                      <div style={{ marginTop: "11px", background: "rgb(94, 123, 78)", color: "rgb(243, 236, 219)", font: "700 10px / 1 \"Space Mono\", monospace", letterSpacing: "1px", textTransform: "uppercase", padding: "11px", borderRadius: "6px", textAlign: "center" }}>
                        I'm done — land the night
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: "-16px", left: "0px", right: "0px", display: "flex", justifyContent: "center", zIndex: "3" }}>
            <span style={{ display: "inline-flex", transform: "rotate(-5deg)", border: "1.5px solid rgb(94, 123, 78)", color: "rgb(94, 123, 78)", font: "700 8.5px / 1 \"Space Mono\", monospace", letterSpacing: "1px", textTransform: "uppercase", padding: "4px 7px", borderRadius: "4px", background: "rgba(255, 255, 255, 0.55)" }}>
              Vigil just stepped in
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
