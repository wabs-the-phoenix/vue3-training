<template>
  <div class="container flex-column h-80">
    <h2>Application de mark-down</h2>
    <div class="flex grow-1 flex-btw">
        <textarea id="in" class="field" v-model="textIn"></textarea>
        <textarea id="out" class="field" v-model="textOut"></textarea>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            textIn: ''
        }
    },
    computed : {
        textOut() {
            return this.textIn;
        }
    }
}
</script>

<style>
    #app {
        height: 100%;
    }
    .flex {
        display: flex;
        height: 100%;
    }
    .flex-btw {
        justify-content: space-between;
    }
    .field {
        height: 100%;
        width: 49%;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 20px;
        box-sizing: border-box;
        font-family: Avenir, Helvetica, Arial, sans-serif;
    }
    #out {
        background-color: #ddd;
    }
    .field:focus {
        outline: 1px solid #4466fe ;
        border: 1px solid #4466fe;
    }
    .full-height {
        height: 100%;
    }
    .flex-column {
        display: flex;
        flex-direction: column;
    }
    .grow-1 {
        flex-grow: 1;
    }
    .h-80 {
        height: 85%;
    }
</style>