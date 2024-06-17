var container = document.createElement("div");
container.setAttribute("class", "container");
document.body.appendChild(container);

// creating form element
var form = document.createElement("form");
form.setAttribute("id", "form");
form.setAttribute("class", "mainform");
container.appendChild(form);

//title h1 element
var title = document.createElement("h1");
title.setAttribute("id", "title");
title.innerText = "Registration form";
form.appendChild(title);

//p tag
var para = document.createElement("p");
para.setAttribute("id", "description");
para.innerText = "Dom manpulation form";
form.appendChild(para);

//first name input
var formgroup1 = document.createElement("div");
formgroup1.setAttribute("id", "form1");
formgroup1.setAttribute("class", "form-group");
form.appendChild(formgroup1);

var lablefirstname = document.createElement("lable");
lablefirstname.setAttribute("name", "first-lable");
lablefirstname.innerText = "First-name:";
formgroup1.appendChild(lablefirstname);

var firstname = document.createElement("input");
firstname.setAttribute("id", "first-name");
firstname.setAttribute("type", "text");
firstname.setAttribute("placeholder", "Enter first name");
firstname.setAttribute("required", "");
formgroup1.appendChild(firstname);

//last name input
var formgroup2 = document.createElement("div");
formgroup2.setAttribute("id", "form2");
formgroup2.setAttribute("class", "form-group");
form.appendChild(formgroup2);

var lablelastname = document.createElement("lable");
lablelastname.setAttribute("name", "last-lable");
lablelastname.innerText = "last-name:";
formgroup2.appendChild(lablelastname);

var lastname = document.createElement("input");
lastname.setAttribute("id", "last-name");
lastname.setAttribute("type", "text");
lastname.setAttribute("placeholder", "Enter last name");
lastname.setAttribute("required", "");
formgroup2.appendChild(lastname);

//e-mail inpu3
var formgroup3 = document.createElement("div");
formgroup3.setAttribute("id", "form3");
formgroup3.setAttribute("class", "form-group");
form.appendChild(formgroup3);

var lableemail = document.createElement("lable");
lableemail.setAttribute("name", "email");
lableemail.innerText = "E-mail:";
formgroup3.appendChild(lableemail);

var email = document.createElement("input");
email.setAttribute("id", "E-mail");
email.setAttribute("type", "text");
email.setAttribute("placeholder", "Enter E-mail");
email.setAttribute("required", "");
formgroup3.appendChild(email);

// address input
var formgroup4 = document.createElement("div");
formgroup4.setAttribute("id", "form4");
formgroup4.setAttribute("class", "form-group");
form.appendChild(formgroup4);

var addresslable = document.createElement("lable");
addresslable.setAttribute("name", "address-lable");
addresslable.innerText = "Address:";
formgroup4.appendChild(addresslable);

var address = document.createElement("textarea");
address.setAttribute("id", "address");
address.setAttribute("type", "text");
address.setAttribute("placeholder", "Enter address");
address.setAttribute("required", "");
formgroup4.appendChild(address);

//pincode
var formgroup5 = document.createElement("div");
formgroup5.setAttribute("id", "form5");
formgroup5.setAttribute("class", "form-group");
form.appendChild(formgroup5);

var pincodelable = document.createElement("lable");
pincodelable.setAttribute("name", "pincode-lable");
pincodelable.innerText = "pincode:";
formgroup5.appendChild(pincodelable);

var pincode = document.createElement("input");
pincode.setAttribute("id", "pincode");
pincode.setAttribute("type", "text");
pincode.setAttribute("placeholder", "Enter pincode");
pincode.setAttribute("required", "");
formgroup5.appendChild(pincode);

//radio box
var formgroup6 = document.createElement("div");
formgroup6.setAttribute("id", "form6");
formgroup6.setAttribute("class", "form-group");
form.appendChild(formgroup6);

var gender1 = document.createElement("input");
gender1.setAttribute("value", "male");
gender1.setAttribute("type", "radio");
gender1.setAttribute("name", "gender");
gender1.setAttribute("required", "");
formgroup6.appendChild(gender1);

var gender1lable = document.createElement("lable");
gender1lable.setAttribute("for", "male");
gender1lable.innerText = "Male";
formgroup6.appendChild(gender1lable);

var gender2 = document.createElement("input");
gender2.setAttribute("value", "female");
gender2.setAttribute("type", "radio");
gender2.setAttribute("name", "gender");
gender2.setAttribute("required", "");
formgroup6.appendChild(gender2);

var gender2lable = document.createElement("lable");
gender2lable.setAttribute("for", "female");
gender2lable.innerText = "Female";
formgroup6.appendChild(gender2lable);

//chooise of food
var formgroup7 = document.createElement("div");
formgroup7.setAttribute("id", "form7");
formgroup7.setAttribute("class", "form-group");
formgroup7.innerHTML = `<label class="form-label">Choice of foods</label>
<div class="form-check">
  <input  class="form-check-input"  type="checkbox"  value="Idly"  id="Idly"  name="option"/>
  <label class="form-check-label" for="Idly"> Idly </label>
</div>
<div class="form-check">
  <input  class="form-check-input"  type="checkbox"  value="Dosa"  id="Dosa"  name="option" />
  <label class="form-check-label" for="Dosa"> Dosa </label>
</div>
<div class="form-check">
  <input  class="form-check-input"  type="checkbox"  value="Meals"  id="Meals"  name="option" />
  <label class="form-check-label" for="Meals"> Meals </label>
</div>
<div class="form-check">
  <input  class="form-check-input"  type="checkbox"  value="Chappathi"  id="Chappathi"  name="option" />
  <label class="form-check-label" for="Chappathi"> Chappathi </label>
</div>
<div class="form-check">
    <input  class="form-check-input"  type="checkbox"  value="Poori"  id="poori"  name="option" />
    <label class="form-check-label" for="poori"> Poori </label>
</div>`;
form.appendChild(formgroup7);

//country input
var formgroup8 = document.createElement("div");
formgroup8.setAttribute("id", "form8");
formgroup8.setAttribute("class", "form-group");
form.appendChild(formgroup8);

var countrylable = document.createElement("lable");
countrylable.setAttribute("name", "country-lable");
countrylable.innerText = "Country:";
formgroup8.appendChild(countrylable);

var country = document.createElement("input");
country.setAttribute("id", "country");
country.setAttribute("type", "text");
country.setAttribute("placeholder", "Enter country");
country.setAttribute("required", "");
formgroup8.appendChild(country);

//
var formgroup9 = document.createElement("div");
formgroup9.setAttribute("id", "form9");
formgroup9.setAttribute("class", "form-group");
form.appendChild(formgroup9);

var statelable = document.createElement("lable");
statelable.setAttribute("name", "state-lable");
statelable.innerText = "State:";
formgroup9.appendChild(statelable);

var state = document.createElement("input");
state.setAttribute("id", "state");
state.setAttribute("type", "text");
state.setAttribute("placeholder", "Enter state");
state.setAttribute("required", "");
formgroup9.appendChild(state);

//button
var formgroup10 = document.createElement("div");
formgroup10.setAttribute("id", "form10");
formgroup10.setAttribute("class", "form-group");
form.appendChild(formgroup10);

var button = document.createElement("button");
button.setAttribute("class", "btn & btn-primary");
button.setAttribute("id", "submit");
button.setAttribute("type", "button");
button.innerHTML = "Submit";
formgroup10.appendChild(button);

//table
var container2 = document.createElement("div");
container2.setAttribute("class", "container2");
document.body.appendChild(container2);

var row = document.createElement("div");
row.setAttribute("class", "row2");
row.innerHTML = `<table id="userTable" class="table table-striped">
<thead>
  <tr>
    <th scope="col">First Name</th>
    <th scope="col">Last Name</th>
    <th >Address</th>
    <th scope="col">pincode</th>
    <th scope="col">Gender</th>
    <th scope="col">Choice of foods</th>
    <th scope="col">State</th>
    <th scope="col">Country</th>
  </tr>
</thead>
<tbody class="tablebody" id ="tablebody">
</tbody>
</table>`;
container.appendChild(row);

var btn = document.getElementById("submit");
btn.addEventListener("click", (event) => {
    event.preventDefault()
    let checkboxes = document.querySelectorAll('input[name="option"]:checked');
    let values =[];
    checkboxes.forEach((checkbox)=>{
     values.push(checkbox.value);
  });

  document.getElementById("tablebody").innerHTML = `<tr>
       <td> ${document.getElementById("first-name").value}</td>
       <td> ${document.getElementById("last-name").value}</td>
       <td> ${document.getElementById("address").value}</td>
       <td> ${document.getElementById("pincode").value}</td>
       <td>${
         document.querySelector('input[name="gender"]:checked').value
       }</td>
       <td>${values}</td>
       <td> ${document.getElementById("state").value}</td>
       <td> ${document.getElementById("country").value}</td>
                    </tr> `;
                    document.getElementById("form").reset();
});
