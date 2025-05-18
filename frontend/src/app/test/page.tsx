'use client';

import { useState, useEffect } from 'react';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { toast } from 'react-toastify';

function TestPage() {
  const [visitorId, setVisitorId] = useState<string | null>(null);

  useEffect(() => {
    const loadFingerprint = async () => {
      const fp = await FingerprintJS.load();
      const result = await fp.get();
      setVisitorId(result.visitorId);
    };
    loadFingerprint();
    if (visitorId) toast.success(visitorId);
  }, [visitorId]);

  return (
    <div>
      {}
      <h1>Testing FingerPrintJs</h1>
    </div>
  );
}

export default TestPage;
