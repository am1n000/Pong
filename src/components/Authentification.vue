<script setup></script>

<template>
    <div class="authRapper">
        <h1>Login</h1>        
        <p ><span class="welcome">Welcome to the Pong game!</span><br/>Please log in to access the game and challenge your friends to exciting matches!</p>

        <button class="loginButton"> 
            <img class="Logo" src="/42_logo.png" alt="google logo"/>
            Continue with 42-school
        </button>
        <button class="loginButton"> 
            <img class="Logo" src="/google_logo.png" alt="google logo"/>
            Continue with Google   
        </button>
    </div>
</template>


<style lang="scss">


$neon-color: rgb(255 ,20 , 136);

.authRapper {
    color: white;
    position: absolute;
    display: grid;
    row-gap: 10px;
    width: 420px;
    height: 400px;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-bottom: 30px;
    border-radius: 50px 5px;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);


}

.authRapper h1 {
    font-family: 'Amaranth', sans-serif;
    font-size: 40px;
    text-align: center;
    margin-bottom: 0px;
}

.authRapper p {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    margin-top: 0px;
    margin-bottom: 0px;
    text-align: center;
}

.welcome {
    font-size: 20px;
    font-family: 'Amaranth', sans-serif;
    line-height: 3;
    margin-bottom: 10px;
}

.loginButton {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    color: rgb(106, 4, 4);
    font-family: Space Grotesk;
    text-shadow: 0 0 0.055em rgb(233, 209, 209), 0 0 0.125em black;
}

.loginButton:hover {
    background: transparent;
    color: white;
    text-shadow: none;
}

.Logo {
    width: 15px;
    height: 15px;
}

</style>