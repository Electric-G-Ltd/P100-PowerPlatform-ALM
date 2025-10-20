# Working Agreement – P100 PowerPlatform ALM

## Our Commitment

This repository operates under a structured, professional governance model designed to support focused, accessible work practices while maintaining quality and learning outcomes.

---

## Repository Context
- **Organization:** Electric-G-Ltd
- **Repository:** P100-PowerPlatform-ALM
- **Full Path:** `Electric-G-Ltd/P100-PowerPlatform-ALM`
- **Approving Authority:** Gareth (@electricgltd)

---

## Core Principles

### 1. One-Topic-At-A-Time Workflow
Work progresses on a single focused topic at any given time. This supports:
- **Deep focus** (ADHD-friendly work practice)
- **Clear scope** (prevents scope creep)
- **Quality outcomes** (attention to detail)
- **Learning integration** (systematic documentation)

**How it works:**
- One issue labeled `topic:active` at a time
- PRs must reference the active issue
- New work waits for the current topic to complete

### 2. Approval Discipline
All changes require approval from the designated authority (@electricgltd). This ensures:
- **Consistency** across the codebase
- **Quality gates** before merge
- **Ownership clarity** (one person knows everything)
- **Decision-making authority** (no ambiguity)

### 3. Learning-First Approach
Every change includes a "Teach-Back" section explaining the professional reasoning. This means:
- **Knowledge capture** (why decisions were made)
- **Onboarding clarity** (new contributors understand context)
- **Accessibility support** (explicit reasoning reduces confusion)
- **Sustainable systems** (decisions documented for the future)

---

## Accessibility Accommodation

This repository explicitly supports **ADHD-friendly work practices** through:
- **Structured systems** (external memory aids)
- **Clear naming conventions** (predictable patterns)
- **One-topic-at-a-time work** (reduced context switching)
- **Explicit documentation** (reduces ambiguity and cognitive load)
- **Systematic file organization** (discoverable structure)

---

## Issue & PR Workflow

### Naming Convention
All issues and PRs follow the format: **`25P###-Title-In-Kebab-Case`**

**Example:** `25P001-Project-Governance`

**Components:**
- `25` = Year (2025)
- `P` = Project prefix
- `###` = Sequential number
- `Title` = Descriptive, kebab-case

### Issue Lifecycle
1. **Create issue** with naming convention, description, and Teach-Back
2. **Label as `topic:active`** when work begins
3. **Create PR** referencing the issue
4. **Complete work** and request review
5. **Approval** from @electricgltd required
6. **Merge** and remove `topic:active` label

### PR Requirements
- Must reference an active issue
- Must include Teach-Back section (why this change, professional reasoning)
- Must pass all policy checks
- Must receive approval from @electricgltd

---

## Policy Gates & Automations

The repository enforces governance through GitHub Actions:

- **policy-one-topic.yml** → Prevents multiple `topic:active` labels
- **policy-active-topic-ref.yml** → Blocks PRs not referencing active issue
- **policy-approval-gate.yml** → Enforces @electricgltd approval

See `Governance/POLICY_GATES.md` for technical details.

---

## File Organization
