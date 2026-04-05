import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
    const [email, setEmail] = useState('admin@sovereign.io');
    const [password, setPassword] = useState('**********');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await login(email, password);
            toast.success('Authentication successful', { icon: '🔓' });
        } catch (err) {
            toast.error('Authentication failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 animate-in fade-in duration-700">
            <div className="w-full max-w-md bg-surface-container-low border border-outline-variant/10 p-12 relative shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">

                {/* Header */}
                <div className="mb-12">
                    <div className="w-8 h-8 bg-brand flex items-center justify-center mb-6 shadow-[0_0_15px_#8B5CF6]">
                        <span className="material-symbols-outlined text-white text-sm" data-icon="lock_open">lock_open</span>
                    </div>
                    <h1 className="font-headline text-3xl font-bold text-on-surface tracking-tight mb-2">Gate Activation</h1>
                    <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant/60">Sovereign Node Access Terminal</p>
                </div>

                {/* Form */}
                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="group">
                        <label className="block font-label text-[10px] uppercase tracking-widest text-primary mb-2">Verification Identity</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-surface-container border-b border-outline-variant/20 focus:border-brand focus:ring-0 px-4 py-4 font-body text-sm text-on-surface transition-colors outline-none"
                            placeholder="Enter node ID or Email..."
                            required
                        />
                    </div>

                    <div className="group">
                        <label className="block font-label text-[10px] uppercase tracking-widest text-primary mb-2">Cryptographic Key</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-surface-container border-b border-outline-variant/20 focus:border-brand focus:ring-0 px-4 py-4 font-body text-sm text-on-surface transition-colors outline-none"
                            placeholder="Enter password..."
                            required
                        />
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full bg-brand text-white font-label text-xs uppercase tracking-widest py-5 hover:bg-brand-hover transition-colors flex items-center justify-center gap-2 ${loading ? 'opacity-50' : ''}`}
                        >
                            {loading ? 'Decrypting Key...' : 'Initialize Session'}
                            {!loading && <span className="material-symbols-outlined text-sm" data-icon="east">east</span>}
                        </button>
                    </div>
                </form>

                {/* Footer */}
                <div className="mt-8 border-t border-outline-variant/10 pt-6 text-center">
                    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                        Unregistered? <Link to="/signup" className="text-brand hover:underline transition-all">Request Node Access</Link>
                    </p>
                </div>

                {/* Architectural Tics */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-brand/50"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-brand/50"></div>
            </div>
        </div>
    );
};

export default Login;
