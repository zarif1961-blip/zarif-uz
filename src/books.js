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
      max-width: 700px;
      margin: 0 auto;
      line-height: 1.7;
    }
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
      transition: transform 0.3s, box-shadow 0.3s;
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
    @media (max-width: 600px) {
      .books-grid {
        grid-template-columns: 1fr;
        padding: 20px 16px;
      }
      .book-card-image {
        height: 200px;
      }
    }
  </style>

  <!-- ===== ЗАГОЛОВОК СТРАНИЦЫ ===== -->
  <div class="books-hero">
    <h1>📚 ZARIF Books 2026</h1>
    <p>
      The complete series of books on the world's first ideal sewing technology —
      ZARIF 2025. Each volume explores a different aspect of the revolution in
      autonomous sewing production.
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

    <!-- КНИГА 2 -->
    <div class="book-card">
      <div class="book-card-image">
        <img src="https://zarif1961-blip.github.io/zarif-books/ZARIF_2025_Book_2_COVER.png" alt="ZARIF 2025 Book 2 Cover">
      </div>
      <div class="book-card-body">
        <div class="book-card-badge">ZARIF 2025 — BOOK 2</div>
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
`;
