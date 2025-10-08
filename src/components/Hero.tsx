import { Link } from "react-router-dom";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-midnight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                SecretBuddy —{" "}
                <span className="gradient-text">
                  Private, temporary photo chats
                </span>
              </h1>
              <p className="text-xl text-textSecondary leading-relaxed">
                Send photos anonymously with daily pairings and disappearing
                photos. Your privacy matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary">Get the App</button>
                <Link to="/privacy" className="btn-secondary">
                  Read Privacy Policy
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="relative">
              <div className="bg-surface rounded-2xl p-8 border border-border">
                <div className="aspect-square bg-surfaceSecondary rounded-lg flex items-center justify-center">
                  <span className="text-textSecondary">App Mockup</span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-pink rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accentTeal rounded-full opacity-30 blur-lg"></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
