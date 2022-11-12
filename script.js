function othername() {
    const input = document.getElementById('userInput').value
    myGallery.destroy();
    myGallery.update({
        mediaAssets: [{ tag: input }]
    });
}