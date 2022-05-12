//JavaScript for the offer page
/**
 * this is code for enabling an input box for the cost to be entered 
 * if the seller chooses to sell the product
*/
function EnableTextBox() {
    var hasPrice = document.getElementById("Tprice2");
    var CustomPrice = document.getElementById("TcustomPrice");

    CustomPrice.hidden = hasPrice.checked ? false : true;

    if (!CustomPrice.disabled) {
        CustomPrice.focus();
    }
}

/**
 * this code will change the tool type menu displayed to the seller
 * according to what was selected in the tool section menu
 */
 var tools = {
   sewing: ["ابر", "خيوط", "اقمشة", "طارة", "آخر"],

   canvas: ["فرش", "مزيل الوان", "الوان", "لوحة الوان", "آخر"],

   glass: ["ادوات نحت", "صحن دوار", "قوالب تشكيل", "اخر"],

   other: [
     "ابر",
     "خيوط",
     "اقمشة",
     "طارة",
     "فرش",
     "مزيل الوان",
     "الوان",
     "لوحة الوان",
     "ادوات نحت",
     "صحن دوار",
     "قوالب تشكيل",
     "آخر",
   ],
 };

 function changingList(newTool) {
     var section = document.getElementById("Tsection");
     var type = document.getElementById("Ttype");

     var toolTypes = section.options[section.selectedIndex].value;

     //type.options.length = 1;

     while (type.options.length) {
         type.remove(0);
     }
     var addTool = tools[toolTypes];

     type.options.add(new Option('اختر نوع المنتج'));
     type.options[0].disabled = true;

     if (addTool) {
         var i;

         for (i = 0; i < addTool.length; i++) {
             var newTool = new Option(addTool[i], i);
             type.options.add(newTool);
             newTool.setAttribute("value", "tool " + i);
             //console.log(newTool);
         }
     }
 }

 /**
  * this code will make the text boxes appear for the contact information when cheked bu seller
  * and dissapear when its not cheked
  */
  
  function ContactTextBox() {
      var byEmail = document.getElementById("Tcontact1");
      var byPhone = document.getElementById("Tcontact2");

      var email = document.getElementById("Temail");
      var phone = document.getElementById("Tphone");

      //email.disabled = byEmail.checked ? false : true;

      if (byEmail.checked) {
          //phone.disabled;
          email.hidden = false;
          email.focus();
      } else {
          email.hidden = true;
      }

      if (byPhone.checked) {
          phone.hidden = false;
          phone.focus();
      } else {
          phone.hidden = true;
      }

      var btn = document.getElementById("submitbtn");
      if (btn.click = true) {
          if (!byEmail.checked && !byPhone.checked) {
              alert("You must check at least one checkbox.")
          }
      }

  }

  /**
   * this script will check if the required fields are filled
   * before having the conformation message appear
   */

   function clicked() {
       var form = document.getElementById('myform');
       var hide = form.elements[i].hasAttribute('hidden');

       for (var i = 0; i < form.elements.length; i++) {
           if (form.elements[i].hasAttribute('required')&&!hide) {
               alert('There are some required fields!');
               return false;
           }
       }
       if (confirm('Do you want to submit?')) {
           form.submit();
       } else {
           return false;
       }
    }

   

