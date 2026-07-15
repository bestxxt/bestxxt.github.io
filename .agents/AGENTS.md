# Project Design Rules: Retro Print Media & Neo-Brutalism

All UI design and frontend code generation must strictly adhere to the following retro aesthetics and neo-brutalism guidelines. Do NOT use modern UI trends (e.g., flat design, glassmorphism, rounded corners, soft shadows, pastel colors).

## 1. Visual Vibe
- **Keywords**: 1920s traditional print media, old typewriter archives, neo-brutalism, hardcore industrial feel without decoration.
- **Atmosphere**: Minimalist, rigid, high contrast, non-rounded, pure black/white/gray + accent colors.

## 2. Color System
Strictly use the following retro color palette. NO gradients. NO modern saturated colors.
- **Paper (Background)**: `#F4F1EA` (Warm, aged off-white/cream paper color)
- **Ink (Text/Lines)**: `#1A1A1A` (Deep, sharp charcoal black, used instead of pure black)
- **Accent 1 (Retro Red/Primary Action)**: `#8B3A3A` (Faded brick red for warnings, strong CTAs, or core interactions)
- **Accent 2 (Retro Green/Success)**: `#4A5D23` (Vintage olive green for positive feedback)
- **Accent 3 (Retro Blue/Links)**: `#2B4B77` (Deep denim/fountain pen ink blue)

## 3. Typography
The soul of the layout relies on **extreme contrast**:
- **Headlines & Hero Text**: Classic **Serif fonts** (e.g., Playfair Display, Merriweather). Frequently use **Bold Italic** to mimic traditional newspaper headlines or classic literature chapter intros.
- **Metadata, Tags, Labels**: **Monospace fonts** (e.g., Space Mono, Courier New). Must be **extremely small (`text-xs`)**, **UPPERCASE**, and have **extra wide letter spacing (`tracking-widest`)**. Mimics industrial labels typed on an old typewriter.
- **Body Text**: Clear sans-serif or monospace with generous line height and whitespace.

## 4. UI Shapes & Constraints
- **Zero Border Radius (`rounded-none`)**: Absolutely NO rounded corners. All cards, image frames, and buttons must be razor-sharp 90-degree angles.
- **Heavy Borders**: Do not separate sections with soft shadows or backgrounds. Use strong, thick borders (`2px-4px` solid) or thick `dashed` borders. Elements should feel carved out.
- **Hard Shadows**: NO blurred shadows. Use ONLY opaque, solid offset shadows (e.g., `shadow-[8px_8px_0px_0px_#1a1a1a]`) to give elements intense physical thickness and weight.
- **Minimal Inputs**: Text inputs/textareas should not have full bounding boxes. Use only a **thick bottom border**, which becomes thicker on focus.

## 5. Interaction & Media
- **Button Hover States**: Brutal and direct feedback. NO gradients or slight color shifts. Use high-contrast color inversion (e.g., white background with black text instantly flips to black background with white text).
- **Images/Illustrations**: Avoid modern, colorful, flat vector illustrations. Prefer Black & White line art, woodcut prints, or vintage scientific diagrams. Apply grayscale, high contrast, noise, or sepia CSS filters to standard photos.
