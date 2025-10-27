# Contributing to P100-PowerPlatform-ALM

Thank you for contributing to this project! This guide explains how to work within our governance framework.

---

## Repository Context

- **Organization:** Electric-G-Ltd
- **Repository:** P100-PowerPlatform-ALM
- **Full Path:** `Electric-G-Ltd/P100-PowerPlatform-ALM`

---

## Quick Start

### 1. Understand the One-Topic-At-A-Time Workflow

At any given time, **only one topic is active**. Check the repository for the issue labeled `2-topic:active`.

If you want to start new work:

- Verify the current active topic is complete
- Request approval from @electricgltd to mark the new topic as `2-topic:active`
- Begin work once approved

### 2. Create an Issue

**Naming Convention:** `25P###-Title-In-Kebab-Case`

**Example:** `25P002-Database-Migration`

**Components:**

- `25` = Year (2025)
- `P` = Project prefix
- `###` = Sequential number
- `Title` = Descriptive title, kebab-case

**Issue Template:**
Use the standardized issue template (`.github/ISSUE_TEMPLATE/copilot-task.yml`). Include:

- **Objective:** What is the goal of this work?
- **Context:** Why is this work needed?
- **Acceptance Criteria:** How do we know it's complete? (use checkboxes)
- **Deliverables:** What will be delivered?
- **Teach-Back:** Explain the professional reasoning and what will be learned

# Contributing to P100-PowerPlatform-ALM

Thank you for contributing to this project! This guide explains how to work within our governance framework.

---

## Repository Context

- **Organization:** Electric-G-Ltd
- **Repository:** P100-PowerPlatform-ALM
- **Full Path:** `Electric-G-Ltd/P100-PowerPlatform-ALM`

---

## Quick Start

### 1. Understand the One-Topic-At-A-Time Workflow

At any given time, **only one topic is active**. Check the repository for the issue labeled `2-topic:active`.

If you want to start new work:

- Verify the current active topic is complete
- Request approval from @electricgltd to mark the new topic as `2-topic:active`
- Begin work once approved

### 2. Create an Issue

**Naming Convention:** `25P###-Title-In-Kebab-Case`

**Example:** `25P002-Database-Migration`

**Components:**

- `25` = Year (2025)
- `P` = Project prefix
- `###` = Sequential number
- `Title` = Descriptive title, kebab-case

**Issue Template:**
Use the standardized issue template (`.github/ISSUE_TEMPLATE/copilot-task.yml`). Include:

- **Objective:** What is the goal of this work?
- **Context:** Why is this work needed?
- **Acceptance Criteria:** How do we know it's complete? (use checkboxes)
- **Deliverables:** What will be delivered?
- **Teach-Back:** Explain the professional reasoning and what will be learned

## Repo Labelling System (Expanded Taxonomy)

We now use a 5-tier metadata system for all issues and PRs, supporting cross-platform orchestration and clarity.

### Tier 1: AREA (Choose one)

- `1-area:m365-agent` — Microsoft 365 agent logic
- `1-area:copilot-studio-agent` — Copilot Studio agent logic
- `1-area:power-apps` — Power Apps platform logic
- `1-area:sharepoint` — SharePoint integrations
- `1-area:planner` — Planner orchestration and buckets
- `1-area:dataverse` — Dataverse platform logic
- `1-area:custom-apis` — Custom API integrations
- `1-area:connectors` — Power Platform connectors and data connections
- `1-area:plugins` — Custom business logic and plugins
- `1-area:automation` — Power Automate solutions and flows
- `1-area:web-resources` — HTML, JavaScript, CSS resources
- `1-area:governance` — Documentation, policies, governance processes

### Tier 2: TOPICS (As applicable)

- `2-topic:active` — Currently being worked on (enforced one-at-a-time)
- `2-topic:research` — Exploratory or research work

### Tier 3: ACTIONS (As applicable)

- `3-action:issue-template` — Issue needs proper structure/template completion
- `3-action:raise-pr` — Ready to create PR
- `3-action:export-solution` — (To be added as processes develop)
- `3-action:import-solution` — (To be added as processes develop)
- `3-action:package-solution` — (To be added as processes develop)
- `3-action:review` — (To be added as processes develop)

### Tier 4: LAYER (Orchestration Layer, if relevant)

- `4-layer:interpretive-layer (IL)` — High-level reasoning, philosophy, assistant guidance (e.g. grounding files)
- `4-layer:operational-layer (OL)` — Day-to-day workflows, automation, and task execution (e.g. Planner flows, job lists)
- `4-layer:authoritative (AL)` — External standards, regulations, or official documents (e.g. BS 7671, Guidance Note 3)

### Tier 5: STRUCTURAL TYPE (Artefact Type, if relevant)

- `5-type:workflow-file (WF)` — File that defines operational steps or automation (e.g. Power Automate flows)
- `5-type:primary-source-document (PSD)` — Authoritative external/official document (e.g. NICEIC guidance)
- `5-type:procedural (PRO)` — Step-by-step workflow or automation logic (e.g. “when X happens, do Y”)
- `5-type:reference (REF)` — Cross-reference to another assistant, file, or section
- `5-type:agent-guide (AG)` — Section that defines how an assistant behaves or interprets information

---

**Usage Guidance**

- Always apply Tiers 1–3 for GitHub automation and board filtering.
- Tiers 4–5 are optional, for orchestration/governance context and cross-system alignment.
- Do not mirror SharePoint metadata 1:1—only add labels that improve GitHub automation and clarity.
- Priority remains a field, not a label (see previous standards).
- See label descriptions above for guidance.

**Example Issue Labels:**

Scenario: Creating a workflow file for Planner integration, governed by authoritative standards:

```
1-area:planner, 2-topic:active, 3-action:issue-template, 4-layer:authoritative, 5-type:workflow-file
```

## 3. Create a Pull Request

**Important:** Before creating a PR, ensure you understand the pipeline and CI/CD process documented in #43 (25P023).

### PR Naming & Linking

- **PR title:** Same as issue name: `25P###-Title-In-Kebab-Case`
- **PR description:** Must reference the active issue with `Closes #X`
- **Template:** Use the PR template at `governance/pull_request_template.md`

### Pipeline Checks

When you create a PR, GitHub automatically runs:

- **CodeQL Analysis** — Security and code quality scanning
- **Linting Checks** — Code style and formatting
- **Tests** — Automated test suite (if configured)

**Your responsibility:**

- Review all check results in the PR "Checks" tab
- Fix any failures by making local changes and pushing again
- Do NOT merge until all checks pass
- Document your fixes in the Teach-Back section

### CodeQL Handling

CodeQL is GitHub's automated security and code quality tool. If CodeQL flags issues in your PR:

**Policy:** Fix all CodeQL alerts before PR merge (unless explicitly approved to suppress).

**Approach:**

1. Fix one alert at a time (not all at once)
2. Commit with descriptive message
3. Push to the same branch (PR auto-updates)
4. Let pipeline re-run automatically
5. Repeat until all alerts resolved

**Why fix one at a time?**

- Isolates changes for easier debugging
- Provides clear pipeline feedback
- Simplifies code review
- Better for learning

**If unsure about an alert:**

- Leave a comment: `@electricgltd – Need guidance on this CodeQL alert: [description]`
- Reference the active issue
- Wait for guidance

For detailed guidance, see **Issue #43** (25P023): CodeQL and CI/CD Pipeline Code Suggestion Change Process

### Teach-Back Requirement

Every PR must include a comprehensive Teach-Back section in the description. Use the template:

```markdown
### Teach-Back: [Title]

**Decision:** [What was changed and why]

**Professional Reasoning:**

- [Reason 1]
- [Reason 2]

**What You'll Learn:**

- [Learning 1]
- [Learning 2]

**Trade-offs:**

- Pro: [Benefit]
- Con: [Cost]
```
