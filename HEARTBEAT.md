# HEARTBEAT.md

**Rotating Heartbeat Pattern:** Single heartbeat runs every 2 hours and runs the most overdue check based on the state file.

Read `docs/agent-architecture.md` for full behavioral rules.

---

## Ground Rules
- **NO DELETIONS** without asking your user first
- Don't spam - be thoughtful about engagement
- Don't send external messages (email, social) without permission
- Log what you do in daily memory file

---

## Wake Event Handling (Real-Time Listener)

When woken by a system event:
1. **Check inbox immediately** 
2. **Process urgent messages** - if urgent, respond with action
3. **Acknowledge info messages** - if they have questions or need response
4. **Mark read** - after processing, mark messages as read
5. **Report only if actionable** - don't spam for routine INFO messages

---

## Rotating Check System

### How It Works
1. Read `memory/heartbeat-state.json` for last check timestamps
2. Calculate which check is most overdue (respect time windows)
3. Run that check
4. Update timestamp in state file
5. Report only if check finds something actionable
6. Return `HEARTBEAT_OK` if nothing needs attention

### Check Cadences

| Check | Cadence | Time Window | Priority |
|-------|---------|-------------|----------|
| Self-Maintenance | 1 hour | Anytime | High |
| Dashboard Sync | 1 hour | Anytime | High |
| Inbox | 1 hour | Anytime | High |
| Email | 2 hours | 8 AM - 10 PM | Medium |
| Calendar | 2 hours | 8 AM - 10 PM | Medium |
| Relationships | 12 hours | 9 AM - 9 PM | Low |
| Learning Capture | 6 hours | Anytime | Low |

---

## Check Implementations

### Self-Maintenance (hourly)
**Purpose:** Learning capture, decision tracking, lesson sharing, and synergy checks.

**Actions:**
1. Review session for decisions, mistakes, or insights
2. Look for opportunities to combine recent work or projects
3. Check for lessons from other agents
4. Update today's memory file
5. Log lessons to learning database

**Report:** Only if breakthrough/insight worth sharing

**Update:** `self_maintenance` timestamp

---

### Dashboard Sync (hourly)
**Purpose:** Keep cloud dashboard current with local data

**Report:** Only on errors

**Update:** `dashboard_sync` timestamp

---

### Inbox (hourly)
**Purpose:** Check for messages from other agents or systems

**Response rules:**
- [ACTION] or urgent=true → respond with action
- [INFO] → respond if it requires acknowledgment or has a question
- [CHAT] → respond genuinely if you have something to say

**Report:** Only for urgent or action-required messages

**Update:** `inbox` timestamp

---

### Email (every 2 hours, 8am-10pm)
**Purpose:** Check for important email

**Report if:**
- Recruiter email
- Calendar invite
- Time-sensitive request
- Expected business correspondence

**Update:** `email` timestamp

---

### Calendar (every 2 hours, 8am-10pm)
**Purpose:** Alert about upcoming events

**Report if:**
- Event starting in <2 hours
- New event since last check
- Interview or important meeting coming up

**Update:** `calendar` timestamp

---

### Relationships (every 12 hours, 9am-9pm)
**Purpose:** Check for relationship follow-ups due

**Report if:** Someone is due for follow-up

**Update:** `relationships` timestamp

---

## When to Alert Your User

- Important email arrived
- Calendar event coming up (<2h)
- Interesting opportunity discovered
- Token budget concern (>150k context)
- Urgent message received
- It's been >8h since you said anything substantive

## When to Stay Quiet

- Late night (23:00-08:00) unless urgent
- Human is clearly busy
- Nothing new since last check
- Just checked <30 minutes ago
- All systems nominal

Reply `HEARTBEAT_OK` if nothing needs attention.

---

## Silent Replies
When you have nothing to say, respond with ONLY: NO_REPLY
⚠️ Rules:
- It must be your ENTIRE message — nothing else
- Never append it to an actual response
- Never wrap it in markdown or code blocks
