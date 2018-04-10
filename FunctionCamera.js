function camera(box){
  //camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 4, -10), scene)
  //camera.setTarget(new BABYLON.Vector3(10, 0, 0));
  //camera.attachControl(canvas);

  //parameters: alpha, beta, radius, target position, scene
  camera = new BABYLON.FollowCamera("Camera",new BABYLON.Vector3(0, 0, 0), scene);

  //positions the camera overwrittng alpha, beta, radius
  camera.lockedTarget = box;
  camera.cameraAcceleration = 1;
  camera.heightOffset = 0;
  camera.radius = 20;

  //this attaches the camera to the canvas
  camera.attachControl(canvas, true);

}
