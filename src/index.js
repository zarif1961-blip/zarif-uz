// src/index.js
// Главный обработчик для Workers with Assets

import aboutContent from './about.js';
import technologyContent from './zarif-technology.js';
import patentsContent from './patents.js';   // ← добавлен импорт

// ============================================================
// ОБЩАЯ ШАПКА (Header) — для всех страниц
// ============================================================
const headerHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ZARIF SEWING MACHINE CO., LTD.</title>
  <link rel="stylesheet" href="/style.css?v=2">
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
</head>
<body>

  <!-- ============================================================
       ВЕРХНЯЯ ЧАСТЬ: Логотип + Название компании + Переводчик
  ============================================================ -->
  <div class="top-bar">
    <div class="top-bar-left">
      <img src="/images/Company logo.png" alt="ZARIF Logo" class="top-logo">
      <span class="top-company-name">ZARIF SEWING MACHINE CO., LTD.</span>
    </div>
    <div class="top-bar-right">
      <div class="tbar">
        <span class="tbar-lbl">🌐</span>
        <button class="lang-btn active" onclick="setLang('en','en')" id="btn-en">EN</button>
        <button class="lang-btn" onclick="setLang('ru','ru')" id="btn-ru">RU</button>
        <button class="lang-btn" onclick="setLang('uz','uz')" id="btn-uz">UZ</button>
        <button class="lang-btn" onclick="setLang('zh','zh-CN')" id="btn-zh">ZH</button>
        <button class="lang-btn" onclick="setLang('ar','ar')" id="btn-ar">AR</button>
        <button class="lang-btn" onclick="setLang('de','de')" id="btn-de">DE</button>
        <button class="lang-btn" onclick="setLang('fr','fr')" id="btn-fr">FR</button>
        <button class="lang-btn" onclick="setLang('ja','ja')" id="btn-ja">JA</button>
        <button class="lang-btn" onclick="setLang('ko','ko')" id="btn-ko">KO</button>
        <button class="lang-btn" onclick="setLang('tr','tr')" id="btn-tr">TR</button>
        <span class="tbar-status" id="tbar-status"></span>
      </div>
    </div>
  </div>

  <!-- ============================================================
       НАВИГАЦИЯ
  ============================================================ -->
  <nav class="nav">
    <a href="/" class="nav-link">Home</a>
    <a href="/about" class="nav-link">About Us</a>
    <a href="/books" class="nav-link">ZARIF Books 2026</a>
    <a href="/patents" class="nav-link">Patents</a>
    <a href="/contact" class="nav-link">Contact</a>
  </nav>

  <!-- ============================================================
       БАННЕР
  ============================================================ -->
  <div class="banner-container">
    <img src="/images/Website banner.png" alt="ZARIF 2025 Banner" class="banner-image">
  </div>

  <!-- ============================================================
       ОСНОВНОЙ КОНТЕНТ
  ============================================================ -->
  <main>
`;

// ============================================================
// ОБЩИЙ ПОДВАЛ (Footer) — для всех страниц
// ============================================================
const footerHtml = `
  </main>

  <!-- ============================================================
       ПОДВАЛ САЙТА
  ============================================================ -->
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-left">
        <div class="footer-logo">
          <img src="/images/Company logo.png" alt="ZARIF Logo" class="footer-logo-img">
          <span class="footer-company">ZARIF SEWING MACHINE CO., LTD.</span>
        </div>
        <div class="footer-links">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/books">ZARIF Books 2026</a>
          <a href="/patents">Patents</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
      <div class="footer-right">
        <p class="footer-tagline">
          ZARIF 2025 is the world's first ideal sewing technology utilizing a rotary looper, enabling the creation of fully autonomous, lights-out garment factories for the production of a wide range of sewn products.
        </p>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy">© 2026 ZARIF Sewing Machine Co., Ltd. · Tashkent, Uzbekistan · US Patent No. 6,095,069</span>
      <div class="footer-social">
        <a href="https://youtube.com/@ZarifTadjibaev" target="_blank" rel="noopener">
          <img src="/images/youtube_EN.png" alt="YouTube EN" width="28" height="28">
        </a>
        <a href="https://youtube.com/@ZarifTadjibaev1961" target="_blank" rel="noopener">
          <img src="/images/youtube_RU.png" alt="YouTube RU" width="28" height="28">
        </a>
        <a href="https://www.linkedin.com/in/zarif-sewing/" target="_blank" rel="noopener">
          <img src="/images/linkedin.png" alt="LinkedIn" width="28" height="28">
        </a>
        <a href="https://www.facebook.com/zarif.sewing/" target="_blank" rel="noopener">
          <img src="/images/facebook.png" alt="Facebook" width="28" height="28">
        </a>
        <a href="https://www.instagram.com/zarif1961/" target="_blank" rel="noopener">
          <img src="/images/instagram.png" alt="Instagram" width="28" height="28">
        </a>
        <a href="https://x.com/zarif1961" target="_blank" rel="noopener">
          <img src="/images/X.png" alt="X" width="28" height="28">
        </a>
      </div>
    </div>
  </footer>

  <script src="/translator.js"></script>
</body>
</html>
`;

// ============================================================
// ФУНКЦИЯ СБОРКИ СТРАНИЦЫ
// ============================================================
function renderPage(content) {
  return headerHtml + content + footerHtml;
}

// ============================================================
// ОБЪЕДИНЁННЫЙ КОНТЕНТ ДЛЯ СТРАНИЦЫ /about
// ============================================================
function getCombinedAboutContent() {
  return aboutContent + technologyContent;
}

// ============================================================
// МАРШРУТИЗАЦИЯ
// ============================================================
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    // === СТРАНИЦА /about ===
    if (path === '/about') {
      const combinedContent = getCombinedAboutContent();
      return new Response(renderPage(combinedContent), {
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
      });
    }

    // === СТРАНИЦА /patents ===
    if (path === '/patents') {
      return new Response(renderPage(patentsContent), {
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
      });
    }

    // === ГЛАВНАЯ СТРАНИЦА ===
    if (path === '/') {
      const indexContent = `
        <div class="home-hero">
          <h1 class="home-title">ZARIF 2025</h1>
          <p class="home-subtitle">
            Welcome to the official website of ZARIF Sewing Machine Co., Ltd. — 
            a global leader in innovative sewing technologies. 
            Our mission is to completely transform the sewing industry with 
            the revolutionary ZARIF 2025 technology, which for the first time in the world 
            enables the creation of fully automated, "lights-out" garment factories.
          </p>
          <div class="home-buttons">
            <a href="/about" class="btn-gold">About Us</a>
            <a href="/books" class="btn-outline-gold">ZARIF Books 2026</a>
          </div>
        </div>
      `;
      return new Response(renderPage(indexContent), {
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
      });
    }

    // === 404 ===
    return new Response('Page not found', { status: 404 });
  }
};
