let data = {
  name: undefined,
  price: undefined
}

const stacks = Array.from(document.getElementsByClassName("a-button-stack"));
if (stacks.length > 0) {
  const buttons = stacks.filter((stack) => stack.innerText === "\nBuy now with 1-Click®\n" || stack.innerText === "\nAdd to Cart\n")
  buttons[0].innerHTML = "<a onclick='saveImpulse()'>Control My Impulse</a>";
  buttons[1].remove();
}

const titleNode = document.getElementById("productTitle");
if (title) {
  data.name = titleNode.innerText;
}

const newPriceNode = document.getElementById("newPrice");
const dealPriceNode = document.getElementById("priceblock_dealprice");
const ourPriceNode = document.getElementById("priceblock_ourprice");
const colorPriceNode = document.getElementsByClassName("a-color-price")[0];
const priceNode = newPriceNode || dealPriceNode || ourPriceNode || colorPriceNode;
if (priceNode) {
  let price = priceNode.innerText;
  if (price.length > 8) { price = price.slice(0,8) }
  console.log("price: ", price);
  price = price.replace("$", "");
  price = price.trim();
  price = price.replace(" ", ".");
  data.price = Number(price);
}

async function saveImpulse() {
  console.log("data: ", data);
  const rawResponse = await fetch('http://localhost:3000/users/3/impulses', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  const content = await rawResponse.json();

  console.log(content);
};
