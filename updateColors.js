import fs from 'fs';
import path from 'path';

const directoryPath = path.join(process.cwd(), 'src');

const replacements = {
    // Opaques first to avoid partial matches
    'bg-bg-primary-opaque': 'bg-bg-base/60',
    'bg-bg-secondary-opaque': 'bg-primary-base/80',

    // Backgrounds
    'bg-bg-primary': 'bg-bg-base',
    'bg-bg-secondary': 'bg-primary-base',
    'bg-bg-tertiary': 'bg-secondary-base',

    // Texts
    'text-text-primary': 'text-text-base',
    'text-text-secondary': 'text-text-dark',
    'text-text-tertiary': 'text-text-dark/70',

    // Accents
    'bg-accent-primary': 'bg-accent1-base',
    'bg-accent-hover': 'bg-accent1-dark',
    'text-accent-primary': 'text-accent1-base',
    'text-accent-hover': 'text-accent1-light',

    // Borders
    'border-border-primary': 'border-secondary-base',
    'border-border-accent': 'border-accent1-base',

    // Alerts
    'text-success': 'text-alert-success',
    'text-danger': 'text-alert-error',
    'bg-success': 'bg-alert-success',
    'bg-danger': 'bg-alert-error'
};

function processDirectory(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.js')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            for (const [oldClass, newClass] of Object.entries(replacements)) {
                // Use a regex with negative lookbehind/lookahead to match whole words if possible,
                // but since Tailwind classes can have modifiers, simple global replace is fine
                // because we ordered the opaque ones first.
                const regex = new RegExp(oldClass, 'g');
                if (regex.test(content)) {
                    content = content.replace(regex, newClass);
                    modified = true;
                }
            }

            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated: ${fullPath}`);
            }
        }
    });
}

processDirectory(directoryPath);
console.log('Done.');
