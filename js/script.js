// Ui id selector

let form = document.querySelector('#user-form');
let userlist = document.querySelector('#add-list');




//Classes 
 class User {
    constructor(firstname , lastname , gmail ,number){
        this.firstname = firstname;
        this.lastname = lastname;
        this.gmail = gmail;
        this.number = number;
    }
 }

 class UI {
    static addinfo(user){
          let info = document.querySelector('#add-list');
          let row = document.createElement('tr');
          row.innerHTML = `
          <td>${user.firstname} ${user.lastname}</td>
          <td>${user.number}</td>
          <td>${Math.floor(Math.random()*100)}</td>
          <td>${user.gmail}</td>
          <td><a href '#'>X</a></td>`
          info.appendChild(row)
    }
    static clearFeild(){
    document.querySelector('#first-name').value = '';
    document.querySelector('#last-name').value = "";
    document.querySelector('#gmail').value = "" ;
    document.querySelector('#number').value = "";
    }

    static  showAlert(massage , className ){
        let div = document.createElement('div');
        div.className = `alert ${className}`
        div.appendChild(document.createTextNode(massage));
        let container = document.querySelector('.container');
        let form = document.querySelector('#user-form');
        container.insertBefore(div , form);

        setTimeout(()=>{
            document.querySelector('.alert').remove();
        },3000)
      
    }
    
  static deletefromList(target){
   if(target.hasAttribute('href')){
   target.parentElement.parentElement.remove();
   }
  }
 }





// Add  event 

form.addEventListener('submit' , addUserinfo);
userlist.addEventListener("click" , removeInfo);




// event defing 

function addUserinfo(e){
   let firstname = document.querySelector('#first-name').value ,
   lastname  = document.querySelector('#last-name').value ,
   gmail = document.querySelector('#gmail').value ,
   number = document.querySelector('#number').value ;

   if(firstname==='' || lastname==='' || gmail === '' || number === ''){
      UI.showAlert('Please Give us All Information ' , 'error');
   }else{
   let user = new User (firstname , lastname , gmail , number);
 //  console.log(user);
   UI.addinfo(user);
   UI.clearFeild();
   UI.showAlert('Thanks!! your information added' , 'success');
 

   }
   e.preventDefault();
}

function removeInfo(e){
   UI.deletefromList(e.target);
   UI.showAlert('Your Info is removed' , 'error');
 e.preventDefault();
}
 