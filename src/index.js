// src/index.js
// Главный обработчик для Workers with Assets

import aboutContent from './about.js';
import zarifTechnologyContent from './zarif-technology.js';

// Общая шапка (Header)
const headerHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ZARIF SEWING MACHINE CO., LTD.</title>
  <link rel="stylesheet" href="/style.css">
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
</head>
<body>
  <!-- Панель переключения языков -->
  <div class="tbar">
    <span class="tbar-lbl">🌐 Translate</span>
    <button class="lang-btn active" onclick="setLang('en','en')" id="btn-en">EN · English</button>
    <button class="lang-btn" onclick="setLang('ru','ru')" id="btn-ru">RU · Русский</button>
    <button class="lang-btn" onclick="setLang('uz','uz')" id="btn-uz">UZ · O'zbek</button>
    <button class="lang-btn" onclick="setLang('zh','zh-CN')" id="btn-zh">ZH · 中文</button>
    <button class="lang-btn" onclick="setLang('ar','ar')" id="btn-ar">AR · العربية</button>
    <button class="lang-btn" onclick="setLang('de','de')" id="btn-de">DE · Deutsch</button>
    <button class="lang-btn" onclick="setLang('fr','fr')" id="btn-fr">FR · Français</button>
    <button class="lang-btn" onclick="setLang('ja','ja')" id="btn-ja">JA · 日本語</button>
    <button class="lang-btn" onclick="setLang('ko','ko')" id="btn-ko">KO · 한국어</button>
    <button class="lang-btn" onclick="setLang('tr','tr')" id="btn-tr">TR · Türkçe</button>
    <span class="tbar-status" id="tbar-status"></span>
  </div>

  <!-- Шапка сайта -->
  <header class="zarif-header">
    <div>
      <span class="zarif-header-logo">ZARIF 2025</span>
      <span class="zarif-header-tagline">The World's First Robot-Native Sewing Technology · US Patent No. 6,095,069</span>
    </div>
  </header>

  <!-- Навигация -->
  <nav class="nav">
    <a href="/" class="nav-logo">ZARIF</a>
    <div class="nav-links">
      <a href="/about">About Us</a>
      <a href="/books">ZARIF Books 2026</a>
      <a href="/patents">Patents</a>
      <a href="/contact">Contact</a>
    </div>
  </nav>

  <main>
`;

// Общий подвал (Footer)
const footerHtml = `
  </main>

  <footer class="zarif-footer">
    <span class="zarif-footer-name">ZARIF Sewing Machine Co., Ltd.</span>
    <div class="zarif-footer-links">
      <a href="https://www.zarif.uz" target="_blank">www.zarif.uz</a>
      <a href="https://youtube.com/@ZarifTadjibaev" target="_blank">YouTube · @ZarifTadjibaev</a>
      <a href="mailto:zarif1961@gmail.com">Email</a>
    </div>
    <div class="zarif-footer-social">
      <a href="https://youtube.com/@ZarifTadjibaev" target="_blank">
        <img src="/images/youtube_EN.png" alt="YouTube" width="24" height="24">
      </a>
      <a href="#" target="_blank">
        <img src="/images/X.png" alt="X" width="24" height="24">
      </a>
      <a href="#" target="_blank">
        <img src="/images/linkedin.png" alt="LinkedIn" width="24" height="24">
      </a>
      <a href="#" target="_blank">
        <img src="/images/facebook.png" alt="Facebook" width="24" height="24">
      </a>
      <a href="#" target="_blank">
        <img src="/images/instagram.png" alt="Instagram" width="24" height="24">
      </a>
    </div>
    <span class="zarif-footer-copy">© 2025 ZARIF Sewing Machine Co., Ltd. · Tashkent, Uzbekistan · US Patent No. 6,095,069</span>
  </footer>

  <script src="/translator.js"></script>
</body>
</html>
`;

// Функция сборки страницы
function renderPage(content) {
  return headerHtml + content + footerHtml;
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Маршрутизация
    if (path === '/about') {
      return new Response(renderPage(aboutContent), {
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
      });
    }

    if (path === '/zarif-technology') {
      return new Response(renderPage(zarifTechnologyContent), {
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
      });
    }

    // Главная страница
    if (path === '/') {
      const indexContent = `
        <div style="max-width: 800px; margin: 60px auto; padding: 0 20px; text-align: center;">
          <h1 style="font-family: 'Bebas Neue', sans-serif; font-size: clamp(3rem, 8vw, 5rem); color: #c5a04d; letter-spacing: 2px; margin-bottom: 20px;">
            ZARIF 2025
          </h1>
          <p style="font-size: 1.2rem; color: #e8e0d0; line-height: 1.8; margin-bottom: 40px;">
            Добро пожаловать на сайт <strong>ZARIF Sewing Machine Co., Ltd.</strong>
          </p>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; justify-content: center;">
            <a href="/about" style="display: inline-block; background: #c5a04d; color: #0a1628; padding: 12px 28px; border-radius: 6px; text-decoration: none; font-weight: 600;">About Us</a>
            <a href="/zarif-technology" style="display: inline-block; border: 1px solid #c5a04d; color: #c5a04d; padding: 12px 28px; border-radius: 6px; text-decoration: none; font-weight: 600;">Technology</a>
          </div>
        </div>
      `;
      return new Response(renderPage(indexContent), {
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
      });
    }

    // Если ничего не найдено — попробуем отдать статический файл
    // Workers with Assets автоматически обрабатывает файлы из public/
    // Если файл не найден, возвращаем 404
    return new Response('Page not found', { status: 404 });
  }
};
