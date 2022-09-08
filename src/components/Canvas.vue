<template>
    <div id="canvas">
        <button @click="resetCamera">Reset Camera</button>
        <div id="container"></div>
    </div>
</template>

<script>
import * as Three from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default {
  name: 'Canvas',
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null
    }
  },
  methods: {
    init: function() {
        const loader = new GLTFLoader();
        let container = document.getElementById('container');

        this.renderer = new Three.WebGLRenderer({antialias: true, alpha: true});
        this.renderer.setSize(container.clientWidth, container.clientHeight);

        this.camera = new Three.PerspectiveCamera(70, container.clientWidth/container.clientHeight, .001, 5);
        this.controls = new OrbitControls(this.camera, this.renderer.domElement ); 
        this.controls.minDistance = 2;
        this.controls.maxDistance = 3;
        this.controls.enablePan = false;
        this.camera.position.set( .5, .5, 2 );
        this.controls.update();

        this.scene = new Three.Scene();
        this.box = undefined;
        loader.load('manick.gltf', (gltf) => {
            this.scene.add(gltf.scene);
            this.box = gltf.scene.children[0];
            console.log(this.box);
        }, undefined, (error) => {
            console.error(error);
        });

        // let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
        // let material = new Three.MeshNormalMaterial();

        // this.mesh = new Three.Mesh(geometry, material);
        // this.scene.add(this.mesh);

        // Load the Orbitcontroller
                    
        // Load Light
        this.ambientLight = new Three.AmbientLight( 0xcccccc );
        this.scene.add(this.ambientLight);
        container.appendChild(this.renderer.domElement);
        

    },
    onMouseEvent: function(event) {
      //console.log(event);
      var raycaster = new Three.Raycaster(); // create once
      var mouse = new Three.Vector2(); // create once

      mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1; 
      mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1; 

      raycaster.setFromCamera(mouse, this.camera);

      var intersects = raycaster.intersectObjects(this.scene.children);

      // 将所有的相交的模型的颜色设置为红色，如果只需要将第一个触发事件，那就数组的第一个模型改变颜色即可
      if (intersects.length > 0) {
        if(event instanceof MouseEvent) {
            intersects.forEach((e) => {
              console.log(e.object.name);
            });
            intersects[0].object.material.color = 0xcccccc;
            //console.log(intersects[0]);
        }
        if (event instanceof PointerEvent) {
            this.$parent.scrollToElement("pump");
        }
        //console.log(intersects[0].object.name);
      }
    },
    animate: function() {
        requestAnimationFrame(this.animate);
        //this.mesh.rotation.x += 0.005;
        //this.mesh.rotation.y += 0.005;
        this.renderer.render(this.scene, this.camera);
    },
    resetCamera: function() {
        this.camera.position.set( .1, .5, 2 );
        this.controls.update();
    }
  },
  mounted() {
      this.init();
      this.animate();
      window.addEventListener('click', this.onMouseEvent, false);
      window.addEventListener('mousemove', this.onMouseEvent, false);
  }
}
</script>

<style scoped>
#container {
    width: 75vw;
    height: 75vh;
    margin: auto;
}
#canvas {
  margin-bottom: 400px;
}
button {
    outline: none;
    padding: 4px;
}
</style>