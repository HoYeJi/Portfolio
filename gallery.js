function loadImages(folder) {
    const gallery = document.querySelector('.gallery .row');

    fetch(folder)
        .then(response => response.text())
        .then(text => {
            const imageFiles = text.split('\n').filter(file => /\.(jpg|jpeg|png)$/i.test(file));

            imageFiles.forEach(file => {
                const img = document.createElement('img');
                img.src = `${folder}/${file}`;
                img.onerror = () => {
                    console.error(`Error loading image: ${folder}/${file}`);
                    img.src = 'error.png'; // Replace with your error image
                };
                gallery.appendChild(img);
            });
        })
        .catch(error => {
            console.error('Error loading images:', error);
        });
}