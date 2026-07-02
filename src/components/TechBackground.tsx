import './TechBackground.css';

const TechBackground = () => {
  return (
    <div className="tech-background-wrapper">
      <svg 
        viewBox="0 0 1920 1080" 
        preserveAspectRatio="xMidYMid slice" 
        className="tech-svg"
      >
        <g stroke="#ffffff" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.15">
          
          {/* =======================
              1. 神经网络 (Top Right)
             ======================= */}
          <g className="float-fast">
            {/* Input Layer */}
            <circle cx="1500" cy="150" r="8" />
            <circle cx="1500" cy="220" r="8" />
            <circle cx="1500" cy="290" r="8" />
            {/* Hidden Layer */}
            <circle cx="1650" cy="120" r="10" />
            <circle cx="1650" cy="190" r="10" />
            <circle cx="1650" cy="260" r="10" />
            <circle cx="1650" cy="330" r="10" />
            {/* Output Layer */}
            <circle cx="1800" cy="180" r="12" />
            <circle cx="1800" cy="270" r="12" />
            
            {/* Connections (Input -> Hidden) */}
            <path d="M1508,150 L1640,120 M1508,150 L1640,190 M1508,150 L1640,260 M1508,150 L1640,330" opacity="0.3" />
            <path d="M1508,220 L1640,120 M1508,220 L1640,190 M1508,220 L1640,260 M1508,220 L1640,330" opacity="0.3" />
            <path d="M1508,290 L1640,120 M1508,290 L1640,190 M1508,290 L1640,260 M1508,290 L1640,330" opacity="0.3" />
            
            {/* Connections (Hidden -> Output) */}
            <path d="M1660,120 L1788,180 M1660,120 L1788,270" opacity="0.3" />
            <path d="M1660,190 L1788,180 M1660,190 L1788,270" opacity="0.3" />
            <path d="M1660,260 L1788,180 M1660,260 L1788,270" opacity="0.3" />
            <path d="M1660,330 L1788,180 M1660,330 L1788,270" opacity="0.3" />
          </g>

          {/* =======================
              2. PCB 走线 & 芯片 (Bottom Left)
             ======================= */}
          <g className="float-slow">
            {/* Traces */}
            <path d="M-50,850 L150,850 L250,750 L250,600" />
            <circle cx="250" cy="600" r="5" fill="#ffffff" />
            
            <path d="M-50,900 L120,900 L200,820 L200,680 L280,600" />
            <circle cx="280" cy="600" r="5" fill="#ffffff" />
            
            <path d="M150,1050 L150,950 L250,850 L350,850 L400,800" />
            <circle cx="400" cy="800" r="5" fill="#ffffff" />

            {/* IC Chip */}
            <rect x="250" y="650" width="120" height="120" rx="8" />
            <circle cx="270" cy="670" r="4" /> {/* Pin 1 indicator */}
            {/* Pins Top */}
            <path d="M270,650 L270,635 M290,650 L290,635 M310,650 L310,635 M330,650 L330,635 M350,650 L350,635" />
            {/* Pins Bottom */}
            <path d="M270,770 L270,785 M290,770 L290,785 M310,770 L310,785 M330,770 L330,785 M350,770 L350,785" />
            {/* Pins Left */}
            <path d="M250,670 L235,670 M250,690 L235,690 M250,710 L235,710 M250,730 L235,730 M250,750 L235,750" />
            {/* Pins Right */}
            <path d="M370,670 L385,670 M370,690 L385,690 M370,710 L385,710 M370,730 L385,730 M370,750 L385,750" />

            {/* Resistor symbol */}
            <path d="M400,800 L430,800 L435,790 L445,810 L455,790 L465,810 L470,800 L500,800" />
          </g>

          {/* =======================
              3. 终端与代码 (Middle Right)
             ======================= */}
          <g className="float-medium">
            <rect x="1450" y="550" width="350" height="220" rx="6" />
            <path d="M1450,580 L1800,580" />
            {/* Mac Window Dots */}
            <circle cx="1470" cy="565" r="4" fill="#ffffff" opacity="0.5" />
            <circle cx="1485" cy="565" r="4" fill="#ffffff" opacity="0.5" />
            <circle cx="1500" cy="565" r="4" fill="#ffffff" opacity="0.5" />
            {/* Prompt */}
            <path d="M1470,610 L1485,620 L1470,630 M1500,630 L1520,630" />
            
            {/* Binary text flow */}
            <text x="1470" y="670" fill="#ffffff" fontSize="14" fontFamily="monospace" stroke="none">01010110 01101001</text>
            <text x="1470" y="695" fill="#ffffff" fontSize="14" fontFamily="monospace" stroke="none">01100010 01100101</text>
            <text x="1470" y="720" fill="#ffffff" fontSize="14" fontFamily="monospace" stroke="none">01000011 01101111</text>
            <text x="1470" y="745" fill="#ffffff" fontSize="14" fontFamily="monospace" stroke="none">01100100 01101001</text>
          </g>

          {/* =======================
              4. 机器人与齿轮 (Bottom Right)
             ======================= */}
          <g className="float-slow" transform="translate(100, 0)">
            {/* Gear 1 */}
            <circle cx="1150" cy="950" r="40" />
            <circle cx="1150" cy="950" r="10" />
            <path d="M1150,895 L1150,905 M1150,995 L1150,1005 M1095,950 L1105,950 M1195,950 L1205,950 M1111,911 L1118,918 M1189,989 L1182,982 M1111,989 L1118,982 M1189,911 L1182,918" strokeWidth="4" />
            
            {/* Gear 2 */}
            <circle cx="1250" cy="900" r="60" />
            <circle cx="1250" cy="900" r="15" />
            <path d="M1250,825 L1250,835 M1250,965 L1250,975 M1175,900 L1185,900 M1315,900 L1325,900 M1197,847 L1204,854 M1303,953 L1296,946 M1197,953 L1204,946 M1303,847 L1296,854" strokeWidth="4" />

            {/* Robotic Arm */}
            <path d="M1350,1050 L1330,950 L1450,850 L1480,750" strokeWidth="6" strokeLinejoin="round" />
            <circle cx="1330" cy="950" r="12" />
            <circle cx="1450" cy="850" r="10" />
            {/* Claw */}
            <path d="M1470,750 L1450,710 M1490,750 L1510,710" strokeWidth="3" />
          </g>

          {/* =======================
              5. 网络拓扑与云 (Top Left)
             ======================= */}
          <g className="float-medium">
            {/* Cloud */}
            <path d="M300,200 Q280,150 230,160 Q180,140 150,190 Q100,190 110,240 Q90,290 140,300 Q160,340 210,320 Q270,350 310,290 Q360,260 300,200 Z" />
            
            {/* Servers */}
            <rect x="400" y="150" width="80" height="30" rx="4" />
            <rect x="400" y="190" width="80" height="30" rx="4" />
            <rect x="400" y="230" width="80" height="30" rx="4" />
            
            {/* Connections */}
            <path d="M300,250 L400,165 M300,250 L400,205 M300,250 L400,245" opacity="0.4" />
            
            {/* Devices */}
            <circle cx="580" cy="120" r="15" />
            <circle cx="620" cy="205" r="15" />
            <circle cx="560" cy="280" r="15" />
            
            <path d="M480,165 L565,125 M480,205 L605,205 M480,245 L550,270" opacity="0.4" />
          </g>

          {/* =======================
              6. 3D 打印切片网格 (Center Bottom)
             ======================= */}
          <g className="float-slow" transform="translate(600, 700)" opacity="0.5">
            <ellipse cx="0" cy="0" rx="150" ry="60" />
            <ellipse cx="0" cy="-20" rx="130" ry="50" />
            <ellipse cx="0" cy="-40" rx="110" ry="40" />
            <ellipse cx="0" cy="-60" rx="90" ry="30" />
            <ellipse cx="0" cy="-80" rx="70" ry="20" />
            <ellipse cx="0" cy="-100" rx="50" ry="10" />
            {/* Grid lines over it */}
            <path d="M-150,0 L150,0 M-130,-20 L130,-20 M-110,-40 L110,-40 M-90,-60 L90,-60 M-70,-80 L70,-80 M-50,-100 L50,-100" opacity="0.3" />
            <path d="M0,60 L0,-110 M-40,55 L-40,-105 M40,55 L40,-105 M-80,50 L-80,-95 M80,50 L80,-95 M-120,35 L-120,-60 M120,35 L120,-60" opacity="0.3" />
          </g>

        </g>
      </svg>
    </div>
  );
};

export default TechBackground;
