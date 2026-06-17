import fs from 'node:fs/promises';
import path from 'node:path';
import { certificates } from '../src/data/certificates.js';
import { projects } from '../src/data/projects.js';

const root = process.cwd();
const certificateDir = path.join(root, 'public', 'certificates', 'preview');
const projectsDir = path.join(root, 'public', 'projects');

const escapeXml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

const fileNameFromPublicPath = (publicPath) => publicPath.split('/').pop();

function certificateSvg(certificate) {
  const title = escapeXml(certificate.title);
  const issuer = escapeXml(certificate.issuer);
  const category = escapeXml(certificate.category);
  const skills = escapeXml(certificate.skills.join(' · '));
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="980" viewBox="0 0 1400 980">
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
      <stop stop-color="#0B1120"/>
      <stop offset="0.48" stop-color="#111827"/>
      <stop offset="1" stop-color="#020617"/>
    </linearGradient>
    <linearGradient id="line" x1="0" x2="1">
      <stop stop-color="#39FF14"/>
      <stop offset="1" stop-color="#00FF66"/>
    </linearGradient>
  </defs>
  <rect width="1400" height="980" fill="url(#bg)"/>
  <rect x="70" y="70" width="1260" height="840" rx="28" fill="rgba(255,255,255,0.035)" stroke="rgba(255,255,255,0.16)" stroke-width="2"/>
  <path d="M130 200 H1270" stroke="url(#line)" stroke-width="5" stroke-linecap="round"/>
  <text x="130" y="160" fill="#00FF66" font-family="JetBrains Mono, Consolas, monospace" font-size="34" font-weight="700">${category}</text>
  <text x="130" y="310" fill="#E5E7EB" font-family="Inter, Arial, sans-serif" font-size="54" font-weight="800">${title}</text>
  <text x="130" y="395" fill="#94A3B8" font-family="Inter, Arial, sans-serif" font-size="34">${issuer}</text>
  <text x="130" y="465" fill="#39FF14" font-family="JetBrains Mono, Consolas, monospace" font-size="26">${skills}</text>
  <rect x="130" y="560" width="360" height="74" rx="18" fill="rgba(103,232,249,0.10)" stroke="rgba(103,232,249,0.35)"/>
  <text x="164" y="608" fill="#00FF66" font-family="JetBrains Mono, Consolas, monospace" font-size="24">Portfolio Preview</text>
  <text x="700" y="810" text-anchor="middle" fill="rgba(255,255,255,0.13)" font-family="JetBrains Mono, Consolas, monospace" font-size="62" font-weight="800" transform="rotate(-18 700 810)">Steven J. Márquez Rios - Portfolio Preview</text>
  <text x="130" y="850" fill="#64748B" font-family="Inter, Arial, sans-serif" font-size="24">Preview protegido para portafolio. Original privado no publicado.</text>
</svg>`;
}

function projectSvg(project, index) {
  const title = escapeXml(project.title);
  const status = escapeXml(project.status);
  const tech = escapeXml(project.technologies.slice(0, 4).join(' · '));
  const hue = index % 2 === 0 ? ['#39FF14', '#00FF66'] : ['#00FF66', '#8CFF4F'];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="750" viewBox="0 0 1200 750">
  <defs>
    <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
      <stop stop-color="${hue[0]}"/>
      <stop offset="1" stop-color="${hue[1]}"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="750" fill="#020617"/>
  <circle cx="1030" cy="120" r="220" fill="${hue[1]}" opacity="0.18"/>
  <circle cx="120" cy="670" r="260" fill="${hue[0]}" opacity="0.18"/>
  <path d="M0 120 H1200 M0 240 H1200 M0 360 H1200 M0 480 H1200 M0 600 H1200 M160 0 V750 M320 0 V750 M480 0 V750 M640 0 V750 M800 0 V750 M960 0 V750" stroke="rgba(255,255,255,0.055)"/>
  <rect x="80" y="90" width="1040" height="570" rx="28" fill="rgba(15,23,42,0.82)" stroke="rgba(255,255,255,0.14)"/>
  <text x="120" y="178" fill="#00FF66" font-family="JetBrains Mono, Consolas, monospace" font-size="28">${status}</text>
  <text x="120" y="320" fill="#E5E7EB" font-family="Inter, Arial, sans-serif" font-size="56" font-weight="800">${title}</text>
  <text x="120" y="415" fill="#94A3B8" font-family="JetBrains Mono, Consolas, monospace" font-size="28">${tech}</text>
  <text x="120" y="555" fill="url(#g)" font-family="JetBrains Mono, Consolas, monospace" font-size="68" font-weight="800">&lt; Steven /&gt;</text>
</svg>`;
}

await fs.mkdir(certificateDir, { recursive: true });
await fs.mkdir(projectsDir, { recursive: true });

const certificatesWithPreview = certificates.filter((certificate) => certificate.preview);

await Promise.all(
  certificatesWithPreview.map((certificate) =>
    fs.writeFile(path.join(certificateDir, fileNameFromPublicPath(certificate.preview)), certificateSvg(certificate), 'utf8'),
  ),
);

await Promise.all(
  projects.map((project, index) =>
    fs.writeFile(path.join(projectsDir, fileNameFromPublicPath(project.image)), projectSvg(project, index), 'utf8'),
  ),
);

console.log(`Generated ${certificatesWithPreview.length} certificate previews and ${projects.length} project images.`);
