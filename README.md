# Becky Taha'Blu Portfolio & Community Hub

**Unapologetically Black, queer, and femme — The Gothic Glamorous Gangster shaking up the status quo.**

---

## What This Project Does

This is a static portfolio website serving as a digital hub for Becky Taha'Blu's work across performance, activism, and community organizing. The site provides:

- **Performance & Services Showcase** — Information about vaudeville performances, burlesque, virtual sessions, and consulting rates.
- **Activist Presence** — Platforms for community organizations (RSN, RMSWC, SLUTWALK Denver, Lysistrata, etc.).
- **Age-Gated Content** — Privacy-respecting verification system for adult-oriented content.
- **Accessible Contact** — Multiple channels for reaching out via social media, email, and payment platforms.
- **Dark Mode Support** — Accessible viewing across light and dark theme preferences.

The goal is to create an unapologetic, accessible, and beautifully designed digital space that reflects Becky's values: consent, accessibility, joy, and community care.

---

## Technology Stack

**Frontend**
- **HTML5** — Semantic, accessible markup with proper heading hierarchy and ARIA labels.
- **CSS3** — Responsive design using CSS Grid, Flexbox, and CSS custom properties (variables).
  - Light & dark mode themes with `prefers-color-scheme` and explicit `[data-theme="dark"]` support.
  - Smooth transitions and animations for improved UX.
- **JavaScript (Vanilla)** — No frameworks; lightweight age gate logic using `localStorage` for persistence.
- **Font Awesome 6** — Social media icons and brand icons via CDN.

**Hosting & Deployment**
- **GitHub Pages** — Free static hosting with custom domain support.
- **Git** — Version control for collaboration and rollback capability.

**Accessibility & Performance**
- Semantic HTML with `<section>`, `<nav>`, `<main>`, and proper heading structure.
- Screen reader support via `aria-label`, `aria-current`, `aria-hidden`, `.sr-only` classes.
- Responsive design for mobile, tablet, and desktop viewports.
- Lazy loading for images (`loading="lazy"`).
- No bloat — plain HTML/CSS/JS keeps the site fast and resilient.

---

## What I Learned

### 1. **Static Site Resilience**
Plain HTML/CSS/JS sites are fast, secure, and maintainable. You don't need a database, backend framework, or build tools for a professional portfolio. Git + GitHub Pages = instant deploy.

### 2. **Accessible Design is Intentional**
Building accessible sites requires thinking through:
- Semantic HTML (not just `<div>` soup)
- Color contrast and readability
- Keyboard navigation and screen reader support
- Clear link labels and form instructions
- ARIA attributes for complex interactions (e.g., age gate modal)

### 3. **CSS Custom Properties (Variables) Scale Better**
Using `--primary-pink`, `--deep-purple`, `--heading-color`, etc. makes theming and dark mode trivial. One variable change ripples across the entire site.

### 4. **localStorage for Progressive Enhancement**
The age gate uses `localStorage` to remember verification, avoiding re-entry on page refresh. This is a simple, effective pattern for client-side state that improves UX without backend complexity.

### 5. **Responsive Design is About Content, Not Screen Size**
CSS Grid and Flexbox, combined with `clamp()`, let layouts adapt naturally without brittle media queries. Content flows, not forced into breakpoints.

### 6. **Dark Mode Should Be Thoughtful**
Inverting colors is not dark mode. Proper dark mode requires:
- Reduced saturation on bright colors
- Adjusted shadows and glows
- Accessible contrast ratios in both modes
- Respecting user system preferences first, with an override option

---

## Challenges I Solved

### 1. **Age Verification UX Without Friction**
**Challenge:** Age gates often frustrate users or are bypassed easily.  
**Solution:** Built a modal that overlays on first visit, uses semantic HTML (not a trick), persists verification via `localStorage`, and provides clear decline path to leave the site. It's honest about its purpose and respects user choice.

### 2. **Semantic Navigation Across Multiple Pages**
**Challenge:** Keeping navigation consistent (Home, About, Sessions, Contact) across separate HTML files without duplication or template engines.  
**Solution:** Used standard `<header><nav>` structure on all pages with `aria-current="page"` to mark active link. Contact links back to the homepage's `#contact` anchor for smooth scrolling.

### 3. **Responsive Grid That Doesn't Break**
**Challenge:** A 3-column grid (About, Skills, Sessions) needs to collapse gracefully on mobile.  
**Solution:** Used CSS Grid with `grid-template-columns: repeat(auto-fit, minmax(...))` fallback plus explicit breakpoints. On desktop: 3 columns. Tablet: 2 columns. Mobile: 1 column.

### 4. **Dark Mode That Respects System Preference But Allows Override**
**Challenge:** Honoring `prefers-color-scheme: dark` but also supporting explicit theme toggle on pages that use it.  
**Solution:** Layered approach:
- Default: respect system preference via `@media (prefers-color-scheme: dark)`
- Override: explicit `html[data-theme="dark"]` rules for when user toggles manually
- Variables: consistent token system so both methods share the same palette

### 5. **Accessible Social Media Icons**
**Challenge:** Font Awesome icons are decorative; screen reader users need text labels.  
**Solution:** Each link has:
- `aria-label="Platform name"` on the `<a>` tag
- `aria-hidden="true"` on the `<i>` icon
- `.sr-only` wrapped text (e.g., `<span class="sr-only">Instagram</span>`)

Result: Screen readers announce "Instagram (link)" without redundancy.

### 6. **Bridging WordPress Content Migration**
**Challenge:** Site originally used WordPress; needed clean HTML/CSS transition without losing content.  
**Solution:** Extracted content, rewrote as semantic HTML, and preserved messaging while adopting accessible patterns. README.md now serves as developer documentation rather than a WordPress dump.

---

## AI Ethics Statement

### Overview
This project uses AI as a tool for analysis and support—not as an authority.  
All outputs are treated as probabilistic, limited, and subject to human review.

### Core Principles

- **Human Dignity First**  
  Systems must not reduce people to data points, probabilities, or optimization targets.

- **Transparency & Disclosure**  
  AI-assisted content is identified as such. Limitations, uncertainty, and assumptions are acknowledged.

- **No Ethical Outsourcing**  
  AI does not make moral decisions. Responsibility remains with the human user.

- **Constraint Over Optimization**  
  Efficiency, performance, and scale are not treated as inherently good.  
  Ethical limits take priority over technical capability.

- **Bias Awareness**  
  AI systems inherit bias from data, design, and infrastructure. Outputs are critically evaluated, not assumed neutral.

### How AI Is Used

- Drafting and structuring ideas  
- Debugging and technical assistance  
- Research synthesis (with verification)  

AI is **not used** to replace judgment, lived experience, or accountability.

### Known Limitations

- Outputs may be incomplete, biased, or incorrect  
- Sources may require independent verification  
- AI cannot understand context, harm, or dignity in a human sense  

### Commitment

This project treats AI as a constrained system operating within human-defined values.  
Use of this project should reflect the same: question outputs, verify claims, and prioritize human impact over convenience.

---

## Contact

**Email:** beckytahablu@proton.me  
**Platforms:** [WordPress](https://wordpress.org) | [Instagram](https://instagram.com/beckytahablu) | [YouTube](https://youtube.com/@misstrystbeckytahablu4486) | [TikTok](https://tiktok.com/@beckytahablu)  
**Support:** [Cash App: $BeckyTahaBlu](https://cash.app/beckytahablu) | [Amazon Wishlist](https://www.amazon.com/hz/wishlist/ls/1C0C0CPOHARVQ)
<p>Please call or email me at:</p>
<p>Email: beckytahablu@proton.me</p>
