function createMatTex(scene){
  var mat = new BABYLON.StandardMaterial("materialTex",scene);
  mat.diffuseTexture = new BABYLON.Texture("pic1.png",scene);
  mat.specularTexture = new BABYLON.Texture("pic2.jpg",scene);
  mat.specularPower = 25
  //mat.emissiveColor = new BABYLON.Color3(0.2, 0.2, 0.2);
  mat.ambientColor = new BABYLON.Color3(0.23,0.98,0.53);
  //transparency
  mat.alpha = 1;
  return mat;

}
