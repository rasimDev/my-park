<template>
    <div>
        <h1>Home</h1>
        <p>Holaaa</p>
        <p v-if="user">
            {{ user.email }}
        </p>
        
    </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: 'Home',
  computed: {
    ...mapState("session", ["user"])
  }
}
</script>

<style>
</style>
