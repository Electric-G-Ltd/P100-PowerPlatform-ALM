# Contributing to P100-PowerPlatform-ALM

Thank you for contributing to this project! This guide explains how to work within our governance framework.

## Repository Context

- **Organization:** Electric-G-Ltd
- **Repository:** P100-PowerPlatform-ALM
- **Full Path:** `Electric-G-Ltd/P100-PowerPlatform-ALM`

---

## Quick Start

### 1. One-Topic-At-A-Time Workflow

At any given time, **only one topic is active**. Check the repository for the issue labeled `Topic:Active`.

If you want to start new work:

- Ensure the current active topic is complete
- Request approval from @electricgltd to assign `Topic:Active` to your issue
- Begin work once approved

---

### 2. Create an Issue

**Naming Convention:** `25P###-Title-In-Kebab-Case`  
**Example:** `25P002-Database-Migration`

**Required Fields (in body, using the Copilot Issue template):**
- **Objective**: What is the goal of this work?
- **Context**: Why is this work needed?
- **Acceptance Criteria**: How do we know it's complete? (use checkboxes)
- **Deliverables**: What will be delivered?
- **Teach-Back**: Explain the professional reasoning and what will be learned

**See:** `.github/ISSUE_TEMPLATE/copilot-task.yml` for formatting.

---

## Label Taxonomy: One-Per-Category (MANDATORY)

All Issues and PRs **must** have exactly **one** label from each of the following categories:

### Topic (pick one)
- Active
- Research
- Power Platform ALM

### Action (pick one)
- Raise a PR
- Raise an Issue
- Export Solution
- Import Solution
- Package Solution
- Deploy
- Test
- Document Process
- Refractor
- Decommission
- Configure
- Sync
- Archive
- Automate

### Artefact (pick one)
- Copilot Studio Actions
- Dataverse Tables and Relationships
- Agent Orchestration Logic
- Power Automate Flows
- Environmental Variables
- Power Platform UI Forms
- Plug In Assemblies
- Custom Connectors
- Web Resources
- Documentation
- Diagram
- JSON Configuration
- XML Configuration
- GitHub Actions
- GitHub Flows
- GitHub Scripts
- GitHub App
- Powershell Automation
- Power Platform Solution

**Label Policy:**
- Apply exactly **one** label from each of Topic, Action, and Artefact to every Issue and PR.
- Do **not** use more than one label in any category.
- If a required label does not exist, Copilot/automation will pause and alert @electricgltd to add it before proceeding.
- No Issue or PR can be created until all three required labels are present.

**Why:**  
This ensures labels are unique, consistent, and ready for ALM and Dataverse integration.

**Example:**
> Automate packaging a Power Platform Solution via GitHub Action  
> `Topic:Active, Action:Automate, Artefact:GitHub Actions`

---

## 3. Create a Pull Request

**Important:** Before creating a PR, ensure you understand the pipeline and CI/CD process documented in #43 (25P023).

### PR Naming & Linking

- **PR title:** Same as issue name: `25P###-Title-In-Kebab-Case`
- **PR description:** Must reference the active issue with `Closes #X`
- **Template:** Use the PR template at `governance/pull_request_template.md`

### Labels

- Apply exactly one label from each: Topic, Action, Artefact (see taxonomy above).

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

---

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

---

## Automation & Dataverse Integration

- Copilot/automation will enforce label presence and correctness for every Issue and PR.
- If a label is missing, Copilot will pause and request @electricgltd to add it to the taxonomy.
- All metadata and fields must be exportable for Dataverse.
- @electricgltd’s role is to review and approve, not to manually assign labels or fix metadata.

---

## Policy: No Exceptions

- No Issue or PR can proceed without exactly one Topic, Action, and Artefact label.
- All other required fields must be completed as specified.

---

## Questions?

Ask @electricgltd or review the full set of governance files in the `/governance` directory.