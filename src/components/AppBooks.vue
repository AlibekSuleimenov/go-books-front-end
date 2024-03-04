<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1 class="mt-3">Books</h1>
            </div>

            <hr>

            <div>
                <div class="card-group">

                    <div class="p-3 d-flex flex-wrap">
                        <div v-for="book in this.books" :key="book.id">
                            <div class="card me-2 ms-1 mb-3" style="width: 10em;"
                            v-if="book.genre_ids.includes(currentFilter) || currentFilter === 0"
                            >
                            <img :src="`${this.imagePath}/covers/${book.slug}.jpg`" class="card-img-top"
                            :alt="`cover for ${book.title}`">
                            <div class="card-body text-center">
                                <h6 class="card-title">{{  book.title }}</h6>
                                {{ book.author.author_name }}
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '@/components/store';

export default {
    data() {
        return {
            store,
            ready: false,
            imagePath: process.env.VUE_APP_IMAGE_URL,
            books: {},
            currentFilter: 0,
        }
    },
    emits: ["error"],
    beforeMount() {
        fetch(process.env.VUE_APP_API_URL + "/books")
        .then((response) => response.json())
        .then((response) => {
            if (response.error) {
                this.$emit("error", response.message);
            } else {
                this.books = response.data.books;
                this.ready = true;
            }
        }).catch((error) => {
            this.$emit("error", error);
        });
    },
    methods: {

    },
}
</script>
