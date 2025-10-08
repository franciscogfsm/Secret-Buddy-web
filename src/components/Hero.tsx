import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import IdentityReveal from "./IdentityReveal";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-[#05030C] via-[#0B0520] to-[#05030C] text-white overflow-hidden pt-24 sm:pt-0">
      {/* Enhanced animated background with floating particles */}
      <div className="absolute inset-0">
        {/* Main gradient blobs */}
        <div className="absolute top-[10%] left-[5%] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-purple-600/20 sm:bg-purple-600/15 rounded-full blur-[120px] sm:blur-[150px] animate-blob" />
        <div className="absolute bottom-[15%] right-[5%] w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] bg-pink-600/18 sm:bg-pink-600/12 rounded-full blur-[120px] sm:blur-[140px] animate-blob animation-delay-4000" />
        <div className="absolute top-[40%] right-[10%] w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-blue-600/15 sm:bg-blue-600/10 rounded-full blur-[100px] sm:blur-[120px] animate-blob animation-delay-2000" />

        {/* Floating orbs for depth */}
        <div className="absolute top-[25%] left-[20%] w-[80px] h-[80px] bg-purple-500/20 rounded-full blur-[40px] animate-float" />
        <div className="absolute top-[60%] left-[15%] w-[60px] h-[60px] bg-pink-500/20 rounded-full blur-[30px] animate-float animation-delay-2000" />
        <div className="absolute top-[35%] right-[25%] w-[70px] h-[70px] bg-blue-500/20 rounded-full blur-[35px] animate-float animation-delay-4000" />
        <div className="absolute bottom-[25%] left-[40%] w-[50px] h-[50px] bg-purple-400/20 rounded-full blur-[25px] animate-float animation-delay-3000" />
      </div>

      {/* Animated grid pattern with pulse */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30 animate-pulse-slow" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24 grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
        {/* Left content - More minimalist */}
        <Reveal>
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse mr-2"></span>
              <span className="text-xs text-gray-400 font-medium">
                Now in Beta
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              <span className="block text-white">SecretBuddy</span>
            </h1>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-300 leading-relaxed">
              Send photos.{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-medium">
                Keep privacy.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Daily photo pairings that disappear at midnight. Connect with
              mystery, emotion, and authenticity — no filters, no pressure.
            </p>

            <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start gap-4 pt-4 px-4 sm:px-0">
              <button className="group relative min-w-[240px] sm:w-auto px-10 py-4 text-base font-bold text-white rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 animate-gradient-x"></div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                </div>

                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow"></div>

                {/* Button content */}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                  Get the App
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </button>
            </div>

            {/* Minimal App Store Badges - Side by side */}
            <div className="flex flex-row items-center justify-center lg:justify-start gap-3 pt-6 px-4 sm:px-0">
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 hover:scale-105 group"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <div className="text-left">
                  <div className="text-[9px] sm:text-[10px] text-gray-500 font-light">
                    Download on
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-200 -mt-0.5">
                    App Store
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 hover:scale-105 group"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
                </svg>
                <div className="text-left">
                  <div className="text-[9px] sm:text-[10px] text-gray-500 font-light">
                    GET IT ON
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-200 -mt-0.5">
                    Google Play
                  </div>
                </div>
              </a>
            </div>

            {/* Minimal social proof */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-6 text-sm text-gray-500 font-light">
              <div className="flex items-center gap-2">
                <span className="text-gray-400">10k+</span>
                <span>users</span>
              </div>
              <div className="w-px h-4 bg-white/10"></div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Privacy</span>
                <span>first</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right phone mockup - Hidden on mobile */}
        <Reveal delay={200}>
          <div className="hidden lg:flex justify-center items-center lg:justify-end">
            <IdentityReveal />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
