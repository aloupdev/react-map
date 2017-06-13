var parcels = {
  id: 1,
  name: 'parcels',
  visible: 'true'
}

var buildings = {
  id: 1,
  name: 'buildings',
  visible: 'true'
}

var layers = [parcels, buildings]

// console.log(layers);
// console.log('------------');

layers.slice(0).reverse().map((layer) => {
  console.log(layer);
  return(
    layer.visible = false
  )
})

console.log(layers);
