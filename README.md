# QuizApp QuizApp

A premium, offline‑first quiz experience for iOS built with React Native and TypeScript. This README is the canonical guide for developers and stakeholders. It covers product vision, UX/UI, architecture, implemented vs. pending features, setup instructions, troubleshooting, and an actionable roadmap.

---

## Vision at a Glance

- **Delightful learning**: Smooth, animated UI with high information density and crisp typography.
- **Offline‑first**: Entire quiz library available without network after first launch.
- **Freemium**: Most content free; the “Professor” difficulty is Premium‑only. Hints are a global consumable with future IAP top‑ups.

This project is a migration and upgrade of an existing app located at `/Users/antonchepur/Documents/QuizApp` into this repository with numerous UX, navigation, and data improvements.

---

## TL;DR Feature Checklist

- **Navigation**: React Navigation stack + tabs; headers shown on detail screens for back navigation.
- **Safe areas & gestures**: `react-native-safe-area-context` + `react-native-gesture-handler` integrated.
- **Theming & Icons**: Vector icons configured via `Info.plist` fonts; consistent spacing/typography.
- **Centralized Content**: All categories, quizzes, questions, and answers live in `src/data/catalog.ts`.
- **Difficulties & Dynamic Questions**: 8 levels mapped to question counts: very easy (10), easy (20), intermediate (30), normal (40), hard (50), very hard (60), legendary (70), professor (100).
- **Hint System**:
  - Global, persistent hints balance (seeded to 20 on first run).
  - Per‑question limit of 2 hints, selectable via bottom modal (50‑50 or reveal correct answer).
  - Hint button always enabled; modal options disabled if not available.
  - Numeric hint counter always visible.
- **Quiz Flow**: Answer selection, correctness feedback, time tracking; results screen with breakdown.
- **Premium Gating**: “Professor” difficulty gated for Premium users; all other difficulties are free.
- **Developer Tooling**: Settings screen includes “Add 20 hints” (developer‑only) for testing.
- **Build Stability**: CocoaPods via Bundler; Yarn 4 for JS dependencies; Reanimated plugin wired.

Pending highlights (see Roadmap for full list): IAP for hints, Premium store screen, offline DB via WatermelonDB hydration, richer animations and shared element transitions.

---

## Screens & UX

### Home
- Shows curated quiz categories (e.g., Math, Physics, Chemistry, JavaScript) from `src/data/catalog.ts`.
- Tapping a category navigates to its detail screen.
- “Premium” badge is NOT shown for History (per product requirement).

### Category Detail
- Lists quizzes within the selected category.
- Tapping a quiz navigates to Quiz Start.

### Quiz Start
- Professional pre‑game lobby with:
  - Title and rich description
  - Themes/topics covered
  - Requirements/actions needed during the quiz
  - Estimated time and dynamic question count determined by difficulty
- Horizontal difficulty carousel for 8 levels; “Professor” is Premium‑only.
- Large, primary Start action.

### Quiz
- Core gameplay with:
  - Progress text and percentage
  - Current question with 2–4 answers
  - Global hint count visible at all times
  - “Use hint” opens a bottom modal to choose:
    - 50‑50 (eliminate two incorrect answers)
    - Reveal correct answer
  - 2 hints per question limit enforced; button stays enabled, options may be disabled
  - “Skip” button removed

### Quiz Results
- Detailed results with:
  - Total score and percentage
  - Time taken
  - Per‑question breakdown of chosen vs. correct answers
  - Play Again / Back to Category actions

### Settings
- Toggles: Sound Effects, Haptic Feedback.
- Developer tools:
  - Hints balance indicator
  - “Add 20 hints” to quickly test hint flows
- Wrapped in `SafeAreaView` to avoid status bar overlay.

### Premium (Store) [Planned]
- Showcase benefits, purchase/restore Premium, and display localized price with `react-native-iap`.

### Progress [Planned]
- High‑level stats, completed quizzes list, and re‑entry path back into a quiz.

---

## Data & Content

- All app data is centralized in `src/data/catalog.ts`:
  - Types for `Difficulty`, `Category`, `Question`, `Answer`, `Quiz`
  - `CATEGORIES` and `QUIZZES` with realistic content (not auto‑generated labels)
  - Helper selectors: `getQuizById`, `getQuizzesForCategory`
  - `questionCountForDifficulty` map for dynamic item counts

Planned: move content to WatermelonDB for offline, reactive querying and future content migrations.

---

## Architecture & Stack

- React Native 0.72+, TypeScript
- Navigation: `@react-navigation/*`
- State: Redux Toolkit + Redux Persist (`src/state/slices/appSlice.ts` manages global hints and flags)
- Animations: `react-native-reanimated` (babel plugin enabled) + `react-native-gesture-handler`
- Layout: `react-native-safe-area-context`
- UI: `react-native-vector-icons`, `react-native-svg`
- Data (future): `@nozbe/watermelondb`

Key files:
- `App.tsx`: Providers, safe area, gesture root; seeds global hints on first valid launch
- `src/navigation/RootNavigator.tsx`: Tab + stack navigators, header config
- `src/screens/*`: Feature screens listed above
- `src/state/slices/appSlice.ts`: `hints`, `hintsSeeded`, and actions: `addHints`, `setHints`, `consumeHint`, `markHintsSeeded`
- `src/data/catalog.ts`: Central data registry

---

## Implemented vs Pending

### Implemented
- Safe area + gesture setup (`App.tsx`, `index.js`)
- Reanimated plugin (`babel.config.js`)
- Vector icons fonts registered in `ios/NewQuizApp/Info.plist`
- Navigation with headers/back buttons for detail screens
- Home → Category Detail → Quiz Start → Quiz → Results flow
- Difficulty carousel with Premium‑gated “Professor”
- Global hints model with modal hint types and per‑question cap
- Hints numeric display everywhere (never hidden)
- Developer “Add 20 hints” in Settings
- Removed “Skip” button
- Category badges adjusted per product rule
- Yarn 4 project, Bundler for CocoaPods

### Pending / In Progress
- In‑App Purchases: purchase hints and Premium unlock
- Store (Premium) screen and CTA flows from Professor gate
- Lock badge on “Professor” pill in difficulty carousel
- WatermelonDB hydration of bundled content and progress tracking
- Rich animations: shared element transitions, parallax, score confetti
- Dark mode and design system extraction
- Progress tab implementation
- Analytics and crash reporting
- Deep linking and universal links
- E2E tests (Detox) and more unit tests

---

## Project Structure

```
/src
  /data            # catalog.ts, future JSON bundles
  /navigation      # Root navigator and stacks
  /screens         # Screen implementations
  /state           # Redux Toolkit store and slices
  /utils           # Helpers
```

The original high‑level design also anticipates: `/animations`, `/database`, `/styles`, `/components` (common/specific). These will be populated as features land.

---

## Setup & Development

### Prerequisites
- Node 18+
- Yarn 4 (auto via `"packageManager": "yarn@4.9.2"` in `package.json`)
- Ruby with Bundler
- Xcode with iOS 17+ simulators

### Install
```sh
# from project root
yarn install
cd ios && bundle install && bundle exec pod install --repo-update && cd ..
```

### Run (iPhone 15 Pro)
```sh
yarn start --reset-cache
# in another terminal
yarn ios --simulator "iPhone 15 Pro"
```

### Tests
```sh
yarn test
```

---

## Troubleshooting (iOS)

- Unable to open base configuration `Pods-*.xcconfig`:
  - Run: `cd ios && bundle exec pod install --repo-update && cd ..`
- `simdjson` spec not found (WatermelonDB):
  - Ensure clean Yarn install and run CocoaPods with `--repo-update`.
- Reanimated build errors (xcodebuild 65):
  - Confirm babel plugin in `babel.config.js` and re‑install Pods.
- Icons not visible:
  - Confirm `UIAppFonts` entries exist in `ios/NewQuizApp/Info.plist` for vector icon fonts.
- Buttons not responding / gesture conflicts:
  - Verify `import 'react-native-gesture-handler';` is the first line of `index.js`.

---

## Data Model (Current → Future)

Current: TypeScript types in `src/data/catalog.ts` power the UI; all content lives in code to ensure no mock auto‑generation remains.

Future (WatermelonDB):
- Tables: `categories`, `quizzes`, `questions`, `answers`, `user_progress`
- App will hydrate DB on first launch from bundled JSON and migrate on updates.

---

## Engineering Conventions

- TypeScript everywhere; avoid `any`.
- Redux slice actions are pure and narrowly scoped.
- Prefer early returns and small components.
- No inline explanatory comments in code; name things clearly instead.
- Match repository formatting and lint rules.

---

## Roadmap / TODOs

- Premium & IAP
  - Integrate `react-native-iap` for Premium unlock and hint packs
  - Add “Upgrade to Premium” flows and deep links from Professor gate
  - Restore purchases (Settings + Store)
- Content & Offline
  - Migrate `catalog.ts` to bundled JSON + WatermelonDB hydration
  - User progress tracking, high scores, last played
  - Content updates via app releases; migration scaffolding
- UX & Visual Polish
  - Shared element transitions (Home → Category → Quiz Start)
  - Confetti on high scores; animated score circle via SVG
  - Parallax featured cards and staggered list entrances
  - Dark mode and theme tokens; typography with Poppins
  - Add lock badge on “Professor” difficulty pill
- Gameplay
  - More hint types and fine‑grained rules
  - Accessibility labels and dynamic type scaling
- Quality
  - Jest unit tests for slices, selectors, and screens
  - Detox E2E path: start quiz → complete → results
  - CI for iOS builds and tests

---

## License
TBD (proprietary/internal during development).

---

## Credits
Original Software Design Document inspiration provided by an AI System Architect; this README reflects the current implementation and concrete plans for NewQuizApp.

---

## Figma‑Ready Product & UI Specification (Authoritative for Designers)

This section is intentionally exhaustive so a designer can build the full component library and screens in Figma without additional clarification.

### Global Foundations (Design Tokens)

- **Grid & Spacing (8‑pt system)**
  - Spacing scale: 0, 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64
  - Default screen padding: 16; cards internal padding: 16; section gaps: 24
  - Content max width: follow iPhone width; no artificial max on phone
- **Radii**
  - Button: 12; Pills/Chips: 20–24; Cards: 16; Modals/Sheets: 24 top corners
- **Elevation (iOS shadow approximations)**
  - Level 0: none
  - Level 1 (card): rgba(0,0,0,0.05) @ y=2, blur=8
  - Level 2 (floating): rgba(0,0,0,0.12) @ y=6, blur=18
- **Colors (Design tokens)**
  - Primary: #1C69D4
  - Primary/Pressed: #1554A7
  - Background: #F5F6F8
  - Surface: #FFFFFF
  - Text/Primary: #1A1A1A
  - Text/Secondary: #6B7280
  - Success: #2ECC71
  - Error: #E74C3C
  - Warning/Premium: #F5A623
  - Divider/Hairline: #E6E8EC
- **Typography (Poppins)**
  - H1 32/40 Semibold; H2 24/32 Semibold; H3 18/24 Medium; Body 16/22 Regular; Caption 13/18 Regular; Button 16/22 Semibold; Mono for numerics not required
- **Iconography**
  - Source: Feather unless otherwise specified; size 24 by default, 20 for dense lists, 28 for large actions
- **Tap Targets**
  - Minimum 44×44pt; hit slop to respect target where needed
- **Motion**
  - Standard: 200–300ms `withTiming`
  - Entrance/exit: 250ms fade/slide
  - Spring for micro‑interactions: damping 20, stiffness medium

### Component Inventory (with States & Properties)

- **PrimaryButton**
  - Height 52, radius 12, paddingX 20
  - States: default (Primary), pressed (Primary/Pressed), disabled (Primary @ 30% + Text @ 70%)
  - Contents: left icon optional (24), label (Button style, center), right icon optional (chevron/lock)
- **SecondaryButton**
  - Height 48, radius 12, stroke 1 (#E6E8EC), label Primary color
- **IconButton**
  - 44×44 circle/square; states as above; use for close/back/help
- **Chip/Pill** (Difficulty selector)
  - Height 36; radius 20; paddingX 14
  - Variants: default, selected, disabled, locked
  - Locked uses right‑aligned small lock icon 16 and `Warning/Premium` accent border
- **Card**
  - Radius 16; padding 16; elevation level 1
  - Optional header (title + caption + action), body content slot
- **ListRow** (toggle rows)
  - Height 60; left label (Body 16), right control (Switch or Chevron)
  - Divider bottom hairline except last in section
- **ProgressBar**
  - Height 6; radius 3; track #E6E8EC; fill Primary
- **AnswerButton**
  - Height auto; padding 16; radius 12
  - States: default (Surface), selected (Primary 8% tint), correct (Success bg + white text), incorrect (Error bg + white text), disabled (reduced opacity)
- **BottomSheet/Modal**
  - Handle: 36×4 rounded rect
  - Title row with optional close (IconButton)
  - Actions list (ListRow) or grid
- **Badge**
  - Height 20; radius 10; paddingX 8; variants: Premium (gold), Locked (gray), New (Primary)
- **ScoreCircle** (SVG)
  - Diameter 220; ring thickness 16; animated arc; center numeric large (H1)

### Icons Catalog (Feather)

- Home: home; Category: grid; Back: chevron-left; Start: play-circle; Difficulty: activity; Professor lock: lock; Hint: help-circle; Timer: clock; Score: star; Settings: settings; Sound: volume-2; Haptics: smartphone; Premium: crown (from Ionicons/MC if preferred); Results CTAs: refresh-ccw and arrow-left

### Screen Specs (Pixel‑accurate for iPhone 15 Pro portrait)

Each section lists: layout, components, interactions, states, copy, and navigation.

#### 1) Home (Tab: Quizzes)
- Layout
  - Safe top inset; page padding 16
  - Header: H2 “Welcome back!” on left; IconButton (settings) on right
  - FeaturedQuizCard: full‑width card, height 160, background image, overlay gradient; title H3 white; subcaption Caption white 80%
  - Category list: vertical; item height 84; spacing 12
- CategoryListItem (per row)
  - Left: circular icon 48 on tinted background (category color 16% alpha)
  - Right: title (Body 16 bold), subtitle (Caption category description, 2 lines max), ProgressBar (width 70% of right column)
  - Optional badge: Premium (gold) except History never shows badge
  - Press state: ripple/tint; chevron-right 20 on far right
- Interactions
  - Tap row → navigate `CategoryDetail(categoryId)`
  - Scroll → parallax on Featured card (background moves slower)

#### 2) Category Detail
- Layout
  - Large header: category icon 56 + name (H2); description (Body 16)
  - QuizList: vertical cards; spacing 12
- QuizListItem
  - Card contents: Title (Body 16 bold), Difficulty (Chip), Questions count (Caption), Best score (Caption)
  - Right side: Start chevron or lock if category/premium gate
  - Tap → `QuizStart(quizId)`

#### 3) Quiz Start
- Layout
  - Title (H1); Description (Body 16)
  - Themes grid: chips 2‑column wrap; spacing 8
  - Stats row: three mini‑cards 1) Questions (computed by difficulty), 2) Difficulty, 3) Est. time
  - Difficulty carousel (horizontal, scrollable): 8 pill chips in order: Very Easy, Easy, Intermediate, Normal, Hard, Very Hard, Legendary, Professor
  - Professor pill: shows small lock at end; tooltip/caption “Premium only” when tapped by non‑premium
  - PrimaryButton bottom inset: “Start Quiz”
- Interactions & States
  - Selecting a difficulty updates computed “Questions” and estimated time
  - If Professor selected and user not premium: show inline banner card with CTA “Unlock Premium” (navigates to Store once implemented)

#### 4) Quiz
- Layout
  - Top bar: left back chevron; center text `Question {i} of {N}`; right hint counter `Hint icon + number`
  - ProgressBar under top bar (fills based on index)
  - Question text block: H3 center, marginTop 16
  - Answers list: 2–4 AnswerButtons, spacing 12
  - Bottom persistent bar: Secondary actions row with `Use Hint` PrimaryButton (full width on small screens, or 1 button centered)
- Interactions
  - Tap answer → lock selection; after 300ms reveal correct/incorrect states; after 1s auto advance
  - Use Hint → open BottomSheet (see below)
  - Per question: limit 2 hints; if limit reached, options disabled but button remains enabled with tooltip “No hints left for this question”
  - Global hints: decrement on use; if 0, modal shows options disabled with message “You’re out of hints. Add more in Settings or Store.”
- Error/Edge
  - If no answers available (content issue), show error card and `Back to Category`

#### 5) Hint BottomSheet (from Quiz)
- Layout
  - Title: “Choose a hint”
  - Options:
    - Option A: “Eliminate 2 incorrect answers” with icon `minus-circle` — Description caption under
    - Option B: “Reveal the correct answer” with icon `check-circle`
  - Each option row shows cost: “Costs 1 hint” in Caption on the right
- States
  - Disabled if per‑question limit reached or global hints 0 (row shows `lock` icon and is 40% opacity)
- Interactions
  - Tap option → sheet dismisses; effect applies immediately

#### 6) Quiz Results
- Layout
  - Celebration title H2 (“Great job!”)
  - ScoreCircle centered (220px) showing percentage; number animates 0→score
  - Stats grid below (2 columns on phone): Correct, Incorrect, Time
  - List of questions with chosen vs correct answer (accordion optional)
  - Buttons bottom: Primary `Play Again`, Secondary `Back to Category`
- Interactions
  - If score ≥ 90%: confetti burst from bottom for 1.5s

#### 7) Settings
- Layout
  - Section: “Preferences”
    - ListRow: Sound Effects [Switch]
    - ListRow: Haptic Feedback [Switch]
  - Section: “Developer tools”
    - Text: “Hints balance: N”
    - PrimaryButton: “Add 20 hints”
- Behavior
  - Wrapped in SafeAreaView; no content under notch

#### 8) Premium Store [Planned]
- Layout
  - PremiumBanner: gradient + crown icon; copy: “Unlock all premium content and Professor difficulty.”
  - IAPProductCard: title, localized price, description
  - PrimaryButton: “Unlock Premium”; Secondary text button: “Restore Purchases”
- Interactions
  - Purchase flows via native IAP; loading overlay during transaction; success modal on completion

#### 9) Progress Tab [Planned]
- Layout
  - OverallStats card: Quizzes Completed, Questions Answered, Overall Accuracy
  - CompletedQuizList: rows with title, best score; tap to open Quiz Start

### Copy & Microcopy

- Start Quiz: “Start Quiz”
- Hints modal title: “Choose a hint”
- Professor gate message: “Professor difficulty is part of Premium.”
- Out of hints: “You’re out of hints. Add more in Settings.” (later: “or Store”)
- Results title: “Great job!” / “Completed!” conditional by score

### Haptics & Sound

- Answer selected: light impact
- Correct reveal: success (notification)
- Incorrect reveal: warning (notification)
- Button press: light impact
- Purchase success: success (notification)

### Accessibility

- Contrast: minimum WCAG AA; ensure text over images uses gradient overlays
- Labels: all interactive controls have `accessibilityLabel`
- Dynamic Type: Body and captions scale with system settings
- Focus order: top to bottom; ensure modal focus trap inside BottomSheet

### Navigation Map (Routes & Sources)

- Home → CategoryDetail(categoryId)
- CategoryDetail → QuizStart(quizId)
- QuizStart → Quiz(quizId, difficulty)
- Quiz → QuizResults(summary)
- QuizStart (Professor and not premium) → PremiumStore (planned)
- Tab bar: Home, Progress [planned], Premium [planned], Settings

### States & Edge Cases (Per Screen)

- Home: Empty state if no categories (show placeholder card and refresh CTA)
- Category Detail: If category has no quizzes, informative empty card
- Quiz Start: If difficulty unavailable (rare), disable chip and show tooltip
- Quiz: When content errors occur (no answers or malformed), show error card with safe exit
- Results: If user quits early, compute based on answered questions; mark remaining as incorrect

### Export Guidance for Figma

- Create a library with these groups: Foundations, Components, Patterns, Screens
- Components must include variants for states (Default/Pressed/Disabled/Selected/Locked)
- Provide Auto‑layout frames with spacing tokens; use semantic layers naming (e.g., `btn/primary/default`)
- Icon set: import Feather 24px and define color via tokens
- For each screen, provide a single frame at 1179×2556 (iPhone 15 Pro) and a constraints note for stretch behavior

---
