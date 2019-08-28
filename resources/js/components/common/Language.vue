<template>
    <div class="nav-item dropdown">
        <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button"
           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{ ('language') }} <span class="caret"></span>
        </a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" @click="changeLang('tr')">TR</a>
            <a class="dropdown-item" @click="changeLang('en')">EN</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Language",
        methods: {
            changeLang(lang) {
                this.$i18n.locale = lang
            }
        }
    }
</script>

<style scoped>

</style>
