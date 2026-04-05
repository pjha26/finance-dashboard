import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Portfolio = () => {
  const [activeTimeframe, setActiveTimeframe] = useState('1M');
  const [activeAssetTab, setActiveAssetTab] = useState('Stocks');

  const handleBuy = (asset) => toast.success(`Market buy order for ${asset} submitted`);
  const handleSell = (asset) => toast.error(`Market sell order for ${asset} executed`);
  const handleWatchlist = () => toast('Watchlist customization opened', { icon: '⚙️' });
  const handleViewAll = () => toast('Expanded view restricted in demo mode', { icon: '🔒' });

  return (
    <div className="animate-in fade-in duration-500">

      {/* AppShell handles the Navbar */}
      <div className="pt-8 px-10 pb-12">
        {/* Hero Section: Portfolio Performance */}
        <section className="mb-12">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant mb-2 block">Net Worth</span>
              <h2 className="font-headline text-5xl font-extrabold text-primary tracking-tighter mb-2">$1,284,592.42</h2>
              <div className="flex items-center gap-2">
                <span className="bg-secondary-container/20 text-on-secondary-container px-2 py-0.5 rounded-md text-sm font-semibold flex items-center">
                  <span className="material-symbols-outlined text-xs mr-1" data-icon="trending_up">trending_up</span>
                  +12.4%
                </span>
                <span className="text-on-surface-variant text-sm">vs last month</span>
              </div>
            </div>
            <div className="flex bg-surface-container-low p-1 rounded-full">
              {['1D', '1W', '1M', '1Y', 'ALL'].map(span => (
                <button
                  key={span}
                  onClick={() => setActiveTimeframe(span)}
                  className={activeTimeframe === span
                    ? "px-6 py-2 rounded-full bg-surface-container-lowest shadow-sm text-sm font-bold text-primary"
                    : "px-6 py-2 rounded-full text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
                  }>
                  {span}
                </button>
              ))}
            </div>
          </div>
          {/* Portfolio Chart Placeholder (High-Fidelity Representation) */}
          <div className="w-full h-[400px] bg-surface-container-low rounded-3xl overflow-hidden relative group">
            <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
              <div className="flex justify-between items-start opacity-40">
                <div className="space-y-8">
                  <div className="h-px w-screen bg-outline/20"></div>
                  <div className="h-px w-screen bg-outline/20"></div>
                  <div className="h-px w-screen bg-outline/20"></div>
                  <div className="h-px w-screen bg-outline/20"></div>
                </div>
              </div>
            </div>
            <svg className="w-full h-full p-0" preserveAspectRatio="none" viewBox="0 0 1000 400">
              <defs>
                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#131b2e" stopOpacity="0.15"></stop>
                  <stop offset="100%" stopColor="#131b2e" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
              <path d="M0,350 Q100,320 200,330 T400,280 T600,220 T800,120 T1000,80 L1000,400 L0,400 Z" fill="url(#chartGradient)"></path>
              <path d="M0,350 Q100,320 200,330 T400,280 T600,220 T800,120 T1000,80" fill="none" stroke="#131b2e" strokeLinecap="round" strokeWidth="4"></path>
              <circle className="animate-pulse" cx="800" cy="120" fill="#131b2e" r="6"></circle>
            </svg>
          </div>
        </section>
        {/* Main Layout Grid (Asymmetrical 2/3 and 1/3) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Assets Breakdown (2/3 Column) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-surface-container-low rounded-3xl p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-headline text-2xl font-bold tracking-tight">Asset Breakdown</h3>
                <div className="flex items-center gap-1 bg-surface-container-high p-1 rounded-xl">
                  {['Stocks', 'Crypto', 'Real Estate'].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveAssetTab(tab)}
                      className={activeAssetTab === tab
                        ? "px-6 py-2 rounded-lg text-sm font-bold bg-surface-container-lowest shadow-sm text-primary"
                        : "px-6 py-2 rounded-lg text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
                      }>
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                {activeAssetTab === 'Stocks' && (
                  <>
                    {/* Asset Row 1 */}
                    <div className="group flex items-center justify-between p-4 bg-surface-container-lowest rounded-2xl hover:bg-surface-container-high transition-all cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 bg-primary/5 rounded-xl flex items-center justify-center">
                          <img alt="Asset icon" className="h-8 w-8 rounded-md" data-alt="minimalist logo of tech company on a clean white background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8psnYQnl7HP9gr4ReoP6HNrNAZYw_bCUru2Y9xCiZIj9ctMox1fmfYcaV8B_8PTlq7qg5bXzDCbyZT4Cu70lrNgJvKwCculnl-s9Q0kstlqZp7ugQwf3hJCJtC4IqSUZJrQVfviuHRNffdyCsucpBsJliNq6tx4Fm6stTYQVbXcqZnLeIRxsB-3idfxNUwVW9BJ-fWpQhQIpX2xKwBKT79hwkzl5ARFacEihmx81mYmLnlEv0_rUDDFlBgdcaS2SMD48VuyknitYn" />
                        </div>
                        <div>
                          <p className="font-bold text-primary">Apple Inc.</p>
                          <p className="text-xs text-on-surface-variant">AAPL • Technology</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-headline font-bold text-primary">$182.63</p>
                        <p className="text-xs text-secondary font-semibold">+1.42%</p>
                      </div>
                      <div className="text-right hidden sm:block">
                        <p className="font-headline font-bold text-primary">$42,850.00</p>
                        <p className="text-xs text-on-surface-variant">234.61 Units</p>
                      </div>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => handleBuy('Apple Inc.')} className="px-4 py-2 bg-primary text-on-primary rounded-lg text-xs font-bold">Buy</button>
                        <button onClick={() => handleSell('Apple Inc.')} className="px-4 py-2 border border-outline/20 text-primary rounded-lg text-xs font-bold hover:bg-surface">Sell</button>
                      </div>
                    </div>
                    {/* Asset Row 2 */}
                    <div className="group flex items-center justify-between p-4 bg-surface-container-lowest rounded-2xl hover:bg-surface-container-high transition-all cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 bg-primary/5 rounded-xl flex items-center justify-center">
                          <img alt="Asset icon" className="h-8 w-8 rounded-md" data-alt="clean vector style logo for Microsoft corporation in simple primary colors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACpR6e7qeIlSC8M1Xd81UbV2eLJcC6AdkCjkSewpvLqH1RiKdZkW13kdDFgXodp6RdJ9_OsG83WM583Jt3zFoCF--RiWTstGbCJzCDAonXthr-GLSfIztPv4pO9JTEaOZzdyxlfPnTAleUa4GokvKHkCBtXcND1CjWhM0bUn9ZdH2fDcP2p5yQF6kGGM43Tz07vP6AfFmJmrOKJWCTdzbqA5AAlZBKzoCUusZ8A9NxoaAqNs31qkAlSnT4HZgCAt_8bCn6hnvLnGGH" />
                        </div>
                        <div>
                          <p className="font-bold text-primary">Microsoft</p>
                          <p className="text-xs text-on-surface-variant">MSFT • Software</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-headline font-bold text-primary">$402.12</p>
                        <p className="text-xs text-tertiary font-semibold">-0.84%</p>
                      </div>
                      <div className="text-right hidden sm:block">
                        <p className="font-headline font-bold text-primary">$38,201.40</p>
                        <p className="text-xs text-on-surface-variant">95.00 Units</p>
                      </div>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => handleBuy('Microsoft')} className="px-4 py-2 bg-primary text-on-primary rounded-lg text-xs font-bold">Buy</button>
                        <button onClick={() => handleSell('Microsoft')} className="px-4 py-2 border border-outline/20 text-primary rounded-lg text-xs font-bold hover:bg-surface">Sell</button>
                      </div>
                    </div>
                    {/* Asset Row 3 */}
                    <div className="group flex items-center justify-between p-4 bg-surface-container-lowest rounded-2xl hover:bg-surface-container-high transition-all cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 bg-primary/5 rounded-xl flex items-center justify-center">
                          <img alt="Asset icon" className="h-8 w-8 rounded-md" data-alt="spotify logo brand icon with clean green background and white lines" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM__TyLBevwaK2JFRcOteilEAtWtDJfV-yIKTbrJQcUkXYvKL9FPhT4IMwgeOdf8Nclm-a3uRfY9bHIPFRJyqIECdCoE_dXpcXwFHdOzNIV0fO5qzYkhaJFXOcaESTdqBXxAXEvnok_Ss6NnpCL6otHMNL67seQMq6eb2gBawtb1yRka9EK3wSHsd1ZXrJUUPtDsK6mT02tYVsZtCTWpTlGh55p28jdKUbbUNaK7gA4ZWEgvRc0kxD4NCkpc4fm6kWq5m82s1kmNrF" />
                        </div>
                        <div>
                          <p className="font-bold text-primary">Spotify</p>
                          <p className="text-xs text-on-surface-variant">SPOT • Entertainment</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-headline font-bold text-primary">$210.45</p>
                        <p className="text-xs text-secondary font-semibold">+3.11%</p>
                      </div>
                      <div className="text-right hidden sm:block">
                        <p className="font-headline font-bold text-primary">$12,450.00</p>
                        <p className="text-xs text-on-surface-variant">59.16 Units</p>
                      </div>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => handleBuy('Spotify')} className="px-4 py-2 bg-primary text-on-primary rounded-lg text-xs font-bold">Buy</button>
                        <button onClick={() => handleSell('Spotify')} className="px-4 py-2 border border-outline/20 text-primary rounded-lg text-xs font-bold hover:bg-surface">Sell</button>
                      </div>
                    </div>
                  </>
                )}
                {activeAssetTab !== 'Stocks' && (
                  <div className="p-12 mt-4 text-center text-on-surface-variant text-sm font-label uppercase tracking-widest bg-surface-container-lowest rounded-2xl border border-dashed border-outline-variant/30">
                    No {activeAssetTab} assets found
                  </div>
                )}
              </div>
              <button onClick={handleViewAll} className="w-full mt-6 py-4 text-sm font-bold text-primary-container hover:underline transition-all">View all 12 assets</button>
            </div>
            {/* Market News Feed */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-headline text-2xl font-bold tracking-tight">Market News</h3>
                <button className="text-sm font-semibold text-on-surface-variant flex items-center gap-1">
                  Latest <span className="material-symbols-outlined text-sm" data-icon="expand_more">expand_more</span>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm border border-outline/5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-secondary bg-secondary-container/10 px-2 py-1 rounded-md mb-4 inline-block">Tech Sector</span>
                  <h4 className="font-headline text-lg font-bold leading-tight mb-3">AI Regulation: What it means for your NVIDIA holdings this quarter</h4>
                  <p className="text-sm text-on-surface-variant line-clamp-2 mb-4">Federal analysts suggest new guidelines for data center export could impact 2024 revenue projections for semi-conductors...</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-on-surface-variant opacity-60">4 mins ago • Bloomberg</span>
                    <span onClick={() => toast.success('News bookmarked')} className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform" data-icon="bookmark">bookmark</span>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm border border-outline/5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-tertiary bg-tertiary-container/10 px-2 py-1 rounded-md mb-4 inline-block">Fed Update</span>
                  <h4 className="font-headline text-lg font-bold leading-tight mb-3">Interest rates held steady: Analysts predict pivot in late September</h4>
                  <p className="text-sm text-on-surface-variant line-clamp-2 mb-4">The FOMC statement released this morning indicates a cautious but optimistic outlook on core inflation metrics...</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-on-surface-variant opacity-60">12 mins ago • Reuters</span>
                    <span onClick={() => toast.success('News bookmarked')} className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform" data-icon="bookmark">bookmark</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Watchlist Sidebar (1/3 Column) */}
          <aside className="space-y-8">
            <div className="bg-primary-container text-on-primary-container rounded-3xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-headline text-xl font-bold mb-6">Watchlist</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-on-primary-container/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-on-primary-container/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-sm" data-icon="currency_bitcoin">currency_bitcoin</span>
                      </div>
                      <div>
                        <p className="font-bold text-sm">Bitcoin</p>
                        <p className="text-[10px] text-on-primary-container/60">BTC • Crypto</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-headline font-bold text-sm">$64,120.40</p>
                      <p className="text-[10px] text-secondary-container font-semibold">+2.1%</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-b border-on-primary-container/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-on-primary-container/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-sm" data-icon="diamond">diamond</span>
                      </div>
                      <div>
                        <p className="font-bold text-sm">Ethereum</p>
                        <p className="text-[10px] text-on-primary-container/60">ETH • Crypto</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-headline font-bold text-sm">$3,421.11</p>
                      <p className="text-[10px] text-tertiary-container font-semibold">-1.4%</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-b border-on-primary-container/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-on-primary-container/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-sm" data-icon="storefront">storefront</span>
                      </div>
                      <div>
                        <p className="font-bold text-sm">Amazon</p>
                        <p className="text-[10px] text-on-primary-container/60">AMZN • Retail</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-headline font-bold text-sm">$174.52</p>
                      <p className="text-[10px] text-secondary-container font-semibold">+0.8%</p>
                    </div>
                  </div>
                </div>
                <button onClick={handleWatchlist} className="w-full mt-6 py-3 border border-on-primary-container/20 rounded-xl text-xs font-bold hover:bg-on-primary-container/5 transition-all">Edit Watchlist</button>
              </div>
            </div>
            <div className="bg-surface-container-low rounded-3xl p-8">
              <h3 className="font-headline text-xl font-bold mb-6">Asset Allocation</h3>
              <div className="relative h-48 flex items-center justify-center mb-6">
                {/* Minimalist Ring Chart Representation */}
                <div className="h-40 w-40 rounded-full border-[12px] border-primary flex items-center justify-center relative">
                  <div className="absolute inset-0 border-[12px] border-secondary border-t-transparent rotate-45 rounded-full"></div>
                  <div className="absolute inset-0 border-[12px] border-tertiary-container border-l-transparent -rotate-12 rounded-full"></div>
                  <div className="text-center">
                    <p className="text-2xl font-headline font-extrabold text-primary">78%</p>
                    <p className="text-[10px] text-on-surface-variant font-bold uppercase">Equity</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span className="text-sm font-medium">Stocks</span>
                  </div>
                  <span className="text-sm font-bold">64.2%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-secondary"></div>
                    <span className="text-sm font-medium">Crypto</span>
                  </div>
                  <span className="text-sm font-bold">21.8%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-tertiary-container"></div>
                    <span className="text-sm font-medium">Real Estate</span>
                  </div>
                  <span className="text-sm font-bold">14.0%</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

    </div>
  );
};

export default Portfolio;
