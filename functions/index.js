// functions/index.js
// Временная главная страница

export async function onRequestGet() {
  const htmlContent = `
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
      <p style="margin-top: 40px; font-size: 0.9rem; color: #706858;">
        Страницы: <a href="/about" style="color: #c5a04d;">/about</a> | 
        <a href="/zarif-technology" style="color: #c5a04d;">/zarif-technology</a>
      </p>
    </div>
  `;

  return new Response(htmlContent);
}
