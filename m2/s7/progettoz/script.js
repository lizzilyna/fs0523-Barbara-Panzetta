const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZmQxNTk1ZDRmNjAwMTg1NjI1NWYiLCJpYXQiOjE2OTk2MDk4NzcsImV4cCI6MTcwMDgxOTQ3N30.HNrc5QUKlHy2b4PvLttJFodb3Atbl9CqmBudy7Qo6L4";
const apiUrl = "https://striveschool-api.herokuapp.com/api";

// Funzione per inviare una richiesta POST per creare un prodotto
function createProduct() {
  const productForm = document.getElementById("productForm");
  productForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const brand = document.getElementById("brand").value;
    const imageUrl = document.getElementById("imageUrl").value;
    const price = parseFloat(document.getElementById("price").value);

    try {
      const response = await fetch(`${apiUrl}/product`, {
        method: "POST",
        headers: {
          "Authorization": token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          description,
          brand,
          imageUrl,
          price
        })
      });

      if (response.ok) {
        console.log('Prodotto creato con successo!');
      } else {
        console.error('Errore nella creazione del prodotto.');
      }
    } catch (error) {
      console.error("Errore di rete: " + error);
    }
  });
}




// Funzione per gestire il click sul pulsante "Modifica"
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
  
  // Chiama la funzione per creare un prodotto
  createProduct();


async function editProduct(productId, updatedData) {
    try {
      const response = await fetch(`${apiUrl}/product/${productId}`, {
        method: "PUT",
        headers: {
          "Authorization": token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedData)
      });
  
      if (response.ok) {
        console.log('Prodotto modificato con successo!');
      } else {
        console.error('Errore nella modifica del prodotto.');
      }
    } catch (error) {
      console.error("Errore di rete: " + error);
    }
  }
  
  // Funzione per inviare una richiesta DELETE per cancellare un prodotto
  async function deleteProduct(productId) { //product id dichiarato prima
    try {
      const response = await fetch(`${apiUrl}/product/${productId}`, {
        method: "DELETE",
        headers: {
          "Authorization": token
        }
      });
  
      if (response.ok) {
        console.log('Prodotto cancellato con successo!');
      } else {
        console.error('Errore nella cancellazione del prodotto.');
      }
    } catch (error) {
      console.error("Errore di rete: " + error);
    }
  }
  




