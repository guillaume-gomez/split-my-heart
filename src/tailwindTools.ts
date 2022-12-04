interface colorToHexInterface {
    [key: string]: string;
}

export function fromTailwindColorClassesToHex(colorName: string, variant: number) : string {
    const colorToHex : colorToHexInterface =  {
      "gray-100": "#f3f4f6",
      "gray-200": "#e5e7eb",
      "gray-300": "#d1d5db",
      "gray-400": "#9ca3af",
      "gray-500": "#6b7280",
      "gray-600": "#4b5563",
      "gray-700": "#374151",
      "gray-800": "#1f2937",
      "gray-900": "#111827",

      "red-100": "#fee2e2",
      "red-200": "#fecaca",
      "red-300": "#fca5a5",
      "red-400": "#f87171",
      "red-500": "#ef4444",
      "red-600": "#dc2626",
      "red-700": "#b91c1c",
      "red-800": "#991b1b",
      "red-900": "#7f1d1d",

      "yellow-100": "#fef9c3",
      "yellow-200": "#fef08a",
      "yellow-300": "#fde047",
      "yellow-400": "#facc15",
      "yellow-500": "#eab308",
      "yellow-600": "#ca8a04",
      "yellow-700": "#a16207",
      "yellow-800": "#854d0e",
      "yellow-900": "#713f12",

      "green-100": "#dcfce7",
      "green-200": "#bbf7d0",
      "green-300": "#86efac",
      "green-400": "#4ade80",
      "green-500": "#22c55e",
      "green-600": "#16a34a",
      "green-700": "#15803d",
      "green-800": "#166534",
      "green-900": "#14532d",

      "blue-100": "#dbeafe",
      "blue-200": "#bfdbfe",
      "blue-300": "#93c5fd",
      "blue-400": "#60a5fa",
      "blue-500": "#3b82f6",
      "blue-600": "#2563eb",
      "blue-700": "#1d4ed8",
      "blue-800": "#1e40af",
      "blue-900": "#1e3a8a",

      "indigo-100": "#e0e7ff",
      "indigo-200": "#c7d2fe",
      "indigo-300": "#a5b4fc",
      "indigo-400": "#818cf8",
      "indigo-500": "#6366f1",
      "indigo-600": "#4f46e5",
      "indigo-700": "#4338ca",
      "indigo-800": "#3730a3",
      "indigo-900": "#312e81",

      "purple-100": "#f3e8ff",
      "purple-200": "#e9d5ff",
      "purple-300": "#d8b4fe",
      "purple-400": "#c084fc",
      "purple-500": "#a855f7",
      "purple-600": "#9333ea",
      "purple-700": "#7e22ce",
      "purple-800": "#6b21a8",
      "purple-900": "#581c87",

      "pink-100": "#fce7f3",
      "pink-200": "#fbcfe8",
      "pink-300": "#f9a8d4",
      "pink-400": "#f472b6",
      "pink-500": "#ec4899",
      "pink-600": "#db2777",
      "pink-700": "#be185d",
      "pink-800": "#9d174d",
      "pink-900": "#831843", 
    };

    const colorClass : any  = `${colorName}-${variant}`;

    return colorToHex[colorClass];

}