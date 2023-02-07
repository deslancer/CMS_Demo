<script>
    import {globalScene} from "./store";

    export let node;
    export let level = 0;
    import * as Actions from './logicActions'
    export let module3d;
    globalScene.subscribe((scene)=> Actions.scene = scene)
    const handleClick = ()=>{
        if (node.events ){
           Actions[node.events.action.name](...node.events.action.args);
        }
    }
</script>

<li on:click={handleClick} style="padding-left:{level*1}rem" >
    {node.name}
</li>

{#if node.children}
    {#each node.children as child}
        <svelte:self node={child} level={level+1}/>
    {/each}
{/if}

<style>
    li {
        border-bottom: solid 1px #eee;
        margin: 0 0;
        padding: 1rem;
        background: #fafafa;
        display: flex;
        cursor: pointer;
    }
</style>