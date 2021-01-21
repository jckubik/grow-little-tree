// Creates the name/introduction of the tree
const wrapper = document.querySelector(`.wrapper`)
const growButton = wrapper.querySelector(`.growButton`);
const frame = wrapper.querySelector(`.frame`);
const treePic = frame.querySelector(`.treePic`);
const treeName = `Groot`;
const imgAge1 = `./treeGrowing1.png`;
const imgAge2 = `./treeGrowing2.png`;
const imgAge3 = `./treeGrowing3.png`;
let age = 1;

// Add HTML to the page for pieces that will update:
    // HTML for the name
frame.insertAdjacentHTML(`afterbegin`,`
    <p>Help ${treeName} grow!</p>
`);

// Function to handle button click - grow the tree
function handleButtonClick(e) {
    if(age === 1) {
        age++;
        treePic.src = imgAge2;
    } else if(age === 2) {
                age++;
                treePic.src = imgAge3;
    } else {
        age = 1;
        treePic.src = imgAge1;
    }
}

// Listen for the button click
growButton.addEventListener(`click`, handleButtonClick);
