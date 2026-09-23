// build.js
const fs = require('fs');
const path = require('path');
const posts = require('./posts.js');

const SITE_URL = 'https://clearwords.com.ng';
const SITE_NAME = 'ClearWords';
const BLOG_DIR = path.join(__dirname, 'blog');

if (!fs.existsSync(BLOG_DIR)) fs.mkdirSync(BLOG_DIR, { recursive: true });

const NAV = `
  <nav class="navbar">
    <div class="container">
      <a href="/" class="logo"><span class="logo-icon">🗣️</span><span class="logo-text">ClearWords</span></a>
      <div class="nav-links">
        <a href="/" class="nav-link">Home</a>
        <a href="/languages" class="nav-link">Languages</a>
        <a href="/blog" class="nav-link">Blog</a>
        <a href="/about" class="nav-link">About</a>
        <a href="/app" class="nav-cta">Launch App</a>
      </div>
    </div>
  </nav>`;

const FOOTER = `
  <footer class="footer">
    <div class="container">
      <p>© ${new Date().getFullYear()} ClearWords. Made with ♥️ in Warri &amp; the Diaspora. Timmy sends his regards 🤓</p>
    </div>
  </footer>`;

const STYLES = `
<style>
  :root{--blue:#1E3A5F;--green:#2E8B57;--coral:#FF7F50;--g50:#F8FAFC;--g200:#E2E8F0;--g600:#64748B;--g800:#334155}
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;color:var(--g800);line-height:1.8;background:#fff}
  .container{max-width:800px;margin:0 auto;padding:0 24px}
  .navbar{padding:16px 0;border-bottom:1px solid var(--g200);position:sticky;top:0;background:rgba(255,255,255,.95);backdrop-filter:blur(10px);z-index:100}
  .navbar .container{display:flex;justify-content:space-between;align-items:center;max-width:1280px}
  .logo{display:flex;align-items:center;gap:8px;font-weight:700;font-size:1.3rem;text-decoration:none;color:var(--blue)}
  .nav-links{display:flex;gap:24px;align-items:center}
  .nav-link{color:var(--g800);text-decoration:none;font-weight:500;font-size:.95rem}
  .nav-link:hover{color:var(--green)}
  .nav-cta{background:linear-gradient(135deg,var(--blue),var(--green));color:#fff;padding:10px 20px;border-radius:999px;text-decoration:none;font-weight:600;font-size:.9rem}
  .blog-post-container{max-width:800px;margin:0 auto;padding:48px 24px}
  .blog-post-header{text-align:center;margin-bottom:40px}
  .blog-post-category{color:var(--green);font-weight:600;text-transform:uppercase;letter-spacing:1px;font-size:.85rem;margin-bottom:12px}
  .blog-post-header h1{font-size:2.2rem;line-height:1.25;color:var(--blue);margin-bottom:16px}
  .blog-post-meta{color:var(--g600);font-size:.9rem;display:flex;justify-content:center;gap:20px;flex-wrap:wrap}
  .blog-post-content h2{font-size:1.6rem;margin:40px 0 16px;color:var(--blue);line-height:1.3}
  .blog-post-content h3{font-size:1.2rem;margin:28px 0 12px;color:var(--blue)}
  .blog-post-content p{margin-bottom:18px}
  .blog-post-content ul,.blog-post-content ol{margin-bottom:20px;padding-left:24px}
  .blog-post-content li{margin-bottom:10px}
  .blog-post-content a{color:var(--green);font-weight:600}
  .timmy-tip-box{background:linear-gradient(135deg,rgba(46,139,87,.06),rgba(30,58,95,.06));border-left:4px solid var(--green);padding:20px 24px;border-radius:0 12px 12px 0;margin:28px 0}
  .timmy-tip-box h4{color:var(--green);margin-bottom:10px}
  .phrase-box{background:var(--g50);border:1px solid var(--g200);border-radius:12px;padding:20px;margin:24px 0}
  .phrase-item{display:flex;justify-content:space-between;align-items:baseline;padding:12px 0;border-bottom:1px dashed var(--g200);flex-wrap:wrap;gap:8px}
  .phrase-item:last-child{border-bottom:none}
  .phrase-native{font-size:1.15rem;font-weight:700;color:var(--blue)}
  .phrase-translation{color:var(--g600)}
  .phrase-pronunciation{font-size:.85rem;color:var(--g600);font-style:italic}
  .nigerian-slang{color:var(--coral);font-weight:600;font-style:italic}
  .blog-post-cta{background:linear-gradient(135deg,var(--blue),var(--green));color:#fff;padding:36px;border-radius:16px;text-align:center;margin-top:48px}
  .blog-post-cta h3{color:#fff;margin-bottom:12px;font-size:1.4rem}
  .blog-post-cta p{color:rgba(255,255,255,.9);margin-bottom:20px}
  .blog-post-cta a{background:#fff;color:var(--blue);padding:14px 28px;border-radius:999px;text-decoration:none;font-weight:700;display:inline-block}
  .back-to-blog{display:inline-block;margin-top:40px;color:var(--green);text-decoration:none;font-weight:600}
  .blog-index-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:24px;margin-top:40px}
  .blog-card{background:#fff;border:1px solid var(--g200);border-radius:16px;padding:24px;text-decoration:none;color:inherit;transition:.2s;display:block}
  .blog-card:hover{transform:translateY(-4px);box-shadow:0 12px 28px rgba(0,0,0,.08);border-color:var(--green)}
  .blog-card .cat{color:var(--green);font-weight:600;font-size:.8rem;text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px}
  .blog-card h3{font-size:1.15rem;line-height:1.4;color:var(--blue);margin-bottom:10px}
  .blog-card p{color:var(--g600);font-size:.9rem;margin-bottom:14px}
  .blog-card .more{color:var(--green);font-weight:600;font-size:.9rem}
  .footer{background:var(--blue);color:#fff;padding:32px 0;text-align:center;margin-top:64px;font-size:.9rem}
  @media(max-width:768px){.nav-links{display:none}.blog-post-header h1{font-size:1.6rem}.blog-post-content h2{font-size:1.3rem}}
</style>`;

function escape(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function renderPost(post) {
  const canonical = `${SITE_URL}/blog/${post.slug}`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escape(post.title)} | ${SITE_NAME}</title>
<meta name="description" content="${escape(post.description)}">
<meta name="keywords" content="${escape(post.keywords || '')}">
<meta name="author" content="Timmy at ClearWords">
<meta name="robots" content="index, follow, max-image-preview:large">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="article">
<meta property="og:url" content="${canonical}">
<meta property="og:title" content="${escape(post.title)}">
<meta property="og:description" content="${escape(post.description)}">
<meta property="og:image" content="${SITE_URL}/logo.jpg">
<meta property="og:site_name" content="${SITE_NAME}">
<meta property="article:published_time" content="${post.date}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escape(post.title)}">
<meta name="twitter:description" content="${escape(post.description)}">
<meta name="twitter:image" content="${SITE_URL}/logo.jpg">
<link rel="icon" type="image/jpg" href="/logo.jpg">
<link rel="apple-touch-icon" href="/logo.jpg">
<meta name="theme-color" content="#1E3A5F">
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": ${JSON.stringify(post.title)},
  "description": ${JSON.stringify(post.description)},
  "image": "${SITE_URL}/logo.jpg",
  "datePublished": "${post.date}",
  "dateModified": "${post.date}",
  "author": {"@type":"Person","name":"Timmy"},
  "publisher": {"@type":"Organization","name":"${SITE_NAME}","logo":{"@type":"ImageObject","url":"${SITE_URL}/logo.jpg"}},
  "mainEntityOfPage": {"@type":"WebPage","@id":"${canonical}"},
  "keywords": ${JSON.stringify(post.keywords || '')}
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type":"ListItem","position":1,"name":"Home","item":"${SITE_URL}/"},
    {"@type":"ListItem","position":2,"name":"Blog","item":"${SITE_URL}/blog"},
    {"@type":"ListItem","position":3,"name":${JSON.stringify(post.title)},"item":"${canonical}"}
  ]
}
</script>
${STYLES}
</head>
<body>
${NAV}
<article class="blog-post-container">
  <header class="blog-post-header">
    <div class="blog-post-category">${escape(post.category)}</div>
    <h1>${escape(post.title)}</h1>
    <div class="blog-post-meta">
      <span>🤓 By Timmy</span>
      <span>📅 ${post.readTime}</span>
      <span>🏷️ ${escape(post.tags)}</span>
    </div>
  </header>
  <div class="blog-post-content">
${post.content}
  </div>
  <div class="blog-post-cta">
    <h3>${escape(post.cta.heading)}</h3>
    <p>${escape(post.cta.text)}</p>
    <a href="${post.cta.buttonLink}">${escape(post.cta.buttonText)}</a>
  </div>
  <a href="/blog" class="back-to-blog">← Back to all articles</a>
</article>
${FOOTER}
</body>
</html>`;
}

function renderBlogIndex() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
  const cards = sorted.map(p => `
    <a href="/blog/${p.slug}" class="blog-card">
      <div class="cat">${escape(p.category)}</div>
      <h3>${escape(p.title)}</h3>
      <p>${escape(p.description)}</p>
      <span class="more">Read article →</span>
    </a>`).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Nigerian Language Learning Blog | Yoruba, Igbo &amp; Hausa Guides | ${SITE_NAME}</title>
<meta name="description" content="Practical Nigerian language guides from Timmy. Learn Yoruba, Igbo, and Hausa greetings, cultural etiquette, wedding phrases, tones, and diaspora parenting tips.">
<meta name="keywords" content="learn Yoruba, learn Igbo, learn Hausa, Nigerian language blog, Yoruba greetings, Igbo phrases, Hausa phrases">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${SITE_URL}/blog">
<meta property="og:type" content="website">
<meta property="og:url" content="${SITE_URL}/blog">
<meta property="og:title" content="Nigerian Language Learning Blog | ${SITE_NAME}">
<meta property="og:description" content="Practical Nigerian language guides from Timmy. Learn Yoruba, Igbo, and Hausa with real cultural context.">
<meta property="og:image" content="${SITE_URL}/logo.jpg">
<link rel="icon" type="image/jpg" href="/logo.jpg">
<meta name="theme-color" content="#1E3A5F">
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Blog","name":"ClearWords Blog","url":"${SITE_URL}/blog","description":"Practical Nigerian language learning guides from Timmy."}
</script>
${STYLES}
<style>
  .blog-hero{padding:56px 0 8px;text-align:center}
  .blog-hero h1{font-size:2.4rem;color:var(--blue);margin-bottom:12px}
  .blog-hero p{color:var(--g600);max-width:620px;margin:0 auto;font-size:1.05rem}
</style>
</head>
<body>
${NAV}
<main class="container" style="max-width:1160px">
  <section class="blog-hero">
    <h1>Learning Resources from Timmy</h1>
    <p>Tips, cultural insights, and language guides for Yoruba, Igbo, Hausa, and Pidgin — written the Timmy way.</p>
  </section>
  <div class="blog-index-grid">
${cards}
  </div>
</main>
${FOOTER}
</body>
</html>`;
}

function renderSitemap() {
  const staticUrls = ['/', '/languages', '/blog', '/about', '/privacy', '/terms', '/app'];
  const staticEntries = staticUrls.map(u => `  <url>
    <loc>${SITE_URL}${u}</loc>
    <changefreq>${u === '/blog' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${u === '/' ? '1.0' : u === '/blog' ? '0.9' : '0.6'}</priority>
  </url>`).join('\n');

  const postEntries = posts.map(p => `  <url>
    <loc>${SITE_URL}/blog/${p.slug}</loc>
    <lastmod>${p.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticEntries}
${postEntries}
</urlset>`;
}

function renderRobots() {
  return `User-agent: *
Allow: /
Disallow: /app?*

Sitemap: ${SITE_URL}/sitemap.xml
`;
}

// ---- BUILD ----
console.log(`Building ${posts.length} blog posts...`);

posts.forEach(post => {
  const html = renderPost(post);
  fs.writeFileSync(path.join(BLOG_DIR, `${post.slug}.html`), html);
  console.log(`  ✓ blog/${post.slug}.html`);
});

fs.writeFileSync(path.join(__dirname, 'blog.html'), renderBlogIndex());
console.log('  ✓ blog.html');

fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), renderSitemap());
console.log('  ✓ sitemap.xml');

fs.writeFileSync(path.join(__dirname, 'robots.txt'), renderRobots());
console.log('  ✓ robots.txt');

console.log('Build complete.');