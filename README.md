# OpenClaw Setup

A complete demo workspace for running an AI assistant with [OpenClaw](https://github.com/openclaw/openclaw). This repository contains templates, example files, and tools that you can adapt for your own personal assistant setup.

## What This Is

This is a reference implementation of a structured workspace for AI assistants. It includes:

- **Identity files** for defining your assistant's personality
- **Memory system** for long-term context and recall
- **Reflection framework** for longitudinal self-improvement
- **Operational tools** for security, memory search, and more
- **Example data** showing how to structure your own workspace

All example data uses fake personas and projects — no personal information is exposed.

## Quick Start

1. **Clone or download** this repository
2. **Copy** the files to your own workspace location
3. **Customize** the identity files for your assistant
4. **Update** the user profile with your own details
5. **Start** OpenClaw pointing to your workspace

## Repository Structure

```
.
├── README.md                 # This file
├── BOOTSTRAP.md              # First-run guide for new assistants
├── SOUL.md                   # Assistant's core philosophy
├── IDENTITY.md               # Assistant's persona details
├── USER.md                   # Human user profile
├── AGENTS.md                 # Operating rules and protocols
├── HEARTBEAT.md              # Automated check system
├── MEMORY.md                 # Memory index
├── meditations.md            # Reflection framework index
├── docs/                     # Documentation
│   ├── agent-architecture.md
│   ├── decision-template.md
│   ├── morning-brief-template.md
│   ├── silent-replies.md
│   └── task-routing.md
├── memory/                   # Memory storage
│   ├── people/               # People profiles
│   ├── projects/             # Project tracking
│   ├── decisions/            # Decision logs
│   └── YYYY-MM-DD.md         # Daily log examples
├── reflections/              # Meditation/reflection files
├── prompts/                  # Reusable prompt templates
│   ├── heartbeat-prompt.md
│   ├── meditation-prompt.md
│   ├── memory-search.md
│   └── session-start.md
└── tools/                    # Assistant tools
    ├── example-tool/         # Template for new tools
    ├── memory-db/            # SQLite + FTS5 memory search
    └── security/             # Security tools
```

## Key Concepts

### Identity Files

**SOUL.md** defines who your assistant is at their core — philosophy, values, behavioral principles. This is where you shape personality, not just capabilities.

**IDENTITY.md** contains surface-level details: name, pronouns, voice, emoji.

**USER.md** is your profile so the assistant knows who they're helping.

### Memory System

- **MEMORY.md**: Lightweight index (~1-2k tokens) loaded every session
- **memory/people/**: Profiles of people you interact with
- **memory/projects/**: Active projects and their status
- **memory/decisions/**: Important decisions with rationale
- **Daily logs**: Append-only journals of what happened each day

### Reflection System

The meditation framework lets assistants engage in longitudinal self-reflection. Topics are revisited over time until they crystallize into durable truths.

See `meditations.md` for the index and `reflections/` for examples.

### Operational Tools

- **memory-db/**: SQLite + FTS5 for fast memory search
- **security/**: Outbound filter and audit logging
- **example-tool/**: Template for creating new tools

## Customization Guide

1. **Start with SOUL.md**: Define your assistant's core philosophy
2. **Fill in USER.md**: The more your assistant knows, the better they can help
3. **Set up MEMORY.md**: Point to your active context files
4. **Create your first project**: Add something you're working on
5. **Delete BOOTSTRAP.md** after first run

## Safety Notes

- This demo uses **fake/example data only**
- No API keys, credentials, or personal information
- All examples are templates — replace with your own content
- Review `AGENTS.md` security section before running

## Related

- [OpenClaw](https://github.com/openclaw/openclaw) — The platform this workspace is designed for
- [OpenClaw Docs](https://docs.openclaw.ai) — Documentation and guides

## Contributing

This is a demo template. Adapt it, improve it, and make it your own! If you create useful additions, consider sharing them back.

## License

MIT — Use this however you want. Build something cool.

---

*Built by [Wes Sander](https://github.com/ucsandman) and [MoltFire](https://github.com/moltfire) as a reference implementation for the OpenClaw community.*
