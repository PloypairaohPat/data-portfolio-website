import { statSync } from 'node:fs';

// Evaluated at build time. Add the PDF and rebuild to show resume links.
export const resumePath = '/Pat_Ploypairaoh_Resume.pdf';
export const hasResume = statSync(`public${resumePath}`, { throwIfNoEntry: false })?.isFile() ?? false;
export const email = 'ploypairaohpat@gmail.com';
export const linkedin = 'https://www.linkedin.com/in/pat-ploypairaoh/';
