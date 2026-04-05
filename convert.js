import fs from 'fs';

const fixJSX = (html) => {
    return html
        .replace(/class=/g, 'className=')
        .replace(/stroke-width=/gi, 'strokeWidth=')
        .replace(/stroke-dasharray=/gi, 'strokeDasharray=')
        .replace(/preserveaspectratio=/gi, 'preserveAspectRatio=')
        .replace(/viewbox=/gi, 'viewBox=')
        // fix <lineargradient> to <linearGradient> usually handled by React but lowercase is bad
        .replace(/<lineargradient/gi, '<linearGradient')
        .replace(/<\/lineargradient>/gi, '</linearGradient>')
        .replace(/stop-color=/gi, 'stopColor=')
        .replace(/stop-opacity=/gi, 'stopOpacity=')
        // SVG styling
        .replace(/clip-path=/gi, 'clipPath=')
        .replace(/fill-rule=/gi, 'fillRule=')
        .replace(/stroke-linecap=/gi, 'strokeLinecap=')
        .replace(/stroke-linejoin=/gi, 'strokeLinejoin=')
        .replace(/for=/gi, 'htmlFor=')
        // Fix style strings to objects: style="font-variation-settings: 'FILL' 1;"
        .replace(/style="font-variation-settings:\s*'FILL'\s*([0-9]+);?"/g, `style={{fontVariationSettings: "'FILL' $1"}}`)
        .replace(/style="font-variation-settings:\s*'FILL'\s*([0-9]+),\s*'wght'\s*([0-9]+),\s*'GRAD'\s*([0-9|-]+),\s*'opsz'\s*([0-9]+);?"/g, `style={{fontVariationSettings: "'FILL' $1, 'wght' $2, 'GRAD' $3, 'opsz' $4"}}`)
        // Fix inline styles like top: x, left: y etc
        .replace(/style="height: ([^"]+);"/gi, 'style={{height: "$1"}}')
        .replace(/style="width: ([^"]+);"/gi, 'style={{width: "$1"}}')
        .replace(/style="([a-zA-Z-]+):\s*([^";]+);?"/g, (match, p1, p2) => {
            if (p1.includes('font-variation')) return match; // skip already converted
            const camelP1 = p1.replace(/-([a-z])/g, g => g[1].toUpperCase());
            return `style={{${camelP1}: "${p2}"}}`;
        });
};

const processFile = (inFile, outName, compName) => {
    try {
        const content = fs.readFileSync(inFile, 'utf8');
        const mainMatch = content.match(/<main[\s\S]*?>([\s\S]*?)<\/main>/i);
        if (!mainMatch) {
            console.log(`No <main> found in ${inFile}`);
            return;
        }
        let mainContent = fixJSX(mainMatch[1]);

        // fix unclosed inputs and imgs uniquely 
        mainContent = mainContent.replace(/<input([^>]*?)>/g, (match, p1) => {
            if (p1.trim().endsWith('/')) return match; // already closed
            return `<input${p1} />`;
        });

        mainContent = mainContent.replace(/<img(.*?)>/g, (match, p1) => {
            if (p1.trim().endsWith('/')) return match; // already closed
            return `<img${p1} />`;
        });

        const jsx = `import React from 'react';\n\nconst ${compName} = () => {\n  return (\n    <div className="animate-in fade-in duration-500">\n${mainContent}\n    </div>\n  );\n};\n\nexport default ${compName};\n`;
        fs.writeFileSync(`src/pages/${outName}.jsx`, jsx);
        console.log(`Successfully converted ${inFile} to ${outName}.jsx`);
    } catch (e) {
        console.error(`Failed to process ${inFile}: ${e}`);
    }
};

processFile('stitch_dashboard.html', 'Dashboard', 'Dashboard');
processFile('stitch_portfolio.html', 'Portfolio', 'Portfolio');
processFile('stitch_budgets.html', 'Budgets', 'Budgets');
processFile('stitch_accounts.html', 'Accounts', 'Accounts');
processFile('stitch_transactions.html', 'Transactions', 'Transactions');
