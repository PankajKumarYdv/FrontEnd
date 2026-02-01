const carDetails = {
    'modelName': 'Mustang',
    'brandName': 'Ford',
    'price': '1.5 Cr.',
}

object.seal(carDetails);

carDetails.isOwned = false;

console.log(carDetails);