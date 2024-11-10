
let myname:any = document.getElementById('name')
let jobtitle:any = document.getElementById('jobtitle')
let phone:any = document.getElementById('phone')
let email:any = document.getElementById('email')
let add:any = document.getElementById('add')
let pass1:any = document.getElementById('pass1')
let deg1:any = document.getElementById('deg1')
let uni1:any = document.getElementById('uni1')
let pass2:any = document.getElementById('pass2')
let deg2:any = document.getElementById('deg2')
let uni2:any = document.getElementById('uni2')
let skill1:any = document.getElementById('skill1')
let skill2:any = document.getElementById('skill2')
let skill3:any = document.getElementById('skill3')
let skill4:any = document.getElementById('skill4')
let lang1:any = document.getElementById('lang1')
let lang2:any = document.getElementById('lang2')
let styear:any = document.getElementById('styear')
let endyear:any = document.getElementById('endyear')
let company:any = document.getElementById('company')
let comLocation:any = document.getElementById('comlocation')
let desig:any = document.getElementById('desig')
let achv1:any = document.getElementById('achv1')
let achv2:any = document.getElementById('achv2')
let achv3:any = document.getElementById('achv3')
let pic:any = document.getElementById('pic')


let submitBtn = document.getElementById('submitBtn')
let form = document.getElementById('form')


form?.addEventListener('submit' , (e)=>{
    e.preventDefault()

    localStorage.setItem("name" , myname.value)
    localStorage.setItem("jobtitle" , jobtitle.value)
    localStorage.setItem("phone" , phone.value)
    localStorage.setItem("email" , email.value)
    localStorage.setItem("add" , add.value)
    localStorage.setItem("pass1" , pass1.value)
    localStorage.setItem("deg1" , deg1.value)
    localStorage.setItem("uni1" , uni1.value)
    localStorage.setItem("pass2" , pass2.value)
    localStorage.setItem("deg2" , deg2.value)
    localStorage.setItem("uni2" , uni2.value)
    localStorage.setItem("skill1" , skill1.value)
    localStorage.setItem("skill2" , skill2.value)
    localStorage.setItem("skill3" , skill3.value)
    localStorage.setItem("skill4" , skill4.value)
    localStorage.setItem("lang1" , lang1.value)
    localStorage.setItem("lang2" , lang2.value)
    localStorage.setItem("styear" , styear.value)
    localStorage.setItem("endyear" , endyear.value)
    localStorage.setItem("company" , company.value)
    localStorage.setItem("comLocation" , comLocation.value)
    localStorage.setItem("desig" , desig.value)
    localStorage.setItem("achv1" , achv1.value)
    localStorage.setItem("achv2" , achv2.value)
    localStorage.setItem("achv3" , achv3.value)

   
    if(pic.files && pic.files[0]){
        let reader = new FileReader()
        reader.addEventListener("load", ()=>{
            let textImg:any = reader.result
            localStorage.setItem("profile-pic", textImg)            
        })
        reader.readAsDataURL(pic.files[0])
        
    }

    window.location.href = "./resume/resume.html"
})
