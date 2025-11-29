function find_edit() {
  const passtitle_node = document.getElementById("passtitle");
  passtitle_node.innerHTML = "ROSSIJSKAYA FEDERACIYA";

  const sname_node = document.getElementById("sname");
  sname_node.innerHTML = "YAKOVLEVA";

  const gde_node = document.getElementById("gde");
  gde_node.innerHTML = "OTDELOM USMF";

  const gde2_node = document.getElementById("gde2");
  gde2_node.innerHTML = "PO YAROSLAVLU";

  const otname_node = document.getElementById("otname");
  otname_node.innerHTML = "VALEREVNA";

  const name_node = document.getElementById("name");
  name_node.innerHTML = "MARIA";

  const gender_node = document.getElementById("gender");
  gender_node.innerHTML = "JEN";

  const born1_node = document.getElementById("born1");
  born1_node.innerHTML = "GOR. YAROSLAVL";

  const born2_node = document.getElementById("born2");
  born2_node.innerHTML = "YAROSLAVSKAYA OBLAST";
}

const node_for_click = document.getElementById("for_click");
node_for_click.addEventListener("click", find_edit);
