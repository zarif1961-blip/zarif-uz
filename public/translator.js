// public/translator.js
// Переводчик на 10 языков с гарантированной загрузкой шрифтов

(function() {
  var currentLang = 'en';
  var originalTexts = new Map();
  var translatedCache = {};

  function getTextNodes(root) {
    var walker = document.createTreeWalker(
      root, NodeFilter.SHOW_TEXT,
      { acceptNode: function(node) {
          var p = node.parentElement;
          if (!p || ['SCRIPT','STYLE','NOSCRIPT'].indexOf(p.tagName) >= 0) return NodeFilter.FILTER_REJECT;
          if (p.closest('.tbar')) return NodeFilter.FILTER_REJECT;
          if (node.nodeValue.trim() === '') return NodeFilter.FILTER_SKIP;
          return NodeFilter.FILTER_ACCEPT;
      }}
    );
    var nodes = [], n;
    while ((n = walker.nextNode())) nodes.push(n);
    return nodes;
  }

  window.addEventListener('load', function() {
    getTextNodes(document.body).forEach(function(node, i) {
      node._tIdx = i;
      originalTexts.set(i, node.nodeValue);
    });
  });

  async function translateChunk(texts, tl) {
    var q = texts.join('\n||||\n');
    var url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=' + tl + '&dt=t&q=' + encodeURIComponent(q);
    var resp = await fetch(url);
    var data = await resp.json();
    var out = '';
    if (data && data[0]) data[0].forEach(function(s){ if(s&&s[0]) out+=s[0]; });
    var parts = out.split('\n||||\n');
    while (parts.length < texts.length) parts.push(texts[parts.length]);
    return parts;
  }

  function resetFontSizes() {
    document.querySelectorAll('[style]').forEach(function(el) { el.style.fontSize = ''; });
    document.querySelectorAll('[size]').forEach(function(el) { el.removeAttribute('size'); });
  }

  function restoreOriginal() {
    getTextNodes(document.body).forEach(function(node) {
      var v = originalTexts.get(node._tIdx);
      if (v !== undefined) node.nodeValue = v;
    });
    document.querySelectorAll('*').forEach(function(el) {
      el.style.fontFamily = '';
    });
  }

  // ПРИНУДИТЕЛЬНОЕ ПРИМЕНЕНИЕ ШРИФТА
  function applyFontForLanguage(lang) {
    var fontFamily = '';
    if (lang === 'ko') {
      fontFamily = "'Noto Sans KR', 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif";
    } else if (lang === 'ja') {
      fontFamily = "'Noto Sans JP', 'Hiragino Sans', sans-serif";
    } else if (lang === 'zh') {
      fontFamily = "'Noto Sans SC', 'Microsoft YaHei', sans-serif";
    } else if (lang === 'ar') {
      fontFamily = "'Noto Sans Arabic', 'Arial', sans-serif";
    }
    if (fontFamily) {
      document.querySelectorAll('*:not(.tbar *)').forEach(function(el) {
        el.style.fontFamily = fontFamily;
      });
    }
  }

  // ГАРАНТИРОВАННАЯ ЗАГРУЗКА ШРИФТА
  function loadFontForLanguage(lang) {
    var fontMap = {
      'ko': 'Noto+Sans+KR:wght@300;400;500',
      'ja': 'Noto+Sans+JP:wght@300;400;500',
      'zh': 'Noto+Sans+SC:wght@300;400;500',
      'ar': 'Noto+Sans+Arabic:wght@300;400;500'
    };
    if (fontMap[lang] && !document.getElementById('font-' + lang)) {
      var link = document.createElement('link');
      link.id = 'font-' + lang;
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=' + fontMap[lang] + '&display=swap';
      document.head.appendChild(link);
      console.log('Loading font for:', lang);
    }
  }

  window.setLang = async function(lang, tl) {
    if (lang === currentLang) return;

    // Обновляем кнопки
    ['en','ru','uz','zh','ar','de','fr','ja','ko','tr'].forEach(function(l) {
      var b = document.getElementById('btn-'+l);
      if (b) b.classList.toggle('active', l===lang);
    });

    document.body.className = document.body.className.replace(/\blang-\S+/g, '').trim();
    if (lang !== 'en') document.body.classList.add('lang-' + lang);

    var st = document.getElementById('tbar-status');

    // Загружаем шрифт ДО перевода
    loadFontForLanguage(lang);

    if (lang === 'en') {
      restoreOriginal();
      currentLang = 'en';
      if (st) st.textContent = '';
      return;
    }

    if (translatedCache[lang]) {
      restoreOriginal();
      var nodes = getTextNodes(document.body);
      var c = translatedCache[lang];
      nodes.forEach(function(n){ var t=c[n._tIdx]; if(t) n.nodeValue=t; });
      currentLang = lang;
      if (st) st.textContent = '';
      applyFontForLanguage(lang);
      return;
    }

    if (st) st.textContent = 'Translating…';
    restoreOriginal();
    var nodes = getTextNodes(document.body);
    var texts = nodes.map(function(n){ return n.nodeValue; });
    var all = [];

    try {
      for (var i = 0; i < texts.length; i += 50) {
        var res = await translateChunk(texts.slice(i, i+50), tl);
        all = all.concat(res);
      }
      var cmap = {};
      nodes.forEach(function(node, i){
        cmap[node._tIdx] = all[i] || texts[i];
        node.nodeValue = all[i] || texts[i];
      });
      translatedCache[lang] = cmap;
      resetFontSizes();
      currentLang = lang;
      if (st) st.textContent = '';
      applyFontForLanguage(lang);
    } catch(e) {
      if (st) st.textContent = 'Error — check connection';
      ['en','ru','uz','zh','ar','de','fr','ja','ko','tr'].forEach(function(l){
        var b = document.getElementById('btn-'+l);
        if (b) b.classList.toggle('active', l==='en');
      });
      currentLang = 'en';
    }
  };
})();
