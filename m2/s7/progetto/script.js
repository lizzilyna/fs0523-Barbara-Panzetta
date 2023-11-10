
    //POST

const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZmQxNTk1ZDRmNjAwMTg1NjI1NWYiLCJpYXQiOjE2OTk2MDk4NzcsImV4cCI6MTcwMDgxOTQ3N30.HNrc5QUKlHy2b4PvLttJFodb3Atbl9CqmBudy7Qo6L4";
const apiUrl = "https://striveschool-api.herokuapp.com/api";


document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const brand = document.getElementById("brand").value;
    const imageUrl = document.getElementById("imageUrl").value;
    const price = parseFloat(document.getElementById("price").value);

    
    fetch(`${apiUrl}/product`, {
    method: "POST",    
    headers: {
        "Authorization": token,
       
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: name,
                description: description,
                brand: brand,
                imageUrl: imageUrl,
                price: price    })
})


.then(response => {
    console.log('ok');
})
.catch(error => {
    console.log('errore');
});
});
   


//FINE POST

   /*
async function fetchData() {
    try {
      const response = await fetch(`${apiUrl}/PRODUCT_ID`, {
        method: "GET",
        headers: {
          "Authorization": token
        }
      });
  
      if (response.ok) {
        const data = await response.json();
       
      } else {
        console.error("Errore nella richiesta.");
      }
    } catch (error) {
      console.error("Errore di rete: " + error);
    }
  }
  
  fetchData();


fetch("https://striveschool-api.herokuapp.com/api/product/[PRODUCT_ID]", {
    method: "DELETE",    
    headers: {
        "Authorization": token,
       
        "Content-Type": "application/json"
    }})

*/
    