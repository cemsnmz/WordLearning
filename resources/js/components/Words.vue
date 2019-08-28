<template>
    <div>
        <div class="card">
            <div class="card-header">{{ $t('last_words') }}</div>
            <div class="card-body">
                <table class="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>{{ $t('word') }}</th>
                        <th>{{ $t('meaning_word') }}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="word in words">
                        <td>{{word.word}}</td>
                        <td>{{word.meaning}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Words",
        data() {
            return {
                words: []
            }
        },
        created() {
            axios.post('/GetWords')
                .then((res)=>{
                    this.words = res.data.words
                })
        }
    }
</script>

<style scoped>

</style>
