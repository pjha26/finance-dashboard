import React, { useMemo } from 'react';

const Temporal = () => {
    // Generate 364 days of simulated expense intensity (0 to 4)
    const days = useMemo(() => {
        const arr = [];
        for (let i = 0; i < 364; i++) {
            // weight to be mostly 0 or 1, occasionally 2/3/4
            const rand = Math.random();
            let intensity = 0;
            if (rand > 0.6) intensity = 1;
            if (rand > 0.85) intensity = 2;
            if (rand > 0.95) intensity = 3;
            if (rand > 0.98) intensity = 4;
            arr.push({ id: i, intensity });
        }
        return arr;
    }, []);

    const getIntensityClass = (level) => {
        switch (level) {
            case 1: return 'bg-primary/20 border-primary/30 shadow-[0_0_8px_rgba(139,92,246,0.1)]';
            case 2: return 'bg-primary/50 border-primary/60 shadow-[0_0_12px_rgba(139,92,246,0.3)]';
            case 3: return 'bg-primary/80 border-primary shadow-[0_0_16px_rgba(139,92,246,0.5)]';
            case 4: return 'bg-secondary border-secondary shadow-[0_0_20px_rgba(5,150,105,0.7)]'; // highlight anomalous max days in green
            default: return 'bg-surface-container-low border-outline-variant/10';
        }
    };

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return (
        <div className="animate-in fade-in duration-500 h-screen flex flex-col pt-12 pr-12 pb-12 overflow-y-auto">
            <div className="mb-12 pl-12 relative z-10 flex-shrink-0">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-px bg-primary"></div>
                <h1 className="font-headline text-6xl font-bold tracking-tighter text-on-surface leading-none">Temporal Architecture</h1>
                <p className="font-label text-on-surface-variant uppercase tracking-[0.3em] text-[10px] mt-4">Fiscal Velocity &amp; Chronological Expenditure Density</p>
            </div>

            <div className="flex-1 w-full ml-12 border border-outline-variant/10 bg-surface-container-low/50 relative p-12">
                {/* Header Key */}
                <div className="flex justify-between items-center mb-16">
                    <h3 className="font-headline text-xl text-primary font-bold">2026 Fiscal Cycle</h3>
                    <div className="flex items-center gap-4">
                        <span className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant">Velocity Density</span>
                        <div className="flex gap-1.5">
                            <div className="w-4 h-4 bg-surface-container-low border border-outline-variant/10 rounded-sm"></div>
                            <div className="w-4 h-4 bg-primary/20 border border-primary/30 rounded-sm"></div>
                            <div className="w-4 h-4 bg-primary/50 border border-primary/60 rounded-sm"></div>
                            <div className="w-4 h-4 bg-primary/80 border border-primary rounded-sm"></div>
                            <div className="w-4 h-4 bg-secondary border border-secondary rounded-sm"></div>
                        </div>
                    </div>
                </div>

                {/* Heatmap Grid */}
                <div className="relative">
                    {/* Months X-Axis */}
                    <div className="flex mb-4 ml-8">
                        {months.map((m, i) => (
                            <div key={m} className="flex-1 font-label text-[10px] uppercase tracking-widest text-on-surface-variant/60">
                                {m}
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        {/* Days Y-Axis */}
                        <div className="flex flex-col justify-between font-label text-[9px] uppercase tracking-widest text-on-surface-variant/40 pt-2 pb-2">
                            <span>Mon</span>
                            <span>Wed</span>
                            <span>Fri</span>
                        </div>

                        {/* The Grid */}
                        <div className="grid grid-flow-col gap-2 flex-1" style={{ gridTemplateRows: 'repeat(7, minmax(0, 1fr))' }}>
                            {days.map((day) => (
                                <div
                                    key={day.id}
                                    className={`w-full aspect-square border rounded-sm transition-colors hover:border-on-surface cursor-pointer ${getIntensityClass(day.intensity)}`}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Architectural Bottom Info */}
                <div className="mt-20 grid grid-cols-3 gap-12 border-t border-outline-variant/10 pt-12">
                    <div>
                        <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest mb-2">Max Velocity Node</p>
                        <p className="font-headline text-error text-2xl">SEPT 14</p>
                        <p className="font-body text-xs text-on-surface-variant mt-1">Capital call execution block</p>
                    </div>
                    <div>
                        <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest mb-2">Average Daily Burn</p>
                        <p className="font-headline text-primary text-2xl">$1,420</p>
                        <p className="font-body text-xs text-on-surface-variant mt-1">Sustained baseline operational cost</p>
                    </div>
                    <div>
                        <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest mb-2">Anomalies Detected</p>
                        <p className="font-headline text-secondary text-2xl">4</p>
                        <p className="font-body text-xs text-on-surface-variant mt-1">Deviations &gt; 3σ from moving average</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Temporal;
