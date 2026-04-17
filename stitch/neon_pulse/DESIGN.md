# Design System: High-Energy Editorial

## 1. Overview & Creative North Star
**The Creative North Star: "Electric Prestige"**
This design system is engineered to bridge the gap between high-fashion editorial and high-octane digital performance. It rejects the "safe" constraints of standard SaaS templates in favor of a bold, immersive experience. We achieve this through **intentional asymmetry**, aggressive typographic scales, and a deep, monochromatic foundation punctuated by "Electric" accents. 

To break the template look, layouts should utilize overlapping elements and large-scale "Display" type that bleeds off the grid or interacts with container edges. The system feels premium because it treats white space—or in this case, "Purple Space"—as a luxury commodity.

---

## 2. Color Strategy & Tonal Depth
The palette is built on a high-contrast relationship between a "Midnight Violet" core and "Hyper-Electric" accents.

### Color Tokens
- **Base Surface:** `background: #26022e` (The foundational canvas)
- **Primary Accents:** `primary: #f4bdff` | `primary_container: #e894ff`
- **Surface Hierarchy:** 
  - `surface_container_lowest: #1f0027`
  - `surface_container_low: #300a37`
  - `surface_container_high: #401a47`

### The "No-Line" Rule
**Strict Mandate:** Prohibit the use of 1px solid borders for sectioning or containment. 
Boundaries must be defined exclusively through background shifts. A card should be a `surface_container_high` sitting atop a `background`. If a section requires separation, use a tonal shift to `surface_container_low`. This creates a seamless, fluid interface that feels like a single, cohesive object rather than a collection of boxes.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of "Synthetic Silk." 
- **Layer 0:** `background` (Global)
- **Layer 1:** `surface_container_low` (Section backgrounds)
- **Layer 2:** `surface_container_high` (Interactive cards/modals)

### The "Glass & Gradient" Rule
To add "soul" to the digital interface, use Glassmorphism for floating navbars or tooltips. Apply `backdrop-blur: 20px` with a 40% opacity `surface_container_highest`. 
- **Signature Gradients:** For CTAs and Hero backgrounds, use a linear gradient from `primary` (#f4bdff) to `primary_container` (#e894ff) at a 135-degree angle.

---

## 3. Typography: The Editorial Voice
We use typography as a structural element, not just for legibility.

- **Display & Headlines (Space Grotesk):** This is our "Impact" layer. Use `display-lg` (3.5rem) for hero moments. The tight tracking and bold weight provide a brutalist, modern edge.
- **Body & Labels (Plus Jakarta Sans):** This is our "Utility" layer. It provides a sophisticated, geometric contrast to the headlines.

### Typographic Hierarchy
| Token | Font | Size | Case/Style |
| :--- | :--- | :--- | :--- |
| **Display-LG** | Space Grotesk | 3.5rem | Tight Tracking, Bold |
| **Headline-MD** | Space Grotesk | 1.75rem | Bold |
| **Title-LG** | Plus Jakarta Sans | 1.375rem | Medium |
| **Body-LG** | Plus Jakarta Sans | 1.0rem | Regular |
| **Label-SM** | Plus Jakarta Sans | 0.6875rem | Uppercase, +5% Letter Spacing |

---

## 4. Elevation & Depth
We move away from traditional "Drop Shadows" toward **Tonal Layering**.

- **The Layering Principle:** Depth is achieved by stacking. A `surface_container_lowest` input field on a `surface_container_low` card provides a natural "inset" look without an inner shadow.
- **Ambient Shadows:** When an element must float (e.g., a Modal), use a shadow color of `#1f0027` at 15% opacity with a `40px` blur and `20px` Y-offset. It should feel like an atmospheric glow, not a hard shadow.
- **The "Ghost Border" Fallback:** If accessibility requires a border, use `outline_variant` at 15% opacity. Never use 100% opaque lines.
- **Rounding Scale:** 
  - `xl (3rem)`: Hero containers and large sections.
  - `lg (2rem)`: Primary cards and imagery.
  - `DEFAULT (1rem)`: Buttons and inputs.

---

## 5. Components & Interaction
Interactions should feel "weightless" yet "snappy," mimicking Framer Motion spring physics.

### Buttons
- **Primary:** Background `primary_container`, text `on_primary_container`. No border. Hover state: Scale 1.05 and shift to `primary`.
- **Secondary:** Glassmorphism style. Background `surface_variant` at 20% opacity with `backdrop-blur`.
- **Tertiary:** Text-only with an underline that expands from center on hover.

### Cards & Lists
- **No Dividers:** Lists are separated by `1.5rem` of vertical spacing or subtle background alternations. 
- **Interactive State:** On hover, a card should transition its background from `surface_container_high` to `surface_bright` using a `0.4s cubic-bezier(0.22, 1, 0.36, 1)` transition.

### Input Fields
- **Style:** Background `surface_container_lowest`. 
- **Focus State:** Instead of a thick border, use a 1px `ghost border` and a subtle `primary` glow (4px spread).

### Motion Signature
- **Entrance:** Vertical slide-up (30px) with a staggered fade-in.
- **Springs:** Use a damping of 20 and stiffness of 300 for all hover scales to create a premium "tactile" feel.

---

## 6. Do’s and Don’ts

### Do
- **Do** use massive typography that overlaps imagery for an editorial feel.
- **Do** use high-contrast color shifts to guide the eye instead of lines.
- **Do** embrace the "Rounded XL" containers to soften the aggressive typography.
- **Do** ensure 4.5:1 contrast ratios for all body text against the deep purple backgrounds.

### Don't
- **Don't** use 1px solid borders to define boxes.
- **Don't** use pure black (#000000) for shadows; always use a tinted violet shadow.
- **Don't** mix the Headline and Body fonts within the same paragraph. 
- **Don't** use standard "Ease-in-Out" transitions; always use custom Bezier curves or Spring physics.