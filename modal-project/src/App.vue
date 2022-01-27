<template>
  <h1>{{ title }}</h1>
  <teleport v-if="showModal" to=".modals">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="">Sign Up Now</a>
        <a href="">More Info</a>
      </template>
    </Modal></teleport>
    <teleport v-if="showModalTwo" to=".modals">
    <Modal theme="sale" @close="toggleModalTwo">
      <template v-slot:links>
        <p>Modal Two slot</p>
      </template>
    </Modal>
  </teleport>
  <button @click="toggleModal">Open Modal</button>
  <button @click="toggleModalTwo">Open Modal Two</button>
</template>

<script>
import Modal from './components/Modal'
export default {
  name: 'App',
  data() {
    return {
      title: 'My First Vue App',
      header: 'Sign Up for the Giveaway',
      text: 'Grab your swag for half-price',
      showModal: false,
      showModalTwo: false
    }
  },
  components: {
    Modal
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
    }
  }
}
</script>

<style>
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
input.active {
  border: 1px solid red;
}
</style>
