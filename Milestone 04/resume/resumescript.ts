window.addEventListener('load', () => {
 
    let name = localStorage.getItem("name")
    let jobtitle =  localStorage.getItem("jobtitle")
    let phone =  localStorage.getItem("phone")
    let email = localStorage.getItem("email")
    let add = localStorage.getItem("add")
    let pass1 = localStorage.getItem("pass1")
    let deg1 = localStorage.getItem("deg1")
    let uni1 = localStorage.getItem("uni1")
    let pass2 = localStorage.getItem("pass2")
    let deg2 = localStorage.getItem("deg2")
    let uni2 = localStorage.getItem("uni2")
    let skill1 = localStorage.getItem("skill1")
    let skill2 = localStorage.getItem("skill2")
    let skill3 = localStorage.getItem("skill3")
    let skill4 = localStorage.getItem("skill4")
    let lang1 = localStorage.getItem("lang1")
    let lang2 = localStorage.getItem("lang2")
    let styear = localStorage.getItem("styear")
    let endyear = localStorage.getItem("endyear")
    let company = localStorage.getItem("company")
    let comLocation = localStorage.getItem("comLocation")
    let desig = localStorage.getItem("desig")
    let achv1 = localStorage.getItem("achv1")
    let achv2 = localStorage.getItem("achv2")
    let achv3 = localStorage.getItem("achv3")
    let picture  = localStorage.getItem("profile-pic")



    let resName:any = document.getElementById('resName')
    resName.textContent = name

    let resdesig:any = document.getElementById('resdesig')
    resdesig.textContent = jobtitle

    let resPhone:any = document.getElementById('resPhone')
    resPhone.textContent = phone

    let resEmail:any = document.getElementById('resEmail')
    resEmail.textContent = email
   
    let resAdd:any = document.getElementById('resAdd')
    resAdd.textContent = add
   
    let resPass1:any = document.getElementById('resPass1')
    resPass1.textContent = pass1
  
    let resdeg1:any = document.getElementById('resdeg1')
    resdeg1.textContent = deg1
   
    let resUni1:any = document.getElementById('resUni1')
    resUni1.textContent = uni1
    
    let resPass2:any = document.getElementById('resPass2')
    resPass2.textContent = pass2
  
    let resdeg2:any = document.getElementById('resdeg2')
    resdeg2.textContent = deg2
    
    let resUni2:any = document.getElementById('resUni2')
    resUni2.textContent = uni2
    
    let resSkill1:any = document.getElementById('resSkill1')
    resSkill1.textContent = skill1
    
    let resSkill2:any = document.getElementById('resSkill2')
    resSkill2.textContent = skill2
    
    let resSkill3:any = document.getElementById('resSkill3')
    resSkill3.textContent = skill3
    
    let resSkill4:any = document.getElementById('resSkill4')
    resSkill4.textContent = skill4
    
    let resLang1:any = document.getElementById('resLang1')
    resLang1.textContent = lang1
    
    let resLang2:any = document.getElementById('resLang2')
    resLang2.textContent = lang2
    
    let resStyear:any = document.getElementById('resStyear')
    resStyear.textContent = styear
    
    let resEndyear:any = document.getElementById('resEndyear')
    resEndyear.textContent = endyear
    
    let resCompany:any = document.getElementById('resCompany')
    resCompany.textContent = company
    
    let resCompanyLocation:any = document.getElementById('resCompanyLocation')
    resCompanyLocation.textContent = comLocation
    
    let resDesign:any = document.getElementById('resDesign')
    resDesign.textContent = desig
    
    let resAchv1:any = document.getElementById('resAchv1')
    resAchv1.textContent = achv1
    
    let resAchv2:any = document.getElementById('resAchv2')
    resAchv2.textContent = achv2
    
    let resAchv3:any = document.getElementById('resAchv3')
    resAchv3.textContent = achv3
    
    let resImg:any = document.getElementById('resImg')
    resImg.src = picture
   

})






//------------Print Button-------------

const print_btn = document.getElementById('print-btn')
print_btn?.addEventListener('click', () => {
    window.print()
});

//------------Print Button-------------

let edit_btn = document.getElementById('edit-btn')
edit_btn?.addEventListener('click' , ()=>{
    window.history.back()
})
