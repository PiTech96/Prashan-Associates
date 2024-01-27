
import HomeAboutUs from './aboutus'
import ChooseUs from './chooseUs'
import HeroSection from './hero'
import HomeServices from './homeServices'
import ReqQuote from './reqQuote'

function Home() {
  return (
    <div>
      <HeroSection/>
      <HomeServices/>
      <HomeAboutUs/>
      <ChooseUs/>
      <ReqQuote/>
    </div>
  )
}

export default Home
