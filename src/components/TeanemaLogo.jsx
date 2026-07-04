"use client";

export default function TeanemaLogo({ className = "h-12 w-auto", showBeam = true, walk = "none", animated = true }) {
  // Determine CSS classes to apply based on the walk prop
  const isLoop = walk === "loop";
  const isPose = walk === "pose";

  return (
    <svg
      className={`${className} overflow-visible`}
      viewBox="0 0 680 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Spotlight light beam gradient */}
        <linearGradient id="lightBeamGrad" x1="0" y1="0" x2="1" y2="0.8">
          <stop offset="0%" stopColor="#fef08a" stopOpacity="0.55" />
          <stop offset="35%" stopColor="#fef3c7" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#fef3c7" stopOpacity="0" />
        </linearGradient>
        
        {/* Style tag for animations */}
        {animated && (
          <style>{`
            /* General animations */
            @keyframes steamRise {
              0% { transform: translateY(0) scaleX(1); opacity: 0.1; }
              40% { transform: translateY(-5px) scaleX(1.1); opacity: 0.8; }
              80% { transform: translateY(-10px) scaleX(0.9); opacity: 0; }
              100% { transform: translateY(-10px) scaleX(0.9); opacity: 0; }
            }
            @keyframes rotateReel {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes beamPulse {
              0% { opacity: 0.25; }
              50% { opacity: 0.5; }
              100% { opacity: 0.25; }
            }
            @keyframes lightGlow {
              0% { r: 5; opacity: 0.5; }
              50% { r: 9; opacity: 1; }
              100% { r: 5; opacity: 0.5; }
            }
            .steam-1 { animation: steamRise 2.2s infinite ease-in-out; }
            .steam-2 { animation: steamRise 2.2s infinite ease-in-out 0.7s; }
            .steam-3 { animation: steamRise 2.2s infinite ease-in-out 1.4s; }
            .reel-1 { transform-origin: 600px 18px; animation: rotateReel 5s infinite linear; }
            .reel-2 { transform-origin: 624px 18px; animation: rotateReel 5s infinite linear; }
            .beam-path { animation: beamPulse 3.5s infinite ease-in-out; }
            .emitter-glow { animation: lightGlow 3.5s infinite ease-in-out; }

            /* 1. Mascot Walk Loop Animation (6 seconds total cycle) */
            @keyframes walkAndJump {
              0% { transform: translate(0px, 0px); opacity: 1; }
              10% { transform: translate(0px, -6px); opacity: 1; } /* Pops up from behind logo */
              18% { transform: translate(0px, 0px); opacity: 1; } /* Lands on A */
              68% { transform: translate(-550px, 0px); opacity: 1; } /* Walks across to T */
              74% { transform: translate(-572px, -24px); opacity: 1; } /* Jumps off left edge */
              80% { transform: translate(-590px, 24px); opacity: 0; } /* Falls and vanishes */
              93% { transform: translate(0px, 0px); opacity: 0; } /* Resets to start hidden */
              100% { transform: translate(0px, 0px); opacity: 1; } /* Reappears */
            }

            @keyframes swingLeftLeg {
              0%, 18% { transform: rotate(0deg); }
              22% { transform: rotate(24deg); }
              27% { transform: rotate(-24deg); }
              32% { transform: rotate(24deg); }
              37% { transform: rotate(-24deg); }
              42% { transform: rotate(24deg); }
              47% { transform: rotate(-24deg); }
              52% { transform: rotate(24deg); }
              57% { transform: rotate(-24deg); }
              62% { transform: rotate(24deg); }
              68% { transform: rotate(0deg); }
              71%, 78% { transform: rotate(-35deg); } /* Jump pose */
              80%, 100% { transform: rotate(0deg); }
            }

            @keyframes swingRightLeg {
              0%, 18% { transform: rotate(0deg); }
              22% { transform: rotate(-24deg); }
              27% { transform: rotate(24deg); }
              32% { transform: rotate(-24deg); }
              37% { transform: rotate(24deg); }
              42% { transform: rotate(-24deg); }
              47% { transform: rotate(24deg); }
              52% { transform: rotate(-24deg); }
              57% { transform: rotate(24deg); }
              62% { transform: rotate(-24deg); }
              68% { transform: rotate(0deg); }
              71%, 78% { transform: rotate(35deg); } /* Jump pose */
              80%, 100% { transform: rotate(0deg); }
            }

            @keyframes swingLeftArm {
              0%, 18% { transform: rotate(0deg); }
              22% { transform: rotate(-15deg); }
              27% { transform: rotate(15deg); }
              32% { transform: rotate(-15deg); }
              37% { transform: rotate(15deg); }
              42% { transform: rotate(-15deg); }
              47% { transform: rotate(15deg); }
              52% { transform: rotate(-15deg); }
              57% { transform: rotate(15deg); }
              62% { transform: rotate(-15deg); }
              68% { transform: rotate(0deg); }
              71%, 78% { transform: rotate(-40deg); }
              80%, 100% { transform: rotate(0deg); }
            }

            @keyframes swingRightArm {
              0%, 18% { transform: rotate(0deg); }
              22% { transform: rotate(15deg); }
              27% { transform: rotate(-15deg); }
              32% { transform: rotate(15deg); }
              37% { transform: rotate(-15deg); }
              42% { transform: rotate(15deg); }
              47% { transform: rotate(-15deg); }
              52% { transform: rotate(15deg); }
              57% { transform: rotate(-15deg); }
              62% { transform: rotate(15deg); }
              68% { transform: rotate(0deg); }
              71%, 78% { transform: rotate(40deg); }
              80%, 100% { transform: rotate(0deg); }
            }

            @keyframes speedLinesShow {
              0%, 65% { opacity: 0; transform: scaleX(0.1); }
              68%, 78% { opacity: 0.85; transform: scaleX(1); }
              80%, 100% { opacity: 0; transform: scaleX(0.1); }
            }

            /* 2. Mascot Pose Animation (Breathing + waving on Homepage Hero) */
            @keyframes poseBreathe {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-3px); }
            }
            @keyframes poseWaveArm {
              0%, 100% { transform: rotate(0deg); }
              50% { transform: rotate(-35deg); }
            }
            @keyframes poseLeftArmSwing {
              0%, 100% { transform: rotate(0deg); }
              50% { transform: rotate(15deg); }
            }

            /* Conditional Animation Classes */
            .mascot-loop {
              animation: walkAndJump 6s infinite linear;
            }
            .mascot-loop-l-leg {
              transform-origin: 598px 66px;
              animation: swingLeftLeg 6s infinite ease-in-out;
            }
            .mascot-loop-r-leg {
              transform-origin: 626px 66px;
              animation: swingRightLeg 6s infinite ease-in-out;
            }
            .mascot-loop-l-arm {
              transform-origin: 587px 49px;
              animation: swingLeftArm 6s infinite ease-in-out;
            }
            .mascot-loop-r-arm {
              transform-origin: 637px 49px;
              animation: swingRightArm 6s infinite ease-in-out;
            }
            .mascot-speed-lines {
              transform-origin: left center;
              animation: speedLinesShow 6s infinite ease-out;
            }

            .mascot-pose {
              animation: poseBreathe 3s infinite ease-in-out;
            }
            .mascot-pose-l-arm {
              transform-origin: 587px 49px;
              animation: poseLeftArmSwing 3s infinite ease-in-out;
            }
            .mascot-pose-r-arm {
              transform-origin: 637px 49px;
              animation: poseWaveArm 2s infinite ease-in-out;
            }
          `}</style>
        )}
      </defs>

      {/* 1. Spotlight Light Beam (rendered behind letters) */}
      {showBeam && (
        <polygon
          points="318,10 567,34 567,64 318,22"
          fill="url(#lightBeamGrad)"
          className="beam-path"
        />
      )}

      {/* Speed lines showing during loop jump */}
      {isLoop && (
        <g className="mascot-speed-lines" opacity="0">
          <line x1="50" y1="42" x2="25" y2="42" stroke="#F27224" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="60" y1="49" x2="30" y2="49" stroke="#0062BE" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="55" y1="56" x2="28" y2="56" stroke="#F27224" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      )}

      {/* 2. TEA (Orange letters) */}
      {/* T */}
      <rect x="10" y="80" width="80" height="24" fill="#F27224" />
      <rect x="38" y="104" width="24" height="76" fill="#F27224" />

      {/* E */}
      <rect x="100" y="80" width="24" height="100" fill="#F27224" />
      <rect x="124" y="80" width="56" height="22" fill="#F27224" />
      <rect x="124" y="119" width="46" height="22" fill="#F27224" />
      <rect x="124" y="158" width="56" height="22" fill="#F27224" />

      {/* A (with cup inside) */}
      <g>
        <polygon points="190,180 230,80 254,80 294,180 270,180 260,154 224,154 214,180" fill="#F27224" />
        {/* Triangle cutout base */}
        <polygon points="242,102 253,130 231,130" fill="white" />
        
        {/* Tea Cup cutting glass */}
        {/* Outer White Cup backing */}
        <polygon points="230,132 254,132 250,152 234,152" fill="white" />
        <ellipse cx="242" cy="132" rx="12" ry="3.5" fill="white" />
        
        {/* Orange Details/Ribs */}
        <polygon points="232,134 252,134 248,150 236,150" fill="none" stroke="#F27224" strokeWidth="1.5" />
        <line x1="238" y1="135" x2="240" y2="149" stroke="#F27224" strokeWidth="1.2" />
        <line x1="242" y1="135" x2="242" y2="149" stroke="#F27224" strokeWidth="1.2" />
        <line x1="246" y1="135" x2="244" y2="149" stroke="#F27224" strokeWidth="1.2" />
        
        {/* Steam waves */}
        <g>
          <path d="M 236,124 Q 239,120 236,116 T 236,108" fill="none" stroke="#F27224" strokeWidth="1.2" strokeLinecap="round" className="steam-1" />
          <path d="M 242,126 Q 245,122 242,118 T 242,110" fill="none" stroke="#F27224" strokeWidth="1.2" strokeLinecap="round" className="steam-2" />
          <path d="M 248,124 Q 251,120 248,116 T 248,108" fill="none" stroke="#F27224" strokeWidth="1.2" strokeLinecap="round" className="steam-3" />
        </g>
      </g>

      {/* 3. NEMA (Blue letters) */}
      {/* N (with spotlight top) */}
      <g>
        {/* Left stem (highly elongated) */}
        <rect x="285" y="20" width="24" height="160" fill="#0062BE" />
        {/* Right stem */}
        <rect x="345" y="80" width="24" height="100" fill="#0062BE" />
        {/* Diagonal */}
        <polygon points="309,80 345,158 345,180 309,102" fill="#0062BE" />
        
        {/* Spotlight Arm/Base on top left of N */}
        <path d="M 297,20 C 297,5 310,5 312,12" stroke="#0062BE" strokeWidth="5" fill="none" strokeLinecap="round" />
        
        {/* Swivel head mount */}
        <circle cx="312" cy="12" r="3.5" fill="#F27224" />
        
        {/* Spotlight head cup (Blue body transform rotate) */}
        <g transform="rotate(22, 312, 12)">
          <path d="M 312,2 L 324,6 L 324,18 L 312,22 Z" fill="#0062BE" />
          {/* Barn Doors (Orange flaps) */}
          <polygon points="324,6 334,2 328,10" fill="#F27224" />
          <polygon points="324,18 334,22 328,14" fill="#F27224" />
          {/* Glowing lens emitter */}
          <ellipse cx="324" cy="12" rx="2" ry="6" fill="#FDE047" />
          <circle cx="324" cy="12" r="5" fill="#FFF" className="emitter-glow" opacity="0.8" />
        </g>
      </g>

      {/* E */}
      <rect x="380" y="80" width="24" height="100" fill="#0062BE" />
      <rect x="404" y="80" width="56" height="22" fill="#0062BE" />
      <rect x="404" y="119" width="46" height="22" fill="#0062BE" />
      <rect x="404" y="158" width="56" height="22" fill="#0062BE" />

      {/* M */}
      <g>
        <rect x="470" y="80" width="22" height="100" fill="#0062BE" />
        <rect x="532" y="80" width="22" height="100" fill="#0062BE" />
        <polygon points="492,80 513,135 534,80 534,105 513,160 492,105" fill="#0062BE" />
      </g>

      {/* A (with camera mascot on top) */}
      <g>
        <polygon points="560,180 600,80 624,80 664,180 640,180 630,154 594,154 584,180" fill="#0062BE" />
        <polygon points="612,102 623,130 601,130" fill="white" />
        
        {/* Animated Camera Mascot group */}
        <g className={isLoop ? "mascot-loop" : isPose ? "mascot-pose" : ""}>
          
          {/* Static legs (only show when walk is "none") */}
          {walk === "none" && (
            <>
              <line x1="598" y1="66" x2="596" y2="80" stroke="#0062BE" strokeWidth="3" />
              <line x1="626" y1="66" x2="628" y2="80" stroke="#0062BE" strokeWidth="3" />
              <circle cx="598" cy="80" r="2.5" fill="#0062BE" />
              <circle cx="628" cy="80" r="2.5" fill="#0062BE" />
            </>
          )}

          {/* Animated Mascot Legs & Arms (for loop and pose modes) */}
          {walk !== "none" && (
            <>
              {/* Left Leg */}
              <g className={isLoop ? "mascot-loop-l-leg" : ""}>
                <line x1="598" y1="66" x2="598" y2="82" stroke="#0062BE" strokeWidth="4.5" strokeLinecap="round" />
                <circle cx="598" cy="82" r="3.5" fill="#F27224" />
              </g>
              
              {/* Right Leg */}
              <g className={isLoop ? "mascot-loop-r-leg" : ""}>
                <line x1="626" y1="66" x2="626" y2="82" stroke="#0062BE" strokeWidth="4.5" strokeLinecap="round" />
                <circle cx="626" cy="82" r="3.5" fill="#F27224" />
              </g>

              {/* Left Arm */}
              <g className={isLoop ? "mascot-loop-l-arm" : isPose ? "mascot-pose-l-arm" : ""}>
                <path d="M 587,49 C 580,51 574,45 574,39" stroke="#0062BE" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                <circle cx="574" cy="39" r="2.5" fill="#F27224" />
              </g>

              {/* Right Arm */}
              <g className={isLoop ? "mascot-loop-r-arm" : isPose ? "mascot-pose-r-arm" : ""}>
                <path d="M 637,49 C 644,51 650,45 650,39" stroke="#0062BE" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                <circle cx="650" cy="39" r="2.5" fill="#F27224" />
              </g>
            </>
          )}

          {/* Camera body (Orange) */}
          <rect x="587" y="32" width="50" height="34" rx="4" fill="#F27224" />
          
          {/* Lens hood (Blue) */}
          <polygon points="587,42 567,34 567,64 587,56" fill="#0062BE" />
          <circle cx="567" cy="49" r="3" fill="#F27224" />

          {/* Film reels */}
          <g className="reel-1">
            <circle cx="600" cy="18" r="11" fill="#F27224" stroke="white" strokeWidth="1.5" />
            <circle cx="600" cy="18" r="3" fill="white" />
            <line x1="593" y1="18" x2="607" y2="18" stroke="white" strokeWidth="1" strokeDasharray="1.5 1.5" />
            <line x1="600" y1="11" x2="600" y2="25" stroke="white" strokeWidth="1" strokeDasharray="1.5 1.5" />
          </g>
          <g className="reel-2">
            <circle cx="624" cy="18" r="11" fill="#F27224" stroke="white" strokeWidth="1.5" />
            <circle cx="624" cy="18" r="3" fill="white" />
            <line x1="617" y1="18" x2="631" y2="18" stroke="white" strokeWidth="1" strokeDasharray="1.5 1.5" />
            <line x1="624" y1="11" x2="624" y2="25" stroke="white" strokeWidth="1" strokeDasharray="1.5 1.5" />
          </g>

          {/* Camera crank */}
          <path d="M 637,49 L 643,49 L 643,43" stroke="#0062BE" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="643" cy="43" r="2.5" fill="#F27224" />
        </g>
      </g>
    </svg>
  );
}
