import { motion } from "framer-motion";
import { DottedMap } from "@/components/ui/dotted-map";

// Peru sede locations (approximate lat/lng)
const peruMarkers = [
  // Lima (capital)
  { lat: -12.0464, lng: -77.0428, size: 0.8 },
  // Arequipa
  { lat: -16.409, lng: -71.5375, size: 0.5 },
  // Cusco
  { lat: -13.532, lng: -71.9675, size: 0.5 },
  // Trujillo
  { lat: -8.1116, lng: -79.0288, size: 0.4 },
  // Chiclayo
  { lat: -6.7714, lng: -79.8409, size: 0.4 },
  // Piura
  { lat: -5.1945, lng: -80.6328, size: 0.4 },
  // Iquitos
  { lat: -3.7491, lng: -73.2538, size: 0.4 },
  // Huancayo
  { lat: -12.0651, lng: -75.2049, size: 0.4 },
  // Tacna
  { lat: -18.0146, lng: -70.2536, size: 0.4 },
  // Puno
  { lat: -15.8402, lng: -70.0219, size: 0.4 },
  // Cajamarca
  { lat: -7.1638, lng: -78.5003, size: 0.4 },
  // Ayacucho
  { lat: -13.1588, lng: -74.2256, size: 0.4 },
];

export function AnimatedMapBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated floating circles */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary/5 blur-2xl"
        animate={{
          x: [0, 20, 0],
          y: [0, -15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-secondary/5 blur-2xl"
        animate={{
          x: [0, -15, 0],
          y: [0, 20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-accent/5 blur-xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Dotted map background */}
      <motion.div 
        className="absolute inset-0 opacity-40"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <DottedMap
          width={150}
          height={75}
          mapSamples={4000}
          dotRadius={0.15}
          markers={peruMarkers}
          markerColor="hsl(172, 92%, 25%)"
          className="text-primary/8"
        />
      </motion.div>

      {/* Animated pulse on Peru location */}
      <motion.div
        className="absolute"
        style={{
          // Approximate center of Peru on the map
          top: "45%",
          left: "22%",
        }}
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.5, 1] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-4 h-4 rounded-full bg-primary/20 blur-sm" />
      </motion.div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-60" />
    </div>
  );
}
