<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-2">
                <img v-if="this.ready" class="img-fluid img-thimbnail" :src="`${imagePath}/covers/${this.book.slug}.jpg`" alt="cover">
            </div>
            <div class="col-md-10">
                <template v-if="this.ready">
                    <h3 class="mt-3">{{ this.book.title }}</h3>
                    <hr>
                    <p>
                        <strong>Author: </strong> {{ this.book.author.author_name}}<br>
                        <strong>Published: </strong> {{ this.book.publication_year }}
                    </p>
                    <p>
                        {{  this.book.description }}
                    </p>
                </template>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            book: {},
            imagePath: process.env.VUE_APP_IMAGE_URL,
            ready: false,
        }
    },
    activated() {
        fetch(process.env.VUE_APP_API_URL + "/books/" + this.$route.params.bookName)
        .then((response) => response.json())
        .then((data) => {
            if (data.error) {
                this.$emit("error", data.message);
            } else {
                this.book = data.data;
                this.ready = true;
            }
        }).catch((error) => {
            this.$emit("error", error);
        });
    },
    deactivated() {

    }
}
</script>
