// 多语言文本
const translations = {
  en: {
    title: "🛠️ Text Toolkit",
    subtitle: "Free online text processing tools. Private, secure, runs entirely in your browser. No upload, no server.",
    jsonFormatter: "JSON Formatter",
    jsonDesc: "Beautify, validate & minify JSON",
    base64: "Base64 Encode/Decode",
    base64Desc: "Encode text to Base64 or decode back",
    markdown: "Markdown to HTML",
    markdownDesc: "Live preview and copy HTML output",
    urlEncoder: "URL Encoder/Decoder",
    urlDesc: "encodeURI / decodeURI online",
    htmlEntity: "HTML Entity Escape",
    htmlEntityDesc: "Escape and unescape HTML entities",
    textSort: "Text Sort & Dedup",
    textSortDesc: "Sort lines alphabetically & remove duplicates",
    privacyFirst: "Privacy First. Everything runs locally.",
    noUpload: "No Upload. No server processing.",
    free: "100% Free. No signup.",
    faqTitle: "Frequently Asked Questions",
    faq1Q: "Are my files safe?",
    faq1A: "Absolutely. All tools process data directly in your browser. Nothing is ever uploaded to a server.",
    faq2Q: "Do I need to install anything?",
    faq2A: "No. These tools work right here in your web browser. Just bookmark the page.",
    faq3Q: "Can I use these tools offline?",
    faq3A: "Once the page is loaded, you can disconnect and most tools will still work perfectly.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    contactUs: "Contact Us",
    builtWith: "Built with ❤️",
    // 工具页通用
    back: "← Back to Toolkit",
    input: "Input",
    output: "Output",
    copy: "Copy",
    clear: "Clear",
    convert: "Convert",
    beautify: "Beautify",
    minify: "Minify",
    encode: "Encode",
    decode: "Decode",
    sort: "Sort",
    dedup: "Remove Duplicates",
  },
  zh: {
    title: "🛠️ 文本工具箱",
    subtitle: "免费在线文本处理工具。隐私安全，完全在浏览器内运行，无需上传。",
    jsonFormatter: "JSON 格式化",
    jsonDesc: "美化、验证、压缩 JSON",
    base64: "Base64 编解码",
    base64Desc: "文本与 Base64 互相转换",
    markdown: "Markdown 转 HTML",
    markdownDesc: "实时预览并复制 HTML 代码",
    urlEncoder: "URL 编解码",
    urlDesc: "在线 encodeURI / decodeURI",
    htmlEntity: "HTML 实体转义",
    htmlEntityDesc: "转义和反转义 HTML 实体",
    textSort: "文本排序去重",
    textSortDesc: "按字母排序并去除重复行",
    privacyFirst: "隐私优先，一切在本地运行。",
    noUpload: "无需上传，无服务器处理。",
    free: "100%免费，无需注册。",
    faqTitle: "常见问题",
    faq1Q: "我的文件安全吗？",
    faq1A: "绝对安全。所有工具都在您的浏览器中处理数据，不会上传到任何服务器。",
    faq2Q: "需要安装什么吗？",
    faq2A: "不需要。这些工具直接在网页浏览器中运行，加入书签即可。",
    faq3Q: "可以离线使用吗？",
    faq3A: "页面加载完成后，即使断开网络，大部分工具仍然可以正常工作。",
    privacyPolicy: "隐私政策",
    termsOfService: "服务条款",
    contactUs: "联系我们",
    builtWith: "用❤️构建",
    back: "← 返回工具箱",
    input: "输入",
    output: "输出",
    copy: "复制",
    clear: "清空",
    convert: "转换",
    beautify: "美化",
    minify: "压缩",
    encode: "编码",
    decode: "解码",
    sort: "排序",
    dedup: "去除重复",
  },
  es: {
    title: "🛠️ Caja de herramientas de texto",
    subtitle: "Herramientas gratuitas de procesamiento de texto. Privadas, seguras y ejecutadas en su navegador. Sin carga, sin servidor.",
    jsonFormatter: "Formateador JSON",
    jsonDesc: "Embellecer, validar y minimizar JSON",
    base64: "Base64 Codificar/Decodificar",
    base64Desc: "Codificar texto a Base64 o decodificar",
    markdown: "Markdown a HTML",
    markdownDesc: "Vista previa en vivo y copiar HTML",
    urlEncoder: "Codificador/Decodificador URL",
    urlDesc: "encodeURI / decodeURI en línea",
    htmlEntity: "Escape de entidades HTML",
    htmlEntityDesc: "Escapar y desescapar entidades HTML",
    textSort: "Ordenar y deduplicar texto",
    textSortDesc: "Ordenar líneas alfabéticamente y eliminar duplicados",
    privacyFirst: "Privacidad primero. Todo se ejecuta localmente.",
    noUpload: "Sin carga. Sin procesamiento en servidor.",
    free: "100% gratuito. Sin registro.",
    faqTitle: "Preguntas frecuentes",
    faq1Q: "¿Están seguros mis archivos?",
    faq1A: "Absolutamente. Todas las herramientas procesan los datos directamente en su navegador. Nunca se sube nada a un servidor.",
    faq2Q: "¿Necesito instalar algo?",
    faq2A: "No. Estas herramientas funcionan directamente en su navegador web. Simplemente añada la página a sus marcadores.",
    faq3Q: "¿Puedo usar estas herramientas sin conexión?",
    faq3A: "Una vez cargada la página, puede desconectarse y la mayoría de las herramientas seguirán funcionando perfectamente.",
    privacyPolicy: "Política de privacidad",
    termsOfService: "Términos de servicio",
    contactUs: "Contacta con nosotros",
    builtWith: "Hecho con ❤️",
    back: "← Volver a la caja de herramientas",
    input: "Entrada",
    output: "Salida",
    copy: "Copiar",
    clear: "Limpiar",
    convert: "Convertir",
    beautify: "Embellecer",
    minify: "Minimizar",
    encode: "Codificar",
    decode: "Decodificar",
    sort: "Ordenar",
    dedup: "Eliminar duplicados",
  },
  pt: {
    title: "🛠️ Caixa de ferramentas de texto",
    subtitle: "Ferramentas gratuitas de processamento de texto. Privadas, seguras, executadas no seu navegador. Sem upload, sem servidor.",
    jsonFormatter: "Formatador JSON",
    jsonDesc: "Embelezar, validar e minimizar JSON",
    base64: "Base64 Codificar/Decodificar",
    base64Desc: "Codificar texto para Base64 ou decodificar",
    markdown: "Markdown para HTML",
    markdownDesc: "Visualização ao vivo e copiar HTML",
    urlEncoder: "Codificador/Decodificador de URL",
    urlDesc: "encodeURI / decodeURI online",
    htmlEntity: "Escape de entidades HTML",
    htmlEntityDesc: "Escapar e desescapar entidades HTML",
    textSort: "Ordenar e deduplicar texto",
    textSortDesc: "Ordenar linhas alfabeticamente e remover duplicados",
    privacyFirst: "Privacidade em primeiro lugar. Tudo roda localmente.",
    noUpload: "Sem upload. Sem processamento no servidor.",
    free: "100% Grátis. Sem cadastro.",
    faqTitle: "Perguntas frequentes",
    faq1Q: "Meus arquivos estão seguros?",
    faq1A: "Absolutamente. Todas as ferramentas processam os dados diretamente no seu navegador. Nada é enviado a um servidor.",
    faq2Q: "Preciso instalar algo?",
    faq2A: "Não. Essas ferramentas funcionam diretamente no seu navegador. Basta adicionar a página aos favoritos.",
    faq3Q: "Posso usar essas ferramentas offline?",
    faq3A: "Depois que a página for carregada, você pode se desconectar e a maioria das ferramentas ainda funcionará perfeitamente.",
    privacyPolicy: "Política de Privacidade",
    termsOfService: "Termos de Serviço",
    contactUs: "Contate-nos",
    builtWith: "Feito com ❤️",
    back: "← Voltar para a caixa de ferramentas",
    input: "Entrada",
    output: "Saída",
    copy: "Copiar",
    clear: "Limpar",
    convert: "Converter",
    beautify: "Embelezar",
    minify: "Minimizar",
    encode: "Codificar",
    decode: "Decodificar",
    sort: "Ordenar",
    dedup: "Remover duplicados",
  },
  ja: {
    title: "🛠️ テキストツールキット",
    subtitle: "無料のオンラインテキスト処理ツール。プライバシー保護、安全、ブラウザ内で完全に実行。アップロード不要。",
    jsonFormatter: "JSON フォーマッター",
    jsonDesc: "JSONの整形、検証、圧縮",
    base64: "Base64 エンコード/デコード",
    base64Desc: "テキストをBase64に変換、またはその逆",
    markdown: "Markdown → HTML",
    markdownDesc: "ライブプレビューとHTMLコピー",
    urlEncoder: "URL エンコーダ/デコーダ",
    urlDesc: "オンライン encodeURI / decodeURI",
    htmlEntity: "HTML エンティティエスケープ",
    htmlEntityDesc: "HTMLエンティティのエスケープ/アンエスケープ",
    textSort: "テキスト並べ替え・重複除去",
    textSortDesc: "行をアルファベット順に並べ替え、重複を除去",
    privacyFirst: "プライバシー最優先。すべてローカルで実行。",
    noUpload: "アップロード不要。サーバー処理なし。",
    free: "100%無料。登録不要。",
    faqTitle: "よくある質問",
    faq1Q: "ファイルは安全ですか？",
    faq1A: "はい。すべてのツールはブラウザ内でデータを直接処理します。サーバーにアップロードされることは決してありません。",
    faq2Q: "インストールは必要ですか？",
    faq2A: "いいえ。これらのツールはウェブブラウザでそのまま動作します。ページをブックマークしてください。",
    faq3Q: "オフラインで使用できますか？",
    faq3A: "ページを読み込んだ後は、切断してもほとんどのツールが正常に動作します。",
    privacyPolicy: "プライバシーポリシー",
    termsOfService: "利用規約",
    contactUs: "お問い合わせ",
    builtWith: "❤️ を込めて作られました",
    back: "← ツールキットに戻る",
    input: "入力",
    output: "出力",
    copy: "コピー",
    clear: "クリア",
    convert: "変換",
    beautify: "整形",
    minify: "圧縮",
    encode: "エンコード",
    decode: "デコード",
    sort: "並べ替え",
    dedup: "重複除去",
  }
};

// 语言切换逻辑
let currentLang = localStorage.getItem('preferredLanguage') || 'en';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('preferredLanguage', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang]?.[key]) {
      el.textContent = translations[lang][key];
    }
  });
  // 更新 title
  const titleKey = document.querySelector('title')?.getAttribute('data-i18n');
  if (titleKey && translations[lang]?.[titleKey]) {
    document.title = translations[lang][titleKey];
  } else if (translations[lang]?.title) {
    document.title = translations[lang].title;
  }
  // 更新选择框
  const langSelect = document.getElementById('languageSelect');
  if (langSelect) langSelect.value = lang;
}

// 浅色/深色切换
function applyTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
  const toggle = document.getElementById('themeToggle');
  if (toggle) toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function initTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    applyTheme('dark');
  } else if (saved === 'light') {
    applyTheme('light');
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
  } else {
    applyTheme('light');
  }
}

// 初始化事件
document.addEventListener('DOMContentLoaded', () => {
  const langSelect = document.getElementById('languageSelect');
  if (langSelect) {
    langSelect.addEventListener('change', (e) => applyLanguage(e.target.value));
  }
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = document.body.classList.contains('dark');
      applyTheme(isDark ? 'light' : 'dark');
    });
  }
  // 应用初始语言和主题
  applyLanguage(currentLang);
  initTheme();
});

// 复制到剪贴板的辅助函数（将在工具页中使用）
window.copyToClipboard = function(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('Copied to clipboard!');
  }).catch(() => {
    prompt('Copy manually:', text);
  });
};