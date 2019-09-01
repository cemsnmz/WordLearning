<template>
    <div class="nav-item dropdown">
        <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button"
           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{ $t('language') }} <span class="caret"></span>
        </a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" @click="changeLang('tr')">TR</a>
            <a class="dropdown-item" @click="changeLang('en')">EN</a>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Language",
        methods: {
            changeLang(lang) {
                if (this.$i18n.locale !== lang) {
                    axios.post('/ChangeLang', {lang});
                    this.$i18n.locale = lang;
                }
            }
        }
    }
</script>

<style scoped>

</style>
