import fs from 'fs';

const files = ['Dashboard.jsx', 'Portfolio.jsx', 'Transactions.jsx', 'Budgets.jsx', 'Accounts.jsx'];

files.forEach(f => {
    const path = 'src/pages/' + f;
    let content = fs.readFileSync(path, 'utf8');
    content = content.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');
    fs.writeFileSync(path, content);
    console.log(`Fixed comments in ${f}`);
});
