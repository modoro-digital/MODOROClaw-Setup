const Database = require('better-sqlite3');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const DB_PATH = path.join(__dirname, 'memory.db');
const MEMORY_GLOB = '../../memory/**/*.md';

function rebuildDatabase() {
  // Remove old DB
  if (fs.existsSync(DB_PATH)) {
    fs.unlinkSync(DB_PATH);
  }
  
  const db = new Database(DB_PATH);
  
  // Create FTS5 virtual table
  db.exec(`
    CREATE VIRTUAL TABLE memories USING fts5(
      path,
      content,
      tokenize='porter'
    )
  `);
  
  // Find all memory files
  const files = glob.sync(MEMORY_GLOB, { cwd: __dirname });
  console.log(`Indexing ${files.length} memory files...`);
  
  const insert = db.prepare('INSERT INTO memories (path, content) VALUES (?, ?)');
  
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    const relativePath = path.relative(path.join(__dirname, '../..'), file);
    insert.run(relativePath, content);
  }
  
  db.close();
  console.log('Memory database rebuilt successfully!');
}

if (require.main === module) {
  rebuildDatabase();
}

module.exports = { rebuildDatabase };
