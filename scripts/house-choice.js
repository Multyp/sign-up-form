const houseLogos = {
    gryffindor: 'gryffindor.png',
    slytherin: 'slytherin.png',
    ravenclaw: 'ravenclaw.png',
    hufflepuff: 'hufflepuff.png'
};

function updateBrandImage() {
    const selectedHouse = document.getElementById('house').value;
    const brandImageDiv = document.querySelector('.house-choice');
    brandImageDiv.style.backgroundImage = `url('../assets/${houseLogos[selectedHouse]}')`;
}

document.getElementById('house').addEventListener('change', updateBrandImage);