import Hero from '@/components/Hero'
import Biography from '@/components/Biography'
import Achievements from '@/components/Achievements'
import Timeline from '@/components/Timeline'
import Quote from '@/components/Quote'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Quote />
      <Biography />
      <Achievements />
      <Timeline />
      <Footer />
    </main>
  )
}
