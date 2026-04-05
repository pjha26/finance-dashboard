import { Wallet, Landmark, CreditCard } from 'lucide-react';

const Accounts = () => {
    const accounts = [
        { name: 'Sovereign Checking', type: 'Bank Account', balance: 12450.00, mask: '••• 8432', icon: Landmark },
        { name: 'Elite Credit', type: 'Credit Card', balance: -1420.50, mask: '••• 9201', icon: CreditCard },
        { name: 'Vanguard Vault', type: 'Savings Vault', balance: 35000.00, mask: '••• 1120', icon: Wallet },
    ];

    return (
        <div className="flex flex-col gap-8 pb-16 animate-in fade-in duration-500">
            <header>
                <h1 className="text-4xl lg:text-[2.5rem] leading-none font-black tracking-tight font-display text-foreground">Accounts & Vaults</h1>
                <p className="text-muted-foreground mt-2 text-sm max-w-sm">Manage connected ledgers and elite vaults.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {accounts.map((a, i) => (
                    <div key={i} className="bg-surface rounded-xl p-6 shadow-[0_4px_24px_-4px_rgba(11,28,48,0.02)] flex flex-col gap-6 relative overflow-hidden group hover:shadow-[0_8px_32px_-4px_rgba(11,28,48,0.06)] transition-all">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-brand/10 transition-colors" />

                        <div className="flex items-start justify-between relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-surface-alt text-brand rounded-xl">
                                    <a.icon size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground">{a.name}</h3>
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest mt-0.5">{a.type}</p>
                                </div>
                            </div>
                            <span className="text-muted-foreground font-mono text-sm tracking-wider">{a.mask}</span>
                        </div>

                        <div className="relative z-10 pt-4 border-t border-surface-alt">
                            <p className="text-xs text-muted-foreground mb-1 uppercase tracking-widest font-bold">Ledger Balance</p>
                            <p className={`text-[2rem] leading-none font-black font-display tracking-tight ${a.balance < 0 ? 'text-danger' : 'text-foreground'}`}>
                                {a.balance < 0 ? '-' : ''}${Math.abs(a.balance).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accounts;
