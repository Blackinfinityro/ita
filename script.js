    const dizionario = {
        deorum: "Il Sole è la stella madre del sistema solare.",
        Ippolito: "Il Mare è una vasta distesa di acqua salata che copre gran parte della Terra.",
        domandaRetorica: "La Luna è il satellite naturale della Terra.",
        aspettative: "La Terra è il terzo pianeta del sistema solare.",
        amico: "Pindemonte",
        mesta: "La Terra è il terzo pianeta del sistema solare.",
        

    };

    const parole = document.querySelectorAll('.interagibili');

    parole.forEach(parola => {
      parola.addEventListener('click', () => {
        const chiave = parola.getAttribute('data-key');
        const definizione = dizionario[chiave] || "Definizione non trovata.";
        document.getElementById('output').textContent = definizione;
      });
    });