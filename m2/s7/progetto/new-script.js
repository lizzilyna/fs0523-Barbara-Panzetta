const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZmQxNTk1ZDRmNjAwMTg1NjI1NWYiLCJpYXQiOjE2OTk2MDk4NzcsImV4cCI6MTcwMDgxOTQ3N30.HNrc5QUKlHy2b4PvLttJFodb3Atbl9CqmBudy7Qo6L4";
const apiUrl = "https://striveschool-api.herokuapp.com/api";

// Funzione per inviare una richiesta POST per creare un prodotto


// Funzione per la modifica del prodotto
async function editProduct(productId) {
  // Esegui una richiesta API PUT per modificare il prodotto con l'ID specifico
  // Aggiorna i dati del prodotto con quelli modificati
  // Ricarica i prodotti dalla API o aggiorna la carta del prodotto con i dati modificati
}

// Funzione per la cancellazione del prodotto
async function deleteProduct(productId) {
  // Esegui una richiesta API DELETE per cancellare il prodotto con l'ID specifico
  // Rimuovi la carta del prodotto dalla visualizzazione
}










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





//STORE -- Caricamento

document.addEventListener("DOMContentLoaded", function() {
async function loadProductsFromAPI() {
  try {
      const response = await fetch(`${apiUrl}/product`, {
          method: "GET",
          headers: {
              "Authorization": token
          }
      });

      if (response.ok) {
          const products = await response.json();
          const productCards = document.getElementById("productCards");

          productCards.innerHTML = "";

          products.forEach(product => {
              const card = document.createElement("div");
              card.classList.add("col-md-3");
              

              card.innerHTML = `
                  <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
                  <div class="card-body">
                      <h5 class="card-title">${product.name}</h5>
                      <p class="card-text">${product.description}</p>
                      <p class="card-text">Marca: ${product.brand}</p>
                      <p class="card-text">Prezzo: $${product.price.toFixed(2)}</p>
                      <button class="btn btn-primary" onclick="editProduct('${product._id}')">Modifica</button>
                      <button class="btn btn-danger" onclick="deleteProduct('${product._id}')">Cancella</button>
                  </div>
              `;

              productCards.appendChild(card);
          });
      } else {
          console.error('Errore nel recupero dei prodotti.');
      }
  } catch (error) {
      console.error("Errore di rete: " + error);
  }
}

loadProductsFromAPI();
});



//STORE -- Cancella e modifica

//funzioni get, put e delete

//GET
async function get(productId) {
  try {
    const response = await fetch(`${apiUrl}/product/${productId}`, {
      method: "GET",
      headers: {
        "Authorization": token
      }
    });

    if (response.ok) {
      const productData = await response.json();
      return productData;
    } else {
      console.error('Errore nel recupero dei dati del prodotto.');
      return null;
    }
  } catch (error) {
    console.error("Errore di rete: " + error);
    return null;
  }
}


//PUT
async function put(productId, updatedData) {
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
      console.error('Errore.');
    }
  } catch (error) {
    console.error("Errore di rete: " + error);
  }
}


//DELETE
async function del(productId) {
  try {
    const response = await fetch(`${apiUrl}/product/${productId}`, {
      method: "DELETE",
      headers: {
        "Authorization": token
      }
    });

    if (response.ok) {
      console.log('Prodotto eliminato con successo!');
    } else {
      console.error('Errore.');
    }
  } catch (error) {
    console.error("Errore di rete: " + error);
  }
}


//PULSANTE MODIFICA
// Funzione per gestire il click sul pulsante "Modifica"
async function editProduct(productId) {
  // Recupera i dati del prodotto tramite la funzione "get"
  const productData = await get(productId);

  if (productData) {
   
    document.getElementById("name").value = productData.name;
    document.getElementById("description").value = productData.description;
    document.getElementById("brand").value = productData.brand;
    document.getElementById("imageUrl").value = productData.imageUrl;
    document.getElementById("price").value = productData.price;
       


    const updatedData = {
      name: document.getElementById("name").value,
      description: document.getElementById("description").value,
      brand: document.getElementById("brand").value,
      imageUrl: document.getElementById("imageUrl").value,
      price: parseFloat(document.getElementById("price").value)
    };
    
    await put(productId, updatedData);
    
    // Successivamente, puoi gestire l'invio del modulo di modifica
    // e utilizzare la funzione "put" per aggiornare il prodotto.
  }
}



//PULSANTE ELIMINA
async function deleteProduct(productId) {
  const confirmation = confirm("Sei sicuro di voler eliminare questo prodotto?");
  if (confirmation) {
    // Verifica se l'utente conferma la cancellazione

    const result = await del(productId);

    if (result) {
      // Se l'eliminazione ha avuto successo, puoi eseguire azioni come aggiornare la visualizzazione dei prodotti
      // o fornire una notifica di successo
      console.log("Prodotto eliminato con successo.");
    } else {
      // Altrimenti, gestisci eventuali errori o fornisce un messaggio di errore all'utente
      console.error("Errore durante l'eliminazione del prodotto.");
    }
  }
}

