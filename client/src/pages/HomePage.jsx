import React, { useState, useEffect } from 'react';
import { fetchHealth } from '../services/api.js';

export default function HomePage() {
  const [backendHealth, setBackendHealth] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const checkApi = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchHealth();
      setBackendHealth(data);
    } catch (err) {
      setError(err.message || 'Failed to connect to backend');
      setBackendHealth(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkApi();
  }, []);

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-950 border border-slate-800 p-8 shadow-2xl">
        <div className="relative z-10 max-w-2xl space-y-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-500/10 rounded-full border border-sky-500/20">
            Setup Phase Initialized
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Mini ERP + CRM Operations Portal
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Frontend is ready with React, Vite, and Tailwind CSS. The foundation is configured strictly using JavaScript.
          </p>
        </div>
      </div>

      {/* Backend Connectivity Status Card */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold text-white">Backend Health Status</h3>
            <p className="text-xs text-slate-400">Verifying REST API endpoint at <code className="text-sky-400">/api/health</code></p>
          </div>
          <button
            onClick={checkApi}
            disabled={loading}
            className="px-4 py-2 text-xs font-medium bg-sky-600 hover:bg-sky-500 disabled:opacity-50 text-white rounded-lg transition-colors shadow-sm"
          >
            {loading ? 'Checking...' : 'Re-check Health'}
          </button>
        </div>

        <div className="p-4 rounded-lg bg-slate-950 border border-slate-800/80">
          {loading && (
            <p className="text-xs text-slate-400 animate-pulse">Connecting to backend server...</p>
          )}

          {!loading && error && (
            <div className="text-xs text-rose-400 space-y-1">
              <p className="font-semibold">⚠️ Backend offline or unreachable:</p>
              <p className="text-slate-400">Make sure the backend is running with <code className="text-slate-200">cd server &amp;&amp; npm.cmd run dev</code></p>
            </div>
          )}

          {!loading && backendHealth && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>{backendHealth.message}</span>
              </div>
              <pre className="text-xs text-slate-300 bg-slate-900 p-3 rounded overflow-x-auto border border-slate-800 font-mono">
                {JSON.stringify(backendHealth.data, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
