
// Types
export type GlucoseReading = {
  timestamp: string;
  value: number;
  note?: string;
};

export type Patient = {
  id: number;
  name: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  lastGlucoseLevel: number;
  lastGlucoseDate: string;
  avatarColor: string;
  glucoseStatus: 'high' | 'low' | 'normal';
  email: string;
  phone: string;
  diagnosis: string;
  medication: string[];
  glucoseReadings: GlucoseReading[];
  a1c: number;
  lastCheckup: string;
  nextCheckup: string;
  insuranceProvider?: string;
  insuranceNumber?: string;
  emergencyContact?: {
    name: string;
    relation: string;
    phone: string;
  };
};

// Avatar colors
const avatarColors = [
  '#F97316', // Orange
  '#8B5CF6', // Purple
  '#EC4899', // Pink
  '#14B8A6', // Teal
  '#06B6D4', // Cyan
  '#0EA5E9', // Light blue
  '#6366F1', // Indigo
  '#F43F5E', // Rose
];

// Helper to generate random glucose readings
const generateGlucoseReadings = (
  days: number,
  baseValue: number,
  variability: number,
  patternType: 'stable' | 'erratic' | 'declining' | 'improving' = 'stable'
): GlucoseReading[] => {
  const readings: GlucoseReading[] = [];
  const now = new Date();
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  
  // Generate readings for specified number of days
  for (let day = days; day >= 0; day--) {
    // Create 3-4 readings per day
    const readingsPerDay = Math.floor(Math.random() * 2) + 3;
    
    for (let i = 0; i < readingsPerDay; i++) {
      const date = new Date(now.getTime() - (day * millisecondsPerDay));
      
      // Set time for the reading (spread throughout the day)
      const hour = 7 + Math.floor((i / readingsPerDay) * 16); // Between 7am and 11pm
      date.setHours(hour, Math.floor(Math.random() * 60), 0, 0);
      
      // Pattern adjustment based on type
      let patternFactor = 0;
      switch (patternType) {
        case 'declining':
          patternFactor = -day * (variability / 4); // Gradually getting worse
          break;
        case 'improving':
          patternFactor = day * (variability / 4); // Gradually improving
          break;
        case 'erratic':
          patternFactor = (Math.sin(day * 0.5) * variability); // Oscillating pattern
          break;
        default: // stable
          patternFactor = 0;
      }
      
      // Base variation (+/- variability mg/dL)
      const variation = (Math.random() * variability * 2) - variability;
      
      // Calculate the glucose value
      let value = Math.round(baseValue + variation + patternFactor);
      
      // Ensure value is positive
      value = Math.max(40, value);
      
      readings.push({
        timestamp: date.toISOString(),
        value: value,
      });
    }
  }
  
  // Sort readings by timestamp
  return readings.sort((a, b) => 
    new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );
};

// Generate mock patients
export const mockPatients: Patient[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    age: 42,
    gender: 'Female',
    lastGlucoseLevel: 192,
    lastGlucoseDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    avatarColor: avatarColors[0],
    glucoseStatus: 'high',
    email: 'sarah.j@example.com',
    phone: '(555) 123-4567',
    diagnosis: 'Type 2 Diabetes',
    medication: ['Metformin 500mg', 'Glipizide 5mg'],
    glucoseReadings: generateGlucoseReadings(90, 180, 30, 'erratic'),
    a1c: 7.9,
    lastCheckup: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days ago
    nextCheckup: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString(), // 60 days from now
    insuranceProvider: 'Blue Shield',
    insuranceNumber: 'BS123456789',
    emergencyContact: {
      name: 'Michael Johnson',
      relation: 'Spouse',
      phone: '(555) 234-5678',
    },
  },
  {
    id: 2,
    name: 'Robert Chen',
    age: 65,
    gender: 'Male',
    lastGlucoseLevel: 145,
    lastGlucoseDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    avatarColor: avatarColors[1],
    glucoseStatus: 'normal',
    email: 'robert.c@example.com',
    phone: '(555) 987-6543',
    diagnosis: 'Type 2 Diabetes',
    medication: ['Insulin Glargine', 'Metformin 1000mg'],
    glucoseReadings: generateGlucoseReadings(90, 140, 25, 'improving'),
    a1c: 6.8,
    lastCheckup: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(), // 15 days ago
    nextCheckup: new Date(Date.now() + 75 * 24 * 60 * 60 * 1000).toISOString(), // 75 days from now
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    age: 28,
    gender: 'Female',
    lastGlucoseLevel: 65,
    lastGlucoseDate: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(), // 4 hours ago
    avatarColor: avatarColors[2],
    glucoseStatus: 'low',
    email: 'emily.r@example.com',
    phone: '(555) 345-6789',
    diagnosis: 'Type 1 Diabetes',
    medication: ['Insulin Lispro', 'Insulin Glargine'],
    glucoseReadings: generateGlucoseReadings(90, 110, 40, 'erratic'),
    a1c: 7.1,
    lastCheckup: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString(), // 45 days ago
    nextCheckup: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000).toISOString(), // 45 days from now
    emergencyContact: {
      name: 'Antonio Rodriguez',
      relation: 'Father',
      phone: '(555) 456-7890',
    },
  },
  {
    id: 4,
    name: 'David Thompson',
    age: 52,
    gender: 'Male',
    lastGlucoseLevel: 130,
    lastGlucoseDate: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(), // 12 hours ago
    avatarColor: avatarColors[3],
    glucoseStatus: 'normal',
    email: 'david.t@example.com',
    phone: '(555) 567-8901',
    diagnosis: 'Type 2 Diabetes',
    medication: ['Metformin 850mg'],
    glucoseReadings: generateGlucoseReadings(90, 125, 20, 'stable'),
    a1c: 6.3,
    lastCheckup: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString(), // 60 days ago
    nextCheckup: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
  },
  {
    id: 5,
    name: 'Jennifer Wu',
    age: 35,
    gender: 'Female',
    lastGlucoseLevel: 175,
    lastGlucoseDate: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(), // 8 hours ago
    avatarColor: avatarColors[4],
    glucoseStatus: 'high',
    email: 'jennifer.w@example.com',
    phone: '(555) 678-9012',
    diagnosis: 'Gestational Diabetes',
    medication: ['Insulin Glargine'],
    glucoseReadings: generateGlucoseReadings(90, 160, 30, 'declining'),
    a1c: 7.4,
    lastCheckup: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(), // 10 days ago
    nextCheckup: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000).toISOString(), // 20 days from now
  },
  {
    id: 6,
    name: 'Michael Brown',
    age: 71,
    gender: 'Male',
    lastGlucoseLevel: 155,
    lastGlucoseDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
    avatarColor: avatarColors[5],
    glucoseStatus: 'normal',
    email: 'michael.b@example.com',
    phone: '(555) 789-0123',
    diagnosis: 'Type 2 Diabetes',
    medication: ['Metformin 1000mg', 'Glimepiride 2mg'],
    glucoseReadings: generateGlucoseReadings(90, 150, 25, 'stable'),
    a1c: 7.1,
    lastCheckup: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(), // 20 days ago
    nextCheckup: new Date(Date.now() + 100 * 24 * 60 * 60 * 1000).toISOString(), // 100 days from now
    insuranceProvider: 'Medicare',
    insuranceNumber: 'MC987654321',
  },
];

// Get a specific patient
export const getPatient = (id: number) => {
  return mockPatients.find(patient => patient.id === id);
};

// Generate statistics based on patient data
export const getStatistics = () => {
  // Calculate average glucose by time of day across all patients
  const allReadings = mockPatients.flatMap(p => p.glucoseReadings);
  
  // Calculate average glucose level
  const averageGlucose = Math.round(
    allReadings.reduce((sum, reading) => sum + reading.value, 0) / allReadings.length
  );
  
  // Count readings by category
  const highReadings = allReadings.filter(r => r.value > 180).length;
  const lowReadings = allReadings.filter(r => r.value < 70).length;
  const normalReadings = allReadings.filter(r => r.value >= 70 && r.value <= 180).length;
  
  // Calculate percentages
  const totalReadings = allReadings.length;
  const highPercentage = Math.round((highReadings / totalReadings) * 100);
  const lowPercentage = Math.round((lowReadings / totalReadings) * 100);
  const normalPercentage = Math.round((normalReadings / totalReadings) * 100);
  
  // Generate trends (mock data, would be calculated in a real app)
  return {
    averageGlucose,
    readingDistribution: [
      { name: 'High', value: highPercentage },
      { name: 'Normal', value: normalPercentage },
      { name: 'Low', value: lowPercentage },
    ],
    patientCount: mockPatients.length,
    criticalAlerts: 2,
    improvingPatients: 3,
    checkupsDue: 1,
  };
};

// Health insights for dashboard
export const healthInsights = [
  {
    title: "Maintain Consistent Monitoring",
    description: "Regular glucose monitoring helps identify patterns and make informed treatment decisions. Aim for at least 3-4 checks daily.",
    category: "general",
  },
  {
    title: "Consider Post-Meal Exercise",
    description: "Light activity for 10-15 minutes after meals can significantly reduce post-meal glucose spikes.",
    category: "lifestyle",
  },
  {
    title: "Stay Hydrated",
    description: "Proper hydration helps your kidneys flush out excess glucose through urine. Aim for 8 glasses of water daily.",
    category: "lifestyle",
  },
  {
    title: "Watch for Dawn Phenomenon",
    description: "Morning glucose spikes may indicate the dawn phenomenon. Consider adjusting medication timing or evening snacks.",
    category: "clinical",
  },
  {
    title: "Be Mindful of Carbohydrates",
    description: "Distribute carbohydrate intake evenly throughout the day rather than consuming large amounts in a single meal.",
    category: "nutrition",
  },
  {
    title: "Regular A1C Testing",
    description: "A1C tests provide insight into your average glucose levels over the past 3 months. Schedule testing every 3-6 months.",
    category: "clinical",
  },
];

// Resources for patients
export const resources = [
  {
    title: "Understanding Diabetes Medications",
    description: "Learn about different medication options and how they work.",
    url: "#",
    type: "article",
  },
  {
    title: "Diabetes and Exercise",
    description: "Find exercise routines specifically designed for people with diabetes.",
    url: "#",
    type: "video",
  },
  {
    title: "Healthy Eating Guide",
    description: "Meal planning, recipes, and nutrition information for diabetes management.",
    url: "#",
    type: "guide",
  },
  {
    title: "Diabetes Support Groups",
    description: "Connect with others managing diabetes in your community.",
    url: "#",
    type: "community",
  },
];
