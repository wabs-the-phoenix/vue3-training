<template>
  <div class="container flex-column h-80">
    <h2>Application de mark-down</h2>
    <div class="flex grow-1 flex-btw">
        <textarea id="in" class="field" :value="textIn" @input="update"></textarea>
        <article id="out" class="field" v-html="textOut" ></article>
    </div>
  </div>
</template>

<script>
import { parse} from "marked";
import debounce from '../utilities/mixins/debounce';
export default {
    mixins: [debounce],
    data() {
        return {
            textIn: '',
            timeOut: ''
        }
    },
    computed : {
        textOut() {
            return parse(this.textIn);
        }
    },
    methods: {
        update(e) {
            const task = () => { this.textIn = e.target.value};
            this.debounce(task, 600);
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