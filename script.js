$("#btn_hasil").click(function(){
  var angka1 = parseInt($("#angka1").val());
  var angka2 = parseInt($("#angka2").val());
  var operator = $("#operator").val();

  //kondisi operator +
  if (operator == "+") {
    var hasil = angka1 + angka2;
  }

  //kondisi operator -
  if (operator == "-") {
    var hasil = angka1 - angka2;
  }

  //kondisi operator kali
  if (operator == "*") {
    var hasil = angka1 * angka2;
  }

  //kondisi operator bagi
  if (operator == "/") {
    var hasil = angka1 / angka2;
  }
// alert (hasil);
  // var hasil = angka1 + angka2;
  $("#hasil").val(hasil);
}
);
