document.addEventListener("DOMContentLoaded", function () {

    // Create the Saved Events section
    const savedSection = document.createElement("section");
    savedSection.classList.add("saved-events");

    const heading = document.createElement("h2");
    heading.textContent = "Saved Events";

    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "No events saved yet.";

    const savedList = document.createElement("ul");

    savedSection.appendChild(heading);
    savedSection.appendChild(emptyMessage);
    savedSection.appendChild(savedList);

    // Place the section after About and before the footer
    const main = document.querySelector("main");
    main.appendChild(savedSection);

    // Find all upcoming event cards
    const eventCards = document.querySelectorAll(".event-card");

    eventCards.forEach(function (card) {

        const eventInfo = card.querySelector(".event-info");

        // Read the event details from the existing card
        const eventName = eventInfo.querySelector("h3").textContent;
        const paragraphs = eventInfo.querySelectorAll("p");

        const date = paragraphs[1].textContent;
        const time = paragraphs[2].textContent;
        const location = paragraphs[3].textContent;

        // Create a summary entry for this event
        const savedItem = document.createElement("li");
        savedItem.textContent =
            eventName + " — " + date + " | " + time + " | " + location;

        // Create the Save Event button
        const saveButton = document.createElement("button");
        saveButton.textContent = "Save Event";
        saveButton.type = "button";
        saveButton.classList.add("save-button");

        eventInfo.appendChild(saveButton);

        // Handle saving and removing
        saveButton.addEventListener("click", function () {

            if (card.classList.contains("saved")) {
                card.classList.remove("saved");
                saveButton.textContent = "Save Event";
                savedItem.remove();
            } else {
                card.classList.add("saved");
                saveButton.textContent = "Remove Event";
                savedList.appendChild(savedItem);
            }

            // Show the message only when the list is empty
            emptyMessage.hidden = savedList.children.length > 0;

        });

    });
});