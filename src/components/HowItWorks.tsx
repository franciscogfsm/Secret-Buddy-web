import Reveal from "./Reveal";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Get Paired",
      description:
        "Join SecretBuddy and get matched with a mystery buddy based on your preferences.",
    },
    {
      step: "02",
      title: "Send Photo",
      description:
        "Share a photo based on the daily prompt or your choice with your anonymous buddy.",
    },
    {
      step: "03",
      title: "Photo Auto-deletes",
      description:
        "Photos disappear after 24 hours or when viewed, keeping your conversations private.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-textSecondary max-w-2xl mx-auto">
              Simple, private, and fun photo sharing in three easy steps.
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Reveal key={index} delay={index * 150}>
              <div className="text-center group">
                <div className="w-16 h-16 bg-purple-pink rounded-full flex items-center justify-center text-2xl font-bold text-textPrimary mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl">
                  {step.step}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-textSecondary text-lg">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
