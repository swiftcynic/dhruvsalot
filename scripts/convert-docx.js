const mammoth = require('mammoth');
const fs = require('fs');
const path = require('path');

(async () => {
  try {
    const repoRoot = path.resolve(__dirname, '..');
    const input = path.join(repoRoot, 'public', 'DHRUV SALOT.docx');
    if (!fs.existsSync(input)) {
      throw new Error('DOCX file not found: ' + input);
    }

    console.log('Converting', input);
    const result = await mammoth.convertToHtml({ path: input });
    const html = result.value; // The generated HTML string

    // Wrap into a React component
    const componentPath = path.join(repoRoot, 'components', 'ResumeDocx.js');
    const componentSource = `import React from 'react';\n\nexport default function ResumeDocx() {\n  return (\n    <div className=\"docx-html\" dangerouslySetInnerHTML={{ __html: ${JSON.stringify(html)} }} />\n  );\n}\n`;

    fs.writeFileSync(componentPath, componentSource, 'utf8');
    console.log('Wrote React component to', componentPath);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
