import Reveal from "./Reveal";
import {
  ClockIcon,
  TrophyIcon,
  UserGroupIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";

export default function Features() {
  const features = [
    {
      icon: ClockIcon,
      title: "24-hour photo deletion",
      description:
        "Photos automatically disappear after 24 hours or when viewed, ensuring your privacy.",
      gradient: "from-[#667eea] via-[#764ba2] to-[#667eea]",
      iconBg: "bg-gradient-to-br from-[#667eea] to-[#764ba2]",
    },
    {
      icon: TrophyIcon,
      title: "Points & streaks",
      description:
        "Earn points for engagement and build streaks with consistent participation.",
      gradient: "from-[#f093fb] via-[#f5576c] to-[#f093fb]",
      iconBg: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
    },
    {
      icon: UserGroupIcon,
      title: "Anonymized matching",
      description:
        "Get paired with mystery buddies anonymously, revealing identities only when both agree.",
      gradient: "from-[#4facfe] via-[#00f2fe] to-[#4facfe]",
      iconBg: "bg-gradient-to-br from-[#4facfe] to-[#00f2fe]",
    },
    {
      icon: ShieldCheckIcon,
      title: "No data selling",
      description:
        "We never sell your personal data. Your privacy is our top priority.",
      gradient: "from-[#43e97b] via-[#38f9d7] to-[#43e97b]",
      iconBg: "bg-gradient-to-br from-[#43e97b] to-[#38f9d7]",
    },
  ];

  return (
    <section
      id="features"
      className="py-16 sm:py-24 bg-gradient-to-b from-background to-surface/50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accentPurple/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Reveal>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
              What makes us{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                different
              </span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              Private, temporary photo sharing built for safety, control, and
              delightful discovery.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="group relative bg-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/[0.05] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500 hover:scale-[1.02] cursor-pointer">
                <div className="relative">
                  <div
                    className={`w-16 h-16 mb-6 rounded-2xl ${feature.iconBg} p-3.5 group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-2xl relative`}
                  >
                    <feature.icon
                      className="w-full h-full text-white drop-shadow-lg"
                      aria-hidden="true"
                    />
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} blur-xl opacity-60 group-hover:opacity-80 transition-opacity`}
                    />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-white tracking-tight">
                    {feature.title}
                  </h3>

                  <p className="text-base text-gray-400 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
