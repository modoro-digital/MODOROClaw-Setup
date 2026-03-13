# Example Tool Template

This is a template for creating new tools for your assistant.

## Structure

```
tools/example-tool/
├── README.md          # This file - what the tool does
├── example-tool.js    # Main implementation
├── package.json       # Dependencies (if Node)
└── config.json        # Tool configuration (optional)
```

## Creating a New Tool

1. **Copy this directory**: `cp -r tools/example-tool tools/my-new-tool`
2. **Rename files**: Update `example-tool.js` to your tool name
3. **Update README.md**: Describe what your tool does
4. **Implement**: Write your tool logic
5. **Test**: Run it manually to verify
6. **Integrate**: Reference from AGENTS.md or skills

## Tool Guidelines

- **Single purpose**: Each tool should do one thing well
- **CLI-friendly**: Support command-line usage
- **Documented**: Clear README with examples
- **Reversible**: Prefer actions that can be undone
- **Safe**: Don't expose secrets or credentials

## Example Usage

```bash
# Direct execution
node tools/example-tool/example-tool.js --option value

# From AGENTS.md reference
node tools/my-tool/my-tool.js "input data"
```

## Integration with AGENTS.md

Add to your AGENTS.md:

```markdown
## My Tool
**Tool:** `tools/my-tool/my-tool.js`
**Purpose:** Brief description
**Usage:** `node tools/my-tool/my-tool.js [args]`
```

This makes it discoverable for your assistant.
