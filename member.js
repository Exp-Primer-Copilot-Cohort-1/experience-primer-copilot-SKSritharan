function skillsMember() {
  var member = document.getElementById("member");
  member.addEventListener("click", function() {
    var member = document.getElementById("member");
    member.style.color = "#F5A623";
    member.style.backgroundColor = "#fff";
    member.style.border = "1px solid #F5A623";
    member.style.borderRadius = "5px";
    member.style.padding = "10px";
  });
}