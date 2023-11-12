
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


//HOME

async function editProduct (productId) {
   try {const response= await fetch(`${apiUrl}/product/${productId}`, {
        method: "PUT",    
        headers: {
            "Authorization": token,
           
        },
        
    });
    if (response.ok) {
        // Modifica completata con successo
        console.log("Prodotto modificato con successo!");
      } else {
        console.error("Errore nella modifica del prodotto.");
      }
    } catch (error) {
      console.error("Errore di rete: " + error);
    }
}

async function deleteProduct(productId) {
    try {
      const response = await fetch(`${apiUrl}/product/${productId}`, {
        method: "DELETE",
        headers: {
          "Authorization": token
        }
      });
  
      if (response.ok) {
        // Cancellazione completata con successo
        console.log("Prodotto cancellato con successo!");
      } else {
        console.error("Errore nella cancellazione del prodotto.");
      }
    } catch (error) {
      console.error("Errore di rete: " + error);
    }
  }
function handleEditButtonClick(event) {
    const productId = event.target.getAttribute("data-product-id");
    // Puoi utilizzare productId per identificare quale prodotto modificare
    // Chiamare la funzione di modifica del prodotto passando productId
    editProduct(productId);
  }
  
  // Funzione per gestire il click sul pulsante "Cancella"
  function handleDeleteButtonClick(event) {
    const productId = event.target.getAttribute("data-product-id");
    // Puoi utilizzare productId per identificare quale prodotto cancellare
    // Chiamare la funzione di cancellazione del prodotto passando productId
    deleteProduct(productId);
  }
  
  // Aggiungi un listener per gestire i click sui pulsanti "Modifica" e "Cancella"
  const editButtons = document.querySelectorAll(".edit-button");
  const deleteButtons = document.querySelectorAll(".delete-button");
  
  editButtons.forEach(button => {
    button.addEventListener("click", handleEditButtonClick);
  });
  
  deleteButtons.forEach(button => {
    button.addEventListener("click", handleDeleteButtonClick);
  });


























async function getProductData(productId) {
    try {
      const response = await fetch(`${apiUrl}/${productId}`, {
        method: "GET",
        headers: {
          "Authorization": token
        }
      });
  
      if (response.ok) {
        const productData = await response.json();
        // Popola il modulo di modifica/cancellazione con i dati del prodotto
      } else {
        console.error("Errore nella richiesta di recupero del prodotto.");
      }
    } catch (error) {
      console.error("Errore di rete: " + error);
    }
  }
  
  // Funzione per inviare una richiesta PUT per la modifica di un prodotto
  async function editProduct(productId, updatedData) {
    try {
      const response = await fetch(`${apiUrl}/${productId}`, {
        method: "PUT",
        headers: {
          "Authorization": token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedData)
      });
  
      if (response.ok) {
        // Modifica completata con successo
        console.log("Prodotto modificato con successo!");
      } else {
        console.error("Errore nella modifica del prodotto.");
      }
    } catch (error) {
      console.error("Errore di rete: " + error);
    }
  }  /*
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
    