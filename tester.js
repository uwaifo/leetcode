let output = (item, index, array) => {
  console.log(index, item);
};

let family = ["uwaifo", "gloria", "bernice", "efua"];
let numbArray = [2, 7, 11, 15];

family.forEach(output);
numbArray.forEach(output);
//////////////

let getIndices = (item, index, array) => {
    console.log(index, item);
};

let numbArray = [2, 7, 11, 15];

numbArray.forEach(getIndices)

