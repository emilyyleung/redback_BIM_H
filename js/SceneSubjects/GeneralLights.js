function GeneralLights(scene) {

  const light = new THREE.AmbientLight( 0x444444 );

  const directionalLight = new THREE.DirectionalLight( 0xffeedd );
  directionalLight.position.set( 0, 0, 1 ).normalize();

  scene.add( ambient );

  scene.add( directionalLight );
}
