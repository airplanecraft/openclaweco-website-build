/**
 * AgentUpdate.ai Branding Bar
 * Injects a floating "← Back to AgentUpdate.ai" bar at the top of every simulator page.
 * This script is auto-loaded when the simulator is accessed via the AgentUpdate.ai website.
 */
(function() {
  // Only show the bar when accessed from AgentUpdate.ai (via /simulators/ path)
  const isEmbedded = window.location.pathname.includes('/simulators/');
  if (!isEmbedded) return;

  const bar = document.createElement('div');
  bar.id = 'au-brand-bar';
  bar.innerHTML = `
    <a href="/simulators/" class="au-back-link">
      <span class="au-arrow">←</span>
      <span class="au-logo">AgentUpdate<span class="au-dot">.ai</span></span>
      <span class="au-sep">|</span>
      <span class="au-label">模拟器</span>
    </a>
  `;

  const style = document.createElement('style');
  style.textContent = `
    #au-brand-bar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 36px;
      background: rgba(15, 15, 15, 0.92);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(255,255,255,0.08);
      display: flex;
      align-items: center;
      padding: 0 16px;
      z-index: 99999;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    }
    .au-back-link {
      display: flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
      color: rgba(255,255,255,0.6);
      font-size: 13px;
      font-weight: 500;
      transition: color 0.2s;
    }
    .au-back-link:hover {
      color: rgba(255,255,255,0.95);
    }
    .au-arrow {
      font-size: 15px;
    }
    .au-logo {
      font-weight: 700;
      color: rgba(255,255,255,0.8);
    }
    .au-dot {
      color: #6366f1;
    }
    .au-sep {
      color: rgba(255,255,255,0.15);
      margin: 0 2px;
    }
    .au-label {
      color: rgba(255,255,255,0.5);
      font-size: 12px;
    }
    /* Push page content down to avoid overlap */
    body {
      padding-top: 36px !important;
    }
  `;

  document.head.appendChild(style);
  document.body.insertBefore(bar, document.body.firstChild);
})();
