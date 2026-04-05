import React, { useRef, useEffect, useState } from 'react';
import ForceGraph2D from 'react-force-graph-2d';

// Mock Network Data
const gData = {
    nodes: [
        { id: 'Sovereign Core', group: 1, val: 30, color: '#8B5CF6' },

        // Tier 1: Vaults
        { id: 'Cold Storage Vault', group: 2, val: 20, color: '#6366f1' },
        { id: 'Checking (Primary)', group: 2, val: 20, color: '#6366f1' },
        { id: 'Investment Brokerage', group: 2, val: 20, color: '#6366f1' },

        // Tier 2: Real Estate & Physical Entities
        { id: 'Real Estate Alpha', group: 3, val: 12, color: '#059669' },
        { id: 'Real Estate Beta', group: 3, val: 8, color: '#059669' },
        { id: 'Precious Metals', group: 3, val: 5, color: '#f59e0b' },

        // Tier 3: Individual Equities / Crypto
        { id: 'AAPL Holdings', group: 4, val: 4, color: '#ec4899' },
        { id: 'Global Index Fund', group: 4, val: 6, color: '#ec4899' },
        { id: 'BTC Reserve', group: 5, val: 8, color: '#14b8a6' },
        { id: 'ETH Staking', group: 5, val: 4, color: '#14b8a6' },
    ],
    links: [
        { source: 'Sovereign Core', target: 'Cold Storage Vault' },
        { source: 'Sovereign Core', target: 'Checking (Primary)' },
        { source: 'Sovereign Core', target: 'Investment Brokerage' },

        { source: 'Checking (Primary)', target: 'Real Estate Alpha' },
        { source: 'Checking (Primary)', target: 'Real Estate Beta' },
        { source: 'Checking (Primary)', target: 'Precious Metals' },

        { source: 'Investment Brokerage', target: 'AAPL Holdings' },
        { source: 'Investment Brokerage', target: 'Global Index Fund' },

        { source: 'Cold Storage Vault', target: 'BTC Reserve' },
        { source: 'Cold Storage Vault', target: 'ETH Staking' },
    ]
};

const Network = () => {
    const fgRef = useRef();
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const containerRef = useRef();

    useEffect(() => {
        if (containerRef.current) {
            setDimensions({
                width: containerRef.current.clientWidth,
                height: containerRef.current.clientHeight
            });
        }

        const handleResize = () => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.clientWidth,
                    height: containerRef.current.clientHeight
                });
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        // Add pulsing/flow effect to links
        const interval = setInterval(() => {
            if (fgRef.current) {
                fgRef.current.d3Force('charge').distanceMax(400);
            }
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="animate-in fade-in duration-500 h-screen flex flex-col pt-12 pr-12 pb-12">
            <div className="mb-8 pl-12 relative z-10">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-px bg-primary"></div>
                <h1 className="font-headline text-6xl font-bold tracking-tighter text-on-surface leading-none">Asset Clusters</h1>
                <p className="font-label text-on-surface-variant uppercase tracking-[0.3em] text-[10px] mt-4">Node topology &amp; liquidity flow mapping</p>
            </div>

            <div className="flex-1 w-full relative ml-12 border border-outline-variant/10 bg-surface-container/50 overflow-hidden" ref={containerRef}>

                {/* Decorative Grid Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-20"
                    style={{ backgroundImage: 'linear-gradient(#8B5CF6 1px, transparent 1px), linear-gradient(90deg, #8B5CF6 1px, transparent 1px)', backgroundSize: '100px 100px' }}>
                </div>

                {/* Floating Metrics */}
                <div className="absolute top-8 right-8 z-10 text-right pointer-events-none">
                    <p className="font-label text-[9px] uppercase tracking-widest text-primary mb-1">Active Nodes</p>
                    <p className="font-headline text-2xl text-on-surface mb-6 font-bold">{gData.nodes.length}</p>

                    <p className="font-label text-[9px] uppercase tracking-widest text-secondary mb-1">Smart Contracts</p>
                    <p className="font-headline text-2xl text-on-surface mb-6 font-bold">{gData.links.length}</p>
                </div>

                {dimensions.width > 0 && (
                    <ForceGraph2D
                        ref={fgRef}
                        width={dimensions.width}
                        height={dimensions.height}
                        graphData={gData}
                        nodeLabel="id"
                        nodeColor="color"
                        nodeRelSize={6}
                        linkColor={() => '#ffffff1a'}
                        linkWidth={1.5}
                        linkDirectionalParticles={4}
                        linkDirectionalParticleWidth={2}
                        linkDirectionalParticleSpeed={d => d.value * 0.001 || 0.005}
                        backgroundColor="transparent"
                        d3AlphaDecay={0.01}
                        d3VelocityDecay={0.08}
                    />
                )}
            </div>
        </div>
    );
};

export default Network;
