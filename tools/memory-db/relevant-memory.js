const Database = require('better-sqlite3');
const fs = require('fs');
const path = require('path');

const DB_PATH = path.join(__dirname, 'memory.db');

function searchMemory(query, limit = 5) {
  const db = new Database(DB_PATH);
  
  // FTS5 search
  const stmt = db.prepare(`
    SELECT path, content, rank
    FROM memories
    WHERE memories MATCH ?
    ORDER BY rank
    LIMIT ?
  `);
  
  const results = stmt.all(query, limit);
  db.close();
  
  return results.map(r => ({
    path: r.path,
    snippet: r.content.substring(0, 200) + '...',
    relevance: r.rank
  }));
}

// CLI usage
if (require.main === module) {
  const query = process.argv[2];
  if (!query) {
    console.log('Usage: node relevant-memory.js "<query>"');
    process.exit(1);
  }
  
  const results = searchMemory(query);
  console.log(`Found ${results.length} relevant memories:\n`);
  results.forEach((r, i) => {
    console.log(`${i + 1}. ${r.path}`);
    console.log(`   ${r.snippet}`);
    console.log();
  });
}

module.exports = { searchMemory };
