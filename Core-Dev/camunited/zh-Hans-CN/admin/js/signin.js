function myFunction() {
  var x = document.getElementById("floatingPassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
$('.your-checkbox').prop('indeterminate', true)