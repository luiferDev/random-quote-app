(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p="/bg-image-random-quote.svg",y="/link.svg",m="/Regroup.svg",l=document.querySelector(".quote"),f=document.querySelector("#author"),g=document.querySelector(".quote__container"),a=document.querySelector("#random__quote"),d=document.querySelector("#copy__quote"),h=async()=>{try{await navigator.clipboard.writeText(l.innerHTML),b()}catch(n){console.error("Failed to copy: ",n)}},o=document.getElementById("message"),b=()=>{o.textContent="Text Copied to Clipboard",o.style.display="block",o.style.background="linear-gradient(#20293A, #2c3546)",o.style.color="white",o.style.padding="10px 30px",o.style.borderRadius="10px",o.style.position="absolute",o.style.fontFamily="Output, sans-serif",o.style.top="20px",o.style.right="10px",setTimeout(()=>{o.style.display="none"},2e3)};g.style.backgroundImage=`url(${p})`;a.innerHTML=`<img src="${m}" alt="random" />`;d.innerHTML=`<img src="${y}" alt="copy" />`;async function u(){try{const r=await(await fetch("https://type.fit/api/quotes")).json();console.log(r);const s=Math.floor(Math.random()*r.length);l.textContent=`"${r[s].text}"`;const c=q(`${r[s].author}`);f.textContent=c}catch(n){console.log(n)}}u();a.addEventListener("click",u);d.addEventListener("click",h);function q(n){return n.split(",")[0].trim()}
