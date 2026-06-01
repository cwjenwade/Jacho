# Design Plan: Programs Page

## 1. Core Concept: The Manifesto
**"Integrating clinical warmth, narrative depth, and digital innovation to build systems that resonate with the human experience."**
(結合臨床溫度、敘事深度與數位創新，建立能與人類經驗共鳴的系統。)

## 2. Page Structure (`/programs`)
The content follows the **2/3/1** order, reframed through a professional/academic lens.

### A. The Research Spectrum (Input: Insight Tools)
Instead of a simple list, research methods are presented as a two-pole spectrum.
*   **Qualitative & Interpretive (Meaning-making)**: Narrative Inquiry, Thematic Analysis, etc.
*   **Quantitative & Psychometric (Precision Measurement)**: SEM, Factor Analysis, etc.

### B. The Operational Core: Integrative & Design (Process: Practice & Craft)
A standalone Bento-style section that bridges research with implementation. Organized into three distinct clusters:
1.  **Professional Core**: Licensed Counseling Psychologist (諮商心理師).
2.  **Visual & Craft**: UI/UX, Web & Graphic Design, Digital Aesthetics.
3.  **Operations & Strategy**: Project Management, SEM/SEO, System Architecture.

### C. Active Development (Output: Deliverables)
Showcasing "Warm & Healing" innovations alongside technical prototypes.
*   **Digital Picture Book** (Narrative-based)
*   **IELTS CAT** (Psychometric-based)
*   **The Monster System** (Behavioral-based)

## 3. Visual & Interaction Design
- **Consistency**: Use `FadeIn` animations and typography scale from the `Home` page.
- **Spectrum Layout**: A simplified 2-pole horizontal axis.
- **Bento Core**: Minimalist cards with Geist Mono labels and muted pastel accents.
- **Project Cards**: Large, immersive cards with project-specific colors.

## 4. Implementation Roadmap
1. **Refactor `app/programs/page.tsx`**:
   - Update `spectrum` array (2 poles).
   - Add `integration` data structure.
   - Implement "The Research Spectrum" (2-pole UI).
   - Implement "The Operational Core" (Bento Grid).
   - Maintain "Active Development" logic.
