let addTocartButton =document.getElementsByClassName('add-cart');
let mainContainer=document.getElementsByTagName('tbody')[0]
let quantityField=document.getElementsByClassName('quantity')
let removeBtn= document.getElementsByClassName('refresh')



for (let i = 0; i < addTocartButton.length; i++) {
     addTocartButton[i].addEventListener('click', addToCart)
}
function addToCart(event) {
    
    let btn= event.target
    let btnParent=btn.parentElement
    let btnGrand=btn.parentElement.parentElement

    let itemN=btnParent.children[0].innerText
    let itemP=btnParent.children[1].innerText
    let itemImg=btnGrand.children[0].src

    let itemContainer=document.createElement('tr')
    itemContainer.innerHTML=`<td class="image">
    <img src="${itemImg}" alt="cake">
</td>
<td>
   ${itemN} 
</td>
<td class="itemclass">
    ${itemP}
</td>
<td>
    <input type="number" class="quantity" value="1">
</td>
<td class="totalsale">
    <h3>
        ${itemP}
    </h3>
</td>
<td>
    <button class="refresh">remove</button>
</td>`

mainContainer.append(itemContainer)

for (let i = 0; i < quantityField.length; i++) {
    quantityField[i].addEventListener('change', updateTotal)
}

for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', removeItem)
}
grandTotal()
}
function updateTotal(event) {
    numOfItems=event.target
    numOfItemsParent=numOfItems.parentElement.parentElement
    priceField= numOfItemsParent.children[2]
    totalField= numOfItemsParent.children[4]
    priceFieldContent=priceField.innerText.replace('$','')
    totalField.children[0].innerText='$'+numOfItems.value*priceFieldContent

    if (isNaN(numOfItems.value)||numOfItems.value<=0) {
        numOfItems.value=1
    }grandTotal()
}
function grandTotal() {
    let total=0
    let grandTotal=document.getElementsByClassName('grandtotal')[0]
    let totalPrice= document.getElementsByClassName('totalsale')
    for (let i = 0; i < totalPrice.length; i++) {
        totalPriceContent=Number(totalPrice[i].innerText.replace('$',''))
        total+=totalPriceContent
    }
    grandTotal.children[0].innerText='$'+total 
}
function removeItem(event) {
    removeB=event.target
    removeP= removeB.parentElement.parentElement
    removeP.remove()
    grandTotal()
}