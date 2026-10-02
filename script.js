document.addEventListener("DOMContentLoaded",()=>{
 const nav=document.querySelector("#nav"), menu=document.querySelector(".menu-btn");
 if(menu){menu.addEventListener("click",()=>{const open=nav.classList.toggle("mobile-open");menu.setAttribute("aria-expanded",String(open));});}
 document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("mobile-open");menu?.setAttribute("aria-expanded","false");}));
 const sections=[...document.querySelectorAll("main section[id]")];
 const links=[...document.querySelectorAll(".nav-links a")];
 const active=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+e.target.id));}}),{rootMargin:"-35% 0px -55% 0px",threshold:0});
 sections.forEach(s=>active.observe(s));
 const reveal=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");reveal.unobserve(e.target);}}),{threshold:.12});
 document.querySelectorAll(".reveal").forEach((el,i)=>{el.style.transitionDelay=Math.min((i%6)*70,350)+"ms";reveal.observe(el);});
});