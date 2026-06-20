// functions/_middleware.js
// Этот файл собирает каждую страницу из трёх частей:
// 1. Шапка (Header) — общая для всех страниц
// 2. Уникальный контент (из файлов book-1.js, about.js, patents.js и т.д.)
// 3. Подвал (Footer) — общий для всех страниц

export async function onRequest(context) {
  // Получаем ответ от конкретной страницы
  const response = await context.next();
  
  // Проверяем, что это HTML-страница (а не картинка или CSS)
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("text/html")) {
    return response;
  }

  // Получаем уникальный контент страницы
  const pageContent = await response.text();

  // ============================================================
  // ЧАСТЬ 1: ВЕРХНЯЯ (Header) — общая для всех страниц
  // ============================================================
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

  <!-- ===== ПАНЕЛЬ ПЕРЕКЛЮЧЕНИЯ ЯЗЫКОВ ===== -->
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

  <!-- ===== ШАПКА САЙТА ===== -->
  <header class="zarif-header">
    <div>
      <span class="zarif-header-logo">ZARIF 2025</span>
      <span class="zarif-header-tagline">The World's First Robot-Native Sewing Technology · US Patent No. 6,095,069</span>
    </div>
  </header>

  <!-- ===== НАВИГАЦИЯ ===== -->
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

  // ============================================================
  // ЧАСТЬ 3: НИЖНЯЯ (Footer) — общая для всех страниц
  // ============================================================
  const footerHtml = `
  </main>

  <!-- ===== ПОДВАЛ САЙТА ===== -->
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

  <!-- ===== ЕДИНЫЙ ПЕРЕВОДЧИК (подключается один раз) ===== -->
  <script src="/translator.js"></script>
</body>
</html>
  `;

  // ============================================================
  // Собираем все три части в один HTML-документ
  // ============================================================
  const fullHtml = headerHtml + pageContent + footerHtml;

  return new Response(fullHtml, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  });
}
