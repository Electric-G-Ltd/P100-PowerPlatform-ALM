---
title: SharePoint Mega Data Tags
author: Gareth Youens
date_created: 2025-10-16T10:01:00+00:00
date_modified: 2025-10-20T15:19:00+00:00
source_file: SharePoint Meta Data Tags.docx
converted_at: 2025-10-20T17:25:55.995266
---

# SharePoint Mega Data Tags

W🗂️ Term Store – 25Q4 P100 Copilot Electrical Agent Suite
Term Group: 25Q4 P100 Copilot Electrical Agent Suite
🧩 Site Columns & Content Types
Managed Metadata Site Columns (bind each to the Term Set above)
Content Types
Using site columns + content types keeps tags consistent and indexable across libraries; reindex libraries after adding columns to speed up discovery. [(October 3...gent Suite], [Microsoft...umentation]
🗃️ Libraries & Folder Defaults (proposed on your site)
Site: https://electricgcouk.sharepoint.com/sites/25Q4P100CopilotElectricalAgentSuite2 (you can adjust names; these are intentionally pragmatic)
Why this structure
Keeps IL/OL/AL obvious via the library context (and folder defaults), while allowing Structural Type to vary per file.
Works well with SharePoint knowledge paths in Copilot (add up to four paths per agent and scope to specific libraries/folders for quality). [(October 3...gent Suite], [Week One o...tHub World]
🏷️ Tagging Examples (your current files mapped to the structure)
Use this as a working guide while you organize. Adjust library names if you prefer—your tags remain the same.
After moving/retagging, Reindex each library once so the new properties are quickly discoverable by search and Copilot. [(October 3...gent Suite]
☑️ Operational rules (copy into your Word guide)
Always set Layer (IL, OL, AL). It should be required. [Enabling b...SharePoint]
Set Structural Type per file (AG/REF/PRO/PSD/WF). Don’t default this at folder level except for Standards (AL) where PSD is common. [Enabling b...SharePoint]
Use folder defaults to pre-fill Layer (e.g., libraries/folders dedicated to IL/OL/AL). [(October 3...gent Suite]
Keep Knowledge Type and Agent Priority optional but consistent. Mark “must-use” guidance as Critical. [(October 3...gent Suite]
Enable Enterprise Keywords in each library during discovery; later, promote popular keywords into the Term Store. [(October 3...gent Suite]
When you add or change columns, Reindex the library to refresh search. [(October 3...gent Suite]
In Copilot Studio, scope knowledge to the specific libraries/folders above (avoid whole-site paths) and add at most four paths per agent; optionally upload key explainers as file knowledge. [Week One o...tHub World]

## Tables

| Term Set | Purpose | Terms (with short codes) | Notes |
| --- | --- | --- | --- |
| Layer | Identifies which conceptual layer the item belongs to | Interpretive Layer (IL); Operational Layer (OL); Authoritative Layer (AL) | Use descriptions from your Structure Table so taggers choose correctly. [Enabling b...SharePoint] |
| Structural Type | Identifies the role the item plays | Agent Guide (AG); Reference (REF); Procedural (PRO); Primary Source Document (PSD); Workflow File (WF) | Add labels “AG/REF/PRO/PSD/WF” as synonyms for quick tagging. [Enabling b...SharePoint] |
| Knowledge Type | Content “kind” | Explainer; Reference Table; SOP; Flow Spec; Pricing Notes; Copilot Studio Agent; Checklist | Keep closed initially; expand as patterns emerge. [Microsoft...umentation] |
| Copilot Agent | So the relevant Agent knows it’s for them | Electrical Agent (EA)
Planning Agent (PA)
Design and Costing Agent (DCA) |  |
| Agent Priority | Retrieval importance | Critical; Important; Reference | Use to boost “must-use” files in search relevance. [(October 3...gent Suite] |
| Lifecycle | Content maturity | Draft; In Review; Approved; Deprecated | Supports change control. [(October 3...gent Suite] |
| Material Group (optional for business docs) | Domain grouping (if needed for materials/tech specs) | Lighting; Cable; Junction Boxes; Distribution Boards; … | Include only where relevant; omit for general agent docs. [(October 3...gent Suite] |

| Site Column (internal name) | Display Name | Bound Term Set | Required? | Defaulting tip |
| --- | --- | --- | --- | --- |
| P100_Layer | Layer | Layer | Yes | Set by folder defaults in each library |
| P100_StructuralType | Structural Type | Structural Type | Yes | Set on upload/edit (varies per file) |
| P100_KnowledgeType | Knowledge Type | Knowledge Type | No | Optional (use for filtering) |
| P100_AgentPriority | Agent Priority | Agent Priority | No | Set Critical for must-use canon |
| P100_Lifecycle | Lifecycle | Lifecycle | No | Draft by default, approve later |
| P100_MaterialGroup | Material Group | Material Group | No | Only in technical/spec libraries |

| Content Type | Parent | Includes columns |
| --- | --- | --- |
| P100 Knowledge File | Document (0x0101) | Layer, Structural Type, Knowledge Type, Agent Priority, Lifecycle, (Material Group when needed) |
| P100 Rich Media Agent Asset | Digital Assets: Rich Media Assets | Layer, Structural Type, Knowledge Type, Agent Priority, Lifecycle |

| Library (proposed) | Purpose | Default Layer | Typical Structural Type(s) | Allowed CTs | Example folders → defaults |
| --- | --- | --- | --- | --- | --- |
| Guidance (IL) | Canon/grounding, conceptual guidance | IL | AG, REF | P100 Knowledge File | /Agents/ (IL, AG); /Concepts/ (IL, REF) |
| Workflows (OL) | Procedures, SOPs, flow specs, job lists | OL | PRO, WF | P100 Knowledge File | /Planner/ (OL, WF); /PowerAutomate/ (OL, WF); /SOPs/ (OL, PRO) |
| Standards (AL) | External standards & authoritative docs | AL | PSD | P100 Knowledge File | /BS7671/ (AL, PSD); /GN3/ (AL, PSD) |
| Agent Media | Screenshots/videos for agents (rich media) | OL (usually) | WF, REF | P100 Rich Media Agent Asset | /DesignCosting/ (OL, WF); /ElectricalAssistant/ (OL, REF) |

| File (observed) | Library → Folder | Layer | Structural Type | Knowledge Type | Priority | Lifecycle | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Electrical Assistant Structure Table.docx | Guidance (IL) → /Agents/ | IL | AG | Explainer | Important | Approved | Canon that defines IL/OL/AL and Structural Types. [Enabling b...SharePoint] |
| Electrical Assistant Grounding File | Guidance (IL) → /Agents/ | IL | AG | Explainer | Critical | Approved | Core grounding content for EA. [Enabling b...SharePoint] |
| Planning Assistant Grounding File | Guidance (IL) → /Agents/ | IL | AG | Explainer | Important | Approved | PA grounding. [Enabling b...SharePoint] |
| Design and Costing Grounding File | Guidance (IL) → /Agents/ | IL | AG | Explainer | Important | Approved | DCA grounding. [Enabling b...SharePoint] |
| Enabling better searchig for Agents in SharePoint.docx | Guidance (IL) → /Concepts/ | IL | REF | Explainer | Reference | Approved | Explains indexing, metadata, reindex; useful reference. [(October 3...gent Suite] |
| CCS_151025_1.docx | Guidance (IL) → /Concepts/ | IL | REF | Explainer | Reference | Approved | Best practices for metadata and Copilot knowledge scoping. [Microsoft...umentation] |
| Planner Notes.docx | Workflows (OL) → /Planner/ | OL | WF | Flow Spec | Reference | Draft | Operational notes/workflows. [GitHub Cop...of coding] |
| Microsoft Dataverse Documentation.docx | Standards (AL) → /GN3/ (or /Standards/) | AL | PSD | Reference | Important | Approved | Authoritative doc extracts & DLP notes. [P100 Groun...Structure] |
| Advanced-analysis-examples-with-Copilot-Analytics.pptx | Guidance (IL) → /Concepts/ | IL | REF | Reference | Reference | Approved | Learning/analysis reference. [P201 Proje...reer Agent] |
