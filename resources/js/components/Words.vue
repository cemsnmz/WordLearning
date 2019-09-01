<template>
    <div>
        <div class="card">
            <div class="card-header">{{ $t('last_words') }}</div>
            <div class="card-body">
                <table class="table table-bordered table-striped" v-if="getWords.length > 0">
                    <thead>
                    <tr>
                        <th>{{ $t('word') }}</th>
                        <th>{{ $t('meaning_word') }}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="word in getWords">
                        <td>{{word.word}}</td>
                        <td>{{word.meaning}}</td>
                    </tr>
                    </tbody>
                </table>
                <p v-else>{{ $t('no_word') }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: "Words",
        computed: {
            ...mapGetters([
                'getWords'
            ])
        },
        methods: {
            ...mapActions([
                'getWordsActions'
            ])
        },
        created() {
            this.getWordsActions();
        }
    }
</script>

<style scoped>

</style>
