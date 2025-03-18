"useclient";

import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Mail, ArrowRight } from "lucide-react"

import CountdownTimer from "@/components/sections/home/countdown-timer"
import SpeakerCard from "@/components/sections/home/speaker-card"
import WhyAttendCard from "@/components/sections/home/why-attend-card"
import Footer from "@/components/sections/home/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header/Navigation */}
      <header className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="#about" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link href="#agenda" className="text-white hover:text-gray-300">
            Agenda
          </Link>
          <Link href="#speakers" className="text-white hover:text-gray-300">
            Speakers
          </Link>
        </nav>

        <div className="md:hidden">
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="flex-1 text-center md:text-center">
          <h1 className="text-xl md:text-2xl font-bold tracking-wider">ITC TALKS</h1>
        </div>

        <div className="hidden md:flex items-center">
          <Link
            href="mailto:contact.itc.talks@gmail.com"
            className="flex items-center text-sm text-white hover:text-gray-300"
          >
            <Mail className="h-4 w-4 mr-2" />
            contact.itc.talks@gmail.com
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 pt-8 md:pt-12 lg:pt-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">ITC Talks 6th Edition</h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Join the Conversation!</h3>
            <p className="text-gray-400 mb-6">
              — Be part of a day filled with expert insights, engaging talks, and great conversations
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <button className="bg-white text-black rounded-full px-6 py-2 font-medium hover:bg-gray-200 transition">
              Reserve Your Spot Today
            </button>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="mt-8 md:mt-12 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Landing%20-%201desktop-a4ChykhHoKnPfynhhPAshlIyNpDkvt.png"
                alt="Great Audience"
                width={400}
                height={300}
                className="w-full h-40 md:h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 w-full">
                <p className="text-sm">Great Audience</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Landing%20-%201desktop-a4ChykhHoKnPfynhhPAshlIyNpDkvt.png"
                alt="Great Community"
                width={400}
                height={300}
                className="w-full h-40 md:h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 w-full">
                <p className="text-sm">Great Community</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Landing%20-%201desktop-a4ChykhHoKnPfynhhPAshlIyNpDkvt.png"
                alt="Great Team"
                width={400}
                height={300}
                className="w-full h-40 md:h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 w-full">
                <p className="text-sm">Great Team</p>
              </div>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 flex space-x-2 p-4">
            <button className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="mt-8 md:mt-12">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-800">COMING SOON</h2>
          <div className="flex flex-col md:flex-row justify-between mt-4">
            <p className="text-sm">APRIL 8, 2025</p>
            <p className="text-sm">Auditorium, Saad Dahlab University</p>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          <div className="flex justify-center">
            <Image src="/placeholder.svg?height=30&width=100" alt="Amazon" width={100} height={30} />
          </div>
          <div className="flex justify-center">
            <Image src="/placeholder.svg?height=30&width=100" alt="Dribbble" width={100} height={30} />
          </div>
          <div className="flex justify-center">
            <Image src="/placeholder.svg?height=30&width=100" alt="HubSpot" width={100} height={30} />
          </div>
          <div className="flex justify-center">
            <Image src="/placeholder.svg?height=30&width=100" alt="Notion" width={100} height={30} />
          </div>
          <div className="flex justify-center">
            <Image src="/placeholder.svg?height=30&width=100" alt="Gumroad" width={100} height={30} />
          </div>
        </div>
      </section>

      {/* About & Speakers */}
      <section className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* About Us */}
          <div className="bg-gray-800 rounded-lg p-8" id="about">
            <h2 className="text-2xl font-bold mb-6">ABOUT US</h2>
            <div className="flex justify-between items-start">
              <div className="max-w-md">
                <p className="text-sm mb-4">
                  ITC is a scientific club at Saad Dahlab University, founded in 2018 by passionate IT students.
                </p>
                <p className="text-sm mb-4">
                  Our mission is to enhance the knowledge and skills of our members while supporting the growth of the
                  STEAM community in Blida.
                </p>
                <p className="text-xl font-bold text-[#a06060] mt-8">"Sharing is Caring"</p>
              </div>
              <div>
                <Image src="/placeholder.svg?height=50&width=50" alt="ITC Logo" width={50} height={50} />
              </div>
            </div>
          </div>

          {/* Speakers */}
          <div className="bg-blue-600 rounded-lg p-8" id="speakers">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-bold mb-6">SPEAKERS</h2>
              <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-blue-600 font-bold">3</span>
              </div>
            </div>
            <p className="text-sm mb-6">
              Hear from top IT experts, innovators, and professionals shaping the future of technology.
            </p>
            <div className="flex items-center mb-6">
              <div className="flex -space-x-2">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Speaker 1"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-blue-600"
                />
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Speaker 2"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-blue-600"
                />
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Speaker 3"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-blue-600"
                />
              </div>
            </div>
            <div>
              <button className="bg-white text-blue-600 rounded-full px-6 py-2 font-medium hover:bg-gray-100 transition flex items-center">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section className="container mx-auto px-4 md:px-6 py-12" id="agenda">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">AGENDA</h2>
        <div className="flex justify-between mb-8">
          <p className="text-sm">April 8, 2025 | Auditorium, Saad Dahlab University</p>
        </div>

        <div className="bg-gray-900 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Morning Sessions */}
            <div className="border-b border-gray-700 pb-6 md:border-b-0 md:border-r md:pr-6">
              <div className="flex justify-between items-start mb-6">
                <div className="w-24 text-right pr-4">
                  <p className="font-bold">9:00 AM</p>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Check-in</h3>
                  <p className="text-sm text-gray-400">
                    Arrive early to get settled and enjoy a smooth start to the event.
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-start mb-6">
                <div className="w-24 text-right pr-4">
                  <p className="font-bold">9:45 AM</p>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Opening Ceremony</h3>
                  <p className="text-sm text-gray-400">Welcome message and overview of the day's exciting schedule.</p>
                </div>
              </div>

              <div className="flex justify-between items-start mb-6">
                <div className="w-24 text-right pr-4">
                  <p className="font-bold">10:00 AM</p>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">1st Speaker</h3>
                  <p className="text-sm text-gray-400">
                    Hear from a leading expert in the IT field as they share their insights and experiences.
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-start mb-6">
                <div className="w-24 text-right pr-4">
                  <p className="font-bold">10:30 AM</p>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">2nd Speaker</h3>
                  <p className="text-sm text-gray-400">
                    Gain valuable knowledge from another speaker shaping the future of technology.
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-start mb-6">
                <div className="w-24 text-right pr-4">
                  <p className="font-bold">11:00 AM</p>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">3rd Speaker</h3>
                  <p className="text-sm text-gray-400">
                    A thought-provoking talk that will inspire and challenge your thinking.
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-start mb-6">
                <div className="w-24 text-right pr-4">
                  <p className="font-bold">11:30 AM</p>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Q&A</h3>
                  <p className="text-sm text-gray-400">
                    Get your questions answered and dive deeper into the topics discussed.
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div className="w-24 text-right pr-4">
                  <p className="font-bold">11:45 AM</p>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Quiz</h3>
                  <p className="text-sm text-gray-400">
                    Test your knowledge with a fun and engaging quiz related to the topics covered.
                  </p>
                </div>
              </div>
            </div>

            {/* Afternoon Sessions */}
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-24 text-right pr-4">
                  <p className="font-bold">12:00 PM</p>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Lunch Break</h3>
                  <p className="text-sm text-gray-400">Enjoy a break and network with fellow attendees.</p>
                </div>
              </div>

              <div className="flex justify-between items-start mb-6">
                <div className="w-24 text-right pr-4">
                  <p className="font-bold">1:00 PM</p>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">4th Speaker</h3>
                  <p className="text-sm text-gray-400">
                    Another expert takes the stage to provide insights into the latest trends in the tech world.
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-start mb-6">
                <div className="w-24 text-right pr-4">
                  <p className="font-bold">1:30 PM</p>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">5th Speaker</h3>
                  <p className="text-sm text-gray-400">
                    Learn from a thought leader with practical advice and real-world experience.
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-start mb-6">
                <div className="w-24 text-right pr-4">
                  <p className="font-bold">2:00 PM</p>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Q&A</h3>
                  <p className="text-sm text-gray-400">
                    Ask questions, engage with the speakers, and deepen your understanding of key topics.
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-start mb-6">
                <div className="w-24 text-right pr-4">
                  <p className="font-bold">2:15 PM</p>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Closing Ceremony</h3>
                  <p className="text-sm text-gray-400">Wrap up the event with final thoughts and acknowledgements.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="bg-red-700 hover:bg-red-800 text-white rounded-md px-6 py-3 font-medium transition flex items-center mx-auto">
              Register Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Detailed Speakers Section */}
      <section className="container mx-auto px-4 md:px-6 py-16" id="speakers-detail">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-0">SPEAKERS</h2>
          <p className="text-sm md:text-base max-w-md">Meet the IT experts shaping the future of technology</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SpeakerCard
            name="Dr. Emily Carter"
            title="Expert in Business Growth"
            description="Who will talk about the latest AI developments, how they work, and their applications in everyday life and industries."
            image="/placeholder.svg?height=400&width=300"
          />

          <SpeakerCard
            name="Elon Park"
            title="CEO, DeepMinds"
            description="Who will explain how AI is improving, the role of deep learning, and how these technologies are solving real-world problems."
            image="/placeholder.svg?height=400&width=300"
          />

          <SpeakerCard
            name="Laura Kim"
            title="AI Policy Advisor"
            description="Who will discuss the rules and policies shaping AI, the ethical concerns involved, and what they mean for the future."
            image="/placeholder.svg?height=400&width=300"
          />

          <SpeakerCard
            name="Dr. Alan Foster"
            title="Professor at ULP"
            description="Who will explore the newest research in AI, the challenges researchers face, and the exciting possibilities ahead."
            image="/placeholder.svg?height=400&width=300"
          />
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-0">WHY ATTEND?</h2>
          <p className="text-sm md:text-base max-w-md">
            Discover why ITC Talks is the must-attend event for IT students, professionals, and future innovators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <WhyAttendCard
            number="01"
            title="LEARN FROM EXPERTS"
            description="Hear top IT professionals share their journeys, challenges, and insights."
          />

          <WhyAttendCard
            number="02"
            title="EXPLORE NEW IDEAS"
            description="Discover the latest trends in tech, software, and cybersecurity."
          />

          <WhyAttendCard
            number="03"
            title="MEET LIKE-MINDED PEOPLE"
            description="Connect with students, professionals, and industry leaders."
          />

          <WhyAttendCard
            number="04"
            title="GET INSPIRED"
            description="Join a fun and engaging event that fuels your growth and creativity."
          />
        </div>
      </section>

      {/* Register Now Section */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-0">REGISTER NOW</h2>
          <p className="text-sm md:text-base max-w-md">
            Secure your spot at ITC Talks 6th Edition and join the future of IT innovation
          </p>
        </div>

        <CountdownTimer />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}


