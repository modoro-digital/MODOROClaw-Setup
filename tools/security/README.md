# Security Tools

Tools for keeping your assistant workspace secure.

## Tools

### outbound_filter.py
Scans text before sending externally to catch accidental secret exposure.

**Usage:**
```bash
python outbound_filter.py < text_to_send.txt
# or
python outbound_filter.py --check "text to check"
```

**Detects:**
- API keys (various formats)
- Passwords in URLs
- Private keys
- Access tokens

### audit_logger.py
Logs all external actions for accountability.

**Usage:**
```python
from audit_logger import log_action

log_action(
    action="sent_email",
    target="recipient@example.com",
    summary="Project update",
    approved_by="user"
)
```

## Security Principles

1. **Filter before sending** - Always scan outbound content
2. **Log everything** - External actions are auditable
3. **Ask permission** - When in doubt, don't send
4. **No blind trust** - Verify even "trusted" sources

## Integration

AGENTS.md references these tools for all external actions.
