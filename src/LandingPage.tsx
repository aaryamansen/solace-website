// The Solace landing page, composed from per-section components.
import BackgroundTexture from './components/BackgroundTexture'
import Nav from './components/Nav'
import Hero from './components/Hero'
import MeetTheTeam from './components/MeetTheTeam'
import WhyDifferent from './components/WhyDifferent'
import AskTrace from './components/AskTrace'
import CalmerPhone from './components/CalmerPhone'
import Footer from './components/Footer'

export default function LandingPage() {
  return (
    <div style={{ minHeight: "100vh", position: "relative", background: "linear-gradient(rgb(244, 237, 221), rgb(239, 230, 208))", fontFamily: "Inter, sans-serif", color: "rgb(58, 51, 39)", overflowX: "hidden" }}>
      <BackgroundTexture />
      <Nav />
      <Hero />
      <MeetTheTeam />
      <WhyDifferent />
      <AskTrace />
      <CalmerPhone />
      <Footer />
    </div>
  )
}
