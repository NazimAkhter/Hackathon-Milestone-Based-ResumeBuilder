//------------Reference Section-------------

const ref_section = document.getElementById('ref')
const ref_btn = document.getElementById('ref-btn')

ref_btn?.addEventListener('click', ()=>{
    ref_section!.classList.toggle('hide') 
});

//------------Contact Section-------------


const contact_section = document.getElementById('cont')
const contact_btn = document.getElementById('cont-btn')

contact_btn?.addEventListener('click', ()=>{
    contact_section!.classList.toggle('hide') 
});

//------------Experience Section-------------

const exp_section = document.getElementById('exp')
const exp_btn = document.getElementById('exp-btn')

exp_btn?.addEventListener('click', ()=>{
    exp_section!.classList.toggle('hide') 
});

//------------Education Section-------------

const edu_section = document.getElementById('edu')
const edu_btn = document.getElementById('edu-btn')

edu_btn?.addEventListener('click', ()=>{
    edu_section!.classList.toggle('hide') 
});

//------------Expertise Section-------------

const skill_section = document.getElementById('skill')
const skill_btn = document.getElementById('skill-btn')

skill_btn?.addEventListener('click', ()=>{
    skill_section!.classList.toggle('hide') 
});

//------------Language Section-------------

const lang_section = document.getElementById('lang')
const lang_btn = document.getElementById('lang-btn')

lang_btn?.addEventListener('click', ()=>{
    lang_section!.classList.toggle('hide') 
});

//------------Print Button-------------

const print_btn = document.getElementById('print-btn')
print_btn?.addEventListener('click', ()=>{
    window.print()
});