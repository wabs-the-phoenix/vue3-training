<template>
    <div class="modal-container" @click="$emit('on-close-modal')">
        
    </div>
   <div class="body-wrap">
        <div class="modal-body">
                <h3>Log in</h3>
                <p class="description">Lorem ipsum dolor sit amet consectetur adipisic</p>
                <form action="" method="post">
                    <div class="input-field">
                        <input type="text" name="login" placeholder="Enter your Login">
                    </div>
                    <div class="input-field">
                        <input type="text" name="password" placeholder="Enter your Password"> 
                    </div>
                    <div class="input-field">
                        <input type="submit" value="Log in">
                    </div>
                </form>
        </div>
   </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .modal-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.7);
        z-index: 10;
    }
    .body-wrap {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-wrap: wrap;
    }
    .modal-body {
        padding: 20px;
        border-radius: 5px;
        background-color: white;
        height: 40%;
        width: 40%;
        z-index: 15;
    }
    .modal-body form {
        margin: 40px 0;
    }
    .input-field {
        width: 100;
        margin: 20px 0;
    }
    .input-field input {
        border: 1px solid #aaa;
        border-radius: 4px;
        padding: 10px;
        display: block;
        width: 100%;
        box-sizing: border-box;
    }
    .input-field input[type="submit"] {
        border: 1px solid #5555ff;
        background-color: #5555ff;
        color: white;
        font-weight: bold;
    }
</style>