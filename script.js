document.getElementById('mix').addEventListener('click', function() {
    var color1 = document.getElementById('color1').value;
    var color2 = document.getElementById('color2').value;

    var mixedColor = mixColors(color1, color2);
    document.getElementById('mixed-color').style.backgroundColor = mixedColor;
});

function mixColors(color1, color2) {
    // Преобразование цветов в формат RGB
    var c1 = hexToRgb(color1);
    var c2 = hexToRgb(color2);

    // Смешивание цветов
    var mixed = {
        r: (c1.r + c2.r) / 2,
        g: (c1.g + c2.g) / 2,
        b: (c1.b + c2.b) / 2
    };

    return rgbToHex(mixed.r, mixed.g, mixed.b);
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}