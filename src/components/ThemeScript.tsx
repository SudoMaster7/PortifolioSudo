/**
 * Script anti-flash: roda antes da pintura e aplica o tema salvo
 * (ou a preferência do sistema) direto no <html>, evitando o flash
 * branco/escuro na primeira renderização.
 */
const script = `(function(){try{var k='lb-theme';var s=localStorage.getItem(k);var d=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';var t=s==='light'||s==='dark'?s:d;var r=document.documentElement;r.classList.add(t);r.style.colorScheme=t;}catch(e){document.documentElement.classList.add('dark');}})();`;

export default function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
