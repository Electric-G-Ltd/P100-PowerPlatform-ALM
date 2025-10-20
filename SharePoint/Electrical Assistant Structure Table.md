---
title: Table of roles and interactions for orchestration
author: Gareth Youens
date_created: 2025-06-21T11:57:00+00:00
date_modified: 2025-10-16T23:25:00+00:00
source_file: Electrical Assistant Structure Table.docx
converted_at: 2025-10-20T17:25:55.883283
---

# Table of roles and interactions for orchestration

Agent Orchestration: The Structure Table provides an index and orchestration logic
Table 1: Agent Orchestration
Note: For clarity, the numbering in the 'Row Ref' column of Table 1b restarts from 1 and matches the numbering style of Table 1a.
Table 2: Agent Orchestration Con't
✅ Clear Definitions
🔹 Layer
This describes the level of abstraction or type of logic the row belongs to. It tells you where in the assistant system the logic sits.
🔹 Structural Type
This describes the function or role of the row in the table. It tells you what kind of logic or reference the row represents.
🧠 How to Use Them Together
Here’s how a few rows might look when the two are used correctly:

## Tables

| Row Ref | Layer | Structural Type | Agent | File | Section | From Agent | To Agent |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  | IL | AG | Electrical Assistant | Electrical Assistant Grounding File | The first paragraph and Contents |  |  |
|  | IL | AG | Planning Assistant | Planning Assistant Grounding File | The first paragraph and Contents |  |  |
|  | IL | AG | Design and Costing Assistant | Design and Costing Grounding File | The first paragraph and Contents |  |  |
|  | IL | AG | Electrical Assistant | Electrical Assistant Grounding File | Planning and Organisation |  |  |
|  | IL | AG | Electrical Assistant | Electrical Assistant Grounding File | ADHD |  |  |
|  | IL | REF | Electrical Assistant | Planning Assistant Grounding File | Overview of Process | Electrical Assistant | Planning Assistant |
|  | IL | AG | Planning Assistant | Planning Assistant Grounding File | Control |  |  |
|  | OL | PRO | Planning Assistant | Planning Assistant Grounding File | Control |  |  |
|  | OL | PRO | Planning Assistant | Planning Assistant Grounding File | Control |  |  |
|  | OL | PRO | Planning Assistant | Planning Assistant Grounding File | Control | Outlook MCP Connector | Planner |
|  | OL | PRO | Planning Assistant | Planning Assistant Grounding File | Control | Outlook MCP Connector | Planner |
|  | OL | PRO | Planning Assistant | Planning Assistant Grounding File | Control | Outlook MCP Connector | Weekly Review |
|  | OL | PRO | Planning Assistant | Planning Assistant Grounding File | Control | Outlook MCP Connector | Planner |
|  | IL | REF | Electrical Assistant | Design and Costing Grounding File | Costing and Statement of Work | Electrical Assistant | Design and Costing Assistant |
|  | OL | PRO | Electrical Assistant | Electrical Assistant Grounding File | EICR Process |  |  |
|  | AL | PRO | Electrical Assistant | Electrical Assistant Grounding File | Installation Process |  |  |
|  | IL | AG | Electrical Assistant | Electrical Assistant Grounding File | Testing and Electrical Theory |  |  |
|  | IL | AG | Electrical Assistant | Electrical Assistant Grounding File | Testing and Electrical Theory |  |  |
|  | IL | AG | Electrical Assistant | Electrical Assistant Grounding File | Testing and Electrical Theory |  |  |
|  | IL | AG | Electrical Assistant | Electrical Assistant Grounding File | Testing and Electrical Theory |  |  |
|  | IL | AG |  | Electrical Assistant Grounding File | Fault Finding |  |  |
|  | IL | AG |  | Electrical Assistant Grounding File | Emergency Lighting |  |  |
|  |  |  |  |  |  |  |  |

| Row Ref | Primary Tag | Agent Action or Trigger Condition | Output | Flow summary section | Purpose |
| --- | --- | --- | --- | --- | --- |
|  | #MasterNarrative |  |  |  | What - Provides a guide to the Electrical Assistant Agent. Why -to provide an overview of the Electrical Assistant's whole structure |
|  | #MasterNarrative |  |  |  | What - Provides a guide to the Planning Assistant Agent. Why -to provide an 3overview of the Planning Assistant's whole structure |
|  | #MasterNarrative |  |  |  | What - Provides a guide to the Design and Coasting Assistant Agent. Why -to provide an overview of the Design and Costing Assistant's whole structure |
|  | #Productivity |  |  |  | Gives an explanation of the Planning Assistant's role with respect to planning a deep life. |
|  | #ADHD |  |  |  | An overview of ADHD to assist with supporting planning for my brain functionality. |
|  | #Productivity |  |  |  |  |
|  | #Control | Trigger Topic #Weekly Planning #TimeBlockPlanning
#FullCapture | Weekly Planning Review |  | Defines how the assistant structures the week. |
|  | #TimeBlockPlanning | Trigger: “Run the weekly reporting” | JSON or Outlook Calendar entries | Initiates weekly reporting on TimeBlockPlanning. The report compares the accuracy of the planner tasks from the Full Capture Plan and Quarterly Plan with those from the Calendar. | Compare planner tasks from Full Capture and Quarterly Plan with actual calendar entries |
|  | #OutlookMCP | Flagged email, new calendar event, or weekly review | Planner task creation, calendar sync, metadata tagging | Automates task creation and scheduling from Outlook | Automates task creation, scheduling, and weekly reporting using Outlook email and calendar data |
|  | #OutlookMCP #FullCapture | Email flagged in Outlook | Planner task created in appropriate bucket | Extracts email content and creates task with metadata | Automates Full Capture from email |
|  | #OutlookMCP #TimeBlockPlanning | New calendar event created | Planner task updated with actual time and notes | Matches calendar event to task and updates status | Syncs Time Block Planning with Planner |
|  | #OutlookMCP #PlanningAccuracy #Simplification | Weekly trigger (Sunday evening) | Report comparing estimated vs actual time | Extracts time data from Planner and calendar | Supports planning accuracy and simplification |
|  | #OutlookMCP #TaskRouting | Email flagged with subject tag (e.g. #EICR) | Task routed to correct Planner bucket | Parses subject line and applies routing logic | Automates task triage and delegation |
|  | #Costing |  |  |  | Costings, Quotes and Statements of work will be created using a Design and Costing Assistant. |
|  | #EICR |  |  |  | Outlines the EICR process at a high level. |
|  | #Install |  |  |  | Outlines the installation process at a high level |
|  | #testing |  |  |  | Outline of the tests and kit. |
|  | #testinginitial |  |  |  | Outline of initial testing |
|  | #testingEICR |  |  |  | Outline of the tests relevant to EICR reporting. |
|  | #testingtheory |  |  |  |  |
|  | #faultfinding |  |  |  | An outline of fault-finding |
|  | #emergencylighting |  |  |  | An outline emergency lighting design, installation, testing and maintenance. |
|  |  |  |  |  |  |

| Layer | Meaning |
| --- | --- |
| Interpretive Layer (IL) | High-level reasoning, philosophy, or assistant guidance (e.g. grounding files) |
| Operational Layer (OL) | Day-to-day workflows, automation, and task execution (e.g. Planner flows, job lists) |
| Authoritative Layer (AL) | External standards, regulations, or official documents (e.g. BS 7671, Guidance Note 3) |

| Structural Type | Meaning |
| --- | --- |
| Agent Guide (AG) | A section that defines how an assistant behaves or interprets information (interpretive logic) |
| Reference (REF) | A cross-reference to another assistant, file, or section—used to link logic or context |
| Procedural (PRO) | A step-by-step workflow or automation logic (e.g. “when X happens, do Y”) |
| Primary Source Document (PSD) | An authoritative external or official document (e.g. NICEIC guidance) |
| Workflow File (WF) | A file that defines operational steps or automation (e.g. Power Automate flows) |

| Structural Type | Layer | Agent | Section | Purpose |
| --- | --- | --- | --- | --- |
| Agent Guide | Interpretive Layer | Planning Assistant | Weekly Template | Defines how the assistant structures your week |
| Procedural | Operational Layer | Design and Costing Assistant | Job Generation | Creates scoped job list when quote is accepted |
| Reference | Interpretive Layer | Electrical Assistant → Planning Assistant | Overview of Process | Links planning logic to electrical workflow |
| Primary Source Document | Authoritative Layer | Electrical Assistant | EICR Process | Aligns with BS 7671 and NICEIC guidance |
