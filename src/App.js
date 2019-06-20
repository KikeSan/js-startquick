let pintar = (json)=>{
  document.getElementById('root').innerHTML = `<ul id="ulItems"></ul>`
  for(let i=0; i<json.length;i++){
    console.log(json[i]);
    
    document.getElementById('ulItems').innerHTML += `<li><a>
    <h2>${json[i].name}</h2>
    <p>${json[i].email}</p>
    <p>${json[i].phone}</p>
    </a></li>`
  }
}
export default pintar;