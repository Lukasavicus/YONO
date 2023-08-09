document.addEventListener("DOMContentLoaded", () => {
    const photoInput = document.getElementById("photoInput");
    const uploadButton = document.getElementById("uploadButton");
    const preview = document.getElementById("preview");
  
    photoInput.addEventListener("change", () => {
      const file = photoInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const img = document.createElement("img");
          img.src = e.target.result;
          img.style.maxWidth = "100%";
          preview.innerHTML = "";
          preview.appendChild(img);
        };
        reader.readAsDataURL(file);
      }
    });
  
    // uploadButton.addEventListener("click", () => {
    //   const file = photoInput.files[0];
    //   if (file) {
    //     // Here you can implement the code to upload the file to a server
    //     // For example, you could use the Fetch API to send the file to a server endpoint.
    //     // This will require server-side code to handle the file upload and storage.
    //     console.log("Uploading photo:", file.name);
    //   }
    // });

    uploadButton.addEventListener("click", () => {
        const file = photoInput.files[0];
        if (file) {
          const formData = new FormData();
          formData.append('photo', file);
      
          fetch('http://localhost:3000/upload', {
            method: 'POST',
            body: formData
          })
          .then(response => response.text())
          .then(data => {
            console.log(data); // Assuming the server returns a message
          })
          .catch(error => {
            console.error('Error uploading photo:', error);
          });
        }
      });

  });
  