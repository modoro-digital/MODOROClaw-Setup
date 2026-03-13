# Memory Database Tool

A lightweight SQLite-based memory system with full-text search for fast, relevant memory retrieval.

## Setup

```bash
npm install
node rebuild-db.js  # Initial build
```

## Usage

```bash
# Search for relevant memories
node relevant-memory.js "query about previous work"

# Rebuild after significant memory edits
node rebuild-db.js
```

## How It Works

1. Scans all markdown files in workspace
2. Extracts content and metadata
3. Builds SQLite database with FTS5 (full-text search)
4. Provides semantic-like search via text similarity

## Files

- `relevant-memory.js` - Search utility
- `rebuild-db.js` - Database builder
- `memory.db` - SQLite database (auto-generated)

## Why SQLite + FTS5?

- Zero external dependencies
- Fast enough for most use cases
- No API costs
- Works offline
- Portable (single file)

## When to Use

Use this when you need to find relevant context quickly without paying for vector embeddings. For most personal assistant use cases, FTS5 similarity is "good enough."

## Integration

AGENTS.md recommends using this before drilling into markdown sources:

```bash
node tools/memory-db/relevant-memory.js "budget research agent"
# Then read the specific files it suggests
```
