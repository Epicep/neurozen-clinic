import { motion } from "framer-motion";

const NeuralAnimation = () => {
  // Generate random neural nodes
  const nodes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: 15 + Math.random() * 70,
    y: 15 + Math.random() * 70,
    size: 4 + Math.random() * 6,
    delay: Math.random() * 2,
  }));

  // Generate connections between nearby nodes
  const connections: { x1: number; y1: number; x2: number; y2: number; delay: number }[] = [];
  nodes.forEach((node, i) => {
    nodes.slice(i + 1).forEach((otherNode) => {
      const distance = Math.sqrt(
        Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
      );
      if (distance < 35) {
        connections.push({
          x1: node.x,
          y1: node.y,
          x2: otherNode.x,
          y2: otherNode.y,
          delay: Math.random() * 1.5,
        });
      }
    });
  });

  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl">
      {/* Gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, hsl(270 40% 94%) 0%, hsl(168 50% 92%) 50%, hsl(270 40% 94%) 100%)'
        }}
      />
      
      {/* Animated glow orbs */}
      <motion.div
        className="absolute w-40 h-40 rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(168 65% 45% / 0.3) 0%, transparent 70%)',
          top: '20%',
          left: '30%',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-32 h-32 rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(270 40% 70% / 0.3) 0%, transparent 70%)',
          bottom: '25%',
          right: '25%',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Neural network SVG */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        {/* Connections */}
        {connections.map((conn, i) => (
          <motion.line
            key={`conn-${i}`}
            x1={`${conn.x1}%`}
            y1={`${conn.y1}%`}
            x2={`${conn.x2}%`}
            y2={`${conn.y2}%`}
            stroke="hsl(168 65% 45%)"
            strokeWidth="0.3"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              pathLength: 1 
            }}
            transition={{
              opacity: { duration: 3, repeat: Infinity, delay: conn.delay },
              pathLength: { duration: 1.5, delay: conn.delay },
            }}
          />
        ))}

        {/* Traveling pulses along connections */}
        {connections.slice(0, 6).map((conn, i) => (
          <motion.circle
            key={`pulse-${i}`}
            r="1"
            fill="hsl(168 65% 55%)"
            initial={{ opacity: 0 }}
            animate={{
              cx: [`${conn.x1}%`, `${conn.x2}%`],
              cy: [`${conn.y1}%`, `${conn.y2}%`],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.8 + conn.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node) => (
          <g key={node.id}>
            {/* Glow effect */}
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.size * 2}
              fill="hsl(168 65% 45% / 0.15)"
              animate={{
                r: [node.size * 1.5, node.size * 2.5, node.size * 1.5],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3 + node.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Core node */}
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.size / 2}
              fill="hsl(168 65% 45%)"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2 + node.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </g>
        ))}
      </svg>

      {/* Wave lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
        <motion.path
          d="M0,150 Q50,120 100,150 T200,150 T300,150 T400,150"
          fill="none"
          stroke="hsl(168 65% 45% / 0.3)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.path
          d="M0,180 Q50,200 100,180 T200,180 T300,180 T400,180"
          fill="none"
          stroke="hsl(270 40% 70% / 0.3)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
      </svg>

      {/* Fade edges */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, hsl(270 40% 94%) 100%)'
        }}
      />
    </div>
  );
};

export default NeuralAnimation;