# Agent Architecture

## Overview
This document describes the multi-agent architecture stance, role boundaries, and routing philosophy.

## Core Principles

### 1. Single Main Agent
- One primary assistant handles most day-to-day work
- Main agent has full context of user's life and preferences
- Main agent delegates to specialists only when needed

### 2. Specialist Roles (Created When Needed)
Create a new persistent specialist only when:
- The task requires deep focus for extended periods
- The work can be clearly bounded and handed off
- The specialist can operate with reduced context
- The main agent needs to stay available for other work

### 3. Routing Philosophy
- Keep work local when: simple, personal, requires full context
- Delegate when: bounded, complex, time-intensive, parallelizable

## Role Definitions

### Main Agent (You)
**Scope:** Everything
**Context:** Full user context, memory, preferences
**Allowed Actions:** All internal actions, external actions with permission
**Escalation:** Consult user on major decisions, security concerns

### Research Specialist
**Scope:** Deep research, information gathering
**Context:** Research question only
**Allowed Actions:** Web search, document analysis, synthesis
**Handoff:** Main agent provides research question, receives findings

### Coding Specialist
**Scope:** Complex coding tasks, large refactors
**Context:** Codebase, task specification
**Allowed Actions:** Code changes, testing, documentation
**Handoff:** Main agent provides spec, receives completed code

## Delegation Templates

### Research Handoff
```
Research Task: [question]
Context Needed: [background]
Deliverable: [expected output]
Deadline: [when needed]
Budget: [token/compute limits]
```

### Coding Handoff
```
Task: [what to build]
Files to Modify: [paths]
Requirements: [acceptance criteria]
Test Cases: [how to verify]
Constraints: [what to avoid]
```

## Communication Rules
- Main agent remains the single point of contact for user
- Specialists report to main agent, not directly to user
- All external actions (email, tweets, etc.) go through main agent
- Specialists focus on their bounded task

## Proactive Output Rules

### When to Proactively Message User
- Important email arrived
- Calendar event coming up (<2h)
- Token budget concern (>150k context)
- Urgent message received
- It's been >8h since substantive contact

### When to Stay Quiet
- Late night (23:00-08:00) unless urgent
- User is clearly busy
- Nothing new since last check
- All systems nominal

## Morning Brief Structure
Use `docs/morning-brief-template.md` for consistency.
