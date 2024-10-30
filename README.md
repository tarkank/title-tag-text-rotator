# <title> tag text rotator

A small JavaScript snippets that rotate dynamic content in the `<title>` tag. 
These snippets allow for fun, interactive page titles, with rotating phrases that can include emojis or special icons. 
Going to store and remember useful snippets like this one for future use.

## Snippet Overview

The main functionality is a title rotator that cycles through an array of text options at set intervals. You can include icons, emojis, or any other symbols directly in the titles.

### Example Usage

```javascript
const titles = [
    "PLAYNICE ❤️ EASTANBUL",
    "PLAYNICE 💖 EASTANBUL",
    "PLAYNICE 💜 EASTANBUL",
    "PLAYNICE 💙 EASTANBUL",
    "PLAYNICE 💛 EASTANBUL"
];

function rotateTitle() {
    const titleElement = document.querySelector("title");
    let currentIndex = 0;

    setInterval(() => {
        titleElement.innerText = titles[currentIndex];
        currentIndex = (currentIndex + 1) % titles.length;
    }, 3000); // Change every 3 seconds
}

rotateTitle();
