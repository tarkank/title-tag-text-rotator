<script>
    const titles = [
        "3030303030303",
        "Macro Economic Pocket Magazine",
        "PLAYNICE 💖 EASTANBUL",
    ];

    let currentTitleIndex = 0;

    function rotateTitle() {
        document.title = titles[currentTitleIndex];
        currentTitleIndex = (currentTitleIndex + 1) % titles.length;
    }

    // Rotate every 5 seconds
    setInterval(rotateTitle, 5000);
</script>