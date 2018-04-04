function SceneSubject() {
  // BEGIN Clara.io JSON loader code
  const scene = new THREE.Scene();
  const objectLoader = new THREE.ObjectLoader();
  console.log("LOAD JSON");
  const mesh = objectLoader.load("json/data.json", function ( obj ) {
    scene.add( obj );
    console.log(JSON.stringify(obj,null,4))
  } );

}
