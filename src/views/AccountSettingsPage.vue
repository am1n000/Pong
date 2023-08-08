<script setup>

import { watch, ref } from 'vue';

const fa = ref(false);

</script>
<template>
    <div class="settingsWrapper">
        <h1> Settings</h1>
        <p>Manage your informations and security</p>
        <div class="avatar">
            <img class="profilePic" src="/profilePic.png" alt="profile picture">
            <button class="changePic">
                <i class='bx bxs-camera-plus' ></i>
            </button>
        </div>
        <h3 class="nickname">nickname</h3>
        <div class="auth">
            <label class="switch">
                <input type="checkbox" class="switchInput" @change="fa = !fa">
                <span class="slider"></span>
            </label>
            <h3 class="faStatus">{{ !fa ? 'Enable 2FA' : 'Disable 2FA' }}</h3>
        </div>
        <div class="changeNickname">
            <h3>Change your nickname</h3>
            <label for="nicknameInput">nickname</label>
            <input type="text" id="nicknameInput" placeholder="Enter your nickname">
        </div>
        <button class="confirmation">Confirm</button>
    </div>
</template>

<style>


/* ----------------------------------------------------- */
.settingsWrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: lightblue;
    padding: 2rem;
}

/* ----------------------------------------------------- */
h1 {
    margin: 0.4rem;
    color: white;
    font-family: 'Times New Roman', Times, serif;
}

/* ----------------------------------------------------- */
p {
    margin-top: 0;
    color: gray;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

/* ----------------------------------------------------- */
.avatar {
    position:absolute;
    display: grid;
    left: 15%;
    top: 24%;
    grid-template-columns: repeat(5, 1fr);
}

.profilePic {
    width: 60px;
    height: 60px;
    grid-column: 1 / 3;
    grid-row: 1 / 2;
}

.changePic {
    
    width: 20px;
    height: 20px;
    padding-right: 1.2rem;
    margin-left: 0.5rem;
    grid-row: 1 / 2;
    grid-column: 2 / -1;
    align-self: flex-end;
}

.nickname {
    font-family: 'Shadows Into Light', cursive;
    margin-bottom: 3rem;
}
/* ----------------------------------------------------- */
.auth {
    position: relative;
    display: flex;
    align-items: center;
    gap:2rem;
    left: -10%;
    margin: 2rem;
    font-family: 'Nunito', sans-serif;
}
.input {
    display: none;
}

.slider {
    position: absolute;
    cursor: pointer;
    top:30%;
    bottom:30%;
    right: 70%;
    left:0;
    background-color: gray;
    transition: .4s;
    border-radius: 34px;
}
.slider::before {
    position:absolute;
    content: '';
    height: 23px;
    width: 21px;
    left: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50px;
}
input:checked + .slider {
    background-color: brown;
}
input:checked + .slider:before {
    transform: translateX(20px);
}
input:checked ~ .faStatus {
    content: 'Disable 2FA';
}
.faStatus{
    width: 7rem;
    /* height: 1.5rem; */
}
/* ----------------------------------------------------- */

.changeNickname {
    margin-bottom: 2rem;
    background-color: blanchedalmond;
}


</style>