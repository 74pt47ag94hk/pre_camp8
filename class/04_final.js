function checkValidation() {
  const email = document.getElementById("email").value;
  const password1 = document.getElementById("password1").value;
  const password2 = document.getElementById("password2").value;

  if (email !== "" && password1 !== "" && password2 !== "") {
    document
      .getElementById("mybutton")
      .setAttribute("style", "background-color: yellow");
  } else {
    document
      .getElementById("mybutton")
      .setAttribute("style", "background-color: none");
  }
}

function changePhone1() {
  const phone1 = document.getElementById("phone1").value;
  if (phone1.length === 3) {
    document.getElementById("phone2").focus();
  }
}
function changePhone2() {
  const phone2 = document.getElementById("phone2").value;
  if (phone2.length === 4) {
    document.getElementById("phone3").focus();
  }
}
function changePhone3() {
  const phone3 = document.getElementById("phone3").value;
  if (phone2.length === 4) {
    document.getElementById("numSend").removeAttribute("disabled");
    document
      .getElementById("numSend")
      .setAttribute("style", "color: yellow; cursur:pointer");
  }
}
