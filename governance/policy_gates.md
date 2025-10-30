# Policy Gates – P100 PowerPlatform ALM

This repository enforces governance using GitHub Actions (automation workflows).

## Enforced Policies

- **policy_one_topic.yml:**  
  Prevents more than one open Issue with the `1 Topic: Active` label.

- **policy_active_topic.yml:**  
  PRs must reference the active Issue (with `1 Topic: Active` label).

- **policy_approval_gate.yml:**  
  PRs require explicit approval from @electricgltd.

- **policy_label_enforcement.yml:**  
  All Issues/PRs must have exactly one Topic, one Action, and one Artefact label (see `label_taxonomy.md`). No extras or unapproved labels are allowed.

## Guidance

- If a workflow fails, read the error message and consult the relevant policy file.
- All policies are strict—no exceptions without @electricgltd approval.