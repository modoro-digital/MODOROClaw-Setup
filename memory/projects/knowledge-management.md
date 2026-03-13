# Knowledge Management Tool

## Status
Active development

## Started
2026-02-15

## Overview
Building a personal knowledge management system with AI-powered connections between notes. Think Obsidian but with automatic semantic linking and AI-assisted organization.

## Goals

1. **Capture**: Easy note-taking from any device
2. **Connect**: Automatic discovery of related notes
3. **Surface**: AI helps find relevant notes when needed
4. **Extend**: Plugin system for custom workflows

## Tech Stack

- **Backend**: Python, FastAPI, PostgreSQL
- **Frontend**: React, TypeScript, Tailwind
- **AI**: OpenAI API for embeddings and completions
- **Search**: pgvector for semantic similarity
- **Hosting**: Local first, cloud sync option

## Current Progress

### Completed
- [x] Basic FastAPI server setup
- [x] Database schema design
- [x] Note CRUD API
- [x] Simple React frontend
- [x] OpenAI embedding integration

### In Progress
- [ ] Semantic search endpoint
- [ ] Related notes discovery
- [ ] Frontend note editor
- [ ] Import from Obsidian

### Backlog
- [ ] Mobile app
- [ ] Plugin system
- [ ] Collaboration features
- [ ] Cloud sync

## Decisions

**2026-02-20**: Chose PostgreSQL + pgvector over dedicated vector DB for simplicity
- Reason: One less service to manage
- Trade-off: May hit scaling limits eventually

**2026-03-01**: Decided on local-first architecture
- Reason: Privacy for personal notes
- Trade-off: Sync is harder to implement

## Blockers

None currently

## Next Actions

1. Finish semantic search endpoint (this week)
2. Build proper note editor with markdown support
3. Add tag system for manual organization
4. Deploy MVP for personal use

## Resources

- Similar tools: Obsidian, Roam Research, Notion
- Inspiration: Andy Matuschak's notes, Zettelkasten method
- Technical reference: OpenAI embedding docs, pgvector docs

---

*Last updated: 2026-03-10*
