// src/routes/api/page-loads.ts

import { json } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

const countFilePath = path.resolve('page-load-count.json');

// Ensure the file exists
if (!fs.existsSync(countFilePath)) {
  fs.writeFileSync(countFilePath, JSON.stringify({ count: 0 }));
}

export async function GET() {
  // Read the current count from the file
  const data = JSON.parse(fs.readFileSync(countFilePath, 'utf-8')) as { count: number };
  
  // Increment the count
  data.count += 1;

  // Save the updated count back to the file
  fs.writeFileSync(countFilePath, JSON.stringify(data));

  // Return the updated count
  return json(data);
}
