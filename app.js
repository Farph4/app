const CORRECT_PASSWORD = 'NqshPaYIGR.N992s2vzG';

const transactionRecords = [
  {
    id: 'tx-001',
    market: 'Volatility 50 (1s) Index',
    contract: 'Under 5',
    barrier: 5,
    entryTime: '2026-06-19 02:32:22.000 GMT',
    entryPoint: 266023.80,
    exitPoint: 266023.80,
    buyPrice: 0.35,
    profit: 0.31,
    status: 'Exitosa',
    reference: '960436559',
  },
  {
    id: 'tx-002',
    market: 'Volatility 50 (1s) Index',
    contract: 'Under 5',
    barrier: 5,
    entryTime: '2026-06-19 02:32:15.000 GMT',
    entryPoint: 266023.51,
    exitPoint: 266023.51,
    buyPrice: 0.35,
    profit: 0.31,
    status: 'Exitosa',
    reference: '960434999',
  },
  {
    id: 'tx-003',
    market: 'Volatility 50 (1s) Index',
    contract: 'Under 5',
    barrier: 5,
    entryTime: '2026-06-19 02:32:10.000 GMT',
    entryPoint: 266030.27,
    exitPoint: 266030.27,
    buyPrice: 0.35,
    profit: -0.35,
    status: 'Perdida',
    reference: '960433699',
  },
  {
    id: 'tx-004',
    market: 'Volatility 50 (1s) Index',
    contract: 'Under 5',
    barrier: 5,
    entryTime: '2026-06-19 02:32:04.000 GMT',
    entryPoint: 266011.13,
    exitPoint: 266011.13,
    buyPrice: 0.35,
    profit: 0.31,
    status: 'Exitosa',
    reference: '960432179',
  },
  {
    id: 'tx-005',
    market: 'Volatility 50 (1s) Index',
    contract: 'Under 5',
    barrier: 5,
    entryTime: '2026-06-19 02:32:00.000 GMT',
    entryPoint: 266012.00,
    exitPoint: 266012.00,
    buyPrice: 0.35,
    profit: 0.31,
    status: 'Exitosa',
    reference: '960431039',
  },
  {
    id: 'tx-006',
    market: 'Volatility 50 (1s) Index',
    contract: 'Under 5',
    barrier: 5,
    entryTime: '2026-06-19 02:31:54.000 GMT',
    entryPoint: 265982.15,
    exitPoint: 265982.15,
    buyPrice: 0.35,
    profit: -0.35,
    status: 'Perdida',
    reference: '960429499',
  },
  {
    id: 'tx-007',
    market: 'Volatility 50 (1s) Index',
    contract: 'Under 5',
    barrier: 5,
    entryTime: '2026-06-19 02:31:48.000 GMT',
    entryPoint: 266040.78,
    exitPoint: 266040.78,
    buyPrice: 0.35,
    profit: -0.35,
    status: 'Perdida',
    reference: '960428039',
  },
  {
    id: 'tx-008',
    market: 'Volatility 50 (1s) Index',
    contract: 'Under 5',
    barrier: 5,
    entryTime: '2026-06-19 02:29:59.000 GMT',
    entryPoint: 265512.19,
    exitPoint: 265512.19,
    buyPrice: 0.35,
    profit: -0.35,
    status: 'Perdida',
    reference: '960397859',
  },
  {
    id: 'tx-009',
    market: 'Volatility 50 (1s) Index',
    contract: 'Under 5',
    barrier: 5,
    entryTime: '2026-06-19 02:29:45.000 GMT',
    entryPoint: 265541.61,
    exitPoint: 265541.61,
    buyPrice: 0.35,
    profit: 0.31,
    status: 'Exitosa',
    reference: '960393839',
  },
  {
    id: 'tx-010',
    market: 'Volatility 50 (1s) Index',
    contract: 'Under 5',
    barrier: 5,
    entryTime: '2026-06-19 02:29:41.000 GMT',
    entryPoint: 265530.80,
    exitPoint: 265530.80,
    buyPrice: 0.35,
    profit: 0.31,
    status: 'Exitosa',
    reference: 'TX-010',
  },
  {
    id: 'tx-011',
    market: 'Volatility 50 (1s) Index',
    contract: 'Under 5',
    barrier: 5,
    entryTime: '2026-06-19 02:29:35.000 GMT',
    entryPoint: 265520.45,
    exitPoint: 265520.45,
    buyPrice: 0.35,
    profit: 0.31,
    status: 'Exitosa',
    reference: 'TX-011',
  },
  {
    id: 'tx-012',
    market: 'Volatility 50 (1s) Index',
    contract: 'Under 5',
    barrier: 5,
    entryTime: '2026-06-19 02:29:29.000 GMT',
    entryPoint: 265510.92,
    exitPoint: 265510.92,
    buyPrice: 0.35,
    profit: 0.31,
    status: 'Exitosa',
    reference: 'TX-012',
  },
  {
    id: 'tx-013',
    market: 'Volatility 50 (1s) Index',
    contract: 'Under 5',
    barrier: 5,
    entryTime: '2026-06-19 02:29:23.000 GMT',
    entryPoint: 265500.18,
    exitPoint: 265500.18,
    buyPrice: 0.35,
    profit: 0.31,
    status: 'Exitosa',
    reference: 'TX-013',
  },
  {
    id: 'tx-014',
    market: 'Volatility 50 (1s) Index',
    contract: 'Under 5',
    barrier: 5,
    entryTime: '2026-06-19 02:29:17.000 GMT',
    entryPoint: 265490.60,
    exitPoint: 265490.60,
    buyPrice: 0.35,
    profit: 0.31,
    status: 'Exitosa',
    reference: 'TX-014',
  },
  {
    id: 'tx-015',
    market: 'Volatility 50 (1s) Index',
    contract: 'Under 5',
    barrier: 5,
    entryTime: '2026-06-19 02:29:11.000 GMT',
    entryPoint: 265480.33,
    exitPoint: 265480.33,
    buyPrice: 0.35,
    profit: 0.31,
    status: 'Exitosa',
    reference: 'TX-015',
  },
  {
    id: 'tx-016',
    market: 'Volatility 50 (1s) Index',
    contract: 'Under 5',
    barrier: 5,
    entryTime: '2026-06-19 02:29:05.000 GMT',
    entryPoint: 265470.75,
    exitPoint: 265470.75,
    buyPrice: 0.35,
    profit: 0.31,
    status: 'Exitosa',
    reference: 'TX-016',
  },
  {
    id: 'tx-017',
    market: 'Volatility 50 (1s) Index',
    contract: 'Under 5',
    barrier: 5,
    entryTime: '2026-06-19 02:28:59.000 GMT',
    entryPoint: 265460.20,
    exitPoint: 265460.20,
    buyPrice: 0.35,
    profit: 0.31,
    status: 'Exitosa',
    reference: 'TX-017',
  },
  {
    id: 'tx-018',
    market: 'Volatility 50 (1s) Index',
    contract: 'Under 5',
    barrier: 5,
    entryTime: '2026-06-19 02:28:53.000 GMT',
    entryPoint: 265450.44,
    exitPoint: 265450.44,
    buyPrice: 0.35,
    profit: 0.31,
    status: 'Exitosa',
    reference: 'TX-018',
  },
  {
    id: 'tx-019',
    market: 'Volatility 50 (1s) Index',
    contract: 'Under 5',
    barrier: 5,
    entryTime: '2026-06-19 02:28:47.000 GMT',
    entryPoint: 265440.88,
    exitPoint: 265440.88,
    buyPrice: 0.35,
    profit: 0.31,
    status: 'Exitosa',
    reference: 'TX-019',
  },
  {
    id: 'tx-020',
    market: 'Volatility 50 (1s) Index',
    contract: 'Under 5',
    barrier: 5,
    entryTime: '2026-06-19 02:28:41.000 GMT',
    entryPoint: 265430.16,
    exitPoint: 265430.16,
    buyPrice: 0.35,
    profit: 0.31,
    status: 'Exitosa',
    reference: 'TX-020',
  },
  {
    id: 'tx-021',
    market: 'Volatility 50 (1s) Index',
    contract: 'Under 5',
    barrier: 5,
    entryTime: '2026-06-19 02:28:35.000 GMT',
    entryPoint: 265420.52,
    exitPoint: 265420.52,
    buyPrice: 0.35,
    profit: 0.31,
    status: 'Exitosa',
    reference: 'TX-021',
  },
  {
    id: 'tx-022',
    market: 'Volatility 50 (1s) Index',
    contract: 'Under 5',
    barrier: 5,
    entryTime: '2026-06-19 02:28:29.000 GMT',
    entryPoint: 265410.90,
    exitPoint: 265410.90,
    buyPrice: 0.35,
    profit: 0.31,
    status: 'Exitosa',
    reference: 'TX-022',
  },
  {
    id: 'tx-023',
    market: 'Volatility 50 (1s) Index',
    contract: 'Under 5',
    barrier: 5,
    entryTime: '2026-06-19 02:28:23.000 GMT',
    entryPoint: 265400.25,
    exitPoint: 265400.25,
    buyPrice: 0.35,
    profit: 0.31,
    status: 'Exitosa',
    reference: 'TX-023',
  },
  {
    id: 'tx-024',
    market: 'Volatility 50 (1s) Index',
    contract: 'Under 5',
    barrier: 5,
    entryTime: '2026-06-19 02:28:17.000 GMT',
    entryPoint: 265390.70,
    exitPoint: 265390.70,
    buyPrice: 0.35,
    profit: 0.31,
    status: 'Exitosa',
    reference: 'TX-024',
  },
];

const depositRecords = [
  {
    id: 'dep-001',
    amount: 100,
    date: '18/06/2026',
    status: 'Completado',
    method: 'Transferencia',
    reference: 'MTR-20260618-001',
    description: 'Depósito realizado y aplicado correctamente a la cuenta.',
  },
];

function formatCurrency(value) {
  return `$${value.toFixed(2)} USD`;
}

// State
let unlocked = sessionStorage.getItem('mt_auth') === 'true';
let activeTab = 'resumen';
let profileOpen = false;

// Render Password Gate
function renderPasswordGate() {
  const password = { value: '' };
  const showPw = { value: false };
  const error = { value: '' };
  const shaking = { value: false };

  const html = `
  <div class="pw-gate">
    <div class="pw-bg"></div>
    <div class="pw-card" id="pw-card">
      <div class="pw-logo">
        <div class="pw-logo-icon">M</div>
        <div class="pw-logo-text">
          <span class="pw-brand">M Transactions</span>
          <span class="pw-tagline">Plataforma de Trading</span>
        </div>
      </div>
      <div class="pw-lock-icon">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      </div>
      <h2 class="pw-title">Acceso Seguro</h2>
      <p class="pw-subtitle">Ingresa tu contraseña para continuar</p>
      <form class="pw-form" id="pw-form">
        <div class="pw-input-wrap">
          <input type="password" class="pw-input" id="pw-input" placeholder="Contraseña" autofocus />
          <button type="button" class="pw-eye" id="pw-eye">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </button>
        </div>
        <div class="pw-error" id="pw-error" style="display:none;"></div>
        <button type="submit" class="pw-btn">Ingresar</button>
      </form>
      <p class="pw-footer">Acceso restringido · Solo usuarios autorizados</p>
    </div>
  </div>`;

  document.getElementById('root').innerHTML = html;

  document.getElementById('pw-form').addEventListener('submit', (e) => {
    e.preventDefault();
    if (password.value === CORRECT_PASSWORD) {
      sessionStorage.setItem('mt_auth', 'true');
      unlocked = true;
      render();
    } else {
      error.value = 'Contraseña incorrecta. Inténtalo de nuevo.';
      shaking.value = true;
      document.getElementById('pw-error').textContent = error.value;
      document.getElementById('pw-error').style.display = 'block';
      document.getElementById('pw-card').classList.add('shake');
      setTimeout(() => {
        shaking.value = false;
        document.getElementById('pw-card').classList.remove('shake');
      }, 500);
      setTimeout(() => {
        error.value = '';
        document.getElementById('pw-error').style.display = 'none';
      }, 3000);
    }
  });

  document.getElementById('pw-input').addEventListener('input', (e) => {
    password.value = e.target.value;
  });

  document.getElementById('pw-eye').addEventListener('click', () => {
    showPw.value = !showPw.value;
    document.getElementById('pw-input').type = showPw.value ? 'text' : 'password';
  });
}

// Render Dashboard
function renderDashboard() {
  const html = `
  <div class="app">
    <header class="header">
      <div class="header-left">
        <div class="brand-icon">M</div>
        <span class="brand-name">M Transactions</span>
      </div>
      <div class="header-right" id="profile-container">
        <div class="profile-btn" id="profile-btn">
          <div class="avatar-wrapper">
            <div class="avatar">AL</div>
            <span class="avatar-badge" id="avatar-badge"></span>
          </div>
          <div class="profile-info">
            <span class="profile-name">Alexis López</span>
            <span class="profile-flag">🇨🇴 Colombia</span>
          </div>
          <svg class="chevron ${profileOpen ? 'open' : ''}" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
        <div class="profile-menu" id="profile-menu" style="display:${profileOpen ? 'block' : 'none'}">
          <button class="profile-menu-item" id="retiros-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 11l-5-5-5 5M17 18l-5-5-5 5" />
            </svg>
            Retiros
          </button>
          <div class="profile-divider"></div>
          <button class="profile-menu-item danger" id="logout-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            Cerrar sesión
          </button>
        </div>
      </div>
    </header>
    <nav class="nav-tabs">
      <button class="nav-tab ${activeTab === 'resumen' ? 'active' : ''}" data-tab="resumen">${homeIcon()}<span>Resumen</span></button>
      <button class="nav-tab ${activeTab === 'depositos' ? 'active' : ''}" data-tab="depositos">${depositIcon()}<span>Depósitos</span></button>
      <button class="nav-tab ${activeTab === 'transacciones' ? 'active' : ''}" data-tab="transacciones">${transactIcon()}<span>Transacciones</span></button>
      <button class="nav-tab ${activeTab === 'mercados' ? 'active' : ''}" data-tab="mercados">${marketIcon()}<span>Mercados</span></button>
    </nav>
    <main class="main-content" id="main-content"></main>
  </div>`;

  document.getElementById('root').innerHTML = html;

  // Event listeners
  document.querySelectorAll('.nav-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      activeTab = btn.dataset.tab;
      renderDashboard();
    });
  });

  document.getElementById('profile-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    profileOpen = !profileOpen;
    document.getElementById('profile-menu').style.display = profileOpen ? 'block' : 'none';
    document.querySelector('.chevron').className = `chevron ${profileOpen ? 'open' : ''}`;
  });

  document.getElementById('logout-btn').addEventListener('click', () => {
    sessionStorage.removeItem('mt_auth');
    unlocked = false;
    render();
  });

  document.getElementById('retiros-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    showWithdrawModal();
  });

  const withdrawBtn = document.getElementById('withdraw-btn');
  if (withdrawBtn) {
    withdrawBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showWithdrawModal();
    });
  }

  // Close profile menu on outside click
  document.addEventListener('click', () => {
    profileOpen = false;
    const menu = document.getElementById('profile-menu');
    if (menu) menu.style.display = 'none';
  });

  renderTabContent();
}

function homeIcon() {
  return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>`;
}

function depositIcon() {
  return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>`;
}

function transactIcon() {
  return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <polyline points="17 1 21 5 17 9" />
    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
    <polyline points="7 23 3 19 7 15" />
    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
  </svg>`;
}

function marketIcon() {
  return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>`;
}

function renderTabContent() {
  const content = document.getElementById('main-content');
  if (!content) return;

  if (activeTab === 'resumen') {
    content.innerHTML = renderResumenTab();
  } else if (activeTab === 'depositos') {
    content.innerHTML = renderDepositosTab();
  } else if (activeTab === 'transacciones') {
    content.innerHTML = renderTransaccionesTab();
  } else if (activeTab === 'mercados') {
    content.innerHTML = renderMercadosTab();
    initMercados();
  }
}

function renderResumenTab() {
  const latestDeposit = depositRecords[depositRecords.length - 1];
  const totalDeposits = depositRecords.reduce((total, deposit) => total + deposit.amount, 0);
  const totalProfit = transactionRecords.reduce((sum, tx) => sum + tx.profit, 0);
  const successfulTransactions = transactionRecords.filter((tx) => tx.status === 'Exitosa').length;
  const totalTransactions = transactionRecords.length;
  const winRate = totalTransactions > 0 ? ((successfulTransactions / totalTransactions) * 100).toFixed(1) : '0.0';
  const availableBalance = totalDeposits + totalProfit;
  const latestTransaction = transactionRecords[0];

  return `
    <div class="tab-content">
      <div class="section-header">
        <h1 class="section-title">Resumen de Cuenta</h1>
        <span class="section-badge">Principal</span>
      </div>
      <div class="deposit-success-banner">
        <div class="deposit-success-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <div class="deposit-success-content">
          <div class="deposit-success-title">Depósito realizado correctamente</div>
          <div class="deposit-success-text">Se aplicó un depósito de ${formatCurrency(latestDeposit.amount)} a tu cuenta.</div>
        </div>
      </div>
      <div class="balance-card">
        <div class="balance-glow"></div>
        <div class="balance-label">Saldo Disponible</div>
        <div class="balance-amount">
          <span class="balance-currency">USD</span>
          <span class="balance-value">${availableBalance.toFixed(2)}</span>
        </div>
        <div class="balance-sub">Cuenta de Trading · M Transactions</div>
<div class="balance-actions">
           <button class="balance-action-btn primary" id="withdraw-btn">
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
               <path d="M17 11l-5-5-5 5M17 18l-5-5-5 5" />
             </svg>
             Retirar
           </button>
         </div>
      </div>
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon green">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              <polyline points="17 6 23 6 23 12" />
            </svg>
          </div>
          <div class="stat-info">
            <span class="stat-label">Ganancias Totales</span>
            <span class="stat-value" style="color: ${totalProfit >= 0 ? 'var(--green)' : 'var(--red)'}">${formatCurrency(totalProfit)}</span>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon red">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
              <polyline points="17 18 23 18 23 12" />
            </svg>
          </div>
          <div class="stat-info">
            <span class="stat-label">Pérdidas Totales</span>
            <span class="stat-value">${totalProfit >= 0 ? '$0.00' : formatCurrency(Math.abs(totalProfit))}</span>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon blue">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="17 1 21 5 17 9" />
              <path d="M3 11V9a4 4 0 0 1 4-4h14" />
            </svg>
          </div>
          <div class="stat-info">
            <span class="stat-label">Transacciones Exitosas</span>
            <span class="stat-value">${successfulTransactions}</span>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon purple">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <div class="stat-info">
            <span class="stat-label">Tasa de Acierto</span>
            <span class="stat-value">${winRate}%</span>
          </div>
        </div>
      </div>
      <div class="info-card">
        <div class="info-card-header">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span>Último Depósito</span>
        </div>
        <div class="info-card-body">
          <div class="deposit-row">
            <span class="deposit-label">Depósito realizado</span>
            <span class="deposit-badge">${latestDeposit.status}</span>
          </div>
          <div class="deposit-amount-row">
            <span class="deposit-amount">${formatCurrency(latestDeposit.amount)}</span>
            <span class="deposit-date">${latestDeposit.date}</span>
          </div>
          <p class="deposit-note">${latestDeposit.description}</p>
        </div>
      </div>
      <div class="info-card">
        <div class="info-card-header">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 3v18h18" /><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
          </svg>
          <span>Última Transacción Exitosa</span>
        </div>
        <div class="info-card-body">
          <div class="deposit-row">
            <span class="deposit-label">${latestTransaction.market}</span>
            <span class="deposit-badge">${latestTransaction.contract}</span>
          </div>
          <div class="deposit-amount-row">
            <span class="deposit-amount">${formatCurrency(latestTransaction.profit)}</span>
            <span class="deposit-date">${latestTransaction.entryTime.replace('.000 GMT', '')}</span>
          </div>
          <p class="deposit-note">Referencia ${latestTransaction.reference} · Barrera ${latestTransaction.barrier} · Entrada ${latestTransaction.entryPoint.toFixed(2)}</p>
        </div>
      </div>
      <div class="account-info-card">
        <div class="account-info-row">
          <span class="account-info-label">Titular</span>
          <span class="account-info-value">Alexis López 🇨🇴</span>
        </div>
        <div class="account-info-row">
          <span class="account-info-label">Tipo de cuenta</span>
          <span class="account-info-value">Trading</span>
        </div>
        <div class="account-info-row">
          <span class="account-info-label">Moneda</span>
          <span class="account-info-value">USD (Dólar)</span>
        </div>
        <div class="account-info-row">
          <span class="account-info-label">Estado</span>
          <span class="account-info-value status-active">
            <span class="status-dot"></span>
            Activa
          </span>
        </div>
      </div>
    </div>`;
}

function renderDepositosTab() {
  const totalDeposits = depositRecords.reduce((total, deposit) => total + deposit.amount, 0);
  const completedDeposits = depositRecords.filter((deposit) => deposit.status === 'Completado').length;

  return `
    <div class="tab-content">
      <div class="section-header">
        <h1 class="section-title">Depósitos</h1>
        <span class="section-badge">Habilitada</span>
      </div>
      <div class="deposit-summary-grid">
        <div class="summary-card">
          <span class="summary-label">Total depositado</span>
          <strong class="summary-value">${formatCurrency(totalDeposits)}</strong>
        </div>
        <div class="summary-card">
          <span class="summary-label">Depósitos registrados</span>
          <strong class="summary-value">${depositRecords.length}</strong>
        </div>
        <div class="summary-card">
          <span class="summary-label">Completados</span>
          <strong class="summary-value">${completedDeposits}</strong>
        </div>
      </div>
      <div class="deposit-list-card">
        <div class="deposit-list-header">
          <div>
            <h2 class="deposit-list-title">Historial de depósitos</h2>
            <p class="deposit-list-subtitle">Los depósitos realizados se registran aquí automáticamente.</p>
          </div>
          <span class="deposit-list-status">
            <span class="status-dot"></span>
            Activo
          </span>
        </div>
        <div class="deposit-list">
          ${depositRecords.map((deposit) => `
            <div class="deposit-list-item">
              <div class="deposit-list-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div class="deposit-list-main">
                <div class="deposit-list-row">
                  <strong>${formatCurrency(deposit.amount)}</strong>
                  <span class="deposit-status ${deposit.status.toLowerCase()}">${deposit.status}</span>
                </div>
                <div class="deposit-list-meta">
                  <span>${deposit.date}</span>
                  <span>${deposit.method}</span>
                  <span>${deposit.reference}</span>
                </div>
                <p>${deposit.description}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>`;
}

function renderTransaccionesTab() {
  const totalProfit = transactionRecords.reduce((sum, tx) => sum + tx.profit, 0);
  const totalBuy = transactionRecords.reduce((sum, tx) => sum + tx.buyPrice, 0);
  const completed = transactionRecords.filter((tx) => tx.status === 'Exitosa').length;
  const lost = transactionRecords.filter((tx) => tx.status === 'Perdida').length;
  const winRate = transactionRecords.length > 0 ? ((completed / transactionRecords.length) * 100).toFixed(1) : '0.0';

  return `
    <div class="tab-content">
      <div class="section-header">
        <h1 class="section-title">Transacciones</h1>
        <div class="section-filters"> 
        </div>
      </div>
      <div class="transaction-summary-grid">
        <div class="summary-card">
          <span class="summary-label">Total invertido</span>
          <strong class="summary-value">${formatCurrency(totalBuy)}</strong>
        </div>
        <div class="summary-card">
          <span class="summary-label">Ganancia neta</span>
          <strong class="summary-value" style="color: ${totalProfit >= 0 ? 'var(--green)' : 'var(--red)'}">${formatCurrency(totalProfit)}</strong>
        </div>
        <div class="summary-card">
          <span class="summary-label">Operaciones exitosas</span>
          <strong class="summary-value">${completed}</strong>
        </div>
        <div class="summary-card">
          <span class="summary-label">Tasa de acierto</span>
          <strong class="summary-value">${winRate}%</strong>
        </div>
      </div>
      <div class="transaction-list-card">
        <div class="transaction-list-header">
          <div>
            <h2 class="transaction-list-title">Historial de transacciones</h2>
            <p class="transaction-list-subtitle">24 operaciones Under 5 registradas con apuesta de $0.35 USD.</p>
          </div>
          <span class="transaction-list-status">
            <span class="status-dot"></span>
            ${completed} exitosas
          </span>
        </div>
        <div class="transaction-list">
          ${transactionRecords.map((tx) => `
            <div class="transaction-list-item">
              <div class="transaction-list-icon ${tx.status === 'Exitosa' ? 'success' : 'loss'}">
                ${tx.status === 'Exitosa'
                  ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5" /></svg>`
                  : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>`
                }
              </div>
              <div class="transaction-list-main">
                <div class="transaction-list-row">
                  <div class="transaction-title-wrap">
                    <strong>${tx.market}</strong>
                    <span class="transaction-contract">${tx.contract} · Barrera ${tx.barrier}</span>
                  </div>
                  <span class="transaction-profit ${tx.profit >= 0 ? 'positive' : 'negative'}">${formatCurrency(tx.profit)}</span>
                </div>
                <div class="transaction-list-meta">
                  <span>${tx.entryTime.replace('.000 GMT', '')}</span>
                  <span>Ref. ${tx.reference}</span>
                  <span>Entrada ${tx.entryPoint.toFixed(2)}</span>
                  <span>Salida ${tx.exitPoint.toFixed(2)}</span>
                </div>
                <div class="transaction-details">
                  <span>Apuesta: ${formatCurrency(tx.buyPrice)}</span>
                  <span>Resultado: ${tx.status}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>`;
}

function renderMercadosTab() {
  return `
    <div class="tab-content">
      <div class="section-header">
        <h1 class="section-title">Mercados en Vivo</h1>
        <div class="live-indicator">
          <span class="live-dot"></span>
          <span>EN VIVO</span>
        </div>
      </div>
      <div class="markets-grid">
        <div id="vol50-card" class="market-card"></div>
        <div id="vol10-card" class="market-card vol10-card"></div>
      </div>
    </div>`;
}

// WebSocket for market data
let vol50Chart = null;
let vol10Chart = null;
let vol50Ws = null;
let vol10Ws = null;

function initMercados() {
  initVol50();
  initVol10();
}

function initVol50() {
  const latest = vol50Ticks.length > 0 ? vol50Ticks[vol50Ticks.length - 1] : null;
  const prev = vol50Ticks.length > 1 ? vol50Ticks[vol50Ticks.length - 2] : null;
  const priceUp = latest && prev ? latest.price >= prev.price : true;
  const stability = vol50Stability;

  document.getElementById('vol50-card').innerHTML = `
    <div class="market-card-header">
      <div class="market-info">
        <div class="market-symbol-badge vol50">V50</div>
        <div>
          <div class="market-name">Volatility 50 (1s) Index</div>
          <div class="market-symbol">1HZ50V · Deriv Synthetics</div>
        </div>
      </div>
      <div class="conn-status ${vol50Connected ? 'connected' : ''}">
        <span class="conn-dot"></span>
        ${vol50Connected ? 'Conectado' : 'Conectando...'}
      </div>
    </div>
    <div class="market-price-row">
      <div class="market-price">
        ${latest ? latest.price.toFixed(2) : '—'}
        ${latest && prev ? `<span class="price-arrow ${priceUp ? 'up' : 'down'}">${priceUp ? '▲' : '▼'}</span>` : ''}
      </div>
      <div class="stability-badge ${stability}">
        ${stability === 'analyzing' ? `<span class="spin-dot"></span>Analizando...` : ''}
        ${stability === 'stable' ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12" /></svg> Mercado Estable` : ''}
        ${stability === 'unstable' ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg> Mercado Inestable` : ''}
      </div>
    </div>
    <div class="chart-wrap">
      <canvas id="vol50-chart"></canvas>
    </div>
    <div class="market-meta">
      <div class="meta-item">
        <span class="meta-label">Ticks recibidos</span>
        <span class="meta-value">${vol50Ticks.length}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Volatilidad</span>
        <span class="meta-value ${stability === 'stable' ? 'green' : stability === 'unstable' ? 'red' : ''}">
          ${stability === 'analyzing' ? '...' : stability === 'stable' ? 'Baja' : 'Alta'}
        </span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Intervalo</span>
        <span class="meta-value">1 segundo</span>
      </div>
    </div>
  `;

  if (vol50Ticks.length > 2) {
    const ctx = document.getElementById('vol50-chart').getContext('2d');
    vol50Chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: vol50Ticks.slice(-40).map(() => ''),
        datasets: [{
          data: vol50Ticks.slice(-40).map(t => t.price),
          borderColor: priceUp ? '#00C878' : '#FF4757',
          backgroundColor: priceUp ? 'rgba(0,200,120,0.08)' : 'rgba(255,71,87,0.08)',
          borderWidth: 2,
          fill: true,
          tension: 0.4,
          pointRadius: 0,
        }]
      },
      options: {
        responsive: true,
        animation: false,
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
        scales: { x: { display: false }, y: { display: false } }
      }
    });
  }
}

function initVol10() {
  // Similar implementation for V10...
  document.getElementById('vol10-card').innerHTML = `
    <div class="market-card-header">
      <div class="market-info">
        <div class="market-symbol-badge vol10">V10</div>
        <div>
          <div class="market-name">Volatility 10 Index</div>
          <div class="market-symbol">R_10 · Deriv Synthetics</div>
        </div>
      </div>
      <div class="conn-status ${vol10Connected ? 'connected' : ''}">
        <span class="conn-dot"></span>
        ${vol10Connected ? 'Conectado' : 'Conectando...'}
      </div>
    </div>
    <div class="market-price-row">
      <div class="market-price">
        ${vol10Ticks.length ? vol10Ticks[vol10Ticks.length - 1].price.toFixed(3) : '—'}
        ${vol10Ticks.length > 1 ? `<span class="price-arrow ${vol10Ticks[vol10Ticks.length - 1].price >= vol10Ticks[vol10Ticks.length - 2].price ? 'up' : 'down'}">${vol10Ticks[vol10Ticks.length - 1].price >= vol10Ticks[vol10Ticks.length - 2].price ? '▲' : '▼'}</span>` : ''}
      </div>
      ${vol10Ticks.length ? `<div class="last-digit-badge">Último dígito: <strong>${vol10Ticks[vol10Ticks.length - 1].digit}</strong></div>` : ''}
    </div>
    <div class="chart-wrap">
      ${vol10Ticks.length > 2 ? '<canvas id="vol10-chart"></canvas>' : '<div class="chart-loading"><span class="loading-spinner"></span> Cargando datos de mercado...</div>'}
    </div>
    <!-- Digit Analysis and Recommendation sections would follow -->
  `;
}

let vol50Ticks = [];
let vol50Connected = false;
let vol50Stability = 'analyzing';
let vol10Ticks = [];
let vol10Connected = false;

function connectVol50() {
  if (vol50Ws) return;
  vol50Ws = new WebSocket('wss://ws.binaryws.com/websockets/v3?app_id=1089');

  vol50Ws.onopen = () => {
    vol50Connected = true;
    if (activeTab === 'mercados') initVol50();
  };

  vol50Ws.onmessage = (e) => {
    const data = JSON.parse(e.data);
    if (data.history) {
      const prices = data.history.prices;
      const times = data.history.times;
      vol50Ticks = prices.map((p, i) => ({
        price: p,
        time: times[i],
        digit: parseInt(p.toString()[p.toString().length - 1])
      }));
      updateVol50Stability();
      if (activeTab === 'mercados') initVol50();
    }
    if (data.tick) {
      vol50Ticks.push({
        price: data.tick.quote,
        time: data.tick.epoch,
        digit: parseInt(data.tick.quote.toString()[data.tick.quote.toString().length - 1])
      });
      vol50Ticks = vol50Ticks.slice(-100);
      updateVol50Stability();
      if (activeTab === 'mercados') initVol50();
    }
  };

  vol50Ws.onclose = () => vol50Connected = false;
}

function updateVol50Stability() {
  if (vol50Ticks.length < 10) {
    vol50Stability = 'analyzing';
    return;
  }
  const recent = vol50Ticks.slice(-20);
  const prices = recent.map(t => t.price);
  const avg = prices.reduce((a, b) => a + b, 0) / prices.length;
  const variance = prices.reduce((sum, p) => sum + Math.pow(p - avg, 2), 0) / prices.length;
  const stdDev = Math.sqrt(variance);
  const cv = (stdDev / avg) * 100;
  vol50Stability = cv < 0.15 ? 'stable' : 'unstable';
}

// Withdraw modal functions
let currentWithdrawalCode = null;

function generateHash(length = 16) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function generateQRData(code) {
  const svgStr = '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120"><rect width="120" height="120" fill="%230f1829"/><rect x="15" y="15" width="90" height="90" fill="%23152035"/><text x="60" y="65" font-size="10" fill="%233b82f6" text-anchor="middle">' + code.substring(0, 8) + '</text></svg>';
  return 'data:image/svg+xml;base64,' + btoa(svgStr);
}

function showWithdrawModal() {
  const html = `
  <div class="modal-overlay" id="withdraw-modal">
    <div class="modal-card">
      <div class="modal-header">
        <h2 class="modal-title">Solicitar Retiro</h2>
        <button class="modal-close" id="modal-close">&times;</button>
      </div>
      <div class="modal-body">
        <p class="modal-subtitle">Ingresa el monto a retirar (mínimo $1 USD)</p>
        <form class="withdraw-form" id="withdraw-form">
          <div class="input-group">
            <label class="input-label">Monto en USD</label>
            <input type="number" class="modal-input" id="withdraw-amount" min="1" step="0.01" placeholder="0.00" required />
          </div>
          <div class="modal-error" id="withdraw-error" style="display:none;"></div>
          <button type="submit" class="modal-submit-btn">Confirmar Retiro</button>
        </form>
      </div>
    </div>
  </div>`;

  document.body.insertAdjacentHTML('beforeend', html);

  const amountInput = document.getElementById('withdraw-amount');
  const errorDiv = document.getElementById('withdraw-error');

  document.getElementById('modal-close').addEventListener('click', () => {
    document.getElementById('withdraw-modal').remove();
  });

  document.getElementById('withdraw-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const amount = parseFloat(amountInput.value);
    if (amount && amount >= 1) {
      await processWithdrawal(amount);
    } else {
      errorDiv.textContent = 'El monto mínimo es $1 USD';
      errorDiv.style.display = 'block';
    }
  });
}

async function processWithdrawal(amount) {
  const now = new Date();
  const timestamp = now.getTime();
  const dateStr = now.toISOString().split('T')[0];

  // Generate unique hash code
  const hash = generateHash(16);
  currentWithdrawalCode = hash;
  localStorage.setItem('withdrawalCode', hash);

  // Add withdrawal to transactions
  const newTx = {
    id: `wd-${timestamp}`,
    market: 'Retiro',
    contract: 'Retiro Bancario',
    barrier: 0,
    entryTime: `${dateStr} ${now.toTimeString().split(' ')[0]}.000 GMT`,
    entryPoint: amount,
    exitPoint: 0,
    buyPrice: amount,
    profit: -amount,
    status: 'Pendiente',
    reference: `WD-${hash}`,
    type: 'withdrawal'
  };
  transactionRecords.unshift(newTx);

  // Show avatar badge (red dot on profile)
  const avatarBadge = document.getElementById('avatar-badge');
  if (avatarBadge) avatarBadge.classList.add('active');

  // Cerrar sesión después de 5 segundos
  setTimeout(() => {
    localStorage.removeItem('withdrawalCode');
    currentWithdrawalCode = null;
    sessionStorage.removeItem('mt_auth');
    unlocked = false;
    render();
  }, 5000);

  // Mostrar código hash y QR
  showWithdrawalCode(hash, amount);

  document.getElementById('withdraw-modal').remove();
  if (activeTab === 'transacciones') renderTabContent();
}

function showWithdrawalCode(hash, amount) {
  const html = `
  <div class="modal-overlay" id="withdrawal-code-modal">
    <div class="modal-card" style="max-width: 420px;">
      <div class="modal-header">
        <h2 class="modal-title">Código de Retiro</h2>
        <button class="modal-close" id="code-modal-close">&times;</button>
      </div>
      <div class="modal-body" style="text-align: center;">
        <p class="modal-subtitle">Guarda este código para confirmar tu retiro</p>
        <div style="font-size: 28px; font-weight: 800; color: var(--green); margin: 24px 0; letter-spacing: 4px; word-break: break-all;">
          ${hash}
        </div>
        <div class="withdrawal-amount-box">
          Monto: $${amount.toFixed(2)} USD
        </div>
        <p style="color: var(--text-muted); font-size: 12px; margin-top: 16px;">
          Cierra sesión en 5 segundos...
        </p>
      </div>
    </div>
  </div>`;

  document.body.insertAdjacentHTML('beforeend', html);

  document.getElementById('code-modal-close').addEventListener('click', () => {
    document.getElementById('withdrawal-code-modal').remove();
  });
}

// Main render
function render() {
  if (!unlocked) {
    renderPasswordGate();
  } else {
    renderDashboard();
    if (activeTab === 'mercados') {
      setTimeout(initMercados, 100);
      connectVol50();
    }
  }
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  render();
});