<template>
    <div>
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
        loader.load('manick.gltf', (gltf) => {
            this.scene.add(gltf.scene);
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
  }
}
</script>

<style scoped>
#container {
    width: 75vw;
    height: 75vh;
    margin: auto;
}
button {
    outline: none;
    padding: 4px;
}
</style>