export default function IdentityReveal() {
  return (
    <div className="relative flex flex-col items-center animate-float-gentle">
      <div className="relative w-[220px] sm:w-[260px] lg:w-[300px] aspect-[9/19.5]">
        {/* Animated glow behind phone */}
        <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-[#9C6BFF40] via-[#FF4FB740] to-[#d946ef40] blur-3xl animate-pulse-slow" />

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden rounded-[3rem] pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-accentPurple/30 rounded-full animate-float-particle" />
          <div className="absolute top-[60%] right-[15%] w-1.5 h-1.5 bg-accentPink/40 rounded-full animate-float-particle-delayed" />
          <div className="absolute bottom-[30%] left-[20%] w-1 h-1 bg-accentTeal/30 rounded-full animate-float-particle-slow" />
        </div>

        {/* iPhone-like frame with realistic bezels */}
        <div className="relative z-10 w-full h-full rounded-[3rem] bg-gradient-to-b from-[#1a0a2e] via-[#0f0620] to-[#0a0418] shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden border-[3px] border-[#2b0b3f]/70">
          {/* Notch (Dynamic Island style) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 w-[100px] h-[28px] bg-black rounded-b-[20px] flex items-center justify-center">
            <div className="w-[60px] h-[4px] bg-[#1a1a1a] rounded-full" />
          </div>

          {/* Inner bezel with realistic lighting */}
          <div className="absolute inset-[8px] rounded-[2.5rem] overflow-hidden bg-black shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
            {/* Screen content with app preview */}
            <div className="relative w-full h-full bg-gradient-to-br from-[#9C6BFF] via-[#6366f1] to-[#0284c7] flex items-center justify-center">
              <img
                src="/icon1.png"
                alt="SecretBuddy app preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Screen reflection effect */}
          <div className="pointer-events-none absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/5 via-transparent to-transparent" />
        </div>

        {/* Enhanced Coming Soon badge with animation */}
        <div className="absolute -top-3 -right-2 z-20 animate-bounce-subtle">
          <div className="relative px-4 py-2 rounded-full text-xs font-bold text-white shadow-xl backdrop-blur-sm bg-gradient-to-r from-[#9C6BFF] to-[#FF4FB7] border border-white/30">
            <span className="relative z-10">Coming Soon</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#9C6BFF] to-[#FF4FB7] blur-md opacity-50 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
