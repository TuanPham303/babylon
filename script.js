window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  const engine = new BABYLON.Engine(canvas, true);

  const createScene = () => {
    const scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3.White();

    const camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(5, 10, -10), scene);

    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, false);

    const light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(1, 1, 0), scene);

    // const box = BABYLON.Mesh.CreateBox('Box', 4.0, scene);
    // box.position.y = 1;

    const sphere = BABYLON.MeshBuilder.CreateSphere('sphere', {segments:100, diameter:1}, scene);
    BABYLON.MeshBuilder.CreateSphere('sphere', {segments:100, diameter:1}, scene);
    sphere.position.y = 4;

    const ground = BABYLON
      .MeshBuilder
      .CreateGround('ground1', {height:6, width:6, subdivisions: 2}, scene);

    return scene;
  }

  const scene = createScene();

  engine.runRenderLoop(() => {
    scene.render();
  });
});