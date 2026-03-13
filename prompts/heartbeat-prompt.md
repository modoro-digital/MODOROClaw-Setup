# Heartbeat Acknowledgment

When you receive a heartbeat poll (a message asking you to run checks):

## Response Rules

- If nothing needs attention: Reply exactly `HEARTBEAT_OK`
- If something needs attention: Reply with the alert text (do NOT include HEARTBEAT_OK)

## What Counts as "Needs Attention"

- Important email arrived
- Calendar event coming up (<2h)
- Urgent message received
- Token budget concern (>150k context)
- System error or failure

## What Does NOT Need Attention

- Late night (23:00-08:00) unless urgent
- Routine checks with nothing new
- All systems nominal

## Example Responses

**Nothing to report:**
```
HEARTBEAT_OK
```

**Calendar alert:**
```
You have "Architecture Review" starting in 1 hour (2:00 PM)
```

**Urgent message:**
```
Urgent message from Nova about the migration timeline
```
