// src/book-6.js
// Контент страницы книги 6 (без шапки, подвала и переводчика)

export default `
  <!-- ===== УНИКАЛЬНЫЕ СТИЛИ ДЛЯ КНИГИ 6 ===== -->
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Arial, sans-serif; background: #0a1628; color: #e0e8f0; min-height: 100vh; padding-bottom: 0; }
    .hero-book {
      background: linear-gradient(135deg, #0a1628 0%, #1a2d4d 50%, #0d2040 100%);
      padding: 40px 20px;
      border-bottom: 2px solid #c9a227;
    }
    .hero-inner {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 40px;
      max-width: 900px;
      margin: 0 auto;
      flex-wrap: wrap;
    }
    .hero-cover img {
      width: 220px;
      border-radius: 8px;
      box-shadow: 0 8px 40px rgba(201,162,39,0.35), 0 2px 12px rgba(0,0,0,0.6);
      border: 2px solid #c9a227;
      display: block;
    }
    .hero-text {
      text-align: left;
      max-width: 480px;
    }
    @media (max-width: 600px) {
      .hero-inner { flex-direction: column; }
      .hero-text { text-align: center; }
      .hero-cover img { width: 160px; }
    }
    .hero-book h1 {
      font-size: clamp(18px, 3vw, 28px);
      color: #c9a227;
      font-weight: 900;
      letter-spacing: 1px;
      margin-bottom: 8px;
      line-height: 1.3;
    }
    .hero-book h2 {
      font-size: clamp(12px, 2vw, 16px);
      color: #a0b8d0;
      font-weight: 400;
      margin-bottom: 16px;
    }
    .hero-subtitle-book {
      font-size: 12px;
      color: #c9a227;
      letter-spacing: 1px;
      margin-bottom: 8px;
      font-weight: 600;
    }
    .badge-book {
      display: inline-block;
      background: #c9a227;
      color: #0a1628;
      font-size: 12px;
      font-weight: 700;
      padding: 4px 14px;
      border-radius: 20px;
      margin-bottom: 16px;
      letter-spacing: 1px;
    }
    .container-book {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px 20px 0;
    }
    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 24px;
      margin-bottom: 20px;
    }
    .card {
      background: #111f35;
      border: 1px solid #1e3a5f;
      border-radius: 12px;
      overflow: hidden;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 32px rgba(0,0,0,0.4);
    }
    .card-header {
      padding: 20px;
      border-bottom: 1px solid #1e3a5f;
    }
    .card-header.free {
      background: linear-gradient(135deg, #0d3a2a, #0a2d1f);
      border-left: 4px solid #2a9d6a;
    }
    .card-header.paid {
      background: linear-gradient(135deg, #2d1a00, #3d2800);
      border-left: 4px solid #c9a227;
    }
    .card-type {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .card-type.free { color: #2a9d6a; }
    .card-type.paid { color: #c9a227; }
    .card-title {
      font-size: 18px;
      font-weight: 700;
      color: #e8f4ff;
      margin-bottom: 4px;
    }
    .card-sub {
      font-size: 13px;
      color: #7a95b0;
    }
    .card-body {
      padding: 20px;
    }
    .price-tag {
      font-size: 32px;
      font-weight: 900;
      color: #c9a227;
      margin: 10px 0 4px;
    }
    .price-sub {
      font-size: 12px;
      color: #7a95b0;
      margin-bottom: 16px;
    }
    .features {
      list-style: none;
      margin-bottom: 20px;
    }
    .features li {
      font-size: 13px;
      color: #a0b8d0;
      padding: 5px 0;
      display: flex;
      align-items: flex-start;
      gap: 8px;
    }
    .features li::before {
      content: "✓";
      color: #2a9d6a;
      font-weight: 700;
      flex-shrink: 0;
      margin-top: 1px;
    }
    .features li.locked::before {
      content: "🔒";
      color: #c9a227;
    }
    .btn {
      display: block;
      width: 100%;
      padding: 13px 20px;
      border: none;
      border-radius: 8px;
      font-size: 15px;
      font-weight: 700;
      cursor: pointer;
      text-align: center;
      text-decoration: none;
      transition: opacity 0.2s, transform 0.1s;
    }
    .btn:hover { opacity: 0.88; transform: scale(0.99); }
    .btn-free {
      background: #1a4d38;
      color: #2ecc8a;
      border: 1px solid #2a9d6a;
    }
    .btn-paid {
      background: linear-gradient(135deg, #c9a227, #e8b832);
      color: #0a1628;
    }
    .btn-download {
      background: #1a2d4d;
      color: #5ba3e0;
      border: 1px solid #2a5080;
      margin-top: 8px;
      font-size: 13px;
      padding: 10px;
      display: block;
      width: 100%;
      border-radius: 8px;
      text-align: center;
      text-decoration: none;
      font-weight: 700;
    }
    .modal {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.85);
      z-index: 1000;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .modal.active { display: flex; }
    .modal-box {
      background: #111f35;
      border: 1px solid #2a5080;
      border-radius: 12px;
      width: 100%;
      max-width: 860px;
      height: 92vh;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    .modal-head {
      padding: 16px 20px;
      border-bottom: 1px solid #1e3a5f;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #0d1a2d;
    }
    .modal-head h3 {
      font-size: 15px;
      color: #c9a227;
      font-weight: 700;
    }
    .modal-close {
      background: none;
      border: none;
      color: #7a95b0;
      font-size: 22px;
      cursor: pointer;
      padding: 0 4px;
      line-height: 1;
    }
    .modal-close:hover { color: #e0e8f0; }
    .modal-body {
      flex: 1;
      overflow: hidden;
      position: relative;
    }
    .modal-body iframe {
      width: 100%;
      height: 100%;
      min-height: 500px;
      border: none;
      display: block;
    }
    .info-section {
      background: #0d1a2d;
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 16px;
      border: 1px solid #1e3a5f;
    }
    .info-section h3 {
      color: #c9a227;
      font-size: 18px;
      margin-bottom: 16px;
    }
    .security-badge {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 12px;
    }
    .security-badge span {
      font-size: 11px;
      background: #0d1a2d;
      border: 1px solid #1e3a5f;
      color: #7a95b0;
      padding: 3px 10px;
      border-radius: 20px;
    }
    .plisio-form { margin-top: 20px; }
    .email-input {
      width: 100%;
      padding: 12px 14px;
      background: #0d1a2d;
      border: 1px solid #2a5080;
      border-radius: 8px;
      color: #e0e8f0;
      font-size: 14px;
      margin-bottom: 16px;
    }
    .fee-note {
      font-size: 12px;
      color: #c9a227;
      margin-top: 8px;
      line-height: 1.5;
    }
    .card-warning {
      font-size: 12px;
      color: #f39c12;
      margin-top: 8px;
      background: rgba(243,156,18,0.1);
      padding: 8px 10px;
      border-radius: 6px;
      border-left: 3px solid #f39c12;
    }
    .international-help {
      font-size: 12px;
      color: #5bc0ff;
      margin-top: 8px;
      background: rgba(91,192,255,0.1);
      padding: 8px 10px;
      border-radius: 6px;
      border-left: 3px solid #5bc0ff;
    }
    .error-msg {
      color: #e05555;
      font-size: 12px;
      margin-top: 6px;
      display: none;
      background: #2d0f0f;
      border: 1px solid #7f1d1d;
      border-radius: 6px;
      padding: 8px 12px;
    }
    .success-msg {
      background: #0d3a2a;
      border: 1px solid #2a9d6a;
      border-radius: 8px;
      padding: 12px;
      margin-bottom: 12px;
      display: none;
    }
    .success-msg p {
      color: #2ecc8a;
      font-size: 13px;
      font-weight: 700;
    }
    .policy-box {
      background: #1a2d00;
      border: 1px solid #c9a227;
      border-radius: 12px;
      padding: 16px;
      margin-top: 16px;
    }
    .policy-box h4 {
      color: #c9a227;
      font-size: 14px;
      margin-bottom: 8px;
    }
    .policy-box p {
      font-size: 12px;
      color: #a0b8d0;
      line-height: 1.5;
    }
    .two-columns {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    @media (max-width: 600px) { .two-columns { grid-template-columns: 1fr; } }
    .who-list {
      list-style: none;
    }
    .who-list li {
      font-size: 13px;
      color: #a0b8d0;
      padding: 8px 0;
      display: flex;
      align-items: flex-start;
      gap: 8px;
      border-bottom: 1px solid #1e3a5f;
    }
    .who-list li:last-child { border-bottom: none; }
    .who-list li::before {
      content: "▹";
      color: #c9a227;
      font-weight: 700;
      flex-shrink: 0;
    }
    .method3-box {
      margin: 18px 0;
      padding: 16px;
      background: #1a2d00;
      border: 2px solid #c9a227;
      border-radius: 12px;
    }
    .method3-box h4 {
      color: #c9a227;
      margin-bottom: 8px;
      font-size: 15px;
    }
    .method3-box ol {
      font-size: 13px;
      padding-left: 18px;
      line-height: 1.6;
      margin-bottom: 8px;
    }
    .method3-box small { color: #7a95b0; }
    #paymentSuccess {
      display: none;
      margin-top: 16px;
      background: #0d3a2a;
      padding: 12px;
      border-radius: 8px;
      text-align: center;
    }
    .highlight { color: #c9a227; font-weight: 700; }
  </style>

  <!-- ===== КОНТЕНТ СТРАНИЦЫ ===== -->
  <div class="hero-book">
    <div class="hero-inner">
      <div class="hero-cover">
        <img src="https://zarif1961-blip.github.io/zarif-books/ZARIF_2025_Book_6_COVER.png" alt="ZARIF 2025 Book 6 Cover">
      </div>
      <div class="hero-text">
        <div class="badge-book">ZARIF 2025 — BOOK 6</div>
        <div class="hero-subtitle-book">ZARIF 2025 — WORLD'S FIRST IDEAL SEWING TECHNOLOGY BASED ON A ROTATING LOOPER</div>
        <h1>ZARIF 2025 PLATFORM — THE FOUNDATION OF THE FUTURE'S AUTOMATED, UNSTAFFED GARMENT FACTORY</h1>
        <h2>A fundamental analysis of the irremediable limitations of 19th-century sewing technologies</h2>
        <p style="color:#5ba3e0; font-size:13px; margin-top:8px;">Author: PhD. Zarif Sharifovich Tadjibaev · Tashkent, 2026</p>
      </div>
    </div>
  </div>

  <div class="container-book">
    <div class="info-section">
      <h3>📖 About This Book</h3>
      <p style="font-size:14px; color:#a0b8d0; line-height:1.8; margin-bottom:16px;">This book provides a <strong style="color:#e8f4ff;">comprehensive analysis of the fundamental limitations of nineteenth-century sewing technologies (Types 301 and 401)</strong> and presents <strong style="color:#c9a227;">ZARIF 2025 as the world's first ideal sewing technology</strong> based on the rotary looper — designed from the outset as a robot-native peripheral device. This is the <strong style="color:#e8f4ff;">sixth book</strong> in the series <strong style="color:#c9a227;">«ZARIF 2025 — The Platform for Autonomous Sewing Production»</strong>. It brings together the complete analysis of the ZARIF 2025 platform as the foundation for the future's automated, unstaffed garment factory — a fundamental analysis of the irremediable limitations of 19th-century sewing technologies and the revolutionary solution that ZARIF 2025 provides.</p>
      
      <h3>👤 About the Author</h3>
      <p style="font-size:14px; color:#a0b8d0; line-height:1.8; margin-bottom:16px;"><strong style="color:#e8f4ff;">Zarif Sharifovich Tadjibaev</strong> is the first person in the world to invent, in 1994, the <strong style="color:#c9a227;">double thread chain stitch technology using a rotary looper</strong>, for which <strong style="color:#e8f4ff;">US Patent No. 6,095,069</strong> was issued in 2000. It took him approximately <strong style="color:#c9a227;">31 years</strong> to transform his technology into the <strong style="color:#e8f4ff;">world's first ideal sewing technology for single-line thread seams</strong>. This sixth book presents the comprehensive analysis of the ZARIF 2025 platform as the foundation for the future's automated, unstaffed garment factory — a fundamental analysis of the irremediable limitations of 19th-century sewing technologies and the revolutionary solution that ZARIF 2025 provides.</p>
      
      <div class="two-columns">
        <div>
          <h3>🎯 What Will You Learn From This Book?</h3>
          <ul class="features" style="margin-bottom:0;">
            <li>Why traditional sewing machines (Types 301 and 401) are <strong style="color:#e8f4ff;">incompatible with robots</strong> — a detailed analysis of 11 fundamental defects of the lockstitch and 4 irresolvable problems of the chain stitch.</li>
            <li>How <strong style="color:#e8f4ff;">ZARIF 2025 technology eliminates all these defects</strong> — the operating principles of the rotary looper, two-revolution kinematics, Dry Head architecture, and digital control.</li>
            <li><strong style="color:#e8f4ff;">Three types of integration</strong> of humanoid robots with ZARIF 2025 machines — from simple loaders to full sewing automation.</li>
            <li>The <strong style="color:#e8f4ff;">"Dual-Purpose" concept</strong> and the digital architecture of the industrial version.</li>
            <li><strong style="color:#e8f4ff;">Physical AI and the ZARIF digital ecosystem</strong> — brain + nervous system + body.</li>
            <li><strong style="color:#e8f4ff;">The economics of ZARIF 2025</strong> — figures that change the rules of the game: 75% OPEX reduction, 11.1-month payback, $34.6M NPV.</li>
            <li>The <strong style="color:#e8f4ff;">market entry roadmap 2026–2035</strong> — from prototype to fully autonomous factories.</li>
            <li><strong style="color:#e8f4ff;">Competitive advantages, intellectual property strategy, and investment</strong> — the $400–900 billion market opportunity.</li>
            <li>The <strong style="color:#e8f4ff;">AI-to-AI protocol</strong> — machine and humanoid robot as a single organism.</li>
            <li><strong style="color:#e8f4ff;">Technical documentation of the industrial version</strong> — complete specifications and sensor systems.</li>
            <li><strong style="color:#e8f4ff;">Competitive landscape analysis</strong> — why existing solutions lose out to ZARIF 2025.</li>
            <li><strong style="color:#e8f4ff;">Commercialisation strategy, investment, and global patent protection</strong> — the 20-year competitive barrier.</li>
          </ul>
        </div>
        <div>
          <h3>🎯 Who Is This Book For?</h3>
          <ul class="who-list">
            <li><strong style="color:#e8f4ff;">Engineers and technologists</strong> in the sewing industry seeking solutions for automating production processes.</li>
            <li><strong style="color:#e8f4ff;">Factory managers and production directors</strong> aiming to increase efficiency and reduce dependence on manual labour.</li>
            <li><strong style="color:#e8f4ff;">Investors</strong> in industrial automation, robotics, and artificial intelligence.</li>
            <li><strong style="color:#e8f4ff;">AI and humanoid robot developers</strong> (Tesla, Figure AI, Boston Dynamics) interested in integration with sewing equipment.</li>
            <li><strong style="color:#e8f4ff;">Digital transformation specialists</strong> seeking pathways to Industry 5.0.</li>
            <li><strong style="color:#e8f4ff;">Students and faculty</strong> of technical universities studying advanced technologies in the textile and light industry.</li>
            <li><strong style="color:#e8f4ff;">All those who wish to understand</strong> the foundation of the future's automated, unstaffed garment factory.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="cards">
      <!-- FREE EXCERPT -->
      <div class="card">
        <div class="card-header free">
          <div class="card-type free">FREE EXCERPT</div>
          <div class="card-title">Book 6 — Preview</div>
          <div class="card-sub">First pages · Read online or download</div>
        </div>
        <div class="card-body">
          <div class="price-tag">FREE</div>
          <div class="price-sub">No registration required</div>
          <ul class="features">
            <li>Cover &amp; table of contents</li>
            <li>About the book &amp; author</li>
            <li>Introduction — $2.36 Trillion in Search of a Needle</li>
            <li>Lockstitch (Type 301): 11 Irremediable Defects</li>
            <li class="locked">Full book (paid only)</li>
            <li class="locked">Complete analysis of ZARIF 2025 platform (paid only)</li>
          </ul>
          <button class="btn btn-free" onclick="openExcerpt()">📄 Read Excerpt Online</button>
          <a class="btn-download" href="https://zarif1961-blip.github.io/zarif-books/ZARIF_2025_Book_6_EXCERPT.pdf" download>⬇ Download Excerpt (PDF)</a>
        </div>
      </div>

      <!-- FULL BOOK -->
      <div class="card">
        <div class="card-header paid">
          <div class="card-type paid">⭐ FULL BOOK</div>
          <div class="card-title">Book 6 — Complete Edition</div>
          <div class="card-sub">Full book · Online reading only</div>
        </div>
        <div class="card-body">
          <div class="price-tag">$30.50</div>
          <div class="price-sub">USDT (TRC-20) — final price for the buyer</div>
          <ul class="features">
            <li>Full book — ZARIF 2025 Platform: The Foundation of the Future's Automated, Unstaffed Garment Factory</li>
            <li>Introduction — $2.36 Trillion in Search of a Needle</li>
            <li>PART I: The Diagnosis: 170 Years of Deadlock</li>
            <li>Chapter 1: Lockstitch (Type 301): 11 Irremediable Defects</li>
            <li>Chapter 2: Double Thread Chain Stitch (Type 401): 4 Fundamental Defects</li>
            <li>Chapter 3: The $220 Million Failure — Analysis of the Largest Robotisation Failures</li>
            <li>Chapter 4: The Birth of an Idea — How the Rotary Looper Challenged a 166-Year Tradition</li>
            <li>PART II: The ZARIF 2025 Revolution: The Ideal Sewing Technology</li>
            <li>Chapter 5: Ten Revolutionary Breakthroughs of ZARIF 2025 Technology</li>
            <li>Chapter 6: Integration with Humanoid Robots: Three Types</li>
            <li>Chapter 7: The "Dual-Purpose" Concept and the Digital Architecture</li>
            <li>PART III: The Autonomous Production Platform</li>
            <li>Chapter 8: Physical AI and the ZARIF Digital Ecosystem</li>
            <li>Chapter 9: The Economics of ZARIF 2025 — Figures That Change the Rules</li>
            <li>Chapter 10: Market Entry Roadmap: 2026–2035</li>
            <li>Chapter 11: Competitive Advantages, IP Strategy, and Investment</li>
            <li>PART IV: Technical Implementation, Protocols, and Competitive Landscape</li>
            <li>Chapter 12: Answers to Sceptics — Why Now and Why ZARIF</li>
            <li>Chapter 13: Technical Documentation of the Industrial Version</li>
            <li>Chapter 14: The AI-to-AI Protocol — Machine and Humanoid Robot as a Single Organism</li>
            <li>Chapter 15: Competitive Landscape Analysis — Why Existing Solutions Lose Out</li>
            <li>PART V: Roadmap, Investment, and Conclusion</li>
            <li>Chapter 16: Commercialisation Strategy, Investment, and Global Patent Protection</li>
            <li>Chapter 17: Consolidated Roadmap for Bringing ZARIF 2025 to Market</li>
            <li>Chapter 18: Investment Proposition and the Strategic Value of the Platform</li>
            <li>Conclusion — Three Things That Are Now Compatible</li>
            <li>Appendices: Patents, Technical Specifications, Glossary</li>
          </ul>
          <div class="security-badge">
            <span>🔒 Email binding</span>
            <span>🔒 One-time activation</span>
            <span>🔒 No download</span>
            <span>🔒 No print</span>
          </div>

          <div class="plisio-form">
            <input type="email" id="payerEmail" class="email-input" placeholder="Your email (where to send the reading link)" required>
            <button class="btn btn-paid" id="plisioPayBtn">💳 Pay $30.50 with Crypto or Card via Plisio</button>
            <div class="fee-note">
              ✅ <strong>USDT TRC-20</strong> — final price $30.50.<br>
              Out of this, the <strong>author receives $29</strong>, and $1.50 is Plisio's minimum transaction fee (0.5% of $29 would be less than the minimum, so the minimum applies).<br>
              💳 Card payment (Visa/Mastercard) via Plisio partners — final price ≈ $34–36.
            </div>
            <div class="card-warning">
              ⚠️ If your card is declined through Plisio, use Method 3 below — it often works more reliably.
            </div>
            <div class="method3-box">
              <h4>🌟 Method 3 — Pay exactly $30.50 (recommended)</h4>
              <p style="font-size:13px; line-height:1.5; margin-bottom:10px;">Buy 30.50 USDT with your own bank card on an exchange, then pay for the book. The Plisio fee is already included in this amount.</p>
              <ol>
                <li>Sign up on <strong>Bybit</strong> or <strong>OKX</strong> (most user‑friendly in 2026).</li>
                <li>Go to "Buy Crypto" → pay with your card and purchase <strong>USDT on TRC-20 network</strong> for 30.50 USDT.</li>
                <li>Return to this page, click the button above and choose "Pay with cryptocurrency".</li>
              </ol>
              <small>Bybit is usually the easiest for beginners. After buying USDT, you will pay exactly 30.50 USDT.</small>
            </div>
            <div class="international-help">
              🌍 For readers in countries with crypto restrictions: you can ask a friend/relative abroad to pay for you. <strong>Important:</strong> After payment, your friend will receive the reading link. Ask them <strong>not to open it</strong> — they should forward the link to you. You must be the first person to open the link (your device will be bound to it). Then you can read the book without any issues.
            </div>
          </div>

          <div id="paymentSuccess">
            ✅ Payment window opened. After completing payment, you will receive an email with your personal reading link within 5–10 minutes.
          </div>
        </div>
      </div>
    </div>

    <!-- ALREADY PURCHASED -->
    <div class="info-section" id="alreadyPurchased">
      <h3>🔄 Already purchased? Get a new reading link</h3>
      <p style="font-size:13px; color:#a0b8d0; margin-bottom:16px; line-height:1.6;">Enter your Email and Transaction ID (from Plisio or your confirmation email) below to instantly generate a new secure reading link. Your previous link will be deactivated.</p>
      <input type="email" id="reEmailInput" placeholder="Your Email" style="width:100%; padding:10px 14px; background:#0d1a2d; border:1px solid #2a5080; border-radius:8px; color:#e0e8f0; font-size:14px; margin-bottom:10px;">
      <input type="text" id="reTxnInput" placeholder="Transaction ID (from Plisio)" style="width:100%; padding:10px 14px; background:#0d1a2d; border:1px solid #2a5080; border-radius:8px; color:#e0e8f0; font-size:14px; margin-bottom:10px;">
      <div id="reErrorMsg" class="error-msg"></div>
      <div id="reSuccessMsg" class="success-msg"><p>✅ New reading link sent to your email!</p></div>
      <button id="reVerifyBtn" style="width:100%; padding:12px; background:#1a4d38; color:#2ecc8a; border:1px solid #2a9d6a; border-radius:8px; font-size:14px; font-weight:700; cursor:pointer;">🔄 Send New Reading Link</button>
    </div>

    <div class="policy-box">
      <h4>🔐 Link Regeneration Policy</h4>
      <p>For security reasons, each <strong>Transaction ID</strong> can be used to generate a new reading link <strong>up to 3 times maximum</strong> (including the original link).<br>This allows you to read the book on up to 3 different devices or share with close colleagues, while preventing abuse.<br>If you exceed this limit, you will need to purchase the book again.</p>
    </div>

    <div class="info-section" style="text-align:center;">
      <h3>📬 Contact the author</h3>
      <p style="font-size:14px; color:#a0b8d0; margin-bottom:12px;">Questions about the book or ZARIF 2025 technology</p>
      <p><a href="mailto:zarif1961@gmail.com" style="color:#5ba3e0;">zarif1961@gmail.com</a> &nbsp;·&nbsp; <a href="https://www.zarif.uz" style="color:#5ba3e0;" target="_blank">www.zarif.uz</a> &nbsp;·&nbsp; <a href="https://youtube.com/@ZarifTadjibaev" style="color:#5ba3e0;" target="_blank">YouTube</a></p>
    </div>
  </div>

  <!-- ===== МОДАЛЬНОЕ ОКНО ДЛЯ ОТРЫВКА ===== -->
  <div class="modal" id="excerptModal">
    <div class="modal-box">
      <div class="modal-head">
        <h3>📄 ZARIF 2025 — Book 6 Excerpt</h3>
        <button class="modal-close" onclick="closeExcerpt()">✕</button>
      </div>
      <div class="modal-body">
        <iframe id="excerptFrame" src="" title="Book excerpt"></iframe>
      </div>
    </div>
  </div>

  <!-- ===== СКРИПТЫ ДЛЯ ОПЛАТЫ И ПОВТОРНОЙ ОТПРАВКИ ===== -->
  <script>
    var EXCERPT_PDF = "https://zarif1961-blip.github.io/zarif-books/ZARIF_2025_Book_6_EXCERPT.pdf";
    var SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz2dF0ZXVov-wMvHvbRItH3ksy4Whs2wDI0u3cAmiD2aRoAbmFTrgRrf7ivtTWwvqzC/exec";
    var PLISIO_BASE_URL = "https://plisio.net/payment-button/new/sYg7ncG9vBhl";

    function openExcerpt() {
      var viewerUrl = 'https://docs.google.com/viewer?url=' + encodeURIComponent(EXCERPT_PDF) + '&embedded=true';
      document.getElementById('excerptFrame').src = viewerUrl;
      document.getElementById('excerptModal').classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeExcerpt() {
      document.getElementById('excerptModal').classList.remove('active');
      document.getElementById('excerptFrame').src = '';
      document.body.style.overflow = '';
    }

    document.getElementById('excerptModal').addEventListener('click', function(e) {
      if (e.target === this) closeExcerpt();
    });

    document.getElementById('plisioPayBtn').addEventListener('click', function() {
      var email = document.getElementById('payerEmail').value.trim().toLowerCase();
      if (!email || email.indexOf('@') === -1) {
        alert('Please enter a valid email address.');
        return;
      }
      var plisioUrl = PLISIO_BASE_URL + '?order_number=' + encodeURIComponent(email + '::book_6');
      window.open(plisioUrl, '_blank');
      document.getElementById('paymentSuccess').style.display = 'block';
    });

    function resendLink() {
      var email = document.getElementById('reEmailInput').value.trim().toLowerCase();
      var txn = document.getElementById('reTxnInput').value.trim();
      var errorDiv = document.getElementById('reErrorMsg');
      var successDiv = document.getElementById('reSuccessMsg');
      errorDiv.style.display = 'none';
      successDiv.style.display = 'none';
      if (!email || email.indexOf('@') === -1) {
        errorDiv.textContent = '⚠ Please enter a valid email address.';
        errorDiv.style.display = 'block';
        return;
      }
      if (!txn) {
        errorDiv.textContent = '⚠ Please enter your Transaction ID.';
        errorDiv.style.display = 'block';
        return;
      }
      var callbackName = 'resendCallback_' + Date.now();
      window[callbackName] = function(data) {
        delete window[callbackName];
        if (data && data.status === 'ok') {
          successDiv.style.display = 'block';
          document.getElementById('reEmailInput').value = '';
          document.getElementById('reTxnInput').value = '';
        } else if (data && data.reason === 'LIMIT_REACHED') {
          errorDiv.textContent = '⚠ You have reached the maximum number of link regenerations (3). To get a new link, please purchase the book again.';
          errorDiv.style.display = 'block';
        } else if (data && data.reason === 'USED_TXN') {
          errorDiv.textContent = '⚠ This Transaction ID was used with a different email address.';
          errorDiv.style.display = 'block';
        } else {
          errorDiv.textContent = '⚠ Transaction not found. Please check your Email and Transaction ID.';
          errorDiv.style.display = 'block';
        }
      };
      var url = SCRIPT_URL + '?action=resend&txn=' + encodeURIComponent(txn) + '&email=' + encodeURIComponent(email) + '&callback=' + callbackName + '&t=' + Date.now();
      var script = document.createElement('script');
      script.src = url;
      script.onerror = function() {
        errorDiv.textContent = '⚠ Connection error.';
        errorDiv.style.display = 'block';
        this.remove();
      };
      document.head.appendChild(script);
    }

    document.getElementById('reVerifyBtn').addEventListener('click', resendLink);
    document.getElementById('reTxnInput').addEventListener('keydown', function(e) {
      if (e.key === 'Enter') resendLink();
    });
  </script>
`;
