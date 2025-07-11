import { Icons } from "@/components/icons";
import {
  Briefcase,
  CircuitBoard,
  Cpu,
  HomeIcon,
  Mail,
  Package,
  User,
  Wrench,
} from "lucide-react";

export const SITE = {
  brand: "Byte and Bolt",
  name: "Anand Mohan Pandey",
  initials: "AMP",
  url: "https://anand2532.github.io",
  location: "India",
  locationLink: "https://www.google.com/maps/place/India",
  title: "Embedded Systems | Firmware",
  headline: "Firmware & edge systems that survive the field",
  description:
    "Byte and Bolt — embedded software studio building LoRa mesh, edge vision, and UAV companion firmware from prototype to field deployment.",
  summary:
    "Byte and Bolt is the studio of **Anand Mohan Pandey**. I design and ship embedded firmware for surveillance, aerospace, and industrial telemetry. Recent work includes productizing **Netrajaal** (LoRa mesh + edge camera for network-prone areas) at VyomOS, MicroPython drivers for **SX1262**, and companion-computer stacks for drones (MAVLink, ROS2, SATCOM).",
  avatarUrl: "/me.png",
  phone: "+91-7463969003",
  email: "anandmohan.amp@gmail.com",

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/services", icon: Wrench, label: "Services" },
    { href: "/products", icon: Package, label: "Products" },
    { href: "/work", icon: Briefcase, label: "Work" },
    { href: "/about", icon: User, label: "About" },
    { href: "/contact", icon: Mail, label: "Contact" },
  ],

  contact: {
    email: "anandmohan.amp@gmail.com",
    tel: "+91-7463969003",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/anand2532",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anand-amp/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:anandmohan.amp@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  terminalLines: [
    "$ whoami",
    "byteandbolt — embedded systems & firmware",
    "$ cat skills.txt",
    "C/C++ · MicroPython · FreeRTOS · Linux",
    "LoRa/SX1262 · ROS2 · STM32 · MAVLink",
    "$ ./deploy --target field",
    "ok — mesh up, camera armed, link encrypted",
  ],

  skills: [
    { name: "C/C++", category: "lang" },
    { name: "MicroPython", category: "lang" },
    { name: "FreeRTOS", category: "os" },
    { name: "Linux", category: "os" },
    { name: "Makefiles / cross-toolchains", category: "tool" },
    { name: "LoRa / SX1262", category: "radio" },
    { name: "SPI / I2C / UART", category: "bus" },
    { name: "CAN / J1939", category: "bus" },
    { name: "MAVLink / MAVSDK", category: "uav" },
    { name: "ROS2", category: "uav" },
    { name: "STM32 / CubeIDE", category: "mcu" },
    { name: "ESP32 / ESP-IDF", category: "mcu" },
    { name: "OpenMV / RT1062", category: "mcu" },
    { name: "SWD / JTAG / Logic Analyzer", category: "debug" },
    { name: "KiCad", category: "hw" },
    { name: "AWS IoT / MQTT", category: "cloud" },
  ],

  work: [
    {
      company: "VyomOS",
      href: "http://vyomos.org",
      badges: ["Full-time"],
      location: "India",
      title: "Embedded Software Engineer",
      logoUrl: "",
      start: "Jun 2025",
      end: "Present",
      description:
        "Joined full-time after delivering Netrajaal (LoRa mesh + edge cam for surveillance in network-prone areas). Productizing the prototype for field scale. Delivered MicroPython SX1262 driver; contributed robotics-layer mesh routing and short-path data transfer. Stack: MicroPython, asyncio, C/C++, makefiles, cross-toolchains.",
    },
    {
      company: "Freelance",
      href: "#",
      badges: ["Consulting"],
      location: "Remote",
      title: "Embedded Systems Developer",
      logoUrl: "",
      start: "Jan 2025",
      end: "May 2025",
      description:
        "Cognecto: GPS tracker firmware (OTA, geofencing, MQTT), CAN J1939 stack for heavy machinery. Aura Aerospace: MAVLink C++ library for Raspberry Pi Pico + companion computer prototype. VyomOS: Netrajaal PoC — SX1262 LoRa, OpenMV, mesh connectivity, image transfer, RSA-based security.",
    },
    {
      company: "Okulo Aerospace",
      href: "#",
      badges: ["Full-time"],
      location: "India",
      title: "Embedded Software Engineer",
      logoUrl: "",
      start: "Jul 2024",
      end: "Jan 2025",
      description:
        "Built a data-gathering device to improve fixed-wing UAV aerodynamics. Stack: C/C++, ArduPilot, STM32CubeIDE, ROS2.",
    },
    {
      company: "UrbanMatrix Technologies",
      href: "#",
      badges: ["Full-time"],
      location: "India",
      title: "Embedded Software Engineer",
      logoUrl: "",
      start: "Aug 2023",
      end: "Jun 2024",
      description:
        "Companion computer with MAVSDK + WebSocket++ for low-latency telemetry and command. Integrated SATCOM over UART with AT command sequencing. Added hardware tamper detection to controller firmware. Stack: C, UART/I2C, Pixhawk, STM32, AWS IoT, ROS2.",
    },
    {
      company: "InstantPost",
      href: "#",
      badges: ["Internship"],
      location: "India",
      title: "Power Electronics Design Intern",
      logoUrl: "",
      start: "May 2022",
      end: "Feb 2023",
      description:
        "Firmware for power-conversion monitoring, board bring-up, and KiCad PCB layout for smart-home prototypes. Stack: C, ESP32, KiCad, oscilloscope.",
    },
  ],

  education: [
    {
      school: "Dayananda Sagar College of Engineering",
      href: "#",
      degree: "B.E. Electrical & Electronics Engineering — CGPA 7.6",
      logoUrl: "",
      start: "2019",
      end: "2023",
    },
  ],

  projects: [
    {
      title: "Netrajaal — Defence Surveillance Mesh",
      href: "http://vyomos.org",
      dates: "2025",
      active: true,
      featured: true,
      description:
        "LoRa mesh + edge camera for surveillance in network-prone areas. Image transfer over long-range radio with RSA-based security; productized for field deployment.",
      technologies: [
        "SX1262",
        "OpenMV",
        "MicroPython",
        "LoRa Mesh",
        "RSA",
      ],
      links: [
        {
          type: "Org",
          href: "http://vyomos.org",
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "SX1262 LoRa MicroPython Driver",
      href: "https://github.com/anand2532/sx1262",
      dates: "2025",
      active: true,
      featured: true,
      description:
        "MicroPython driver for Semtech SX1262 — SPI init, send/receive, LoRa & FSK config for reliable sub-GHz packet links on embedded Python devices.",
      technologies: ["MicroPython", "SX1262", "SPI", "LoRa", "FSK"],
      links: [
        {
          type: "Source",
          href: "https://github.com/anand2532/sx1262",
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "UAV Companion & Telemetry Stack",
      href: "#",
      dates: "2023 — 2025",
      active: true,
      featured: true,
      description:
        "MAVLink/MAVSDK companion computers, SATCOM UART integration, and aerodynamics data-gathering for fixed-wing UAVs across UrbanMatrix and Okulo.",
      technologies: ["MAVLink", "ROS2", "STM32", "SATCOM", "C/C++"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Adaptive RTOS Task Scheduler",
      href: "#",
      dates: "Self-directed",
      active: false,
      featured: false,
      description:
        "FreeRTOS adaptive scheduler with dynamic priority for multi-sensor data fusion — efficient CPU use under real-time constraints.",
      technologies: ["C", "FreeRTOS", "CMake"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "PID Temperature Controller",
      href: "#",
      dates: "Self-directed",
      active: false,
      featured: false,
      description:
        "Discrete-time PID in C with Makefile build — foundational process-control simulation.",
      technologies: ["C", "PID", "Makefile"],
      links: [],
      image: "",
      video: "",
    },
  ],

  services: [
    {
      id: "firmware",
      icon: Cpu,
      title: "Custom Firmware Development",
      outcome: "Production-ready C/C++ or MicroPython firmware for your MCU.",
      includes: [
        "Bring-up & board support",
        "Drivers (SPI/I2C/UART/CAN)",
        "RTOS task design",
        "OTA & diagnostics hooks",
      ],
      timeline: "2–6 weeks",
      startingAt: "Custom quote",
    },
    {
      id: "lora",
      icon: CircuitBoard,
      title: "LoRa / Radio Integration",
      outcome: "Reliable SX126x links, mesh routing, and field-hardened RF stacks.",
      includes: [
        "RadioLib / MicroPython drivers",
        "Link budget & duty-cycle planning",
        "Mesh / short-path routing",
        "Encryption & packet framing",
      ],
      timeline: "1–4 weeks",
      startingAt: "Custom quote",
    },
    // {
    //   id: "vision-nodes",
    //   icon: Briefcase,
    //   title: "Edge Vision & Mesh Nodes",
    //   outcome: "Camera + MCU + radio nodes for surveillance and remote sensing.",
    //   includes: [
    //     "OpenMV / MIPI camera pipelines",
    //     "Sleep / wake power budgets",
    //     "Image transfer over LoRa",
    //     "Field deployment hardening",
    //   ],
    //   timeline: "4–10 weeks",
    //   startingAt: "Custom quote",
    // },
    {
      id: "uav",
      icon: Package,
      title: "UAV Companion Computers",
      outcome: "MAVLink/ROS2 companion stacks, SATCOM, and telemetry bridges.",
      includes: [
        "MAVSDK / MAVLink C++",
        "Low-latency command channels",
        "SATCOM AT sequencing",
        "Tamper & safety features",
      ],
      timeline: "2–8 weeks",
      startingAt: "Custom quote",
    },
    {
      id: "consulting",
      icon: Wrench,
      title: "Architecture & MCU Selection",
      outcome: "Clear silicon choices and bring-up plans for battery IoT / vision.",
      includes: [
        "MCU comparison & BOM guidance",
        "Power & interface review",
        "Prototype roadmap",
        "Code / design review",
      ],
      timeline: "3–10 days",
      startingAt: "Custom quote",
    },
  ],

  products: [
    {
      id: "sx1262-driver",
      name: "SX1262 MicroPython Driver",
      tagline: "SPI LoRa/FSK for embedded Python boards",
      description:
        "Init, TX/RX, and config helpers for Semtech SX1262 — used in field mesh and surveillance nodes.",
      status: "Available",
      price: "Open source + commercial support",
      href: "https://github.com/anand2532/sx1262",
      specs: ["LoRa + FSK", "SPI", "MicroPython", "OpenMV-ready"],
    },
    {
      id: "mesh-node",
      name: "LoRa Edge Vision Node",
      tagline: "Camera + LoRa mesh for network-denied areas",
      description:
        "Consulting and firmware package based on Netrajaal architecture — capture, encrypt, mesh-forward.",
      status: "Inquire",
      price: "Project-based",
      href: "/contact",
      specs: ["OpenMV / RT1062", "SX1262", "Mesh routing", "RSA options"],
    },
    {
      id: "logger",
      name: "USB Host Serial Logger",
      tagline: "Capture device UART streams to SD",
      description:
        "Firmware patterns for Teensy/ESP USB-host logging — field diagnostics and black-box capture.",
      status: "Inquire",
      price: "Project-based",
      href: "/contact",
      specs: ["USB Host", "SD logging", "115200 default", "PlatformIO"],
    },
  ],

  achievements: [
    "People 10 Code Combat — 3rd: indoor navigation electronic subsystem",
    "PRODUCT-A-THON Winner — DSCE hackathon 2022",
    "Seminar Competition DSCE — Winner 2020, Runner-up 2019 (memristors & nanotech)",
  ],

  publication: {
    title:
      "Hexapod Robot Platforms: Applications in Real-world Environment",
    authors:
      "Suganthi Neelagiri, Ritesh Kumar, Rishabh Dadhich, Yaman Singh, Anand Mohan Pandey",
    href: "#",
  },

  /** Kept empty so legacy Magic UI hackathon section type-checks if imported */
  hackathons: [],
} as const;

/** @deprecated Use SITE — kept for gradual migration */
export const DATA = SITE;
