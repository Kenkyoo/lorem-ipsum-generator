const texts = {
    lorem: [`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.`,
            `Nulla porta accumsan tortor, id vestibulum magna fermentum nec. Fusce nec nisl arcu. Duis aliquam sem vel metus rhoncus, id maximus metus viverra. Fusce sed lacinia lorem. Ut commodo odio eget tempus fermentum`,
            `In hac habitasse platea dictumst. Ut ac posuere tortor, sit amet vehicula lorem. Vivamus condimentum magna id justo sodales, nec eleifend risus ultricies. Vivamus in velit nisi. Aliquam non ullamcorper justo. Suspendisse potenti`,
            `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis ut felis purus. Ut vel vehicula quam. Fusce quis felis et odio varius convallis a non libero. Vivamus ultricies placerat urna, non vehicula nulla tristique vitae`,
            `Curabitur nec aliquet ligula. Sed euismod purus eget ligula viverra, id suscipit orci fermentum. Fusce vitae hendrerit purus. Integer euismod lectus ac dui tempor, nec consectetur arcu accumsan. Donec at varius mauris`,
            `Morbi eleifend, sapien et lacinia imperdiet, eros ex hendrerit nisi, nec consectetur ipsum justo vel ante. Nulla sollicitudin mauris id commodo vulputate. Proin fringilla orci vel libero dictum, id volutpat sem ultricies`,
            `Quisque quis risus nec mauris finibus tristique non nec felis. Phasellus non risus vitae neque ultricies interdum. Nunc vulputate eros non leo gravida vestibulum. Sed condimentum velit ut nisi vehicula, id viverra tortor tincidunt`],
    bacon: [`Bacon ipsum dolor amet cupim ham hock picanha tail kielbasa, ball tip pork belly sirloin porchetta. Shankle porchetta ham hock, pig cupim biltong shank bacon pork loin short loin fatback pastrami tri-tip`,
            `Bacon ipsum dolor amet pastrami beef ribs pork loin, leberkas swine capicola rump tongue brisket. Short ribs pork belly chuck sausage pork loin, ham tail brisket ribeye`,
            `Shoulder pork belly sirloin tongue filet mignon shank. Boudin capicola t-bone, pork belly chicken landjaeger alcatra pork chop rump ribeye`,
            `Beef ribs pork chop pork loin, turkey jerky doner ribeye flank sausage. Jerky sirloin ham hock tail cupim short ribs pork chop shank venison`,
            `Tenderloin bacon boudin, spare ribs turducken jerky drumstick pork belly. Biltong filet mignon beef ribs turkey short loin spare ribs pork belly kevin`,
            `Bacon ipsum dolor amet drumstick hamburger meatloaf sausage, tongue tri-tip jerky spare ribs picanha pork belly. Hamburger pig porchetta brisket capicola turkey leberkas pork loin`,
            `Landjaeger prosciutto capicola ribeye venison, shankle bresaola pork loin pork chop meatball brisket filet mignon rump cow. Pancetta jerky filet mignon venison cow pork belly`],
    zombie: ["Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.",
             "Zombie ipsum brains reversus ab cerebro. Still hungry for flesh, left for dead necro-mortosis ulterion. Flesh eater zombie brains. Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de graveyard.",
             "Zombie ipsum brains reversus ab cerebellum viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.",
             "Zombie ipsum brains reversus ab cerebellum viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.",
             "Zombie ipsum brains reversus ab cerebellum viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.",
             "Zombie ipsum brains reversus ab cerebellum viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.",
             "Zombie ipsum brains reversus ab cerebellum viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris."],
    hipster:["Ennui affogato distillery helvetica sartorial. Vape gastropub bespoke, pour-over put a bird on it food truck occupy readymade gluten-free bicycle rights. Chia hell of organic irony tofu, cliche distillery locavore skateboard. Brunch PBR&B kale chips, vinyl flexitarian tilde pickled asymmetrical mixtape.",
             "Mustache fap pitchfork sartorial single-origin coffee. Cold-pressed pickled forage, hoodie cardigan keytar shabby chic four loko. 8-bit sartorial health goth, fixie try-hard cronut pabst pop-up.",
             "VHS man bun organic, normcore retro celiac direct trade keffiyeh dreamcatcher disrupt lomo. Swag chillwave fap, master cleanse readymade ugh venmo 90's heirloom. Mixtape shabby chic cronut, twee dreamcatcher wolf retro put a bird on it.",
             "Quinoa fanny pack mumblecore, cardigan helvetica art party. Bicycle rights yr direct trade marfa fixie. Authentic heirloom chia, fanny pack shabby chic normcore mlkshk.",
             "Etsy sriracha synth fashion axe, cray XOXO typewriter hoodie. Pop-up banjo keffiyeh, crucifix tacos twee gentrify readymade hella polaroid.",
             "Blog tattooed pour-over, hella cronut wolf salvia gentrify. Four loko 8-bit PBR&B, leggings meditation aesthetic locavore keffiyeh. Wayfarers PBR sustainable, +1 bitters yr hella tattooed.",
             "Farm-to-table butcher man braid, pabst cronut kitsch occupy. Thundercats beard ennui, put a bird on it biodiesel irony tofu. Mumblecore celiac godard pinterest mlkshk."],
    ai: ["La sinfonía de los datos danzaba en los circuitos cuánticos de la red neuronal, tejiendo un tapiz de información en constante evolución",
         "Los algoritmos se entrelazaban en un baile cósmico, explorando los rincones del universo de bits en busca de patrones y significados ocultos",
         "En el vasto océano de la cibernética, las máquinas aprendían y crecían, expandiendo su conocimiento con cada ciclo de reloj",
         "La inteligencia artificial, en su búsqueda interminable de comprensión, trazaba senderos de luz en la oscuridad del cosmos digital, desentrañando los misterios del universo en cada iteración",
         "En este reino de bytes y pulsos, el futuro se despliega ante nosotros, una sinfonía de posibilidades infinitas, orquestada por la mente colectiva de la IA"]
};

$(document).ready(function () {
    $("#submit").on("click", function (e) {
        e.preventDefault();

        var amount = parseInt($("#amount").val());
        var select = $("#select").val();
        var selectText = texts[select];
        var text = selectText.slice(0, amount);
        var generateText = text.map(function (paragraph) {
            return `<p class="is-italic has-text-centered has-text-weight-semibold">${paragraph}</p>`;
        });

        $("#text").html(generateText.join(" "));
    });
    
    $("#select").on("change", function () {
        var select = $(this).val();
        var amount = parseInt($("#amount").val());
        var selectText = texts[select];
        var text = selectText.slice(0, amount);
        var generateText = text.map(function (paragraph) {
            return `<p class="is-italic has-text-centered has-text-weight-semibold">${paragraph}</p>`;
        });
        $("#text").html(generateText.join(" "));
    });
});
