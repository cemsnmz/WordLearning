/**
 *  https://kazupon.github.io/vue-i18n/
 */

import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);
const messages = {
    tr: {
        'word_learning': 'Kelime Öğrenme',
        'add_word': 'Kelime ekle',
        'words': 'Kelimeler',
        'question_answer': 'Soru - Cevap',
        'language': 'Dil',
        'write_word': 'Kelimeyi yazınız...',
        'write_meaning_word': 'Kelimenin anlamını yazınız...',
        'save_word': 'Kelimeyi kaydet',
        'word': 'Kelime',
        'meaning_word': 'Anlamı',
        'last_words': 'Son eklenen kelimeler',
        'no_word': 'Gösterilecek kelime bulunamadı.',
    },
    en: {
        'word_learning': 'Word Learning',
        'add_word': 'Add word',
        'words': 'Words',
        'question_answer': 'Question - Answer',
        'language': 'Language',
        'write_word': 'Write word...',
        'write_meaning_word': 'Write meaning of word...',
        'save_word': 'Save word',
        'word': 'Word',
        'meaning_word': 'Meaning of word',
        'last_words': 'Last words',
        'no_word': 'There is no word to show.',
    }
};

export const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages
})

