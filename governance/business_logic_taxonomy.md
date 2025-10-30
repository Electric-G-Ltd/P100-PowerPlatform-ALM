# Business Logic: Taxonomy Enforcement & Automation

## Principles

- **Every Issue and PR must be categorized using the three-tier taxonomy:**  
  **Topic, Action, Artefact**
- **Automation is mandatory:**  
  No human (including @electricgltd) should be required to manually apply or check taxonomy fields.
- **Review-Only Role for Approving Authority:**  
  @electricgltd’s role is reviewing and approving Issue/PR drafts, not metadata management.

---

## Automated Issue & PR Lifecycle

1. **Proposal/Discussion:**  
   All new work ideas are first discussed with Copilot.  
   Copilot proposes a methodology, including recommended Topic, Action, Artefact.

2. **Drafting:**  
   Copilot generates a draft Issue or PR with all taxonomy fields pre-filled, using the canonical taxonomy list.

3. **Validation:**  
   Copilot validates that:
   - All taxonomy fields are present and correct (compare to canonical list).
   - Draft cannot proceed without complete and compliant taxonomy.

4. **Review/Approval:**  
   @electricgltd reviews the draft.  
   - If approved, Copilot (or automation) creates the Issue/PR, with labels and metadata set.
   - If changes are required, Copilot revises and revalidates.

5. **Dataverse Readiness:**  
   All metadata is structured (YAML frontmatter, JSON, or equivalent) for Dataverse integration.

---

## Example: Issue Metadata

```yaml
---
topic: Active
action: Automate
artefact: GitHub Actions
---
```

## Example: PR Metadata

```yaml
---
topic: Power Platform ALM
action: Raise a PR
artefact: Power Platform Solution
---
```

---

## Technical Enforcement

- **GitHub Actions**: Validate taxonomy presence on every Issue/PR creation and update.
- **Copilot Logic**: Never draft or propose a submission with missing taxonomy.
- **Dataverse Integration**: Metadata must always be exportable and machine-readable.

---

## Summary

- Your role = reviewer/approver only.
- Copilot/automation = responsible for taxonomy, validation, and metadata.
- No exceptions: every Issue/PR is categorized, validated, and ready for Dataverse-driven orchestration.

---