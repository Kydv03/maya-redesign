import ScrollAnimation from "./components/ScrollAnimations";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollAnimation>
      <nav className="flex justify-between items-center px-16 py-6 bg-emerald-50">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
          Dr. Maya Reynolds, PsyD
        </h1>

        <div className="flex space-x-10 text-lg font-medium">
          <a href="#" className="text-gray-800 hover:text-amber-700 transition">
            About
          </a>
          <a href="#" className="text-gray-800 hover:text-amber-700 transition">
            Services
          </a>
          <a href="#" className="text-gray-800 hover:text-amber-700 transition">
            Office
          </a>
          <a href="#" className="text-gray-800 hover:text-amber-700 transition">
            FAQs
          </a>
          <a href="#" className="text-gray-800 hover:text-amber-700 transition">
            Contact
          </a>
        </div>
      </nav></ScrollAnimation>

      <ScrollAnimation>
  <section className="min-h-[700px] grid grid-cols-1 md:grid-cols-2 px-12 md:px-12 py-16 pb-0 gap-4 items-center bg-gradient-to-br from-emerald-50 to-amber-50">
    <div className="flex justify-center md:justify-start">
      <img
        src="/maya.jpg"
        alt="Dr. Maya Reynolds"
        className="w-[80%] md:w-[70%] rounded-lg shadow-xl"
      />
    </div>
    <div className="space-y-6 text-left md:pl-10">
      <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight ">
        Therapy for Anxiety, Trauma,
        <br /> and Stress in Santa Monica, CA
      </h1>

      <p className="text-md text-gray-700 font-medium leading-relaxed">
        I help adults who feel overwhelmed, anxious, or stuck in patterns
        shaped by past experiences. Together, we'll work toward clarity,
        emotional balance, and a more grounded way of living.
      </p>

      <button className="border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 px-8 py-3 rounded-md text-sm tracking-wide">
        BOOK A CONSULTATION →
      </button>
    </div>
  </section>
</ScrollAnimation>

      <ScrollAnimation>
        <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-[#EDE5DA] flex flex-col">
            <div className="space-y-8 flex flex-col justify-center text-left px-16 py-20 flex-grow">
              <h2 className="text-5xl font-semibold text-gray-800 leading-snug">
                A grounded, compassionate space to understand yourself more
                deeply.
              </h2>

              <p className="text-md text-gray-700 leading-relaxed font-medium">
                I work with adults who feel overwhelmed, anxious, or emotionally
                on edge—even when everything looks "fine" on the surface. My
                approach is warm, steady, and collaborative, helping you explore
                both the emotional and physical layers of what you're
                experiencing.
              </p>

              <p className="text-md text-gray-700 leading-relaxed font-medium">
                Together, we'll move at a thoughtful pace, using evidence-based
                methods like CBT, EMDR, mindfulness, and body-based techniques
                to create lasting, meaningful change in your daily life.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="#"
                className="block w-full text-center border-t border-gray-800 pt-6 pb-6 tracking-wide text-sm font-medium text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300"
              >
                LEARN ABOUT MY APPROACH →
              </a>
            </div>
          </div>

          <div className="min-h-[700px]">
            <img
              src="/maya-office1.jpg"
              alt="Therapy office"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="min-h-[600px] px-12 py-32 pb-0 mb-24 bg-gradient-to-b from-emerald-50 to-amber-10">
          <h2 className="text-5xl font-semibold text-center mb-16 text-gray-900">
            My Specialties
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-700 p-4 bg-white min-h-[520px] flex flex-col rounded-lg">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 ">
                  Anxiety & Panic
                </h3>
                <p className="text-gray-800 mt-4 text-sm leading-relaxed font-medium">
                  Support for persistent worry, overthinking, and the physical
                  signs of anxiety—helping you feel more regulated, grounded,
                  and in control.
                </p>
              </div>
              <div className="flex justify-center items-center flex-grow pt-10">
                <img
                  src="/special-anxiety.jpg"
                  alt="Anxiety Therapy"
                  className="w-72 h-72 rounded-full object-cover"
                />
              </div>
            </div>

            <div className="border border-gray-700 p-4 bg-white min-h-[520px] flex flex-col rounded-lg">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Trauma & EMDR
                </h3>
                <p className="text-gray-800 mt-4 text-sm leading-relaxed font-medium">
                  Healing for both single-incident and long-standing trauma
                  using a calm, paced, and evidence-based approach—including
                  EMDR and body-based techniques.
                </p>
              </div>
              <div className="flex justify-center items-center flex-grow pt-10">
                <img
                  src="/special-trauma.jpg"
                  alt="Trauma Therapy"
                  className="w-72 h-72 rounded-full object-cover"
                />
              </div>
            </div>

            <div className="border border-gray-700 p-4 bg-white min-h-[520px] flex flex-col rounded-lg">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Burnout & Perfectionism
                </h3>
                <p className="text-gray-800 mt-4 text-sm leading-relaxed font-medium">
                  Guidance for high-achieving professionals who feel depleted or
                  disconnected—helping you rebuild balance, clarity, and
                  sustainable routines.
                </p>
              </div>
              <div className="flex justify-center items-center flex-grow pt-10">
                <img
                  src="/special-burnout.jpg"
                  alt="Burnout Therapy"
                  className="w-72 h-72 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <img
              src="/maya-support.jpg"
              alt="Therapy support"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-[#E3D8CA] min-h-[700px] flex flex-col">
            <div className="space-y-6 px-10 py-20">
              <h2 className="text-5xl pt-16 font-semibold text-[#3B342E] leading-snug">
                You don't have to navigate <br />
                overwhelming emotions on your own.
              </h2>

              <p className="text-[#3B342E] text-md font-medium">
                Many of the adults I work with carry a quiet, constant sense of
                tension—even when life looks fine from the outside. You may feel
                pressured to hold everything together, while inside you're
                exhausted, on edge, or unsure how to slow down.
              </p>

              <p className="text-[#3B342E] text-md font-medium">
                Whether you're coping with anxiety, the effects of past
                experiences, or a long stretch of burnout, therapy can give you
                a steady, grounded space to understand what's happening and
                begin to feel more regulated.
              </p>

              <ul className="list-disc pl-6 space-y-2 text-[#3B342E] text-md font-medium pt-4">
                <li>Feeling constantly overwhelmed or emotionally on edge</li>
                <li>Long-term stress that's affecting sleep, focus, or mood</li>
                <li>
                  Lingering effects of earlier experiences or relationships
                </li>
                <li>
                  Pressure to keep functioning while feeling internally
                  exhausted
                </li>
                <li>A sense of bracing for something to go wrong</li>
              </ul>

              <p className="text-[#3B342E] text-lg font-medium pt-2">
                Therapy isn't just about symptom relief—it's about rebuilding a
                more grounded, connected relationship with yourself.
              </p>
            </div>

            <div className="mt-auto text-[#3B342E]">
              <a
                href="#"
                className="block w-full text-center border-t border-[#3B342E] pt-6 pb-6 tracking-wide text-sm text-[#3B342E] font-medium hover:bg-gray-800 hover:text-white transition-all duration-300"
              >
                START YOUR THERAPEUTIC JOURNEY →
              </a>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="grid grid-cols-1 md:grid-cols-2 bg-gradient-to-b from-amber-50 to-emerald-50 px-10 py-20 gap-10">
          <div className="space-y-6 flex flex-col justify-center md:pl-20">
            <h2 className="text-5xl font-semibold text-gray-900 leading-snug">
              Hi, I'm Dr. Maya Reynolds.
            </h2>

            <p className="text-gray-800 leading-relaxed mt-4 text-md font-medium">
              I'm a licensed clinical psychologist based in Santa Monica. I work
              with adults who feel overwhelmed, anxious, or weighed down by past
              experiences—even when everything looks "fine" from the outside. My
              approach is warm, grounded, and collaborative, giving you space to
              slow down and understand what's happening beneath the surface.
            </p>

            <p className="text-gray-800 leading-relaxed text-md font-medium">
              In our work together, we'll use evidence-based methods like CBT,
              EMDR, mindfulness, and body-based techniques to help you feel more
              regulated and connected to yourself. My goal is to support lasting
              insight, resilience, and emotional balance.
            </p>

            <div className="flex font-medium mt-12">
              <button className="border border-gray-800 text-gray-700 px-6 py-2 w-fit hover:bg-gray-800 hover:text-white transition-all duration-300 cursor-pointer">
                WORK WITH ME →
              </button>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <img
              src="/maya-portrait.jpg"
              alt="Dr. Maya Reynolds"
              className="w-[80%] md:w-[70%] rounded-lg shadow-xl"
            />
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
  <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
    <div className="container mx-auto px-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-5xl font-semibold text-gray-900 mb-6">
          A Calm Space for Healing in Santa Monica
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          My office is designed to be a quiet, private sanctuary where you can feel safe, 
          grounded, and fully present in your therapeutic work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mb-16">
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img
            src="/office1.jpg"
            alt="Therapy office with natural light"
            className="w-full h-64 object-cover"
          />
          <div className="bg-white p-6">
            <p className="text-gray-800 text-sm">
              Ample natural light creates a warm, inviting atmosphere that helps ease initial tension.
            </p>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img
            src="/office2.jpg"
            alt="Comfortable therapy seating area"
            className="w-full h-64 object-cover"
          />
          <div className="bg-white p-6">
            <p className="text-gray-800 text-sm">
              A comfortable, uncluttered space designed for confidentiality and emotional safety.
            </p>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img
            src="/office3.jpg"
            alt="Santa Monica office location"
            className="w-full h-64 object-cover"
          />
          <div className="bg-white p-6">
            <p className="text-gray-800 text-sm">
              Convenient Santa Monica office with free parking, easily accessible for local clients.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-amber-50 to-emerald-50 rounded-2xl p-10 border border-amber-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                What to Expect
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">A quiet, private space free from distractions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Comfortable seating in a calming, uncluttered environment</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Natural light that many clients find helps them feel more at ease</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Free parking and easy access in central Santa Monica</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Session Options
              </h3>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-emerald-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <span className="text-lg">🏢</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">In-Person Sessions</h4>
                  </div>
                  <p className="text-gray-800 text-sm">
                    Experience therapy in a dedicated healing space designed for comfort and privacy.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-amber-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                      <span className="text-lg">💻</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Telehealth Available</h4>
                  </div>
                  <p className="text-gray-800 text-sm">
                    Secure online sessions for California residents who prefer virtual therapy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-amber-200 text-center">
            <p className="text-gray-800 mb-6">
              "Many clients share that the office environment itself helps them feel more at ease when they arrive."
            </p>
            <button className="inline-flex items-center gap-2 border border-gray-600 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-800 hover:text-white transition-all duration-300">
              <span>View Office Location & Directions</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</ScrollAnimation>

      <ScrollAnimation>
        <section className="grid grid-cols-1 md:grid-cols-2 px-10 py-16 gap-10 bg-gradient-to-b from-amber-50 to-white">
          <div className="flex justify-center">
            <img
              src="/maya-faq.jpg"
              alt="Therapy FAQ"
              className="w-[80%] md:w-[70%] rounded-lg shadow-xl"
            />
          </div>

          <div className="space-y-10 flex flex-col justify-center">
            <h2 className="text-5xl font-semibold text-gray-900">FAQs</h2>

            <div className="space-y-4">
              <a
                href="#"
                className="border-t border-b border-amber-400 pt-4 pb-4 block hover:cursor-pointer hover:bg-amber-100 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-5xl text-amber-600">+</span>
                  <span className="text-3xl font-semibold text-gray-900">
                    Do you take insurance?
                  </span>
                </div>
                <p className="text-gray-700 mt-3 text-md pl-8">
                  I am an out-of-network provider. Many clients receive partial
                  reimbursement from their insurance using a superbill. I can
                  guide you through the process.
                </p>
              </a>

              <a
                href="#"
                className="border-b border-amber-400 pb-4 block hover:cursor-pointer hover:bg-amber-100 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-5xl text-amber-500">+</span>
                  <span className="text-3xl font-semibold text-gray-900">
                    What are your rates?
                  </span>
                </div>
                <p className="text-gray-700 mt-3 text-md pl-8">
                  Session rates vary depending on service type and duration. A
                  detailed fee structure is available upon request. I also offer
                  limited sliding-scale spots.
                </p>
              </a>

              <a
                href="#"
                className="border-b border-amber-400 pb-4 block hover:cursor-pointer hover:bg-amber-100 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-5xl text-amber-500">+</span>
                  <span className="text-3xl font-semibold text-gray-900">
                    Do you offer online therapy?
                  </span>
                </div>
                <p className="text-gray-700 mt-3 text-md pl-8">
                  Yes. I provide secure telehealth sessions for adults located
                  anywhere in California, as well as in-person sessions at my
                  Santa Monica office.
                </p>
              </a>

              <a
                href="#"
                className="border-b border-amber-400 pb-4 block hover:cursor-pointer hover:bg-amber-100 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-5xl text-amber-500">+</span>
                  <span className="text-3xl font-semibold text-gray-900">
                    Do you have openings for new clients?
                  </span>
                </div>
                <p className="text-gray-700 mt-3 text-md pl-8">
                  Availability changes week to week. Please reach out for the
                  most updated openings, and I'll share current scheduling
                  options.
                </p>
              </a>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
        <section className="bg-gradient-to-b from-amber-100 to-amber-50 px-10 py-16">
          <h2 className="text-5xl font-semibold text-center text-gray-900 pt-12 mb-14">
            My Professional Background
          </h2>

          <div className="max-w-2xl mx-auto space-y-2">
            <a
              href="#"
              className="flex justify-between items-center border-t border-b border-amber-600 pt-4 pb-4 cursor-pointer"
            >
              <p className="text-xl font-medium text-gray-900">Education</p>
              <span className="text-2xl text-amber-600">+</span>
            </a>
            <p className="text-gray-800 text-md leading-relaxed">
              • PsyD in Clinical Psychology • Advanced training in
              trauma-focused care • Specialized coursework in EMDR, CBT,
              mindfulness-based interventions • Ongoing professional development
              in somatic and body-oriented therapy
            </p>

            <a
              href="#"
              className="flex justify-between items-center border-b border-amber-600 pt-4 pb-4 cursor-pointer"
            >
              <p className="text-xl font-medium text-gray-900">Licensure</p>
              <span className="text-2xl text-amber-600">+</span>
            </a>
            <p className="text-gray-800 text-md leading-relaxed">
              • Licensed Clinical Psychologist in the state of California •
              Provides in-person sessions in Santa Monica • Offers secure
              telehealth sessions across California
            </p>

            <a
              href="#"
              className="flex justify-between items-center border-b border-amber-600 pt-4 pb-4 cursor-pointer"
            >
              <p className="text-xl font-medium text-gray-900">
                Certifications
              </p>
              <span className="text-2xl text-amber-600">+</span>
            </a>
            <p className="text-gray-800 text-md leading-relaxed pb-4">
              • EMDR-trained clinician • Certification in trauma-informed care •
              Training in mindfulness-based stress reduction (MBSR) • Ongoing
              study in somatic and nervous system-based approaches
            </p>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation>
  <section className="min-h-[550px] bg-gradient-to-r from-gray-900 to-gray-800 text-white px-10 py-20 text-center flex flex-col justify-between">
    <div className="pt-10">
      <h2 className="text-5xl font-semibold mb-6">
        Take the first step toward feeling more grounded.
      </h2>

      <div className="max-w-2xl mx-auto text-md font-medium text-gray-300 leading-relaxed pt-4">
        <p>
          Whether you're navigating anxiety, burnout, or the impact of
          past experiences, therapy can help you slow down, reconnect with
          yourself, and feel more regulated in daily life.
        </p>
        <p className="mt-3">
          I offer both in-person sessions in Santa Monica and secure
          telehealth for adults across California.
        </p>
      </div>
    </div>

    <div className="pb-10 pt-8">
      <button className="border border-white-500 text-white px-8 py-3 text-sm font-medium hover:bg-amber-50 hover:text-black transition-all duration-300 cursor-pointer">
        BOOK A CONSULTATION →
      </button>
    </div>
  </section>
</ScrollAnimation>

      <ScrollAnimation>
        <footer className="min-h-[400px] bg-gradient-to-b emerald-100 px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            <div className="space-y-4">
              <h3 className="text-4xl font-semibold text-gray-900">
                Dr. Maya Reynolds, PsyD
              </h3>

              <p className="text-gray-800 text-lg font-medium pt-4 leading-relaxed">
                123th Street 45 W <br />
                Santa Monica, CA 90401
              </p>

              <p className="text-gray-800 text-lg font-medium underline pt-4 leading-relaxed">
                <a
                  href="mailto:contact@drmayareynolds.com"
                  className="text-amber-700 hover:text-amber-800"
                >
                  contact@drmayareynolds.com
                </a>
                <br />
                <a
                  href="tel:+15551234567"
                  className="text-amber-700 hover:text-amber-800"
                >
                  (555) 123-4567
                </a>
              </p>
            </div>

            <div className="md:text-right">
              <h3 className="text-4xl font-semibold text-gray-900 mb-4">
                Hours
              </h3>

              <p className="text-gray-800 text-lg font-medium leading-relaxed pt-4 md:text-right">
                Monday - Friday <br />
                10am - 6pm
              </p>
            </div>

            <div className="md:text-right">
              <h3 className="text-4xl font-semibold text-gray-900 mb-4">
                Find
              </h3>

              <div className="space-y-2 pt-4">
                <p>
                  <a
                    href="#"
                    className="text-lg font-medium underline text-amber-700 hover:text-amber-800"
                  >
                    Home
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="text-lg font-medium underline text-amber-700 hover:text-amber-800"
                  >
                    Contact
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="text-lg font-medium underline text-amber-700 hover:text-amber-800"
                  >
                    Services
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="text-lg font-medium underline text-amber-700 hover:text-amber-800"
                  >
                    FAQs
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </ScrollAnimation>

      <div className="w-full bg-gradient-to-r from-emerald-100 to-amber-100 text-center py-10 text-gray-900">
        <div className="space-x-4 text-md font-medium">
          <a href="#" className="underline text-amber-800 hover:text-amber-900">
            Privacy Policy
          </a>
          <a href="#" className="underline text-amber-800 hover:text-amber-900">
            Good Faith Estimate
          </a>
          <a href="#" className="underline text-amber-800 hover:text-amber-900">
            Website Terms
          </a>
          <a href="#" className="underline text-amber-800 hover:text-amber-900">
            Disclaimer
          </a>
        </div>

        <p className="mt-4 text-md text-gray-800">
          © 2024 Dr. Maya Reynolds, PsyD. All Rights Reserved.
        </p>
      </div>
    </main>
  );
}
