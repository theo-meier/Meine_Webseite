const bilder = [
    "https://c.wallhere.com/photos/1e/08/2560x1600_px_forest_lake_landscape_mountain_nature_Trees_water-1104731.jpg!d",
    "https://wallpaperaccess.com/full/215814.jpg",
    "https://images.pexels.com/photos/2882660/pexels-photo-2882660.jpeg?cs=srgb&dl=pexels-aaron-ulsh-2882660.jpg&fm=jpg",
    "https://img.fotocommunity.com/endlich-schnee-64bf469a-421d-4585-9699-b3d626c73c26.jpg?width=1000"
];
        let index = 0;

function changeImage() {
    index = (index + 1) % bilder.length;

    document.getElementById("meinBild").style.backgroundImage =
        `url("${bilder[index]}")`;
}
