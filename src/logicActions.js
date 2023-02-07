export let scene = null;
export function setMaterial(materialName, meshName) {
  if (scene) {
    const t_mesh = scene.getObjectByName(meshName);
    console.log(meshName);
    if (t_mesh) {
      scene.traverse(function (child) {
        if (child.material && child.material.name === materialName) {
          t_mesh.material = child.material;
        }
      });
    }
  }
  return {
    func: setMaterial,
    args: [materialName, meshName],
    name: setMaterial.name
  };
}
export function toggleObjVisibility_THREE(mesh_name) {
  if (scene) {
    const t_mesh = scene.getObjectByName(mesh_name);
    console.log(t_mesh);
    if (t_mesh) {
      t_mesh.visible = !t_mesh.visible;
    }
  }
  return {
    func: toggleObjVisibility_THREE,
    args: [mesh_name],
    name: toggleObjVisibility_THREE.name
  };
}
