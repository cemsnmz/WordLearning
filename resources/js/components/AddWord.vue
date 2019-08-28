<template>
    <div>
        <div class="card">
            <div class="card-header">{{ $t('add_word') }}</div>
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <input type="text" v-model="word" class="form-control" :placeholder="$t('write_word')">
                    </div>
                    <div class="form-group">
                        <input type="text" v-model="meaning" class="form-control"
                               :placeholder="$t('write_meaning_word')">
                    </div>
                    <button class="btn btn-dark btn-block" @click.prevent="saveWord">{{ $t('save_word') }}</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "AddWord",
        data() {
            return {
                word: null,
                meaning: null
            }
        },
        methods: {
            saveWord() {
                axios.post('/SaveWord', {word: this.word, meaning: this.meaning})
                    .then((res) => {
                        this.$swal({
                            title: res.data.message,
                            type: res.data.type,
                            timer: 2000,
                            showConfirmButton: false
                        });
                        this.word = null;
                        this.meaning = null;
                    })
                    .catch((err) => {
                        this.$swal({
                            title: err.data.message,
                            type: err.data.type,
                            timer: 2000,
                            showConfirmButton: false
                        })
                    })
            }
        }
    }
</script>

<style scoped>

</style>
