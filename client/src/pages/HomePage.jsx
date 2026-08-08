import React, { useState, useEffect } from 'react';
import {
  Button,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
  LoadingSpinner,
} from '../components/index.js';
import { fetchHealth } from '../services/api.js';

export default function HomePage() {
  const [backendHealth, setBackendHealth] = useState(null);
  const [loadingHealth, setLoadingHealth] = useState(false);
  const [healthError, setHealthError] = useState(null);

  // Component preview state
  const [testInput, setTestInput] = useState('');
  const [buttonLoading, setButtonLoading] = useState(false);

  const checkApi = async () => {
    setLoadingHealth(true);
    setHealthError(null);
    try {
      const data = await fetchHealth();
      setBackendHealth(data);
    } catch (err) {
      setHealthError(err.message || 'Failed to reach backend service');
      setBackendHealth(null);
    } finally {
      setLoadingHealth(false);
    }
  };

  useEffect(() => {
    checkApi();
  }, []);

  const triggerButtonLoadingDemo = () => {
    setButtonLoading(true);
    setTimeout(() => setButtonLoading(false), 1500);
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Hero Welcome Card */}
      <Card className="bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border-slate-800">
        <CardContent className="p-8 sm:p-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="primary" size="md" withDot>UI Design System Ready</Badge>
            <Badge variant="neutral" size="sm">JavaScript (JSX)</Badge>
            <Badge variant="info" size="sm">Tailwind CSS</Badge>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Mini ERP + CRM Design Foundation
          </h2>
          <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
            Clean, modular, and responsive UI components engineered for business-critical administrative workflows.
          </p>
        </CardContent>
      </Card>

      {/* Backend Integration & Health Status */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <CardTitle>System &amp; API Connectivity</CardTitle>
              <CardDescription>Verify live communication with the Express backend REST service.</CardDescription>
            </div>
            <Button
              variant="outline"
              size="sm"
              isLoading={loadingHealth}
              onClick={checkApi}
            >
              Refresh Status
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {loadingHealth ? (
            <div className="flex items-center gap-3 py-4 text-slate-400 text-sm">
              <LoadingSpinner size="sm" variant="primary" />
              <span>Pinging backend health endpoint...</span>
            </div>
          ) : healthError ? (
            <div className="p-4 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-300 text-sm space-y-1">
              <p className="font-semibold">Backend Unreachable</p>
              <p className="text-xs text-rose-400">
                Run <code className="bg-slate-900 px-1.5 py-0.5 rounded text-rose-200">cd server &amp;&amp; npm.cmd run dev</code> to start the API.
              </p>
            </div>
          ) : backendHealth ? (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="success" withDot>Operational</Badge>
                <span className="text-xs text-slate-400">{backendHealth.message}</span>
              </div>
              <pre className="text-xs font-mono bg-slate-950 p-3 rounded-lg border border-slate-800 text-slate-300 overflow-x-auto">
                {JSON.stringify(backendHealth.data, null, 2)}
              </pre>
            </div>
          ) : null}
        </CardContent>
      </Card>

      {/* UI Component Showcase Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Buttons Showcase */}
        <Card>
          <CardHeader>
            <CardTitle>Buttons (Button.jsx)</CardTitle>
            <CardDescription>Multiple variants, sizes, icon integration, and loading states.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2.5 items-center">
              <Button variant="primary" size="sm">Primary Sm</Button>
              <Button variant="primary" size="md">Primary Md</Button>
              <Button variant="secondary" size="md">Secondary</Button>
              <Button variant="outline" size="md">Outline</Button>
              <Button variant="ghost" size="md">Ghost</Button>
              <Button variant="danger" size="md">Danger</Button>
              <Button variant="success" size="md">Success</Button>
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center gap-3">
              <Button
                variant="primary"
                isLoading={buttonLoading}
                onClick={triggerButtonLoadingDemo}
              >
                Click to Test Spinner
              </Button>
              <Button variant="secondary" disabled>Disabled State</Button>
            </div>
          </CardContent>
        </Card>

        {/* Inputs Showcase */}
        <Card>
          <CardHeader>
            <CardTitle>Form Inputs (Input.jsx)</CardTitle>
            <CardDescription>Input fields with labels, helper text, error states, and responsive styling.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              label="Standard Field"
              placeholder="Enter search query or reference number..."
              value={testInput}
              onChange={(e) => setTestInput(e.target.value)}
              helperText="Helper text provides contextual guidance for operators."
            />
            <Input
              label="Validation Error State"
              defaultValue="invalid-entry"
              required
              error="Please enter a valid format."
            />
          </CardContent>
        </Card>

        {/* Badges Showcase */}
        <Card>
          <CardHeader>
            <CardTitle>Status Badges (Badge.jsx)</CardTitle>
            <CardDescription>Status indicators for orders, inventory states, and CRM stages.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="primary" withDot>In Progress</Badge>
              <Badge variant="success" withDot>Approved / Paid</Badge>
              <Badge variant="warning" withDot>Pending Review</Badge>
              <Badge variant="danger" withDot>Rejected</Badge>
              <Badge variant="info" withDot>Dispatched</Badge>
              <Badge variant="neutral" withDot>Draft</Badge>
            </div>
            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
              <Badge variant="success" size="sm">Small Tag</Badge>
              <Badge variant="info" size="sm">ERP Module</Badge>
              <Badge variant="warning" size="sm">Low Stock</Badge>
              <Badge variant="neutral" size="sm">Archived</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Loading Spinners Showcase */}
        <Card>
          <CardHeader>
            <CardTitle>Loading Spinners (LoadingSpinner.jsx)</CardTitle>
            <CardDescription>Smooth animated loaders for asynchronous data fetching and actions.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-6 py-2">
              <div className="flex flex-col items-center gap-2">
                <LoadingSpinner size="xs" variant="primary" />
                <span className="text-xs text-slate-500">XS</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <LoadingSpinner size="sm" variant="primary" />
                <span className="text-xs text-slate-500">SM</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <LoadingSpinner size="md" variant="primary" />
                <span className="text-xs text-slate-500">MD</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <LoadingSpinner size="lg" variant="primary" />
                <span className="text-xs text-slate-500">LG</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <LoadingSpinner size="md" variant="slate" />
                <span className="text-xs text-slate-500">Slate</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
