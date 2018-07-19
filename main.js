// function getfile(file,callback)
// {
//
//   var xhr = new XMLHttpRequest();
//   xhr.overrideMimeType("application/json");
//   xhr.open("GET",file,true);
//   xhr.onreadystatechange=function()
//   {
//     if(xhr.readyState === 4 && xhr.status == "200")
//     {
//       callback(xhr.responseText);
//     }
//   };
//   xhr.send(null);
//
// }
// getfile("data.json",function(text)
// {
//   var data=JSON.parse(text);
//   console.log(data);
//   var info=JSON.parse(text);
//   console.log(info);
//   details(data.basics);
//   career(info.careerobjective);
//   education(data.education);
//   technical(data.TechnicalSkills);
// })
function loadjson(file) {
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
     if (response.ok) {
       resolve(response.json());
     }
      else {
        reject(new error("error"));

      }
    })
  })

}
var newfile=loadjson("data.json");
newfile.then(data=>{
  details(data.basics);
    career(data.careerobjective);
    education(data.education);
    technical(data.TechnicalSkills);
    achieve(data.Achievements);
})
var child=document.querySelector(".childone");

function details(det) {
var img=document.createElement("img");
img.src=det.image;
child.appendChild(img);
var name=document.createElement("h3");
name.textContent=det.name;
child.appendChild(name);
var phone=document.createElement("h3");
phone.textContent=det.phone_num;
child.appendChild(phone);
var k=document.createElement("h3");
k.textContent="Address:";
child.append(k);
var k1=document.createElement("hr");
child.append(k1);

var add=document.createElement("p");
add.textContent=det.address;
child.appendChild(add);
var mail=document.createElement("a");
mail.href="mailto:saimadhurichunduri@gmail.com"
mail.textContent=det.email;
child.appendChild(mail);
}
var child2=document.querySelector(".childtwo");
function career(careerinfo) {
  var k2=document.createElement("h1");
  k2.textContent="Career Objective:";
  child2.appendChild(k2);
  var k1=document.createElement("hr");
  child2.appendChild(k1);
  var obj1=document.createElement("h3");
  obj1.textContent=careerinfo.info;
  child2.appendChild(obj1);
}
function education(edu) {


  var k1=document.createElement("br");
  child2.appendChild(k1);
  var e=document.createElement("h1");
  e.textContent="Educational Qualification: ";
  child2.appendChild(e);
  var k1=document.createElement("hr");
  child2.appendChild(k1);
  for (var i = 0; i < edu.length; i++)
   {
    var k=document.createElement("h3");
    k.textContent=edu[i].degree;
    child2.appendChild(k);

    var eduul=document.createElement("ul");
    var eduli=document.createElement("li");
    eduli.textContent=edu[i].institute;
    eduul.appendChild(eduli);
    child2.appendChild(eduul);
    var eduul=document.createElement("ul");
    var eduli=document.createElement("li");
    eduli.textContent=edu[i].data;
    eduul.appendChild(eduli);
    child2.appendChild(eduul);
}
  }
  function technical(tech) {
    var e=document.createElement("h1");
    e.textContent="Technical Skills: ";
    child2.appendChild(e);
    var k1=document.createElement("hr");
    child2.appendChild(k1);
    var ta=document.createElement("table");
    ta.border="1";
    child2.appendChild(ta);
    tabledata="";
    for (var i = 0; i < tech.length; i++)
    {
      tabledata+="<tr><td>"+tech[i].title+"</td><td>"+tech[i].data+"</td></tr>";
    }
    ta.innerHTML=tabledata;
  }
function achieve(edu) {
  var e=document.createElement("h1");
  e.textContent="Achievements: ";
  child2.appendChild(e);
  var k1=document.createElement("hr");
  child2.appendChild(k1);
  for (var i = 0; i < edu.length; i++)
   {
    var d=document.createElement("h3");
    d.textContent=edu[i].type;
    child2.appendChild(d);
    var eduul=document.createElement("ul");
    var eduli=document.createElement("li");
    eduli.textContent=edu[i].data;
    eduul.appendChild(eduli);
    child2.appendChild(eduul);
  }
}
