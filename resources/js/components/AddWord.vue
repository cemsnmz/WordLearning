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
    import {mapActions} from 'vuex';

    export default {
        name: "AddWord",
        data() {
            return {
                word: null,
                meaning: null
            }
        },
        methods: {
            ...mapActions([
                'addWordActions'
            ]),
            saveWord() {
                this.addWordActions({word: this.word, meaning: this.meaning})
                    .then((res) => {
                        if (res.type === "success") {
                            this.$swal({
                                title: res.message,
                                type: res.type,
                                timer: 1500,
                                showConfirmButton: false
                            });
                            this.word = null;
                            this.meaning = null;
                        } else {
                            this.$swal({
                                title: res.message,
                                type: res.type,
                                timer: 1500,
                                showConfirmButton: false
                            })
                        }
                    })
            }
        }
    }
</script>

<style scoped>

</style>
