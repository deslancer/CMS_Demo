<script>
    import {onMount} from "svelte";
    import {CreateTHREEScene} from './scene3dModule_THREEJS.js';
    import Node from "./Node.svelte";
    import {globalScene} from "./store";

    export let canvasElement;
    const module3d = new CreateTHREEScene()
    const data = [{
        "id": "WJtDLlwwvtOzYYE6elGD9",
        "name": "Main menu",
        "className": "",
        "style": [],
        "children": [{
            "id": "B5uMvkHWUlhIPFc9aqru9",
            "name": "Set material",
            "className": "",
            "style": [],
            "children": [],
            "events": {
                "id": "SAgodHFlX0GgwaBvUIJpF",
                "event": "click",
                "action": {"args": ["Red", "Cube"], "name": "setMaterial"}
            }
        }, {
            "id": "2TlcFnTBvbRVV5H1d0k0v",
            "name": "Toggle sphere",
            "className": "",
            "style": [],
            "children": [],
            "events": {
                "id": "ZuB3POvGqS41-YqsV_jRa",
                "event": "click",
                "action": {"args": ["Sphere"], "name": "toggleObjVisibility_THREE"}
            }
        }]
    }]
    onMount(() => {
        module3d.createScene(canvasElement);
        globalScene.set(module3d.getScene())
    });
</script>

<main class="flex">
    <canvas bind:this={canvasElement}></canvas>
    <div class="sidebar">

        <ul>
            <Node module3d={module3d} node={data[0]}/>
        </ul>
    </div>
</main>

<style>
    main {
        width: 100vw;
        height: 100vh;
    }

    canvas {
        width: 100%;
        height: 100%;
        flex: 2;
    }

    .sidebar {
        flex: 1;
    }

    .flex {
        display: flex;

    }
</style>