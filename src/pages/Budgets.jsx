import React from 'react';

const Budgets = () => {
  return (
    <div className="animate-in fade-in duration-500">

{/* Hero Section: Monthly Spending Progress */}
<section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-xl relative overflow-hidden">
<div className="flex justify-between items-end mb-10">
<div>
<h3 className="font-headline text-on-surface-variant text-sm font-bold uppercase tracking-widest mb-1">Monthly Spending</h3>
<p className="font-headline text-4xl font-extrabold text-primary tracking-tight">$4,280.00 <span className="text-lg font-normal text-on-surface-variant">/ $5,500 budget</span></p>
</div>
<div className="flex items-center gap-2 bg-secondary-container/20 px-4 py-2 rounded-full">
<span className="material-symbols-outlined text-secondary" data-icon="trending_down">trending_down</span>
<span className="text-secondary font-bold text-sm">12% under budget</span>
</div>
</div>
{/* Custom Bar Chart Visualization */}
<div className="flex items-end justify-between gap-4 h-48">
<div className="flex-1 flex flex-col items-center gap-3">
<div className="w-full relative h-full flex flex-col justify-end gap-1">
<div className="w-full bg-surface-container-low rounded-t-lg h-full absolute bottom-0 opacity-30"></div>
<div className="w-full bg-primary rounded-t-lg transition-all" style={{height: "85%"}}></div>
</div>
<span className="text-[10px] font-bold text-on-surface-variant uppercase">Housing</span>
</div>
<div className="flex-1 flex flex-col items-center gap-3">
<div className="w-full relative h-full flex flex-col justify-end gap-1">
<div className="w-full bg-surface-container-low rounded-t-lg h-full absolute bottom-0 opacity-30"></div>
<div className="w-full bg-primary rounded-t-lg transition-all" style={{height: "60%"}}></div>
</div>
<span className="text-[10px] font-bold text-on-surface-variant uppercase">Food</span>
</div>
<div className="flex-1 flex flex-col items-center gap-3">
<div className="w-full relative h-full flex flex-col justify-end gap-1">
<div className="w-full bg-surface-container-low rounded-t-lg h-full absolute bottom-0 opacity-30"></div>
<div className="w-full bg-primary rounded-t-lg transition-all" style={{height: "45%"}}></div>
</div>
<span className="text-[10px] font-bold text-on-surface-variant uppercase">Travel</span>
</div>
<div className="flex-1 flex flex-col items-center gap-3">
<div className="w-full relative h-full flex flex-col justify-end gap-1">
<div className="w-full bg-surface-container-low rounded-t-lg h-full absolute bottom-0 opacity-30"></div>
<div className="w-full bg-error rounded-t-lg transition-all" style={{height: "95%"}}></div>
</div>
<span className="text-[10px] font-bold text-on-surface-variant uppercase">Leisure</span>
</div>
<div className="flex-1 flex flex-col items-center gap-3">
<div className="w-full relative h-full flex flex-col justify-end gap-1">
<div className="w-full bg-surface-container-low rounded-t-lg h-full absolute bottom-0 opacity-30"></div>
<div className="w-full bg-primary rounded-t-lg transition-all" style={{height: "30%"}}></div>
</div>
<span className="text-[10px] font-bold text-on-surface-variant uppercase">Utilities</span>
</div>
</div>
</div>
{/* AI Insights Panel */}
<div className="bg-primary-container p-8 rounded-xl text-white flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-6">
<span className="material-symbols-outlined text-secondary-container" data-icon="auto_awesome">auto_awesome</span>
<h4 className="font-headline font-bold text-lg">AI Insights</h4>
</div>
<p className="font-body text-on-primary-container leading-relaxed text-sm mb-6">
                        You're on track to save an extra <span className="text-secondary-container font-bold">$420</span> this month by reducing 'Leisure' spending. We recommend shifting these funds to your 'New Home' goal.
                    </p>
</div>
<button className="bg-white/10 hover:bg-white/20 transition-colors py-3 rounded-lg border border-white/10 text-sm font-bold flex items-center justify-center gap-2">
                    Review Recommendations
                    <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</section>
{/* Savings Goals Section */}
<section>
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline text-xl font-bold text-primary">Active Savings Goals</h3>
<button className="flex items-center gap-2 px-6 py-2 rounded-full border border-outline-variant hover:bg-surface-container-high transition-colors text-sm font-bold">
<span className="material-symbols-outlined text-lg" data-icon="add_circle">add_circle</span>
                    Create New Goal
                </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/* Goal Card 1 */}
<div className="bg-surface-container-lowest p-6 rounded-xl flex flex-col gap-6 group hover:scale-[1.02] transition-transform duration-300">
<div className="flex justify-between items-start">
<div className="w-12 h-12 bg-secondary-container/20 rounded-xl flex items-center justify-center text-secondary">
<span className="material-symbols-outlined" data-icon="home" style={{fontVariationSettings: "'FILL' 1"}}>home</span>
</div>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer" data-icon="more_horiz">more_horiz</span>
</div>
<div>
<h4 className="font-headline font-bold text-lg text-primary">New Home Downpayment</h4>
<p className="text-xs text-on-surface-variant uppercase tracking-widest font-bold">Target: Dec 2025</p>
</div>
<div className="space-y-4">
<div className="flex justify-between items-end">
<p className="font-headline font-bold text-2xl text-primary">$45,000 <span className="text-sm font-normal text-on-surface-variant">/ $120,000</span></p>
<p className="font-bold text-secondary text-sm">37%</p>
</div>
<div className="w-full h-2 bg-surface-container-low rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{width: "37.5%"}}></div>
</div>
</div>
<div className="flex items-center gap-2 text-xs text-on-surface-variant">
<span className="material-symbols-outlined text-sm" data-icon="schedule">schedule</span>
                        On track to finish 2 months early
                    </div>
</div>
{/* Goal Card 2 */}
<div className="bg-surface-container-lowest p-6 rounded-xl flex flex-col gap-6 group hover:scale-[1.02] transition-transform duration-300">
<div className="flex justify-between items-start">
<div className="w-12 h-12 bg-surface-container-high rounded-xl flex items-center justify-center text-primary">
<span className="material-symbols-outlined" data-icon="flight" style={{fontVariationSettings: "'FILL' 1"}}>flight</span>
</div>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer" data-icon="more_horiz">more_horiz</span>
</div>
<div>
<h4 className="font-headline font-bold text-lg text-primary">European Summer Vacation</h4>
<p className="text-xs text-on-surface-variant uppercase tracking-widest font-bold">Target: June 2024</p>
</div>
<div className="space-y-4">
<div className="flex justify-between items-end">
<p className="font-headline font-bold text-2xl text-primary">$6,850 <span className="text-sm font-normal text-on-surface-variant">/ $8,000</span></p>
<p className="font-bold text-primary text-sm">85%</p>
</div>
<div className="w-full h-2 bg-surface-container-low rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{width: "85%"}}></div>
</div>
</div>
<div className="flex items-center gap-2 text-xs text-secondary font-bold">
<span className="material-symbols-outlined text-sm" data-icon="verified">verified</span>
                        Final stretch! $1,150 left to go
                    </div>
</div>
{/* Goal Card 3 */}
<div className="bg-surface-container-lowest p-6 rounded-xl flex flex-col gap-6 group hover:scale-[1.02] transition-transform duration-300">
<div className="flex justify-between items-start">
<div className="w-12 h-12 bg-error-container/20 rounded-xl flex items-center justify-center text-error">
<span className="material-symbols-outlined" data-icon="health_and_safety" style={{fontVariationSettings: "'FILL' 1"}}>health_and_safety</span>
</div>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer" data-icon="more_horiz">more_horiz</span>
</div>
<div>
<h4 className="font-headline font-bold text-lg text-primary">Emergency Fund</h4>
<p className="text-xs text-on-surface-variant uppercase tracking-widest font-bold">Target: Ongoing</p>
</div>
<div className="space-y-4">
<div className="flex justify-between items-end">
<p className="font-headline font-bold text-2xl text-primary">$12,400 <span className="text-sm font-normal text-on-surface-variant">/ $25,000</span></p>
<p className="font-bold text-error text-sm">50%</p>
</div>
<div className="w-full h-2 bg-surface-container-low rounded-full overflow-hidden">
<div className="bg-error h-full rounded-full" style={{width: "49.6%"}}></div>
</div>
</div>
<div className="flex items-center gap-2 text-xs text-on-surface-variant">
<span className="material-symbols-outlined text-sm" data-icon="trending_up">trending_up</span>
                        +$800 added this month
                    </div>
</div>
</div>
</section>
{/* Category Budget Management */}
<section className="bg-surface-container-low rounded-xl overflow-hidden">
<div className="p-8 border-b border-outline-variant/10 flex justify-between items-center">
<div>
<h3 className="font-headline text-xl font-bold text-primary">Category Budgets</h3>
<p className="text-on-surface-variant text-sm mt-1">Refine your monthly limits by category</p>
</div>
<button className="bg-primary text-white px-6 py-2 rounded-full font-bold text-sm hover:opacity-90">
                    Edit All Limits
                </button>
</div>
<div className="p-8 space-y-6">
{/* Category 1 */}
<div className="flex items-center justify-between group">
<div className="flex items-center gap-4 flex-1">
<div className="w-10 h-10 bg-surface-container-lowest rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-xl" data-icon="shopping_cart">shopping_cart</span>
</div>
<div className="min-w-[120px]">
<p className="font-bold text-primary">Groceries</p>
<p className="text-xs text-on-surface-variant">3 transactions this week</p>
</div>
</div>
<div className="flex-1 px-12">
<div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
<div className="bg-secondary h-full" style={{width: "62%"}}></div>
</div>
</div>
<div className="flex items-center gap-8 w-48 justify-end">
<p className="font-headline font-bold text-primary">$496 <span className="text-xs font-normal text-on-surface-variant">/ $800</span></p>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary" data-icon="edit">edit</span>
</div>
</div>
{/* Category 2 */}
<div className="flex items-center justify-between group">
<div className="flex items-center gap-4 flex-1">
<div className="w-10 h-10 bg-surface-container-lowest rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-xl" data-icon="movie">movie</span>
</div>
<div className="min-w-[120px]">
<p className="font-bold text-primary">Entertainment</p>
<p className="text-xs text-on-surface-variant">Over budget by $45</p>
</div>
</div>
<div className="flex-1 px-12">
<div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
<div className="bg-error h-full" style={{width: "100%"}}></div>
</div>
</div>
<div className="flex items-center gap-8 w-48 justify-end">
<p className="font-headline font-bold text-error">$345 <span className="text-xs font-normal text-on-surface-variant">/ $300</span></p>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary" data-icon="edit">edit</span>
</div>
</div>
{/* Category 3 */}
<div className="flex items-center justify-between group">
<div className="flex items-center gap-4 flex-1">
<div className="w-10 h-10 bg-surface-container-lowest rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-xl" data-icon="fitness_center">fitness_center</span>
</div>
<div className="min-w-[120px]">
<p className="font-bold text-primary">Health</p>
<p className="text-xs text-on-surface-variant">Gym &amp; Supplements</p>
</div>
</div>
<div className="flex-1 px-12">
<div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
<div className="bg-secondary h-full" style={{width: "45%"}}></div>
</div>
</div>
<div className="flex items-center gap-8 w-48 justify-end">
<p className="font-headline font-bold text-primary">$112 <span className="text-xs font-normal text-on-surface-variant">/ $250</span></p>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary" data-icon="edit">edit</span>
</div>
</div>
</div>
</section>

    </div>
  );
};

export default Budgets;
