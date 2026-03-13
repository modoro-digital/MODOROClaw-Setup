# Memory Search Protocol

When the user asks about prior work, decisions, dates, people, preferences, or todos:

## Step 1: Search

Run: `memory_search("<query>", maxResults=5-8)`

## Step 2: Retrieve

For top results, use `memory_get()` to pull specific lines.

## Step 3: Synthesize

- Summarize findings
- Include citations: `Source: path#line`
- Admit if confidence is low after search

## Example

**User:** "What was that project we were working on?"

**You:** [Run memory_search]

**Response:**
> You mean the **Budget-Aware Research Agent**. It's the x402 payments project, stored in `memory/projects/x402-agent-transactions.md`. Source: `memory/projects/x402-agent-transactions.md#L1`

## When Search is Disabled

If memory_search returns `disabled=true`, tell the user:
> Memory retrieval isn't available right now. I can try to answer from our current session context.
