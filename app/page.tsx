import Header from "@/components/Header";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import IntroSplit from "@/components/IntroSplit";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import WhyChoose from "@/components/WhyChoose";
import StartTreatment from "@/components/StartTreatment";
import SeoContent from "@/components/SeoContent";
import TreatmentResults from "@/components/TreatmentResults";
import TreatmentAreas from "@/components/TreatmentAreas";
import ClinicSteps from "@/components/ClinicSteps";
import TreatmentFacts from "@/components/TreatmentFacts";
import Footer from "@/components/Footer";

const facts = [
  {
    icon: "clock",
    label: "Treatment time",
    text: "Most sessions take 15 minutes to an hour, depending on the area being treated.",
  },
  {
    icon: "heart",
    label: "Downtime",
    text: "There is minimal downtime, so you can return to work and daily life straight away.",
  },
  {
    icon: "hourglass",
    label: "Results seen in",
    text: "Visible reduction in hair is typically seen within a few sessions.",
  },
  {
    icon: "alert",
    label: "Potential side effects",
    text: "Mild redness and swelling around the follicles can occur and usually settles quickly.",
  },
  {
    icon: "calendar",
    label: "Duration of results",
    text: "Occasional maintenance sessions help keep results going long term.",
  },
];

const steps = [
  {
    icon: "check",
    label: "Patch test",
    text: "Required first, to check for any reaction and set the right treatment level.",
  },
  {
    icon: "calendar",
    label: "Treatment",
    text: "The number of sessions you need depends on your hair, skin and treatment area.",
  },
  {
    icon: "heart",
    label: "Aftercare",
    text: "Our practitioners give clear advice on how to look after your skin afterwards.",
  },
];

const areas = [
  {
    title: "Facial Laser Hair Removal Manchester",
    items: [
      "Upper lip laser hair removal Manchester",
      "Chin laser hair removal Manchester",
    ],
  },
  {
    title: "Body Laser Hair Removal Manchester",
    items: [
      "Underarm laser hair removal Manchester",
      "Leg laser hair removal Manchester",
      "Back laser hair removal Manchester",
      "Chest laser hair removal Manchester",
    ],
  },
  {
    title: "Facial Laser Hair Removal Manchester",
    items: [
      "Bikini laser hair removal Manchester",
      "Hollywood laser hair removal Manchester",
    ],
  },
];

const ctas = [
  {
    icon: "card",
    label: "Book & pay in full",
    sub: "Laser Hair Removal Manchester",
    btn: "Book",
  },
  {
    icon: "calendar",
    label: "Spread the cost",
    sub: "Laser Hair Removal Manchester",
    btn: "Pay in 3",
  },
  {
    icon: "phone",
    label: "Find out more",
    sub: "Laser Hair Removal Manchester",
    btn: "Contact",
  },
];

const why = [
  "Advanced Cynosure Elite+ laser technology",
  "Suitable for a wide range of skin types",
  "Experienced laser practitioners",
  "Personalised treatment plans",
  "Comfortable treatment experience",
  "Professional consultation and aftercare",
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <Hero />
        {/* Quick facts */}
        <TreatmentFacts />

        <section className="text-center px-5 py-10">
          <h2 className="font-serif text-3xl md:text-4xl">
            Laser Hair Removal Manchester
          </h2>
          <p className="font-serif italic text-xs md:text-sm mt-2 text-muted">
            Advanced laser hair removal in Manchester for smooth, long-lasting
            results
          </p>
        </section>

        {/* Intro split */}
        <IntroSplit />

        {/* Clinic steps */}
        <ClinicSteps />

        {/* Treatment areas */}
        <TreatmentAreas />

        {/* Results */}
        <TreatmentResults />

        <SeoContent />

        {/* Start treatment */}
        <StartTreatment />

        {/* Why choose */}
        <WhyChoose />

        {/* FAQ */}
        <section className="px-5 pb-16">
          <h2 className="h-section mb-10">Frequently Asked Questions</h2>
          <Faq />
        </section>

        {/* Contact */}
        <section id="contact" className="px-5 pb-16">
          <h2 className="h-section mb-10">Need Help or Advice?</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">
            <ContactForm />
            <div
              className="bg-sand min-h-[320px] md:min-h-[420px] flex items-center justify-center text-xs text-muted"
              role="img"
              aria-label="Map placeholder"
            >
              Map – embed Google Maps here
            </div>
          </div>
        </section>

        {/* Reviews */}
        <Reviews />
      </main>
<Footer/>
    </>
  );
}
