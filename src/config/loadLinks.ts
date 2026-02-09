import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parse } from 'yaml';

export interface SnsEntry {
  name: string;
  url: string;
  icon: string;
  color: string;
}

export interface FooterLink {
  name: string;
  url: string;
}

export interface Sponsor {
  name: string;
  url: string;
}

export interface LinksConfig {
  sns: Record<string, SnsEntry>;
  footerBar: string[];
  footerLinks: FooterLink[];
  sponsor: Sponsor;
}

const yamlPath = resolve(process.cwd(), 'src/config/links.yaml');
const raw = readFileSync(yamlPath, 'utf-8');
export const linksConfig: LinksConfig = parse(raw);
