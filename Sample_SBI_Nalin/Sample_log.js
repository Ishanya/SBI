var regstringUser=[],loggedUser=[];
var amount=0;
// storing input from register-form

var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function inWords (num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
    return str;
}

var regdname;

function store() {
    
    //localStorage.setItem("amt",amount);

   
    var userid = document.getElementById("userID").value;
    var pwd = document.getElementById("passwd").value;
    var confpasswd=document.getElementById("cnfmpassword").value;
    if(userid=="" || pwd=="" || confpasswd==""){
        alert("please fill all fields");
    }
    else if(pwd!=confpasswd)
    {
        alert("check your password");
    }
    else{
       
        
        //localStorage.setItem("regdUser"," ");
       loggedUser=JSON.parse(localStorage.getItem("regdUser"));
      
     //  if(loggedUser.length<1)
      // {
          var user1={
               ename:"",
               pswd:"",
               amount:0
           };
           loggedUser.push(user1);
     //  }
    //   else{
       //alert("Size "+loggedUser.length);
     
        var user={
            ename:userid,
            pswd:pwd,
            amount:0
        };
        //alert("username: "+user.ename+" password "+user.pswd);
        
            loggedUser=JSON.parse(localStorage.getItem("regdUser")); 
            loggedUser.push(user);

            
           // loggedUser.push(user1);
//alert(loggedUser.length);
     
       localStorage.setItem("regdUser",JSON.stringify(loggedUser));
    var z=JSON.parse(localStorage.getItem("regdUser"));
    alert("Size "+z.length);
    document.getElementById("btn_login").click();
    }
}
//}

// check if stored data from register-form is equal to entered data in the   login-form
function checkk() {
  //alert("hello");
    var flag=0;
    var username= document.getElementById("userName").value;
    var userpw = document.getElementById("userPw").value;
    var storedUser=[];
    var storedUser = JSON.parse(localStorage.getItem("regdUser"));
    //alert(storedUser.length);
    
    // entered data from the login-form
    for(var i=0;i<storedUser.length;i++)
    {
       //console.log(storedUser[i].ename +"   "+storedUser[i].pswd);
        if(storedUser[i].ename==username && storedUser[i].pswd==userpw)
        {
            localStorage.setItem("regdname",username);
            localStorage.setItem("regdpasswd",userpw);
            
            flag=1;
            break;
        }
    }
if(flag==0){

        alert('Username or Password is incorrect');
    }
    else{
     document.location.replace("Sample_Logged.html");
    

    }
}
function depositt()
{
    var deps=parseInt(document.getElementById("deposit").value);
    //alert(deps);
    var stored=[];
     stored=JSON.parse(localStorage.getItem("regdUser"));
   // alert(dep);
   var regdName=localStorage.getItem("regdname");
   
   var regdPasswd=localStorage.getItem("regdpasswd")
   var l,i;
   for( i=0;i<stored.length;i++)
   {
       if(stored[i].ename==regdName && stored[i].pswd==regdPasswd)
       {
           var dep=Number(stored[i].amount);
           l=i;
           break;
    }
   }
    stored[i].amount=dep+deps;
   // alert(dep);
    //alert(trans);

    localStorage.setItem("regdUser",JSON.stringify(stored));
    //alert(localStorage.getItem("amt"));
    my_window=window.open("","INVOICE","status=1,height=150,width=300");
    window.moveTo(300,300);
    my_window.document.write("<html><body><img src='Sample_sbi_image\\currency.jsp'");
    my_window.document.write("<center><h1 style='color:red'>Invoice</h1></center>");
    my_window.document.write("<center><h1>"+inWords(stored[i].amount)+"</h1></center></body></html>");
    document.location.reload();
}

function log(){
   var final=[]; 

   final=JSON.parse(localStorage.getItem("regdUser"));
   var localname=localStorage.getItem("regdname");
   var localpass=localStorage.getItem("regdpasswd");
   var l,i;
   for( i=0;i<final.length;i++)
   {
       if(final[i].ename==localname && final[i].pswd==localpass)
       {
           var localamount=Number(final[i].amount);
           break;
    }
   }
   document.getElementById("i1").innerHTML="Welcome "+localname.toUpperCase();
//var txt='Hi, Current Balance is \n <p style="margin-left:20%;">INR <i class="fas fa-rupee-sign"></i>' +localamount+'</p>';
//var t="hello";
//document.getElementsByClassName("rat").innerHTML="fghh";
var t='<div style= \'font-size:5vw\' >Hi, Current Balance is \n <p style="margin-left:20%;">INR <i class="fas fa-rupee-sign"></i>' +localamount+'</p></div>';
document.getElementById("rata").innerHTML=t;

}

function withdraww()
{
    var withd=parseInt(document.getElementById("withdraw").value);
    var stored=[];
    var localname=localStorage.getItem("regdname");
    var localpass=localStorage.getItem("regdpasswd");
    stored=JSON.parse(localStorage.getItem("regdUser"));
  // alert(dep);
  var l;
  for( i=0;i<stored.length;i++)
  {
      if(stored[i].ename==localname && stored[i].pswd==localpass)
      {
          var trans=Number(stored[i].amount);
          l=i;
          break;
   }
  }

    if(trans>withd)
    {
        var leftover=trans-withd;
        stored[l].amount=leftover;
        localStorage.setItem("regdUser",JSON.stringify(stored));
    }
    else{
        alert("Sorry!You don't have enough Balance");
    }
    
    my_window=window.open("","INVOICE","status=1,height=150,width=300");
    window.moveTo(223,223);
    my_window.document.write("<html><body style='background-image:url('Sample_sbi_image\\currency.jpg');'>");
    my_window.document.write("<center><h1 style='color:red'>Invoice</h1></center>");
    my_window.document.write("<center><h1 >"+inWords(leftover)+"</h1></center></body></html>");
    document.location.reload();
   
}

function Transactions()
{   
    var trans=parseInt(document.getElementById("transact").value);
    //alert(trans);
    var receive=document.getElementById("receiver").value;
    var stored=[];
    var localname=localStorage.getItem("regdname");
    var localpass=localStorage.getItem("regdpasswd");
    stored=JSON.parse(localStorage.getItem("regdUser"));
 
  var l,i,j,flag1=0,flag2=0;
  for( i=0;i<stored.length;i++)
  {
      
     if(stored[i].ename==localname && stored[i].amount>=trans)
     {
        // alert("hello");
        for( j=0;j<stored.length;j++)
        {
            if(stored[j].ename==receive )
            {
                stored[j].amount+=trans;
                stored[i].amount-=trans;
                l=i;
                flag1=1;
                localStorage.setItem("regdUser",JSON.stringify(stored));
                my_window=window.open("","INVOICE","status=1,height=150,width=300");
                window.moveTo(223,223);
                my_window.document.write("<html><body style='background-image:url('Sample_sbi_image\\currency.jpg');'>");
                my_window.document.write("<center><h1 style='color:red'>Invoice</h1></center>");
                my_window.document.write("<center><h1 >"+inWords(stored[i].amount)+"</h1></center></body></html>");
                document.location.reload();
                break;
            }
   
         }
         if(flag1==0)
         {
        
            alert("No account with this name exists!!");
            break;
              
         }
        flag2=1;
         break;
        }
  
    }
  if(flag2==0)
  {
    
        alert("something went wrong!");
        
    
  }
 
}

function logout()
{
    var cnf=confirm("Do you really wanna logout?");
    if(cnf==true)
    {
        document.location.replace("Sample_SBI.html");
    }
    else{
        document.location.reload();
    }
}
