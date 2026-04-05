interface Feature {
  icon: string;
  title: string;
  desc: string;
}

export const FEATURES: Feature[] = [
  { icon: "✦", title: "One-click removal", desc: "Upload any photo and get a clean cutout in under 2 seconds — no manual masking." },
  { icon: "⬡", title: "Edge perfection", desc: "AI-trained on 100M+ images detects hair strands, fur, and complex edges flawlessly." },
  // { icon: "◎", title: "Custom backgrounds", desc: "Replace backgrounds instantly with colors, gradients, or your own images." },
  { icon: "◈", title: "Lossless export", desc: "Download as PNG and JPG with transparency always." },
];