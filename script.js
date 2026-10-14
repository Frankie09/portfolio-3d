import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js';

// Customize these details for your own portfolio.
const PROFILE = {
  name: 'Frankie',
  role: 'Backend & Fullstack Developer',
  introduction: 'I build backend services, APIs, and full-stack applications with a focus on reliable systems.',
  about: [
    'I am a Backend & Fullstack Developer with experience in building scalable systems and enterprise applications.',
    'I have hands-on experience developing microservices and REST APIs using technologies such as Spring Boot and modern web frameworks. I am passionate about software engineering, system design, and building efficient, reliable, and scalable applications.'
  ],
  location: 'Surakarta, Central Java, Indonesia',
  github: 'https://github.com/frankie09',
  linkedin: 'https://www.linkedin.com/in/frankie-204361250/',
  instagram: 'https://instagram.com/frank_iie'
};

const PROJECTS = [
  {
    title: 'SalesTrack', year: '2026', category: 'Web',
    description: 'Daily sales recording system for retail businesses.',
    tags: ['React', 'Node.js'], image: './assets/img/salestrack.png', link: null,
    position: [-9.6, 2.0, -12.68]
  },
  {
    title: 'Sukhafa App', year: '2025', category: 'Web',
    description: 'Integrated distributor operations platform for multi-retail stock, sales, and waybill monitoring.',
    tags: ['React', 'Node.js'], image: './assets/img/sukhafa.png', link: null,
    position: [-6.4, 2.0, -12.68]
  },
  {
    title: 'HaloBCA Biometric Login', year: '2023', category: 'Mobile',
    description: 'Developed biometric authentication system for public mobile users.',
    tags: ['Java', 'Spring Boot', 'Mobile API'], image: './assets/img/haloapps.png', link: null,
    position: [-3.2, 2.0, -12.68]
  },
  {
    title: 'Mobile NFT App', year: '2021', category: 'Mobile',
    description: 'Native Android NFT marketplace application.',
    tags: ['Java', 'Android'], image: './assets/img/nft.png', link: null, academic: true,
    position: [0, 2.0, -12.68]
  },
  {
    title: 'BookStore Web', year: '2021', category: 'Academic Projects',
    description: 'Bookstore site with PHP, HTML, CSS, Bootstrap.',
    tags: ['PHP', 'Web'], image: './assets/img/rediframedia.png', link: null, academic: true,
    position: [3.2, 2.0, -12.68]
  },
  {
    title: 'Tourism Web', year: '2020', category: 'Academic Projects',
    description: 'Tourism Website.',
    tags: ['Bootstrap', 'Web'], image: './assets/img/wisata.png', link: null, academic: true,
    position: [6.4, 2.0, -12.68]
  },
  {
    title: 'MongoDB Research', year: '2022', category: 'Academic Projects',
    description: 'Database research & implementation with Flask.',
    tags: ['Flask', 'DB'], image: './assets/img/mongodb.png', link: null, academic: true,
    position: [9.6, 2.0, -12.68]
  }
];

const INTERNAL_PROJECTS = [
  { title: 'Deposit Management System', category: 'Banking · System', description: 'Developed system to manage customer deposit products, including tracking, validation, and lifecycle handling.' },
  { title: 'Credit Card Approval System', category: 'Workflow · Approval', description: 'Built approval workflow system to process and validate credit card applications across multiple stages.' },
  { title: 'Credit Card Application System', category: 'Application · System', description: 'Designed system for submitting and managing credit card requests, including validation and data processing.' },
  { title: 'Employee Canteen System', category: 'Internal · POS', description: 'Developed internal system used by employees for canteen transactions and daily operational management.' },
  { title: 'Customer Information System', category: 'Data · CRM', description: 'Built centralized system for managing and accessing structured customer data across services.' }
];

const SKILLS = [
  { group: 'Languages', items: ['Java', 'JavaScript', 'PHP', 'Python'] },
  { group: 'Frontend', items: ['React', 'Angular', 'Tailwind CSS', 'Bootstrap'] },
  { group: 'Backend', items: ['Spring Boot', 'Spring Batch', 'Laravel', 'Flask', 'GraphQL'] },
  { group: 'Architecture', items: ['Microservices', 'REST API'] },
  { group: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
  { group: 'DevOps & Platforms', items: ['Jenkins', 'Git', 'Linux', 'Firebase', 'Google Cloud Platform', 'OpenShift Container Platform'] }
];

const EXPERIENCE = [
  { role: 'Farmer', organization: 'Switzerland', period: '2025 – Present', details: [] },
  { role: 'IT Specialist – Microservices / Backend Engineer', organization: 'PT Bank Central Asia Tbk.', period: 'Sep 2023 – Feb 2025', details: ['Developed REST APIs using Spring Boot & Spring Batch', 'Built scalable microservices for internal and public systems', 'Contributed to frontend development using Angular', 'Handled batch processing and data integration workflows', 'Worked with CI/CD pipelines using Jenkins'] },
  { role: 'Intern – IT Business Integration Programmer', organization: 'PT Sumber Alfaria Trijaya Tbk (Alfamart)', period: 'Sep 2022 – Aug 2023', details: ["Developed internal applications using company's proprietary compiler", 'Built and optimized data input workflows for internal business processes', 'Conducted research on MongoDB text indexing for thesis implementation'] }
];

const EDUCATION = [
  { program: 'Informatics Engineering', institution: 'Satya Wacana Christian University', period: '2019 – 2023', detail: 'Software Engineering · GPA 3.94' },
  { program: 'Natural Science', institution: 'Widya Wacana Senior Highschool', period: '2016', detail: '' }
];

document.querySelector('#intro h1 span').textContent = PROFILE.name;
document.querySelector('.holo-frame > h2').textContent = PROFILE.role;
document.querySelector('.intro-copy').textContent = PROFILE.introduction;
document.title = `${PROFILE.name} — Interactive 3D Portfolio`;

const canvas = document.querySelector('#world');
const isMobileDevice = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 700;
let renderer = null;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: window.innerWidth > 700, alpha: false, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, window.innerWidth < 700 ? 1.15 : 1.5));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = false;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.25;
} catch (error) {
  renderer = null;
  console.warn('WebGL initialization failed; showing the accessible portfolio view.', error);
}

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x030814);
scene.fog = new THREE.FogExp2(0x030814, 0.023);

const camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.1, 180);
camera.position.set(0, 4, 9);
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

const clock = new THREE.Clock();
const world = new THREE.Group();
scene.add(world);

const hemisphereLight = new THREE.HemisphereLight(0x8bcfff, 0x071020, 1.3);
scene.add(hemisphereLight);
const keyLight = new THREE.DirectionalLight(0x82dfff, 2.5);
keyLight.position.set(4, 10, 5);
keyLight.castShadow = false;
scene.add(keyLight);
const blueLight = new THREE.PointLight(0x087dff, 28, 32);
blueLight.position.set(0, 4, -3);
scene.add(blueLight);
const cyanLight = new THREE.PointLight(0x00dfff, 12, 18);
cyanLight.position.set(-7, 3, -4);
scene.add(cyanLight);

function standard(color, metalness = 0.25, roughness = 0.38, emissive = 0x000000, intensity = 0) {
  return new THREE.MeshStandardMaterial({ color, metalness, roughness, emissive, emissiveIntensity: intensity });
}
const mats = {
  floor: standard(0x081426, 0.65, 0.42),
  wall: standard(0x0b1a30, 0.45, 0.5),
  ceiling: standard(0x07101f, 0.55, 0.3),
  dark: standard(0x07101f, 0.55, 0.3),
  white: standard(0xe5f5ff, 0.45, 0.25),
  blue: standard(0x197bcb, 0.5, 0.24, 0x062d80, 0.5),
  cyan: new THREE.MeshStandardMaterial({ color: 0x6df5ff, emissive: 0x23dfff, emissiveIntensity: 3.5, metalness: 0.2, roughness: 0.2 }),
  glass: new THREE.MeshBasicMaterial({ color: 0x159bff, transparent: true, opacity: 0.17, side: THREE.DoubleSide }),
  holo: new THREE.MeshBasicMaterial({ color: 0x58ddff, transparent: true, opacity: 0.85 })
};

function addBox(parent, size, position, material, options = {}) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), material);
  mesh.position.set(...position);
  mesh.castShadow = options.castShadow ?? true;
  mesh.receiveShadow = options.receiveShadow ?? true;
  parent.add(mesh);
  return mesh;
}
function addLine(parent, points, color = 0x147fc7, opacity = 0.55) {
  const geo = new THREE.BufferGeometry().setFromPoints(points.map(p => new THREE.Vector3(...p)));
  const line = new THREE.Line(geo, new THREE.LineBasicMaterial({ color, transparent: true, opacity }));
  parent.add(line);
  return line;
}
function makeTextSprite(text, opts = {}) {
  const canvas = document.createElement('canvas');
  canvas.width = 1024; canvas.height = 256;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = opts.background || 'rgba(4,18,39,0.88)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = opts.border || '#39cfff';
  ctx.lineWidth = 4; ctx.strokeRect(3, 3, canvas.width - 6, canvas.height - 6);
  ctx.font = 'bold 43px Arial';
  ctx.fillStyle = '#e8f8ff';
  ctx.fillText(text, 35, 83);
  ctx.font = '26px Arial';
  ctx.fillStyle = '#80c9ed';
  ctx.fillText(opts.subtitle || 'INTERACTIVE PORTFOLIO ARCHIVE', 35, 135);
  ctx.fillStyle = '#4ce5ff';
  ctx.fillRect(35, 173, 120, 4);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const panel = new THREE.Mesh(
    new THREE.PlaneGeometry(opts.width || 3.4, opts.height || 0.85),
    new THREE.MeshBasicMaterial({ map: texture, transparent: true, side: THREE.DoubleSide, depthWrite: false })
  );
  return panel;
}

// Room architecture
addBox(world, [25, 0.35, 24], [0, -0.25, -1], mats.floor);
addBox(world, [25, 8, 0.35], [0, 3.7, -13], mats.wall);
addBox(world, [0.35, 8, 24], [-12.5, 3.7, -1], mats.wall);
addBox(world, [0.35, 8, 24], [12.5, 3.7, -1], mats.wall);
addBox(world, [25, 0.35, 24], [0, 7.7, -1], mats.ceiling);

// Wall panel seams and luminous trim
const rearWallSeams = [];
for (let x = -11; x <= 11; x += 2) {
  rearWallSeams.push(addLine(world, [[x, 0, -12.78], [x, 7.3, -12.78]], 0x1c4168, 0.35));
}
// Matching inset architecture on both side walls makes their mounted displays read as part of the room.
const sideWallPanel = standard(0x10213a, 0.48, 0.46, 0x06152b, 0.45);
const sideWallSeam = new THREE.MeshBasicMaterial({ color: 0x173e62 });
for (const side of [-1, 1]) {
  const wallX = side * 12.34; // inner wall surface is +/-12.325
  for (let z = -11; z <= 9; z += 4) {
    addBox(world, [0.03, 7.25, 3.68], [wallX, 3.65, z], sideWallPanel, { castShadow: false });
  }
  for (let z = -13; z <= 11; z += 4) {
    addBox(world, [0.018, 7.3, 0.026], [side * 12.31, 3.65, z], sideWallSeam, { castShadow: false });
  }
  for (const y of [0.35, 7.05]) {
    addBox(world, [0.035, 0.045, 23.5], [side * 12.305, y, -1], standard(0x1479b3, 0.35, 0.3, 0x07578b, 0.55), { castShadow: false });
  }
}
addLine(world, [[-12, 0.02, -12], [12, 0.02, -12]], 0x12a9ff, 0.7);
addLine(world, [[-12, 0.02, 10], [12, 0.02, 10]], 0x12a9ff, 0.55);
addLine(world, [[-12.25, 0.02, -12], [-12.25, 0.02, 10]], 0x0a75b9, 0.5);
addLine(world, [[12.25, 0.02, -12], [12.25, 0.02, 10]], 0x0a75b9, 0.5);

// Floor grid
const floorGridLines = [];
for (let x = -12; x <= 12; x += 1) floorGridLines.push(addLine(world, [[x, -0.065, -12], [x, -0.065, 10]], 0x17466e, 0.27));
for (let z = -12; z <= 10; z += 1) floorGridLines.push(addLine(world, [[-12, -0.064, z], [12, -0.064, z]], 0x17466e, 0.27));

// Decorative light strips on ceiling
for (let x = -9; x <= 9; x += 6) {
  const strip = addBox(world, [2.5, 0.06, 0.22], [x, 7.47, -2], mats.cyan, { castShadow: false });
  strip.material = new THREE.MeshBasicMaterial({ color: 0x64dfff });
}

const themeToggle = document.querySelector('#theme-toggle');
let lightRoom = false;
function setRoomTheme(useLightRoom) {
  lightRoom = useLightRoom;
  scene.background.set(lightRoom ? 0xf7f9fb : 0x030814);
  scene.fog.color.set(lightRoom ? 0xf7f9fb : 0x030814);
  scene.fog.density = lightRoom ? 0.01 : 0.023;
  mats.floor.color.set(lightRoom ? 0xe8eef3 : 0x081426);
  mats.wall.color.set(lightRoom ? 0xf7f9fb : 0x0b1a30);
  mats.ceiling.color.set(lightRoom ? 0xf0f4f7 : 0x07101f);
  mats.white.color.set(lightRoom ? 0xcbd9e4 : 0xe5f5ff);
  sideWallPanel.color.set(lightRoom ? 0xe4ecf2 : 0x10213a);
  sideWallPanel.emissive.set(lightRoom ? 0x9eabb5 : 0x06152b);
  sideWallPanel.emissiveIntensity = lightRoom ? 0.08 : 0.45;
  sideWallSeam.color.set(lightRoom ? 0xb9c7d1 : 0x173e62);
  floorGridLines.forEach(line => {
    line.material.color.set(lightRoom ? 0x9fb3c1 : 0x17466e);
    line.material.opacity = lightRoom ? 0.34 : 0.27;
  });
  rearWallSeams.forEach(line => {
    line.material.color.set(lightRoom ? 0xc1ccd4 : 0x1c4168);
    line.material.opacity = lightRoom ? 0.48 : 0.35;
  });
  hemisphereLight.color.set(lightRoom ? 0xffffff : 0x8bcfff);
  hemisphereLight.groundColor.set(lightRoom ? 0x8495a4 : 0x071020);
  hemisphereLight.intensity = lightRoom ? 1.8 : 1.3;
  keyLight.color.set(lightRoom ? 0xfff8ee : 0x82dfff);
  keyLight.intensity = lightRoom ? 2.2 : 2.5;
  blueLight.intensity = lightRoom ? 15 : 28;
  cyanLight.intensity = lightRoom ? 7 : 12;
  themeToggle.setAttribute('aria-pressed', String(lightRoom));
  themeToggle.querySelector('.theme-icon').textContent = lightRoom ? '☾' : '☼';
  themeToggle.querySelector('.theme-label').textContent = lightRoom ? 'DARK MODE' : 'LIGHT MODE';
}
themeToggle.addEventListener('click', () => {
  setRoomTheme(!lightRoom);
});
setRoomTheme(false);

// Robot model built from simple meshes
const robot = new THREE.Group();
robot.position.set(0, 0, 4);
scene.add(robot);
const robotBody = new THREE.Group();
robot.add(robotBody);

const body = new THREE.Mesh(new THREE.SphereGeometry(0.52, 32, 24), mats.white);
body.scale.set(0.92, 1.05, 0.78);
body.position.y = 0.78;
body.castShadow = true;
robotBody.add(body);

const chest = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.19, 0.1, 40), mats.blue);
chest.rotation.x = Math.PI / 2;
chest.position.set(0, 0.79, 0.39);
robotBody.add(chest);
chest.material = new THREE.MeshStandardMaterial({ color: 0x0b3c70, metalness: 0.55, roughness: 0.2, emissive: 0x087eff, emissiveIntensity: 0.65 });
const chestCore = new THREE.Mesh(new THREE.TorusGeometry(0.105, 0.018, 8, 32), mats.cyan);
chestCore.position.set(0, 0.79, 0.445); robotBody.add(chestCore);
const backpack = new THREE.Mesh(new THREE.CylinderGeometry(0.23, 0.23, 0.1, 40), mats.dark);
backpack.rotation.x = Math.PI / 2;
backpack.position.set(0, 0.88, -0.39); robotBody.add(backpack);
const packCore = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 12), mats.cyan);
packCore.position.set(0, 0.9, -0.56); robotBody.add(packCore);
const head = new THREE.Mesh(new THREE.SphereGeometry(0.43, 32, 24), mats.white);
head.scale.set(1.12, 0.9, 0.94);
head.position.set(0, 1.53, 0.04);
head.castShadow = true;
robotBody.add(head);

const face = new THREE.Mesh(new THREE.BoxGeometry(0.57, 0.25, 0.07), standard(0x04152a, 0.35, 0.2));
face.position.set(0, 1.52, 0.42);
robotBody.add(face);
const robotEyes = [];
for (const x of [-0.15, 0.15]) {
  const eye = new THREE.Mesh(new THREE.SphereGeometry(0.055, 16, 12), mats.cyan);
  eye.position.set(x, 1.54, 0.47);
  robotBody.add(eye);
  robotEyes.push(eye);
}
const robotMouth = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.018, 0.018), mats.cyan);
robotMouth.position.set(0, 1.42, 0.47); robotBody.add(robotMouth);
for (const x of [-0.48, 0.48]) {
  const ear = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.12, 20), mats.blue);
  ear.rotation.z = Math.PI / 2; ear.position.set(x, 1.48, 0.02); robotBody.add(ear);
  const earGlow = new THREE.Mesh(new THREE.SphereGeometry(0.07, 16, 12), mats.cyan);
  earGlow.position.set(x * 1.12, 1.48, 0.02); robotBody.add(earGlow);
}
const antenna = new THREE.Group();
antenna.position.set(0.1, 1.91, 0);
robotBody.add(antenna);
const antennaStem = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.025, 0.2, 8), mats.blue);
antennaStem.position.y = 0.1; antenna.add(antennaStem);
const antennaOrb = new THREE.Mesh(new THREE.SphereGeometry(0.055, 16, 12), mats.cyan);
antennaOrb.position.y = 0.22; antenna.add(antennaOrb);

// Small arms
const arms = [];
for (const side of [-1, 1]) {
  const arm = new THREE.Group();
  arm.position.set(side * 0.48, 0.92, 0.02);
  robotBody.add(arm);
  const upper = new THREE.Mesh(new THREE.CapsuleGeometry(0.09, 0.25, 4, 8), mats.white);
  upper.rotation.z = side * -0.22; upper.position.y = -0.16; arm.add(upper);
  const elbow = new THREE.Mesh(new THREE.SphereGeometry(0.085, 14, 10), mats.blue);
  elbow.position.set(side * 0.025, -0.33, 0.015); arm.add(elbow);
  const forearmJoint = new THREE.Group();
  forearmJoint.position.set(side * 0.04, -0.33, 0.015);
  arm.add(forearmJoint);
  const forearm = new THREE.Mesh(new THREE.CapsuleGeometry(0.07, 0.2, 4, 8), mats.white);
  forearm.position.set(0, -0.13, 0.015); forearmJoint.add(forearm);
  const hand = new THREE.Mesh(new THREE.SphereGeometry(0.105, 16, 12), mats.blue);
  hand.position.set(side * 0.02, -0.31, 0.035); forearmJoint.add(hand);
  arm.userData.forearmJoint = forearmJoint;
  arm.userData.side = side;
  arms.push(arm);
}
const legs = [];
for (const side of [-1, 1]) {
  const hip = new THREE.Group();
  hip.position.set(side * 0.23, 0.43, 0);
  robotBody.add(hip);
  const thigh = new THREE.Mesh(new THREE.CapsuleGeometry(0.13, 0.22, 5, 12), mats.white);
  thigh.position.y = -0.16;
  hip.add(thigh);
  const knee = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 12), mats.blue);
  knee.position.y = -0.33;
  hip.add(knee);
  const lower = new THREE.Group();
  lower.position.y = -0.33;
  hip.add(lower);
  const shin = new THREE.Mesh(new THREE.CapsuleGeometry(0.105, 0.2, 5, 12), mats.white);
  shin.position.y = -0.14;
  lower.add(shin);
  const ankle = new THREE.Mesh(new THREE.SphereGeometry(0.09, 14, 10), mats.cyan);
  ankle.position.set(0, -0.26, 0.02);
  lower.add(ankle);
  const foot = new THREE.Mesh(new THREE.BoxGeometry(0.27, 0.13, 0.38), mats.blue);
  foot.position.set(0, -0.3, 0.09);
  lower.add(foot);
  legs.push({ hip, knee });
}
// Energy ring remains beneath the articulated feet as a soft floor accent.
const baseRing = new THREE.Mesh(new THREE.TorusGeometry(0.48, 0.035, 10, 64), mats.cyan);
baseRing.rotation.x = Math.PI / 2; baseRing.position.y = 0.16; robot.add(baseRing);
const underGlow = new THREE.PointLight(0x08baff, 2.4, 3);
underGlow.position.y = 0.35; robot.add(underGlow);
const footRing = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.018, 8, 64), new THREE.MeshBasicMaterial({ color: 0x168dff, transparent: true, opacity: 0.45 }));
footRing.rotation.x = Math.PI / 2; footRing.position.y = 0.03; robot.add(footRing);

// Spawn platform
const platform = new THREE.Group();
platform.position.set(0, 0, 4);
world.add(platform);
const plat = new THREE.Mesh(new THREE.CylinderGeometry(1.35, 1.55, 0.16, 64), standard(0x0a2744, 0.7, 0.24, 0x075baf, 0.5));
plat.position.y = -0.08; platform.add(plat);
for (const r of [1.1, 1.38, 1.62]) {
  const ring = new THREE.Mesh(new THREE.TorusGeometry(r, 0.018, 8, 80), mats.cyan);
  ring.rotation.x = Math.PI / 2; ring.position.y = 0.015; platform.add(ring);
}

// Project display kiosks. Each panel is a real 3D interaction target.
const interactables = [];
const academicTagCanvas = document.createElement('canvas');
academicTagCanvas.width = 512;
academicTagCanvas.height = 64;
const academicTagContext = academicTagCanvas.getContext('2d');
academicTagContext.clearRect(0, 0, academicTagCanvas.width, academicTagCanvas.height);
academicTagContext.font = 'bold 31px Arial';
academicTagContext.textAlign = 'center';
academicTagContext.textBaseline = 'middle';
academicTagContext.fillStyle = '#f4fbff';
academicTagContext.fillText('ACADEMIC PROJECT', academicTagCanvas.width / 2, academicTagCanvas.height / 2);
const academicTagTexture = new THREE.CanvasTexture(academicTagCanvas);
academicTagTexture.colorSpace = THREE.SRGBColorSpace;
function createKiosk(project, index) {
  const group = new THREE.Group();
  group.position.set(...project.position);
  world.add(group);

  addBox(group, [3.1, 1.9, 0.1], [0, 0, 0], standard(0x06152a, 0.5, 0.22, 0x031d45, 0.65));
  addBox(group, [2.86, 1.64, 0.025], [0, 0.02, 0.065], new THREE.MeshBasicMaterial({ color: 0x0b2a4a }));
  // Backplate reaches the inner face of the rear wall (z = -12.825).
  addBox(group, [3.18, 2.04, 0.08], [0, 0, -0.105], standard(0x09203a, 0.68, 0.24, 0x064a83, 0.65));
  const preview = new THREE.Mesh(new THREE.PlaneGeometry(2.72, 1.12), new THREE.MeshBasicMaterial({ color: 0x102b45 }));
  preview.position.set(0, -0.12, 0.081);
  group.add(preview);
  if (project.academic) {
    const tagBackground = new THREE.Mesh(
      new THREE.BoxGeometry(1.72, 0.18, 0.022),
      new THREE.MeshBasicMaterial({ color: 0x087fce })
    );
    tagBackground.position.set(0, -0.77, 0.095);
    group.add(tagBackground);
    const tagText = new THREE.Mesh(
      new THREE.PlaneGeometry(1.58, 0.145),
      new THREE.MeshBasicMaterial({ map: academicTagTexture, transparent: true, side: THREE.DoubleSide, depthWrite: false })
    );
    tagText.position.set(0, -0.77, 0.108);
    tagText.renderOrder = 2;
    group.add(tagText);
  }
  // Fine bezel rails and status lights give each screen a finished monitor frame.
  const bezel = standard(0x2c9ed3, 0.35, 0.28, 0x0874c4, 0.8);
  addBox(group, [2.92, 0.025, 0.035], [0, 0.91, 0.085], bezel, { castShadow: false });
  addBox(group, [2.92, 0.025, 0.035], [0, -0.88, 0.085], bezel, { castShadow: false });
  for (const x of [-1.46, 1.46]) addBox(group, [0.025, 1.78, 0.035], [x, 0.015, 0.085], bezel, { castShadow: false });
  const status = new THREE.Mesh(new THREE.SphereGeometry(0.035, 12, 10), mats.cyan);
  status.position.set(1.3, -0.79, 0.105); group.add(status);
  const title = makeTextSprite(project.title, { width: 2.6, height: 0.5, subtitle: `PROJECT / 0${index + 1}` });
  title.position.set(0, 0.7, 0.09);
  group.add(title);
  group.rotation.y = 0; // rear wall local +Z faces into the room
  group.userData.project = project;
  group.userData.index = index;
  group.userData.preview = preview;
  interactables.push(group);
}
PROJECTS.forEach(createKiosk);

// Load every project image while the intro is visible so the project wall is ready at spawn.
const previewLoadingStatus = document.querySelector('#preview-loading');
const previewStartButton = document.querySelector('#start-button');
const projectPreviewCount = interactables.filter(obj => obj.userData.project.image).length;
let projectPreviewsReady = 0;
const projectPreviewLoader = new THREE.TextureLoader();
const projectPreviewsPromise = Promise.all(interactables.map(obj => new Promise(resolve => {
  const project = obj.userData.project;
  if (!project.image || !obj.userData.preview) { resolve(true); return; }
  projectPreviewLoader.load(project.image, texture => {
    texture.colorSpace = THREE.SRGBColorSpace;
    const imageAspect = texture.image.width / texture.image.height;
    const screenAspect = 2.72 / 1.12;
    if (imageAspect > screenAspect) {
      texture.repeat.x = screenAspect / imageAspect;
      texture.offset.x = (1 - texture.repeat.x) / 2;
    } else {
      texture.repeat.y = imageAspect / screenAspect;
      texture.offset.y = (1 - texture.repeat.y) / 2;
    }
    obj.userData.preview.material.map = texture;
    obj.userData.preview.material.color.set(0xffffff);
    obj.userData.preview.material.needsUpdate = true;
    obj.userData.previewLoaded = true;
    projectPreviewsReady += 1;
    previewLoadingStatus.textContent = `LOADING PROJECT PREVIEWS · ${projectPreviewsReady}/${projectPreviewCount}`;
    resolve(true);
  }, undefined, () => {
    obj.userData.previewLoaded = true;
    projectPreviewsReady += 1;
    previewLoadingStatus.textContent = `LOADING PROJECT PREVIEWS · ${projectPreviewsReady}/${projectPreviewCount}`;
    resolve(false);
  });
}))).then(async results => {
  await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  const failed = results.filter(success => !success).length;
  previewStartButton.disabled = false;
  if (failed) previewLoadingStatus.textContent = `${failed} PROJECT PREVIEW${failed === 1 ? '' : 'S'} COULD NOT LOAD`;
  else previewLoadingStatus.classList.add('hidden');
  return { failed };
});

// Skills area and contact terminal
function createInfoTerminal(title, subtitle, position, tags, section) {
  const g = new THREE.Group(); g.position.set(...position); world.add(g);
  const wallMounted = ['about', 'experience', 'education', 'skills', 'contact', 'projects'].includes(section);
  addBox(g, [3.65, 1.95, 0.09], [0, 0, 0], standard(0x07172b, 0.62, 0.22, 0x052a54, 0.8));
  addBox(g, [3.42, 1.72, 0.02], [0, 0, 0.055], new THREE.MeshBasicMaterial({ color: 0x08223e }));
  const trim = standard(0x32baff, 0.42, 0.24, 0x087eff, 1.1);
  addBox(g, [3.48, 0.025, 0.03], [0, 0.9, 0.07], trim, { castShadow: false });
  addBox(g, [3.48, 0.025, 0.03], [0, -0.9, 0.07], trim, { castShadow: false });
  for (const x of [-1.73, 1.73]) addBox(g, [0.025, 1.8, 0.03], [x, 0, 0.07], trim, { castShadow: false });
  for (const x of [-1.56, 1.56]) {
    const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.045, 12, 10), mats.cyan);
    lamp.position.set(x, 0.72, 0.095); g.add(lamp);
  }
  const spr = makeTextSprite(title, { width: 3.1, height: 0.8, subtitle });
  spr.position.set(0, 0.03, 0.095); g.add(spr);
  if (!wallMounted) {
    addBox(g, [0.16, 0.72, 0.18], [0, -1.08, 0], mats.blue);
    addBox(g, [1.25, 0.14, 0.68], [0, -1.5, 0], mats.dark);
    const baseGlow = new THREE.Mesh(new THREE.TorusGeometry(0.73, 0.018, 8, 48), mats.cyan);
    baseGlow.rotation.x = Math.PI / 2; baseGlow.position.set(0, -1.56, 0); g.add(baseGlow);
  } else {
    // Flush rear housing: its back edge lands on each side wall's inner plane.
    addBox(g, [3.88, 2.18, 0.08], [0, 0, -0.105], standard(0x09203a, 0.68, 0.24, 0x064a83, 0.65));
  }
  g.userData.project = { title, description: subtitle, tags, link: null, section };
  g.userData.index = interactables.length;
  interactables.push(g);
  return g;
}
createInfoTerminal('ABOUT FRANKIE', 'Profile · Introduction · Capabilities', [-12.18, 2.7, 3.7], ['Backend', 'Fullstack', 'Surakarta'], 'about');
createInfoTerminal('SKILLS & TOOLKIT', 'Languages · Frameworks · Platforms', [12.18, 2.7, 3.7], ['Java', 'JavaScript', 'Spring Boot', 'React'], 'skills');
createInfoTerminal('EXPERIENCE', 'BCA · Alfamart · Professional history', [-12.18, 2.7, -1.2], ['BCA', 'Alfamart', 'Backend'], 'experience');
createInfoTerminal('EDUCATION', 'Satya Wacana · Informatics Engineering', [-12.18, 2.7, -5.8], ['Informatics', '2019–2023', 'GPA 3.94'], 'education');
createInfoTerminal('PROJECT ARCHIVE', 'Selected work · Internal projects', [12.18, 2.7, -5.8], ['Selected work', 'Internal systems'], 'projects');
createInfoTerminal('CONTACT', 'GitHub · LinkedIn · Instagram', [12.18, 2.7, -1.2], ['GitHub', 'LinkedIn', 'Instagram'], 'contact');

const projectWallSign = makeTextSprite('PROJECT WALL', { width: 5.4, height: 0.82, subtitle: 'SELECTED WORK / PORTFOLIO' });
addBox(world, [5.55, 0.94, 0.08], [0, 4.25, -12.77], standard(0x09203a, 0.68, 0.24, 0x064a83, 0.65));
projectWallSign.position.set(0, 4.25, -12.71);
world.add(projectWallSign);

// Floating dust particles
const particleCount = 180;
const particlePositions = new Float32Array(particleCount * 3);
for (let i = 0; i < particleCount; i++) {
  particlePositions[i * 3] = (Math.random() - 0.5) * 24;
  particlePositions[i * 3 + 1] = Math.random() * 7;
  particlePositions[i * 3 + 2] = -12 + Math.random() * 22;
}
const particleGeo = new THREE.BufferGeometry();
particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
const particles = new THREE.Points(particleGeo, new THREE.PointsMaterial({ color: 0x53cfff, size: 0.035, transparent: true, opacity: 0.7 }));
world.add(particles);
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Intro hologram beam in the 3D world
const beamMat = new THREE.MeshBasicMaterial({ color: 0x30baff, transparent: true, opacity: 0.17, side: THREE.DoubleSide, depthWrite: false });
const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 1.35, 4.5, 48, 1, true), beamMat);
beam.position.set(0, 2.3, 4);
world.add(beam);
const beamLight = new THREE.PointLight(0x14aaff, 5, 8);
beamLight.position.set(0, 2, 4); world.add(beamLight);

// Interaction and controls
const keys = new Set();
let started = false;
let detailOpen = false;
let nearby = null;
let cameraYaw = 0;
let cameraPitch = 0.18;
let cameraDistance = 5.5;
let dragging = false;
let cameraPointerId = null;
let lastPointer = { x: 0, y: 0 };
let pointerMoved = false;
let jumpVelocity = 0;
let grounded = true;
let jumpWasHeld = false;
let previouslyFocused = null;
const moveVelocity = new THREE.Vector2();
const touchInput = { forward: 0, strafe: 0, jump: false, sprint: false };
let waveStartedAt = -Infinity;
let lastActivityTime = 0;
let idleWavePlayed = false;
const waveDuration = 2.1;
const waveArmIndex = 1;
function startWave(time) {
  if (!reducedMotion) waveStartedAt = time;
}
const moveSpeed = 4.3;
const bounds = { minX: -10.5, maxX: 10.5, minZ: -10.5, maxZ: 8.5 };

const intro = document.querySelector('#intro');
const startButton = document.querySelector('#start-button');
const hud = document.querySelector('#hud');
const nearbyPrompt = document.querySelector('#nearby-prompt');
const detailPanel = document.querySelector('#detail-panel');
const toast = document.querySelector('#toast');
const navigationCard = document.querySelector('.controls-card');
const navigationToggle = document.querySelector('#toggle-navigation');
const mobileNavigation = window.matchMedia('(max-width: 620px)');
function syncNavigationForViewport() {
  navigationCard.classList.toggle('is-collapsed', mobileNavigation.matches);
  navigationToggle.setAttribute('aria-expanded', String(!mobileNavigation.matches));
  navigationToggle.querySelector('span').textContent = mobileNavigation.matches ? '+' : '−';
}
syncNavigationForViewport();
mobileNavigation.addEventListener('change', syncNavigationForViewport);
navigationToggle.addEventListener('click', () => {
  const collapsed = navigationCard.classList.toggle('is-collapsed');
  navigationToggle.setAttribute('aria-expanded', String(!collapsed));
  navigationToggle.querySelector('span').textContent = collapsed ? '+' : '−';
});

startButton.addEventListener('click', async () => {
  startButton.disabled = true;
  await projectPreviewsPromise;
  if (started) return;
  started = true;
  robot.position.set(0, 0, 4);
  robot.rotation.y = 0;
  robotBody.rotation.y = 0;
  robotBody.position.set(0, 0, 0);
  arms.forEach(arm => { arm.rotation.set(0, 0, 0); arm.userData.forearmJoint.rotation.set(0, 0, 0); });
  legs.forEach(leg => { leg.hip.rotation.set(0, 0, 0); leg.knee.rotation.set(0, 0, 0); });
  moveVelocity.set(0, 0);
  keys.clear();
  touchInput.forward = 0; touchInput.strafe = 0; touchInput.jump = false; touchInput.sprint = false;
  jumpVelocity = 0; grounded = true; jumpWasHeld = false;
  cameraYaw = 0; cameraPitch = 0.18; cameraDistance = 5.5;
  lastActivityTime = clock.elapsedTime;
  idleWavePlayed = false;
  startWave(clock.elapsedTime);
  intro.classList.add('leaving');
  hud.classList.remove('hidden');
  beam.visible = false;
  beamLight.intensity = 0.8;
  showToast('ROBOT ONLINE — WELCOME TO THE PORTFOLIO');
  setTimeout(() => intro.classList.add('hidden'), 1000);
});

window.addEventListener('keydown', e => {
  const key = e.key.toLowerCase();
  if (['arrowup','arrowdown','arrowleft','arrowright',' '].includes(key)) e.preventDefault();
  keys.add(key);
  if (key === 'e' && started && !detailOpen && nearby) openDetails(nearby.userData.project, nearby.userData.index);
  if (key === 'escape' && detailOpen) closeDetails();
});
window.addEventListener('keyup', e => keys.delete(e.key.toLowerCase()));
window.addEventListener('blur', () => keys.clear());

canvas.addEventListener('pointerdown', e => {
  if (!started || detailOpen || e.button !== 0) return;
  if (cameraPointerId !== null) return;
  dragging = true; pointerMoved = false; lastPointer = { x: e.clientX, y: e.clientY };
  cameraPointerId = e.pointerId;
  canvas.setPointerCapture?.(e.pointerId);
});
canvas.addEventListener('wheel', event => {
  cameraDistance = THREE.MathUtils.clamp(cameraDistance + Math.sign(event.deltaY) * 0.45, 4.1, 8.2);
}, { passive: true });
canvas.addEventListener('pointerup', e => {
  if (e.pointerId !== cameraPointerId) return;
  const wasClick = dragging && !pointerMoved && e.button === 0;
  dragging = false;
  cameraPointerId = null;
  if (!wasClick || !started || detailOpen) return;
  pointer.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
  raycaster.setFromCamera(pointer, camera);
  const hit = raycaster.intersectObjects(interactables, true).find(item => item.object.parent?.userData.project || item.object.userData.project);
  const kiosk = hit?.object.userData.project ? hit.object : hit?.object.parent;
  if (kiosk?.userData.project) openDetails(kiosk.userData.project, kiosk.userData.index);
});
['pointercancel', 'lostpointercapture'].forEach(type => canvas.addEventListener(type, e => {
  if (e.pointerId !== cameraPointerId) return;
  dragging = false;
  cameraPointerId = null;
}));
window.addEventListener('pointermove', e => {
  if (!dragging || e.pointerId !== cameraPointerId || !started || detailOpen) return;
  const dx = e.clientX - lastPointer.x, dy = e.clientY - lastPointer.y;
  if (Math.abs(dx) + Math.abs(dy) > 3) pointerMoved = true;
  if (!pointerMoved) return;
  cameraYaw -= dx * (isMobileDevice ? 0.0065 : 0.004);
  cameraPitch = THREE.MathUtils.clamp(cameraPitch + dy * (isMobileDevice ? 0.004 : 0.003), -0.12, 0.55);
  lastPointer = { x: e.clientX, y: e.clientY };
});

document.querySelector('#close-detail').addEventListener('click', closeDetails);
document.querySelector('#detail-link').addEventListener('click', () => {});
function openDetails(project, index) {
  previouslyFocused = document.activeElement;
  detailOpen = true;
  detailPanel.classList.toggle('is-about', project.section === 'about');
  moveVelocity.set(0, 0);
  const title = document.querySelector('#detail-title');
  const description = document.querySelector('#detail-description');
  const kicker = document.querySelector('.detail-kicker');
  const extra = document.querySelector('#detail-extra');
  const image = document.querySelector('#detail-image');
  image.innerHTML = project.image ? `<img class="detail-preview" src="${project.image}" alt="${escapeHTML(project.title)} project preview">` : '';
  title.textContent = project.title;
  description.textContent = project.description || '';
  kicker.innerHTML = `${project.section ? 'PORTFOLIO SECTION' : project.category || 'PROJECT'} <span id="detail-index">/ ${String(index + 1).padStart(2, '0')}</span>`;
  extra.innerHTML = renderSection(project);
  const tags = document.querySelector('#detail-tags');
  tags.replaceChildren(...(project.tags || []).map(tag => {
    const el = document.createElement('span'); el.textContent = tag; return el;
  }));
  const link = document.querySelector('#detail-link');
  link.hidden = !project.link;
  if (project.link) { link.href = project.link; link.textContent = project.linkLabel || 'OPEN LINK ↗'; }
  detailPanel.classList.remove('hidden');
  nearbyPrompt.classList.add('hidden');
  document.querySelector('#close-detail').focus();
}

function escapeHTML(value = '') {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}

function renderSection(project) {
  if (project.section === 'about') {
    return `<div class="about-section"><img src="./assets/img/1741080136349.jpg" alt="Frankie" loading="lazy"><div>${PROFILE.about.map(text => `<p>${escapeHTML(text)}</p>`).join('')}<p><b>Location</b><br>${escapeHTML(PROFILE.location)}</p></div></div><h3>What I do</h3><div class="extra-grid"><article><b>Web Development</b><p>Building responsive, efficient, and robust full-stack applications.</p></article><article><b>Backend Development</b><p>Designing scalable backend systems, REST APIs, and microservices with a focus on performance, security, and maintainability.</p></article><article><b>CI/CD &amp; DevOps</b><p>Implementing CI/CD pipelines using Git, Jenkins, and OpenShift.</p></article></div>`;
  }
  if (project.section === 'projects') {
    return `<h3>Selected work</h3><div class="extra-grid project-list">${PROJECTS.map(item => `<article><b>${escapeHTML(item.title)} <small>${escapeHTML(item.year)}</small></b><p>${escapeHTML(item.description)}</p><div>${item.tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join('')}</div></article>`).join('')}</div><h3>Notable internal projects</h3><div class="extra-grid project-list">${INTERNAL_PROJECTS.map(item => `<article><b>${escapeHTML(item.title)} <small>${escapeHTML(item.category)}</small></b><p>${escapeHTML(item.description)}</p></article>`).join('')}</div>`;
  }
  if (project.section === 'skills') return `<div class="extra-grid">${SKILLS.map(group => `<article><b>${escapeHTML(group.group)}</b><div>${group.items.map(item => `<span>${escapeHTML(item)}</span>`).join('')}</div></article>`).join('')}</div>`;
  if (project.section === 'experience') return `<div class="timeline-list">${EXPERIENCE.map(item => `<article><small>${escapeHTML(item.period)} · ${escapeHTML(item.organization)}</small><b>${escapeHTML(item.role)}</b>${item.details.length ? `<ul>${item.details.map(detail => `<li>${escapeHTML(detail)}</li>`).join('')}</ul>` : ''}</article>`).join('')}</div>`;
  if (project.section === 'education') return `<div class="extra-grid">${EDUCATION.map(item => `<article><small>${escapeHTML(item.period)}</small><b>${escapeHTML(item.program)}</b><p>${escapeHTML(item.institution)}</p>${item.detail ? `<p>${escapeHTML(item.detail)}</p>` : ''}</article>`).join('')}</div>`;
  if (project.section === 'contact') return `<p>${escapeHTML(PROFILE.location)}</p><div class="contact-links"><a href="${PROFILE.github}" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="${PROFILE.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="${PROFILE.instagram}" target="_blank" rel="noopener noreferrer">Instagram ↗</a></div>`;
  return '';
}
function closeDetails() {
  detailOpen = false;
  detailPanel.classList.add('hidden');
  if (previouslyFocused?.focus) previouslyFocused.focus();
}
detailPanel.addEventListener('keydown', event => {
  if (event.key !== 'Tab') return;
  const focusables = [...detailPanel.querySelectorAll('button:not([disabled]), a[href]:not([hidden])')];
  if (!focusables.length) { event.preventDefault(); return; }
  const first = focusables[0], last = focusables[focusables.length - 1];
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
});
let toastTimeout;
function showToast(message) {
  toast.textContent = message; toast.classList.remove('hidden');
  clearTimeout(toastTimeout); toastTimeout = setTimeout(() => toast.classList.add('hidden'), 2600);
}

const desiredCamera = new THREE.Vector3();
const lookTarget = new THREE.Vector3();
const cameraOffset = new THREE.Vector3();

function updateRobot(delta, time) {
  if (!started || detailOpen) return;
  const forward = (keys.has('w') || keys.has('arrowup') ? 1 : 0) - (keys.has('s') || keys.has('arrowdown') ? 1 : 0) + touchInput.forward;
  const strafe = (keys.has('d') || keys.has('arrowright') ? 1 : 0) - (keys.has('a') || keys.has('arrowleft') ? 1 : 0) + touchInput.strafe;
  const inputLength = Math.hypot(strafe, forward);
  const normalization = inputLength > 1 ? 1 / inputLength : 1;
  const inputX = strafe * normalization;
  const inputY = forward * normalization;
  const sinYaw = Math.sin(cameraYaw);
  const cosYaw = Math.cos(cameraYaw);
  // The camera looks along (-sin(yaw), -cos(yaw)); use this basis for both movement axes.
  const dirX = inputX * cosYaw - inputY * sinYaw;
  const dirZ = -inputX * sinYaw - inputY * cosYaw;
  const sprinting = keys.has('shift') || touchInput.sprint;
  const speed = moveSpeed * (sprinting ? 1.55 : 1);
  const damping = inputLength > 0 ? 10 : 6;
  moveVelocity.x = THREE.MathUtils.damp(moveVelocity.x, dirX * speed, damping, delta);
  moveVelocity.y = THREE.MathUtils.damp(moveVelocity.y, dirZ * speed, damping, delta);
  const previousX = robot.position.x;
  const previousZ = robot.position.z;
  const nextX = THREE.MathUtils.clamp(robot.position.x + moveVelocity.x * delta, bounds.minX, bounds.maxX);
  const nextZ = THREE.MathUtils.clamp(robot.position.z + moveVelocity.y * delta, bounds.minZ, bounds.maxZ);
  const canOccupy = (x, z) => interactables.every(obj => Math.hypot(x - obj.position.x, z - obj.position.z) > (obj.userData.project?.section ? 1.3 : 1.75));
  if (canOccupy(nextX, robot.position.z)) robot.position.x = nextX;
  else moveVelocity.x = 0;
  if (canOccupy(robot.position.x, nextZ)) robot.position.z = nextZ;
  else moveVelocity.y = 0;
  // Face the displacement that actually happened after bounds/collision checks.
  // This avoids turning toward blocked input and preserves the last heading at rest.
  const actualX = robot.position.x - previousX;
  const actualZ = robot.position.z - previousZ;
  const moving = Math.hypot(actualX, actualZ) > 0.0005;
  if (moving) {
    lastActivityTime = time;
    idleWavePlayed = false;
    waveStartedAt = -Infinity;
  } else if (!idleWavePlayed && time - lastActivityTime >= 2) {
    startWave(time);
    idleWavePlayed = true;
  }
  if (moving) {
    const targetYaw = Math.atan2(actualX, actualZ);
    const angleDelta = Math.atan2(Math.sin(targetYaw - robot.rotation.y), Math.cos(targetYaw - robot.rotation.y));
    robot.rotation.y += angleDelta * Math.min(1, delta * 12);
  }

  const jumpHeld = keys.has(' ') || touchInput.jump;
  if (jumpHeld && !jumpWasHeld && grounded) { jumpVelocity = 5.2; grounded = false; }
  jumpWasHeld = jumpHeld;
  if (!grounded) {
    jumpVelocity -= 13 * delta;
    robot.position.y = Math.max(0, robot.position.y + jumpVelocity * delta);
    if (robot.position.y === 0) { grounded = true; jumpVelocity = 0; }
  }
  const gait = time * (sprinting ? 15 : 11);
  if (moving) {
    robotBody.position.y = 0.045 + Math.abs(Math.sin(gait)) * 0.035;
    arms.forEach((arm, i) => {
      const legPhase = Math.sin(gait + i * Math.PI);
      const swing = sprinting ? 0.72 : 0.4;
      arm.rotation.x = -legPhase * swing;
      const elbowBend = (sprinting ? 0.48 : 0.12) + Math.max(0, legPhase) * 0.1;
      arm.userData.forearmJoint.rotation.x = THREE.MathUtils.damp(arm.userData.forearmJoint.rotation.x, elbowBend, 10, delta);
    });
    legs.forEach((leg, i) => { leg.hip.rotation.x = Math.sin(gait + i * Math.PI) * 0.42; leg.knee.rotation.x = Math.max(0, -leg.hip.rotation.x) * 0.55; });
  } else {
    robotBody.position.y = reducedMotion ? 0 : 0.02 + Math.sin(time * 2.4) * 0.025;
    arms.forEach((arm, i) => {
      arm.rotation.x = reducedMotion ? 0 : Math.sin(time * 1.8 + i) * 0.035;
      arm.userData.forearmJoint.rotation.x = THREE.MathUtils.damp(arm.userData.forearmJoint.rotation.x, 0.06, 8, delta);
    });
    legs.forEach(leg => { leg.hip.rotation.x = THREE.MathUtils.damp(leg.hip.rotation.x, 0, 8, delta); leg.knee.rotation.x = THREE.MathUtils.damp(leg.knee.rotation.x, 0, 8, delta); });
  }
  const waveElapsed = time - waveStartedAt;
  if (waveElapsed >= 0 && waveElapsed < waveDuration) {
    const lift = THREE.MathUtils.smoothstep(waveElapsed, 0, 0.32);
    arms.forEach((arm, index) => {
      if (index === waveArmIndex) arm.rotation.z = 2.45 * lift + Math.sin(waveElapsed * 12) * 0.28 * lift;
      else arm.rotation.z = THREE.MathUtils.damp(arm.rotation.z, 0, 8, delta);
    });
  } else {
    arms.forEach(arm => { arm.rotation.z = THREE.MathUtils.damp(arm.rotation.z, 0, 7, delta); });
  }
  if (!reducedMotion) {
    antennaOrb.scale.setScalar(1 + Math.sin(time * 5) * 0.13);
    baseRing.rotation.z += delta * 0.45;
    footRing.rotation.z -= delta * 0.3;
  }
}

function updateCamera(delta) {
  const distance = cameraDistance;
  const horizontal = Math.cos(cameraPitch) * distance;
  cameraOffset.set(Math.sin(cameraYaw) * horizontal, 2.25 + Math.sin(cameraPitch) * distance, Math.cos(cameraYaw) * horizontal);
  desiredCamera.copy(robot.position).add(cameraOffset);
  desiredCamera.x = THREE.MathUtils.clamp(desiredCamera.x, -11.5, 11.5);
  desiredCamera.z = THREE.MathUtils.clamp(desiredCamera.z, -12, 10);
  desiredCamera.y = Math.max(1.2, desiredCamera.y);
  camera.position.lerp(desiredCamera, 1 - Math.exp(-delta * (isMobileDevice ? 11 : 10)));
  lookTarget.set(robot.position.x, robot.position.y + 1.0, robot.position.z);
  camera.lookAt(lookTarget);
}

function updateNearby() {
  nearby = null;
  let closest = 3.2;
  for (const obj of interactables) {
    const p = obj.position;
    const distance = Math.hypot(robot.position.x - p.x, robot.position.z - p.z);
    if (distance < closest) { closest = distance; nearby = obj; }
  }
  if (nearby && started && !detailOpen) {
    nearbyPrompt.classList.remove('hidden');
    document.querySelector('#location-name').textContent = nearby.userData.project.title.toUpperCase().slice(0, 22);
  } else {
    nearbyPrompt.classList.add('hidden');
    document.querySelector('#location-name').textContent = 'CENTRAL HUB';
  }
}

const joystick = document.querySelector('#touch-joystick');
const joystickThumb = document.querySelector('#joystick-thumb');
let joystickPointer = null;
function updateJoystick(event) {
  const rect = joystick.getBoundingClientRect();
  const radius = rect.width * 0.36;
  const dx = event.clientX - (rect.left + rect.width / 2);
  const dy = event.clientY - (rect.top + rect.height / 2);
  const length = Math.hypot(dx, dy);
  const scale = length > radius ? radius / length : 1;
  const x = dx * scale, y = dy * scale;
  joystickThumb.style.transform = `translate(${x}px, ${y}px)`;
  touchInput.strafe = x / radius;
  touchInput.forward = -y / radius;
}
function releaseJoystick() {
  joystickPointer = null;
  touchInput.forward = 0; touchInput.strafe = 0;
  joystickThumb.style.transform = 'translate(0, 0)';
}
joystick.addEventListener('pointerdown', event => {
  event.preventDefault(); joystickPointer = event.pointerId; joystick.setPointerCapture(event.pointerId); updateJoystick(event);
});
joystick.addEventListener('pointermove', event => { if (event.pointerId === joystickPointer) updateJoystick(event); });
['pointerup', 'pointercancel', 'lostpointercapture'].forEach(type => joystick.addEventListener(type, releaseJoystick));
const jumpButton = document.querySelector('[data-action="jump"]');
jumpButton.addEventListener('pointerdown', event => { event.preventDefault(); jumpButton.setPointerCapture(event.pointerId); touchInput.jump = true; });
['pointerup', 'pointercancel', 'lostpointercapture'].forEach(type => jumpButton.addEventListener(type, () => { touchInput.jump = false; }));
const sprintButton = document.querySelector('[data-action="sprint"]');
sprintButton.addEventListener('pointerdown', event => {
  event.preventDefault(); sprintButton.setPointerCapture(event.pointerId); touchInput.sprint = true; sprintButton.setAttribute('aria-pressed', 'true');
});
['pointerup', 'pointercancel', 'lostpointercapture'].forEach(type => sprintButton.addEventListener(type, () => {
  touchInput.sprint = false; sprintButton.setAttribute('aria-pressed', 'false');
}));
document.querySelector('[data-action="interact"]').addEventListener('click', () => {
  if (nearby && started && !detailOpen) openDetails(nearby.userData.project, nearby.userData.index);
  else showToast('MOVE CLOSER TO A TERMINAL');
});

// Wall displays aim toward the shared center of the room, like exhibits in a gallery.
for (const kiosk of interactables) {
  const section = kiosk.userData.project?.section;
  if (!section) kiosk.rotation.y = 0;
  else if (['about', 'experience', 'education', 'skills', 'contact', 'projects'].includes(section)) {
    // Align panels parallel to their wall: local +Z points inward from each side wall.
    kiosk.rotation.y = kiosk.position.x < 0 ? Math.PI / 2 : -Math.PI / 2;
  } else kiosk.rotation.y = 0;
}

function animate() {
  requestAnimationFrame(animate);
  const delta = Math.min(clock.getDelta(), 0.04);
  const time = clock.elapsedTime;
  if (!reducedMotion) {
    particles.rotation.y = time * 0.003;
    beam.scale.y = 1 + Math.sin(time * 2) * 0.04;
  }
  const blink = reducedMotion ? 0 : Math.max(0, (Math.sin(time * 0.63) - 0.986) / 0.014);
  robotEyes.forEach(eye => { eye.scale.y = 1 - blink * 0.84; });
  if (!reducedMotion) chestCore.rotation.z += delta * 0.65;
  if (!started) {
    robot.position.y = reducedMotion ? 0 : Math.sin(time * 1.8) * 0.06;
    robotBody.rotation.y = reducedMotion ? 0 : Math.sin(time * 0.6) * 0.12;
    if (!reducedMotion) baseRing.rotation.z += delta * 0.4;
    camera.position.lerp(new THREE.Vector3(0, 4.2, 11), 1 - Math.exp(-delta * 1.5));
    camera.lookAt(0, 1.4, 1.7);
  } else {
    updateRobot(delta, time);
    updateCamera(delta);
    updateNearby();
  }
  for (const obj of interactables) {
    if (obj.userData.project) {
      const close = nearby === obj && !detailOpen;
      obj.scale.y = THREE.MathUtils.lerp(obj.scale.y, close ? 1.035 : 1, 0.12);
    }
  }
  if (renderer) renderer.render(scene, camera);
}
if (renderer) animate();
else {
  canvas.classList.add('hidden');
  document.querySelector('#intro').classList.add('hidden');
  const fallback = document.querySelector('#webgl-fallback');
  fallback.classList.remove('hidden');
  const sectionData = {
    about: { title: 'About me', description: PROFILE.introduction, section: 'about' },
    projects: { title: 'Project archive', description: 'Selected projects and internal systems from my portfolio.', section: 'projects' },
    skills: { title: 'Skills & technologies', description: 'Technology groups listed in my portfolio.', section: 'skills' },
    experience: { title: 'Experience', description: 'Professional history from my portfolio.', section: 'experience' },
    education: { title: 'Education', description: 'Education history from my portfolio.', section: 'education' },
    contact: { title: 'Contact', description: PROFILE.location, section: 'contact' }
  };
  fallback.querySelectorAll('[data-static-section]').forEach(button => button.addEventListener('click', () => {
    const key = button.dataset.staticSection;
    openDetails(sectionData[key], Object.keys(sectionData).indexOf(key));
  }));
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  if (renderer) {
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, window.innerWidth < 700 ? 1.15 : 1.5));
  }
});
