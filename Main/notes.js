window.onload = function() {
    // Fetch data from localStorage using the key 'Focusite-notes'
    let storedData = localStorage.getItem('Focusite-notes');

    // Get the container where tiles will be displayed
    const tileContainer = document.getElementById('tile-container');

    if (storedData) {
        try {
            // Parse the stored JSON data
            const notesArray = JSON.parse(storedData);

            // Check if notesArray is an array and has elements
            if (Array.isArray(notesArray) && notesArray.length > 0) {
                // Loop through each note and create a tile
                notesArray.forEach((note, index) => {
                    // Create a div for the tile
                    const tile = document.createElement('div');
                    tile.className = 'tile';

                    // Create a paragraph element for the content
                    const contentPara = document.createElement('p');
                    contentPara.textContent = note.content;

                    // Append the content to the tile
                    tile.appendChild(contentPara);

                    // Append the tile to the container
                    tileContainer.appendChild(tile);
                });
            } else {
                // Display message if the array is empty
                displayNoNotesMessage();
            }
        } catch (error) {
            console.error('Error parsing JSON data from localStorage:', error);
            displayNoNotesMessage();
        }
    } else {
        // Display message if no data is found in localStorage
        displayNoNotesMessage();
    }

    // Function to display 'No notes found' message
    function displayNoNotesMessage() {
        const message = document.createElement('div');
        message.id = 'no-notes-message';
        message.textContent = 'No notes found!';
        document.body.appendChild(message);
    }
};
