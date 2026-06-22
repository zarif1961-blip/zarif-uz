// src/books.js
// Страница-каталог всех 6 книг ZARIF 2025

export default `
  <!-- ===== УНИКАЛЬНЫЕ СТИЛИ ДЛЯ СТРАНИЦЫ КНИГ ===== -->
  <style>
    .books-hero {
      text-align: center;
      padding: 60px 20px 40px;
      background: linear-gradient(135deg, #0a1628 0%, #1a2d4d 50%, #0d2040 100%);
      border-bottom: 2px solid #c9a227;
    }
    .books-hero h1 {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(36px, 6vw, 72px);
      font-weight: 300;
      color: #c9a227;
      letter-spacing: 0.05em;
      margin-bottom: 12px;
    }
    .books-hero p {
      font-size: 18px;
      color: #a0b8d0;
      max-width: 900px;
      margin: 0 auto;
      line-height: 1.7;
    }
    .books-hero .subtitle {
      font-size: 20px;
      color: #c9a227;
      font-weight: 600;
      margin-top: 8px;
    }

    /* ===== БЛОК С ОПИСАНИЕМ КНИГ ===== */
    .books-description {
      max-width: 1100px;
      margin: 0 auto;
      padding: 40px 24px;
    }
    .books-description .section-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(28px, 4vw, 42px);
      font-weight: 300;
      color: #c9a227;
      text-align: center;
      margin-bottom: 24px;
      border-bottom: 1px solid rgba(197,160,77,0.3);
      padding-bottom: 16px;
    }
    .books-description .desc-text {
      font-size: 16px;
      color: #b0b8c8;
      line-height: 1.8;
      margin-bottom: 18px;
      text-align: justify;
    }
    .books-description .highlight-box {
      background: rgba(197,160,77,0.08);
      border-left: 4px solid #c9a227;
      padding: 20px 24px;
      margin: 20px 0;
      border-radius: 4px;
    }
    .books-description .highlight-box p {
      font-size: 15px;
      color: #d0d8e8;
      line-height: 1.7;
      margin: 0;
    }
    .books-description .highlight-box strong {
      color: #c9a227;
    }

    /* Сравнительная таблица */
    .comparison-section {
      max-width: 1100px;
      margin: 30px auto;
      padding: 0 24px;
    }
    .comparison-section .comp-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(24px, 3vw, 36px);
      font-weight: 300;
      color: #c9a227;
      text-align: center;
      margin-bottom: 20px;
    }
    .comp-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 14px;
      background: #111f35;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid #1e3a5f;
    }
    .comp-table th {
      background: #0d1a2d;
      color: #c9a227;
      padding: 14px 16px;
      text-align: left;
      font-weight: 700;
      border-bottom: 2px solid #c9a227;
      font-size: 13px;
      letter-spacing: 0.5px;
    }
    .comp-table td {
      padding: 12px 16px;
      border-bottom: 1px solid #1e3a5f;
      color: #b0b8c8;
      vertical-align: top;
    }
    .comp-table tr:hover td {
      background: rgba(197,160,77,0.04);
    }
    .comp-table .highlight-row td {
      background: rgba(197,160,77,0.08);
      border-left: 3px solid #c9a227;
    }
    .comp-table .td-bad {
      color: #e57373;
    }
    .comp-table .td-good {
      color: #81c784;
    }
    .comp-table .td-gold {
      color: #c9a227;
      font-weight: 600;
    }

    /* Блок с ценами */
    .pricing-section {
      max-width: 900px;
      margin: 30px auto;
      padding: 30px 24px;
      background: linear-gradient(135deg, #0d1a2d, #111f35);
      border: 1px solid #1e3a5f;
      border-radius: 12px;
      text-align: center;
    }
    .pricing-section h3 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 28px;
      color: #c9a227;
      margin-bottom: 16px;
    }
    .pricing-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      max-width: 600px;
      margin: 0 auto;
    }
    .pricing-item {
      background: #0a1628;
      border: 1px solid #1e3a5f;
      border-radius: 8px;
      padding: 16px 20px;
    }
    .pricing-item .price {
      font-size: 28px;
      font-weight: 900;
      color: #c9a227;
      display: block;
    }
    .pricing-item .label {
      font-size: 13px;
      color: #7a95b0;
      display: block;
      margin-top: 4px;
    }

    /* Сетка книг */
    .books-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
      gap: 32px;
      padding: 40px 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .book-card {
      background: #111f35;
      border: 1px solid #1e3a5f;
      border-radius: 12px;
      overflow: hidden;
      transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
    }
    .book-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 16px 48px rgba(0,0,0,0.5);
      border-color: #c9a227;
    }
    .book-card-image {
      width: 100%;
      height: 260px;
      overflow: hidden;
      background: #0a1628;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px;
    }
    .book-card-image img {
      height: 100%;
      width: auto;
      max-width: 100%;
      object-fit: contain;
      border-radius: 4px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.4);
    }
    .book-card-body {
      padding: 24px;
    }
    .book-card-badge {
      display: inline-block;
      background: #c9a227;
      color: #0a1628;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      padding: 3px 12px;
      border-radius: 20px;
      margin-bottom: 10px;
    }
    .book-card-badge.recommended {
      background: #c0392b;
      color: #fff;
    }
    .book-card-title {
      font-size: 18px;
      font-weight: 700;
      color: #e8f4ff;
      margin-bottom: 8px;
      line-height: 1.3;
    }
    .book-card-subtitle {
      font-size: 13px;
      color: #7a95b0;
      margin-bottom: 14px;
      line-height: 1.5;
    }
    .book-card-price {
      font-size: 20px;
      font-weight: 900;
      color: #c9a227;
      margin-bottom: 14px;
    }
    .book-card-btn {
      display: inline-block;
      background: linear-gradient(135deg, #c9a227, #e8b832);
      color: #0a1628;
      font-weight: 700;
      padding: 10px 28px;
      border-radius: 8px;
      text-decoration: none;
      transition: opacity 0.2s, transform 0.2s;
      font-size: 14px;
    }
    .book-card-btn:hover {
      opacity: 0.85;
      transform: scale(0.98);
    }
    .book-card-btn.outline {
      background: transparent;
      border: 1px solid #c9a227;
      color: #c9a227;
    }
    .book-card-btn.outline:hover {
      background: rgba(197,160,77,0.1);
    }

    /* Блок-рекомендация */
    .recommend-section {
      max-width: 900px;
      margin: 20px auto 40px;
      padding: 24px;
      background: rgba(192,57,43,0.08);
      border: 2px solid #c0392b;
      border-radius: 12px;
      text-align: center;
    }
    .recommend-section h3 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 24px;
      color: #c0392b;
      margin-bottom: 10px;
    }
    .recommend-section p {
      font-size: 15px;
      color: #b0b8c8;
      line-height: 1.7;
    }
    .recommend-section strong {
      color: #c9a227;
    }

    @media (max-width: 600px) {
      .books-grid {
        grid-template-columns: 1fr;
        padding: 20px 16px;
      }
      .book-card-image {
        height: 200px;
      }
      .pricing-grid {
        grid-template-columns: 1fr;
      }
      .comp-table {
        font-size: 12px;
      }
      .comp-table th,
      .comp-table td {
        padding: 8px 10px;
      }
      .books-description {
        padding: 20px 16px;
      }
      .comparison-section {
        padding: 0 16px;
      }
      .pricing-section {
        padding: 20px 16px;
      }
    }
  </style>

  <!-- ===== ЗАГОЛОВОК СТРАНИЦЫ ===== -->
  <div class="books-hero">
    <h1>📚 ZARIF Books 2026</h1>
    <p class="subtitle">The Knowledge That Will Define the Next Decade of Manufacturing</p>
    <p style="margin-top:16px; font-size:17px;">
      Six independent volumes — the world's first complete engineering library on
      autonomous sewing production. <strong style="color:#c9a227;">No alternative exists.</strong>
    </p>
  </div>

  <!-- ===== ОПИСАНИЕ КНИГ ===== -->
  <div class="books-description">

    <h2 class="section-title">Why These Books Are Unlike Anything Else in the World</h2>

    <p class="desc-text">
      <strong>ZARIF 2025</strong> is the world's first and only ideal sewing technology
      based on the rotary looper — a breakthrough that eliminates all five fundamental
      mechanical barriers that have prevented autonomous sewing production for 170 years.
      These six books are the <strong>first and only</strong> comprehensive educational
      resource that explains <em>why</em> traditional sewing technologies (Type 301 and
      Type 401) can never be made fully autonomous — and how ZARIF 2025 resolves all of
      their irremediable defects simultaneously.
    </p>

    <div class="highlight-box">
      <p>
        <strong>🔑 What You Will Learn in These Books:</strong><br>
        ✅ Why traditional sewing machines, invented in the 19th century, have
        <strong>fundamental, irremediable defects</strong> that no robot, no AI, and no
        software can ever fix.<br>
        ✅ How ZARIF 2025 eliminates all these defects — not in theory, but in a
        <strong>working physical prototype</strong> tested for over 5,000 hours.<br>
        ✅ Why <strong>thread-based sewing will never be replaced</strong> by adhesives,
        3D printing, 3D knitting, or ultrasonic welding — and why thread remains the
        foundation of autonomous manufacturing.<br>
        ✅ How <strong>humanoid robots, AI, and autonomous factories</strong> will
        transform the $2.36 trillion global sewing industry — and what skills your
        students need to be part of this revolution.<br>
        ✅ The complete <strong>economics of the autonomous factory</strong>: 75% OPEX
        reduction, 11.1-month payback, $34.6 million NPV over 10 years.
      </p>
    </div>

    <div class="highlight-box" style="border-left-color: #1e8449;">
      <p>
        <strong>📖 Free Excerpts — Read Before You Buy:</strong><br>
        Every book includes a <strong>free excerpt of up to 7 pages</strong> — including
        the Introduction, full Table of Contents, and key engineering concepts. You can
        <strong>read online directly in your browser</strong> or <strong>download the PDF</strong>
        to your computer. No registration. No account. No obligation. Just click on any
        book below and select <em>"Read Excerpt Online"</em> or <em>"Download Excerpt (PDF)"</em>.
      </p>
    </div>

    <!-- Рекомендация начать с книги 2 -->
    <div class="recommend-section">
      <h3>🌟 RECOMMENDED — START WITH BOOK 2</h3>
      <p>
        Many people assume that thread-based sewing will eventually be replaced by
        adhesives, 3D printing, 3D knitting, or 3D weaving. <strong>Book 2</strong>
        provides the complete, evidence-based answer: <strong>this is not true.</strong>
        No alternative method can replace thread across the full range of industrial
        applications. Thread is not the past — with ZARIF 2025, it is the
        <strong>foundation of the autonomous future.</strong>
      </p>
      <p style="margin-top:10px; font-size:14px;">
        📖 <strong>Start with Book 2</strong> — it is the most accessible and complete
        single-volume introduction to the subject, suitable for any engineering discipline
        or level of prior knowledge.
      </p>
    </div>

  </div>

  <!-- ===== СРАВНИТЕЛЬНАЯ ТАБЛИЦА ===== -->
  <div class="comparison-section">
    <h3 class="comp-title">What These Books Reveal — That No Other Book Does</h3>
    <table class="comp-table">
      <thead>
        <tr>
          <th style="width:30%;">Topic</th>
          <th style="width:35%;">What Traditional Books Ignore</th>
          <th style="width:35%;">What ZARIF 2025 Books Explain</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Why can't robots automate sewing?</td>
          <td class="td-bad">"Robots will eventually learn" — no technical analysis</td>
          <td class="td-good">Detailed physics of 5 irremediable barriers — no robot can eliminate them</td>
        </tr>
        <tr>
          <td>Will thread sewing be replaced?</td>
          <td class="td-bad">"3D printing/knitting are the future" — no proof</td>
          <td class="td-good">Complete analysis: threadless methods cannot replace thread across 90% of applications</td>
        </tr>
        <tr>
          <td>What are the 11 defects of Type 301?</td>
          <td class="td-bad">Not mentioned or listed superficially</td>
          <td class="td-good">Full physics: bobbin curse, black box, micro-clearance 0.05mm, and 8 more</td>
        </tr>
        <tr>
          <td>How to build a lights-out factory?</td>
          <td class="td-bad">Vague descriptions, no engineering specifications</td>
          <td class="td-good">Complete architecture: robots, AMR trolleys, digital twin, MES/ERP integration</td>
        </tr>
        <tr>
          <td>Economics of autonomous production?</td>
          <td class="td-bad">No data or unrealistic projections</td>
          <td class="td-good">Verified numbers: $34.6M NPV, 11.1-month payback, 6× OPEX reduction</td>
        </tr>
        <tr class="highlight-row">
          <td colspan="3" style="color:#c9a227; font-weight:700; text-align:center;">
            ★ ZARIF 2025 Books: The Only Engineering Library That Connects Mechanical Defects →
            Robot Integration → Autonomous Factory Economics
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- ===== ЦЕНЫ ===== -->
  <div class="pricing-section">
    <h3>💳 How to Purchase — Online Reading Only</h3>
    <p style="color:#a0b8d0; margin-bottom:16px;">
      Full access to the complete book on any device. Advanced IP protection:
      device-ID verification, browser-level identification, anti-download / anti-print technology.
      <strong style="color:#c9a227;">No physical copy is shipped.</strong>
    </p>
    <div class="pricing-grid">
      <div class="pricing-item">
        <span class="price">$30.50</span>
        <span class="label">💰 Cryptocurrency (Bitcoin, Ethereum, USDT)</span>
      </div>
      <div class="pricing-item">
        <span class="price">$34–36</span>
        <span class="label">💳 Bank Card (Visa, Mastercard)</span>
      </div>
    </div>
    <p style="font-size:13px; color:#7a95b0; margin-top:12px;">
      All payment options available on each book's individual page.
    </p>
  </div>

  <!-- ===== СЕТКА КНИГ ===== -->
  <div class="books-grid">

    <!-- КНИГА 1 -->
    <div class="book-card">
      <div class="book-card-image">
        <img src="https://zarif1961-blip.github.io/zarif-books/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%9A%D0%BD%D0%B8%D0%B3%D0%B0-1_PNG_EN.png" alt="ZARIF 2025 Book 1 Cover">
      </div>
      <div class="book-card-body">
        <div class="book-card-badge">ZARIF 2025 — BOOK 1</div>
        <div class="book-card-title">WORLD'S FIRST IDEAL SEWING TECHNOLOGY</div>
        <div class="book-card-subtitle">THE TECHNOLOGICAL DEAD END OF THE 19TH CENTURY</div>
        <div class="book-card-price">$30.50</div>
        <a href="/book-1" class="book-card-btn">Learn More →</a>
      </div>
    </div>

    <!-- КНИГА 2 — РЕКОМЕНДУЕМАЯ -->
    <div class="book-card" style="border-color: #c0392b;">
      <div class="book-card-image">
        <img src="https://zarif1961-blip.github.io/zarif-books/ZARIF_2025_Book_2_COVER.png" alt="ZARIF 2025 Book 2 Cover">
      </div>
      <div class="book-card-body">
        <div class="book-card-badge recommended">⭐ RECOMMENDED START</div>
        <div class="book-card-title">THE THREAD METHOD OF JOINING MATERIALS</div>
        <div class="book-card-subtitle">This is not the past — it is the foundation of the autonomous sewing industry of the future</div>
        <div class="book-card-price">$30.50</div>
        <a href="/book-2" class="book-card-btn">Learn More →</a>
      </div>
    </div>

    <!-- КНИГА 3 -->
    <div class="book-card">
      <div class="book-card-image">
        <img src="https://zarif1961-blip.github.io/zarif-books/ZARIF_2025_Book_3_COVER.png" alt="ZARIF 2025 Book 3 Cover">
      </div>
      <div class="book-card-body">
        <div class="book-card-badge">ZARIF 2025 — BOOK 3</div>
        <div class="book-card-title">AS A BASIS FOR THE INTEGRATION OF HUMANOID ROBOTS</div>
        <div class="book-card-subtitle">Creating autonomous, unmanned sewing productions of the future</div>
        <div class="book-card-price">$30.50</div>
        <a href="/book-3" class="book-card-btn">Learn More →</a>
      </div>
    </div>

    <!-- КНИГА 4 -->
    <div class="book-card">
      <div class="book-card-image">
        <img src="https://zarif1961-blip.github.io/zarif-books/ZARIF_2025_Book_4_COVER.png" alt="ZARIF 2025 Book 4 Cover">
      </div>
      <div class="book-card-body">
        <div class="book-card-badge">ZARIF 2025 — BOOK 4</div>
        <div class="book-card-title">THE KEY MISSING LINK</div>
        <div class="book-card-subtitle">In the creation of the autonomous, unstaffed sewing facilities of the future</div>
        <div class="book-card-price">$30.50</div>
        <a href="/book-4" class="book-card-btn">Learn More →</a>
      </div>
    </div>

    <!-- КНИГА 5 -->
    <div class="book-card">
      <div class="book-card-image">
        <img src="https://zarif1961-blip.github.io/zarif-books/ZARIF_2025_Book_5_COVER.png" alt="ZARIF 2025 Book 5 Cover">
      </div>
      <div class="book-card-body">
        <div class="book-card-badge">ZARIF 2025 — BOOK 5</div>
        <div class="book-card-title">INTEGRATION OF HUMANOID ROBOTS</div>
        <div class="book-card-subtitle">With sewing machines and automatic machines based on ZARIF 2025 technology</div>
        <div class="book-card-price">$30.50</div>
        <a href="/book-5" class="book-card-btn">Learn More →</a>
      </div>
    </div>

    <!-- КНИГА 6 -->
    <div class="book-card">
      <div class="book-card-image">
        <img src="https://zarif1961-blip.github.io/zarif-books/ZARIF_2025_Book_6_COVER.png" alt="ZARIF 2025 Book 6 Cover">
      </div>
      <div class="book-card-body">
        <div class="book-card-badge">ZARIF 2025 — BOOK 6</div>
        <div class="book-card-title">ZARIF 2025 PLATFORM</div>
        <div class="book-card-subtitle">The foundation of the future's automated, unstaffed garment factory</div>
        <div class="book-card-price">$30.50</div>
        <a href="/book-6" class="book-card-btn">Learn More →</a>
      </div>
    </div>

  </div>

  <!-- ===== ЗАКЛЮЧИТЕЛЬНЫЙ БЛОК ===== -->
  <div style="max-width: 900px; margin: 0 auto 60px; padding: 0 24px; text-align: center;">
    <div style="background: linear-gradient(135deg, #0d1a2d, #111f35); border: 1px solid #c9a227; border-radius: 12px; padding: 30px 24px;">
      <p style="font-size: 18px; color: #c9a227; font-weight: 700; margin-bottom: 12px;">
        📖 Start with the Free Excerpt of Book 2 — No Registration Required
      </p>
      <p style="font-size: 15px; color: #a0b8d0; line-height: 1.7;">
        The knowledge contained in these books <strong style="color:#e8f4ff;">does not exist anywhere else</strong>.
        No other resource explains <em>why</em> 19th-century sewing machines can never be
        fully autonomous — and <em>how</em> ZARIF 2025 solves this 170-year-old problem
        once and for all. This is the missing knowledge that every engineer, researcher,
        and student needs to understand the future of manufacturing.
      </p>
      <p style="font-size: 14px; color: #7a95b0; margin-top: 16px;">
        📧 Questions? Contact the author directly: <a href="mailto:zarif1961@gmail.com" style="color: #5ba3e0;">zarif1961@gmail.com</a>
      </p>
    </div>
  </div>
`;
