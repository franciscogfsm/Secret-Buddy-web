import Reveal from "./Reveal";
import { UserPlusIcon, CameraIcon, TrashIcon } from "@heroicons/react/24/solid";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Get Paired",
      description:
        "Join SecretBuddy and get matched with a mystery buddy based on your preferences.",
      icon: UserPlusIcon,
      gradient: "from-[#667eea] via-[#764ba2] to-[#667eea]",
      iconBg: "bg-gradient-to-br from-[#667eea] to-[#764ba2]",
    },
    {
      step: "02",
      title: "Send Photo",
      description:
        "Share a photo based on the daily prompt or your choice with your anonymous buddy.",
      icon: CameraIcon,
      gradient: "from-[#f093fb] via-[#f5576c] to-[#f093fb]",
      iconBg: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
    },
    {
      step: "03",
      title: "Photo Auto-deletes",
      description:
        "Photos disappear after 24 hours or when viewed, keeping your conversations private.",
      icon: TrashIcon,
      gradient: "from-[#4facfe] via-[#00f2fe] to-[#4facfe]",
      iconBg: "bg-gradient-to-br from-[#4facfe] to-[#00f2fe]",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-16 sm:py-24 bg-gradient-to-b from-surface/50 to-background relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-accentPurple/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accentPink/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Reveal>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
              Simple, private, and{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                fun
              </span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              Get started with photo sharing in three easy steps.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 relative">
          {/* Connection lines between steps (desktop) */}
          <div className="hidden md:block absolute top-20 left-[16.66%] right-[16.66%] h-[2px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20" />

          {steps.map((step, index) => (
            <Reveal key={index} delay={index * 150}>
              <div className="relative text-center group">
                {/* Step icon */}
                <div className="relative inline-block mb-8">
                  <div
                    className={`w-28 h-28 sm:w-32 sm:h-32 rounded-3xl ${step.iconBg} flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-500 shadow-2xl relative`}
                  >
                    <step.icon className="w-16 h-16 text-white drop-shadow-2xl" />
                    <div
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.gradient} blur-2xl opacity-60 group-hover:opacity-90 transition-opacity`}
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/20 flex items-center justify-center text-sm font-bold shadow-xl">
                    {step.step}
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-white tracking-tight">
                  {step.title}
                </h3>

                <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-sm mx-auto font-light">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA Section */}
        <Reveal delay={450}>
          <div className="mt-16 sm:mt-20 text-center">
            <button className="px-10 py-5 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 relative overflow-hidden group">
              <span className="relative z-10">Start Your Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
