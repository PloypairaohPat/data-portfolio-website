import { statSync } from 'node:fs';

// Evaluated at build time. Add the PDF and rebuild to show résumé links.
export const hasResume = statSync('public/resume.pdf', { throwIfNoEntry: false })?.isFile() ?? false;
