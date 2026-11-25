/* ===== CONFIG: replace with your EmailJS values (emailjs.com) ===== */
var EMAILJS = {publicKey:"YOUR_PUBLIC_KEY",serviceId:"YOUR_SERVICE_ID",templateId:"YOUR_TEMPLATE_ID"};
/* ================================================================== */
(function(){
  var ready=false;
  try{if(window.emailjs&&EMAILJS.publicKey.indexOf("YOUR_")!==0){emailjs.init({publicKey:EMAILJS.publicKey});ready=true;}}catch(e){}
  var modal=document.getElementById("modal");
  function open(){modal.classList.add("open");var f=modal.querySelector("input");if(f)f.focus();}
  function close(){modal.classList.remove("open");try{sessionStorage.setItem("fb_seen","1");}catch(e){}}
  document.querySelectorAll("[data-open]").forEach(function(b){b.addEventListener("click",open);});
  document.querySelectorAll("[data-close]").forEach(function(b){b.addEventListener("click",close);});
  modal.addEventListener("click",function(e){if(e.target===modal)close();});
  document.addEventListener("keydown",function(e){if(e.key==="Escape")close();});
  /* One polite offer per session, after 25s. Never on exit-intent. */
  var seen=false;try{seen=sessionStorage.getItem("fb_seen")==="1";}catch(e){}
  if(!seen)setTimeout(function(){if(!modal.classList.contains("open"))open();},25000);

  document.querySelectorAll("form.lead").forEach(function(form){
    form.addEventListener("submit",function(ev){
      ev.preventDefault();
      var msg=form.querySelector(".msg"),btn=form.querySelector("button[type=submit]");
      var d=Object.fromEntries(new FormData(form).entries());
      if(!/^\d{10}$/.test((d.phone||"").replace(/\D/g,"").slice(-10))){msg.className="msg err";msg.textContent="Enter a valid 10-digit phone number.";return;}
      if(!form.querySelector("[name=consent]").checked){msg.className="msg err";msg.textContent="Please accept the contact consent to continue.";return;}
      if(!ready){msg.className="msg err";msg.textContent="Form not connected yet. Add your EmailJS keys in assets/app.js.";return;}
      btn.disabled=true;msg.className="msg";msg.textContent="Sending...";
      d.page=location.href;d.submitted_at=new Date().toISOString();
      emailjs.send(EMAILJS.serviceId,EMAILJS.templateId,d).then(function(){
        msg.className="msg ok";msg.textContent="Thanks. A specialist will contact you shortly.";form.reset();btn.disabled=false;
        try{sessionStorage.setItem("fb_seen","1");}catch(e){}
      },function(){msg.className="msg err";msg.textContent="Could not send. Please call us at (833) 847-5497.";btn.disabled=false;});
    });
  });
})();
