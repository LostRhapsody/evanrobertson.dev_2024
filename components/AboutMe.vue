<template>
    <div class="about-me text-xl bg-black/70 px-2 py-8 text-white">
        <h1 class="header-text text-5xl lg:text-8xl font-medium py-8 my-8">About</h1>
        <span class="font-extrabold">
        <p>I'm a professional, full-stack programmer.</p>
        <br />
        <p>I work on Enterprise ERP, WMS, and CMS systems full time.</p>
        <br />
        <p>If you're interested in recruiting me for a project, contact me:</p>
        </span>
        <br />
        <button>
            <a class="primary" href="#contact">Contact</a>
        </button>
    </div>
</template>

<style scoped>
.header-text {
    background: linear-gradient(45deg, #FC466B 0%, #3F5EFB 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.5s ease;
    border-bottom: 3px solid rgba(255, 255, 255, 0);
}
.header-text:hover{
    border-bottom: 3px solid rgba(255, 255, 255, 1);
}
.about-me {
    background: radial-gradient(
        140% 107.13% at 50% 100%,
        transparent 37.41%,
        #c3c3c380 80.27%,
        #b8b8b8 100%
    );
    border-radius: 2rem;
}
button a {
    transition: all 0.5s ease;
    border-radius: 2rem;
    padding: 0 1rem;
    border: 1px solid rgba(255, 255, 255, 0);
    padding: 1rem 2rem;
}
button a:hover {
    border: 1px solid rgba(255, 255, 255, 1);
}
.primary {
    background-color: rgba(12, 30, 65, 0.5);
    border-radius: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.125);
}
</style>
