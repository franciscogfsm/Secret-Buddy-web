import Reveal from "./Reveal";
import {
  ClockIcon,
  TrophyIcon,
  UserGroupIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

export default function Features() {
  const features = [
    {
      icon: ClockIcon,
      title: "24-hour photo deletion",
      description:
        "Photos automatically disappear after 24 hours or when viewed, ensuring your privacy.",
    },
    {
      icon: TrophyIcon,
      title: "Points & streaks",
      description:
        "Earn points for engagement and build streaks with consistent participation.",
    },
    {
      icon: UserGroupIcon,
      title: "Anonymized matching",
      description:
        "Get paired with mystery buddies anonymously, revealing identities only when both agree.",
    },
    {
      icon: LockClosedIcon,
      title: "No data selling",
      description:
        "We never sell your personal data. Your privacy is our top priority.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose SecretBuddy?</h2>
            <p className="text-xl text-textSecondary max-w-2xl mx-auto">
              Experience private, temporary photo sharing with features designed
              for your security and fun.
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="card text-center hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <feature.icon
                    className="w-10 h-10 text-accentPurple"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-textSecondary">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
