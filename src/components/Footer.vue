<template>
  <v-footer
    color="primary dark text-center"
    padless
  >
    <v-card-text class="border">
          <v-btn 
            v-for="icon in icons"
            :key="icon"
            class="mx-5 white--text"
            icon
          >
            <v-icon size="32px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>My Park</strong>
        </v-card-text>
     </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ['mdi-account', 'mdi-cards-heart', 'mdi-cog'],
    items: ['default', 'absolute', 'fixed'],
    padless: false,
    variant: 'default',
  }),
  computed: {
    localAttrs() {
      const attrs = {};

      if (this.variant === 'default') {
        attrs.absolute = false;
        attrs.fixed = false;
      } else {
        attrs[this.variant] = true;
      }
      return attrs;
    },
  },
};
</script>