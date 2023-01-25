<template>
    <v-col cols="12" sm="4">
        <v-card>
            <v-img v-bind:src="image" class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                <v-card-title v-text="title"></v-card-title>
            </v-img>
            <v-card-text>
                <p>
                    {{ descr }}
                </p>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn :href="link">
                    <v-icon class="mr-7">mdi-heart</v-icon> Читать полностью
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
</template>

<script>
export default{
    name: 'NewsItem',
    props: ['image', 'link', 'title', 'descr']
}
</script>