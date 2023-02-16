function getElementinnnerText(id) {
    const firstName=document.getElementById(id).innerText
    return firstName
    
}
function getElementValue(id) {
    
    const firstName=document.getElementById(id).value;
    document.getElementById(id).value=''
    return firstName
    
}
function setElementToList(no,name,price,quentity,total) {
    const tr=document.createElement('tr')
    const container=document.getElementById('table-container')
    tr.innerHTML=`
    <th>${no}</th>
                          <td> ${name}</td>
                          <td>${price}</td>
                          <td>${quentity}</td>
                          <td>${total}</td>
    `
    container.appendChild(tr)
}