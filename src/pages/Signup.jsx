import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [loading, setLoading] = useState(false);
    const { signup } = useAuth();

    const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await signup(email, password, fullName);
            toast.success('Node Identity Generated', { icon: '🧬' });
        } catch (err) {
            toast.error('Identity creation failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 animate-in fade-in duration-700">
            <div className="w-full max-w-md bg-surface-container-low border border-outline-variant/10 p-12 relative shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">

                {/* Header */}
                <div className="mb-12">
                    <div className="w-8 h-8 bg-secondary flex items-center justify-center mb-6 shadow-[0_0_15px_#059669]">
                        <span className="material-symbols-outlined text-white text-sm" data-icon="hub">hub</span>
                    </div>
                    <h1 className="font-headline text-3xl font-bold text-on-surface tracking-tight mb-2">Initialize Node</h1>
                    <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant/60">Generate Sovereign Access Token</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSignup} className="space-y-6">
                    <div className="group">
                        <label className="block font-label text-[10px] uppercase tracking-widest text-secondary mb-2">Legal Entity Designation</label>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full bg-surface-container border-b border-outline-variant/20 focus:border-secondary focus:ring-0 px-4 py-4 font-body text-sm text-on-surface transition-colors outline-none"
                            placeholder="e.g. John Doe / Alpha LLC"
                            required
                        />
                    </div>

                    <div className="group">
                        <label className="block font-label text-[10px] uppercase tracking-widest text-secondary mb-2">Recovery Identity</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-surface-container border-b border-outline-variant/20 focus:border-secondary focus:ring-0 px-4 py-4 font-body text-sm text-on-surface transition-colors outline-none"
                            placeholder="Email address..."
                            required
                        />
                    </div>

                    <div className="group">
                        <label className="block font-label text-[10px] uppercase tracking-widest text-secondary mb-2">Cryptographic Key</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-surface-container border-b border-outline-variant/20 focus:border-secondary focus:ring-0 px-4 py-4 font-body text-sm text-on-surface transition-colors outline-none"
                            placeholder="Minimum 12 character genesis key..."
                            required
                        />
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full bg-secondary text-white font-label text-xs uppercase tracking-widest py-5 hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2 ${loading ? 'opacity-50' : ''}`}
                        >
                            {loading ? 'Synthesizing...' : 'Request Node Generation'}
                            {!loading && <span className="material-symbols-outlined text-sm" data-icon="east">east</span>}
                        </button>
                    </div>
                </form>

                {/* Footer */}
                <div className="mt-8 border-t border-outline-variant/10 pt-6 text-center">
                    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                        Existing node? <Link to="/login" className="text-secondary hover:underline transition-all">Verify Access Key</Link>
                    </p>
                </div>

                {/* Architectural Tics */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-secondary/50"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-secondary/50"></div>
            </div>
        </div>
    );
};

export default Signup;
