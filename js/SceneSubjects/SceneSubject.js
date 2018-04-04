function SceneSubject() {
  // BEGIN Clara.io JSON loader code
  var objectLoader = new THREE.ObjectLoader();
  console.log("LOAD JSON");
  const mesh = objectLoader.load("json/data.json", function ( obj ) {
    scene.add( obj );
    console.log(JSON.stringify(obj,null,4))
  } );

}
