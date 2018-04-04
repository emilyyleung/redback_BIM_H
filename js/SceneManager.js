function SceneManager(canvas) {

  const screenDimensions = {
    width: canvas.width,
    height: canvas.height
  }

  const scene = buildScene();
  const renderer = buildRender(screenDimensions);
  const camera = buildCamera(screenDimensions);
  const sceneSubjects = createSceneSubjects(scene);

  function buildScene() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#000");

    return scene;
  }

  function buildRender({ width, height }) {
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    const DPR = (window.devicePixelRatio) ? window.devicePixelRatio : 1;
    renderer.setPixelRatio(DPR);
    renderer.setSize( width, height );

    renderer.gammaInput = true;
    renderer.gammaOutput = true;

    return renderer;
  }

  function buildCamera({ width, height }) {
    const aspectRatio = width / height;
    const fieldOfView = 75;
    const nearPlane = 1;
    const farPlane = 1000;
    const camera = new THREE.PerspectiveCamera( fieldOfView, aspectRatio, nearPlane, farPlane );
    camera.position.z = 4;

    return camera;
  }

  function createSceneSubjects( scene ) {
    const sceneSubjects = [
      new GeneralLights(scene),
      new sceneSubjects(scene)
    ];

    return sceneSubjects;
  }

  function render() {
    renderer.render( scene, camera );
  }

  function onWindowResize() {
    const { width, height } = canvas;

    screenDimensions.width = width;
    screenDimensions.height = height;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize( width, height );
  }
}
