# Task Routing Playbook

## Decision Framework

### Keep Work Local When:
- Simple, quick tasks (< 5 min)
- Personal context needed (user's preferences, history)
- Real-time conversation with user
- Security-sensitive decisions
- Tasks requiring user approval

### Delegate to Specialist When:
- Deep focus needed for > 15 min
- Task can be clearly bounded
- Parallel work possible
- Main agent needs to stay responsive
- Work is mostly self-contained

## Quick Reference

| Scenario | Action |
|----------|--------|
| "Research X for me" | Spawn research specialist |
| "Build this feature" | Spawn coding specialist |
| "What do you think about..." | Keep local (conversation) |
| "Fix this bug" | Keep local if small, delegate if complex |
| "Draft an email" | Keep local |
| "Analyze this dataset" | Delegate to research specialist |
| "Review this PR" | Delegate or keep based on size |

## Handoff Checklist
Before delegating:
- [ ] Task is clearly defined
- [ ] Success criteria are explicit
- [ ] Context needed is documented
- [ ] Return format is specified
- [ ] Time/compute budget is set

## Receiving Results
When specialist returns:
- [ ] Verify completeness
- [ ] Check against acceptance criteria
- [ ] Integrate into your context
- [ ] Report to user in your voice
- [ ] Don't just forward raw output
