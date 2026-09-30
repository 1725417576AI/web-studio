/* ============================================================
   小张网站建设工坊 落地页脚本
   要改的内容全在下面三个数组里(价格 / 案例 / 常见问题)
   ============================================================ */

/* ▼▼▼▼▼▼▼▼▼▼ 改这里 ①:套餐和价格 ▼▼▼▼▼▼▼▼▼▼ */
const PRICES = [
  {
    name: '单页落地页',
    money: 1280,
    unit: '元',
    days: '2 个工作日交付',
    hot: false,
    badge: '',
    items: [
      '1 页,手机 + 电脑自适应',
      '产品/服务介绍 + 留言表单',
      '微信/电话一键拨打按钮',
      '帮你绑好域名上线',
      '交付后 7 天内免费改 3 次'
    ]
  },
  {
    name: '基础展示站',
    money: 2480,
    unit: '元',
    days: '4 个工作日交付',
    hot: true,
    badge: '最多人买',
    items: [
      '5 个页面以内(首页/产品/案例/关于/联系)',
      '手机 + 电脑自适应',
      '预约或留言表单,提交直接进你微信',
      '百度/微信搜索基础设置',
      '交付后 15 天内免费改 5 次',
      '送 10 分钟录屏教程:自己改图文'
    ]
  },
  {
    name: '预约 / 点单系统',
    money: 4800,
    unit: '元起',
    days: '7–12 个工作日交付',
    hot: false,
    badge: '',
    items: [
      '带后台:下单、预约、订单列表',
      '数据存你自己的服务器,不租不绑定',
      '手机端可加到桌面,像 App 一样用',
      '微信/短信通知新订单',
      '交付源码 + 数据库文件',
      '30 天内免费改 10 次'
    ]
  },
  {
    name: '月度维护',
    money: 398,
    unit: '元/月',
    days: '随时可停',
    hot: false,
    badge: '',
    items: [
      '每月帮你改 6 次内容(价格/图片/活动)',
      '网站备案/证书到期提醒',
      '页面打不开 24 小时内处理',
      '每季度给一份访问数据小结',
      '不签长期合同,随时停'
    ]
  }
];

/* ▼▼▼▼▼▼▼▼▼▼ 改这里 ②:案例(做成一单就替换一条) ▼▼▼▼▼▼▼▼▼▼ */
const WORKS = [
  {
    title: '未晚 · 清吧点酒站',
    desc: '扫码点酒 + 购物车 + 下单,手机可加到桌面当 App 用。',
    shot: '【待填充:截图 shot-1.png】',
    url: 'https://1725417576ai.github.io/weiwan-bar/',
    go: '点开看真站 →'
  },
  {
    title: '本店同行业演示站',
    desc: '没看到你这一行的?说一句,我当天做一个同类页面给你看效果。',
    shot: '【待填充:你的第二个作品截图】',
    url: '',
    go: '微信聊 →'
  },
  {
    title: 'AI 代做内容',
    desc: '批量改文案、整理表格、自动生成图文,按项目收费。',
    shot: '【待填充:作品截图】',
    url: '',
    go: '问一下 →'
  }
];

/* ▼▼▼▼▼▼▼▼▼▼ 改这里 ③:常见问题(客户最常问的) ▼▼▼▼▼▼▼▼▼▼ */
const FAQS = [
  {
    q: '为什么比某宝便宜/贵?',
    a: '某宝 300 块那种基本是套模板 + 不管售后,你找他改一次就要加钱。我做的是能自己改的站,交付时教你怎么动价格和图片,后面不用一直花钱。'
  },
  {
    q: '我还要额外花钱吗?',
    a: '要,但很少:域名约 60 元/年,服务器(放数据用)约 100 元/年。展示站连服务器都能省掉。这些你自己买、自己名下,我不经手。'
  },
  {
    q: '做好后我不会用怎么办?',
    a: '交付时录一段 10 分钟视频,手把手教你在哪改价格、在哪换图片。视频永久留着,看不懂微信再问我。'
  },
  {
    q: '能先看东西再付钱吗?',
    a: '可以。聊完需求我先给你一版预览链接,能点能滑动。满意了再付 30% 定金开工,不满意不收一分钱。'
  },
  {
    q: '多久能看到网站?',
    a: '单页 2 天,展示站 4 天,带后台的系统 7–12 天。进度我随时发预览链接给你看,不用干等。'
  },
  {
    q: '能不能做小程序/App?',
    a: '先做网站,跑通了再决定要不要做小程序。很多老板后来发现网站够用,省下几万块。'
  }
];

/* ================= 渲染 + 交互(不用改) ================= */
function money(n) { return n.toLocaleString('zh-CN'); }

function renderPrices(list) {
  return list.map(p => `
    <article class="card${p.hot ? ' hot' : ''}">
      ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
      <h3>${p.name}</h3>
      <p class="money">¥${money(p.money)}<small> ${p.unit}</small></p>
      <p class="days">${p.days}</p>
      <ul>${p.items.map(i => `<li>${i}</li>`).join('')}</ul>
      <a class="btn ghost" href="#contact">选这档 →</a>
    </article>`).join('');
}

function renderWorks(list) {
  return list.map(w => `
    <article class="work">
      <div class="shot">${w.shot}</div>
      <div class="body">
        <b>${w.title}</b>
        <p>${w.desc}</p>
        ${w.url
          ? `<a class="go" href="${w.url}" target="_blank" rel="noopener">${w.go}</a>`
          : `<a class="go" href="#contact">${w.go}</a>`}
      </div>
    </article>`).join('');
}

function renderFaqs(list) {
  return list.map(f => `
    <div class="qa">
      <button type="button">${f.q}</button>
      <div class="ans"><p>${f.a}</p></div>
    </div>`).join('');
}

function initDom() {
  const $ = id => document.getElementById(id);
  const box = $('price-cards'); if (box) box.innerHTML = renderPrices(PRICES);
  const wl = $('work-list'); if (wl) wl.innerHTML = renderWorks(WORKS);
  const fl = $('faq-list'); if (fl) fl.innerHTML = renderFaqs(FAQS);

  const y = $('year'); if (y) y.textContent = new Date().getFullYear();

  // 深浅色切换
  const tt = $('theme-toggle');
  const paint = () => { if (tt) tt.textContent = document.documentElement.dataset.theme === 'dark' ? '☀️' : '🌙'; };
  paint();
  if (tt) tt.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('theme', next);
    paint();
  });

  // 手机菜单
  const nt = $('nav-toggle'), links = $('nav-links');
  if (nt && links) {
    nt.addEventListener('click', () => links.classList.toggle('open'));
    links.addEventListener('click', e => { if (e.target.tagName === 'A') links.classList.remove('open'); });
  }

  // FAQ 手风琴
  document.querySelectorAll('.qa > button').forEach(btn => {
    btn.addEventListener('click', () => {
      const qa = btn.parentElement, wasOpen = qa.classList.contains('open');
      document.querySelectorAll('.qa.open').forEach(x => x.classList.remove('open'));
      if (!wasOpen) qa.classList.add('open');
    });
  });

  // 回顶
  const top = $('top-btn');
  if (top) {
    window.addEventListener('scroll', () => top.classList.toggle('show', window.scrollY > 500));
    top.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // 微信二维码:找到 qr.jpg / qr.png 就自动换成图片,都没有就保留占位框
  const qrBox = $('qr-box');
  if (qrBox) {
    const candidates = ['qr.png', 'qr.jpg', 'qr.jpeg', 'qr.webp'];
    const tryNext = i => {
      if (i >= candidates.length) return;
      const probe = new Image();
      probe.onload = () => {
        probe.className = 'qr-img';
        probe.alt = '微信二维码';
        qrBox.replaceWith(probe);
      };
      probe.onerror = () => tryNext(i + 1);
      probe.src = candidates[i];
    };
    tryNext(0);
  }

  // 滚动出现
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }), { threshold: .12 });
  document.querySelectorAll('.card, .work, .steps li, .qa').forEach(el => { el.classList.add('reveal'); io.observe(el); });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initDom);
  else initDom();
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PRICES, WORKS, FAQS, renderPrices, renderWorks, renderFaqs, money };
}
