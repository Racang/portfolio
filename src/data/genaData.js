// ─── Gena project asset paths ────────────────────────────────────────────────
// Temporary localhost MCP server paths used during development layout.
// Once assets are fully exported to public/images/, these strings can be aligned 
// to use `${base}images/...` matching homeData.js style.
const base = import.meta.env.BASE_URL;

export const genaImages = {
  // ─── Hero & Project Intro ──────────────────────────────────────────────────
  imgBackground: `${base}gena/f0ebbc3e26197ee5157a6876fd8c5ee3bdea95a1.svg`, // SVG splash mask
  imgComputer21: `${base}gena/db2f04457f0b478674721c461038ac1b4e33e4a9.png`, // Intro card logo
  
  // What I Did section icons
  imgSearch1:    `${base}gena/578db9a410287f0dc20645d073d93b4b07f5e00e.png`, // UX Research icon
  imgContract1:  `${base}gena/f28831618009db6336d4f87317db6728a53d9542.png`, // Info Architecture icon
  imgPaint1:     `${base}gena/cda573fc5c1c6dd0de3b0b8319b26ea93e31c982.png`, // Visual Design icon
  imgComputer11: `${base}gena/4a05846c8768f24fb61a4e875c2db3fa18f65558.png`, // Interaction icon

  // Main visual assets
  imgImage:      `${base}gena/86066520aadbfe8c77dcc2a3285d5d5892de2b11.png`, // Main hero visual block
  imgImage1899:  `${base}gena/836ee22e7302d13e324a18b589d39d7b97988ed6.png`, // Context visual graphic

  // ─── Work Process Flowchart Block ────────────────────────────────────────────────
  imgWorkProcess: `${base}gena/Work_Process02.png`, // Work process flowchart

  // ─── Challenge & Background ────────────────────────────────────────────────
  imgAi1:        `${base}gena/ddd4472ccf634957679528d765008d5a7c6765b2.png`, // AI complexity icon
  imgElearning1: `${base}gena/0996cbd8888d40dbdaabc8f612cae3a08cdc72f5.png`, // Steep learning curve icon
  imgShape1:     `${base}gena/d85b09b61f4aece5a8df6fdfcd16aff09267a9dd.png`, // Interface usability icon
  imgArt1:       `${base}gena/246e003e4325e14a364d28ee624705517c51ee75.png`, // Visual inconsistency icon
  
  // ─── Brand Design System ───────────────────────────────────────────────────
  imgRectangle82741: `${base}gena/8b0152e12fc1a86edf1a8c48c09f767f794a6950.png`,
  imgRectangle82742: `${base}gena/63df833ee3a88350bbcef17e594e17a59041b496.png`,
  imgRectangle82743: `${base}gena/d4fc113f524a80f48caaed157675c78281990f4c.png`,
  imgImage1:         `${base}gena/070f19353038a343ee2460c110687867ecc22003.png`,
  // TODO: download Figma asset (expires 7 days) and move to public/gena/
  imgCompetitorBg:   'https://www.figma.com/api/mcp/asset/60dea077-bdbe-4837-93da-3630ed45f351',

  // ─── Guardrail Features ────────────────────────────────────────────────────
  imgRectangle82744: `${base}gena/50f0506b133bf9b6c85af65f2cbae7ef15afbede.png`, // UI preview sample
  imgRectangle82745: `${base}gena/b6983327ecea7950ee5c140214eb9f73005d873b.png`, // UI preview sample
  imgRectangle82746: `${base}gena/7d53db5c52f64d6e091c91bd70646326bf471b95.png`, // UI preview sample
  imgRectangle82747: `${base}gena/4250e3765a3471a22edb621e983747325b66aba4.png`, // UI preview sample
  imgRectangle82748: `${base}gena/bd12a894503b5e6f43b92299ec0ca928cb0d9f82.png`, // UI preview sample
  imgRectangle82749: `${base}gena/723cfea29bd49884499b16b54328f83ec36aae6b.png`, // UI preview sample
  imgRectangle82750: `${base}gena/4c989b9ad8a6b60e9eea46bf80dbba08917eabb1.png`, // UI preview sample
  imgRectangle82751: `${base}gena/41a09a1d688bff41225c77a8ee3bba85a2911dfd.png`, // UI preview sample

  // ─── Apply to other brands ─────────────────────────────────────────────────
  imgRectangle82752: `${base}gena/Gena_Brand01.png`,
  imgRectangle82753: `${base}gena/Gena_Brand02.png`,

  // ─── Structural Vectors & Layout Elements ──────────────────────────────────
  imgBg:         `${base}gena/9fa9badac60eeadcfe3b07cf1a9b0d5dfc13892b.svg`, // Tall purple bottom background component
  imgUnion:      `${base}gena/daf8b5e5106bdbc89dbe1e2207bdca60a80ff3fd.svg`, // Abstract decoration graphic
  imgVector:     `${base}gena/dbc8d2c944802f5d842b86bc67e8ea6288d110c1.svg`, // Supplemental background geometry
  imgFrame:      `${base}gena/4f8d456d68f16c620f51974fd11cf83e6b2981bf.svg`, // Card bounding frame layout piece
  imgFoundationArrowLeft: `${base}gena/cc763c83d4c3b1b6db8060842f58fc7794bae8cd.svg`, // Navigational Arrow icon
};

// ─── Gena project text content ───────────────────────────────────────────────
export const genaContent = {
  role: {
    duration: "2025 - Present",
    project: "Web Application",
    role: "UX Research and Ui"
  },
  whatIDid: {
    title: "What I did",
    bullets: [
      "Gather business & user **requirements**",
      "Conduct user & **competitor** research",
      "Lead end-to-end **design process**",
      "Create **wireframes** & **UI design**",
      "Build and maintain** design system**",
      "Design reusable **UI components**",
      "**Handover UI** to developers",
      "**Review** implemented UI",
      "**Apply AI** in design workflow (Design-to-code)"
    ],
    process: ["Discover", "Define", "Design", "Test"]
  },
  challenge: {
    title: "Challenge",
    subtitle: "Designing GENA, an Enterprise AI platform, presented several unique challenges.",
    items: [
      "1. Continuously upskilling in AI technologies to design high-impact solutions.",
      "2. Supporting multi-brand B2B customization",
      "3. Implementing centralized UI systems for seamless, single-source theme updates.",
      "4. Maintaining design integrity across diverse brand-specific themes."
    ]
  },
  brandDesign: {
    title: "Brand & Design Foundation",
    boxes: [
      {
        title: "Brand Color Selection",
        desc: "Explored and selected the most suitable brand color, choosing purple to reflect creativity, innovation, and the complexity of AI."
      },
      {
        title: "Logo Direction Exploration",
        desc: "Explored multiple logo directions and shortlisted the most suitable concept for stakeholder validation."
      },
      {
        title: "Final Logo Refinement",
        desc: "Refined logo directions 1 and 3 from the first draft for stakeholder selection, then developed the chosen concept into the final logo."
      }
    ]
  },
  guardrail: {
    title: "Design Guardrail Feature",
    desc: "The design process starts with a feature request from the BU team, using the Guardrail feature as a case example.",
    competitor: {
      title: "Competitor Analytic",
      desc: "From the requirement for an easy way to protect sensitive data without complex configuration or excessive false positives, the Guardrail feature was introduced as the solution, beginning with competitor research and analysis."
    },
    uiDesign: {
      title: "User Interface Design",
      items: [
        "1. Created low-fidelity wireframes with AI assistance to quickly communicate initial ideas to the Business team.",
        "2. Refined Business feedback into high-fidelity wireframes for validation before final UI design.",
        "3. Designed the final UI by applying the CI design system, ensuring pixel-perfect execution and responsiveness."
      ]
    },
    handover: {
      title: "Handover to developer",
      items: [
        "1. Updated the user story with UI design details and defined acceptance criteria to ensure developers can implement the feature accurately.",
        "2. Conducted a feature walkthrough session for Guardrail to hand off the design to developers.",
        "3. Prepared the Figma files and converted the design into code to reduce development time."
      ]
    },
    feedback: {
      title: "Get feedback from user and revamp",
      desc: "Based on user feedback, the keyword setup for AI detection was too complex. Previously, users had to define keywords and choose whether to mask or block them for both input and output. To address this, the flow was simplified by reducing the actions to a single choice—users now select only one action for each keyword: either mask or block."
    }
  },
  applyBrand: {
    title: "Apply GENA to other brand",
    subtitle: "Maintaining design integrity across diverse brand-specific themes.",
    desc: "Designed a multi-brand UI system that allows GENA to be easily customized for different brand identities. This included defining color foundations, building palettes for both light and dark themes, and setting up the Figma source file for easy color updates across the entire system. The process was also documented for future use."
  }
};
