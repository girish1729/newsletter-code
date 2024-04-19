
<script setup>
import { ref } from 'vue'

const c = ref(0)
const f = ref(32)

function setC(e, v = +e.target.value) {
  c.value = v
  f.value = v * (9 / 5) + 32
}

function setF(e, v = +e.target.value) {
  f.value = v
  c.value = (v - 32) * (5 / 9)
}


// give each todo a unique id
let id = 0

const newTodo = ref('')
const todos = ref([
  { id: id++, text: 'Learn HTML' },
  { id: id++, text: 'Learn JavaScript' },
  { id: id++, text: 'Learn Vue' },
  { id: id++, text: 'Learn Svelte' },
  { id: id++, text: 'Learn HTMX' },
  { id: id++, text: 'Learn TypeScript' }
])

function addTodo() {
  todos.value.push({id: id++, text: newTodo.value});
}

function removeTodo(todo) {
	todos.value.splice(todos.value.indexOf(todo), 1);
}

const message = ref('Hello World!')
const isRed = ref(true)
const color = ref('green')
const size = ref('58px')
const count = ref(0)

function toggleRed() {
  isRed.value = !isRed.value
}

function toggleColor() {
  color.value = color.value === 'green' ? 'blue' : 'green'
}

function increment() {
  count.value++
}
</script>

<template>
	<center>
	<h2> Celcius & Farenheit converter </h2>
  <input type="number" :value="c" @change="setC"> Celsius =
  <input type="number" :value="f" @change="setF"> Fahrenheit

	<hr/>
	<h2> A todo CRUD </h2>
<form @submit.prevent="addTodo">
    <input v-model="newTodo" required placeholder="new todo">
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>

	<hr/>
	<h2> A simple color changer using toggle</h2>
  <p>
    <span :title="message">
      Hover your mouse over me for a few seconds to see my dynamically
bound title!
    </span>
  </p>

  <p :class="{ red: isRed }" @click="toggleRed">
    This should be red... but click me to toggle it.
  </p>

  <p :style="{ color: color }" @click="toggleColor">
    This should be green, and should toggle between green and blue on
click.
  </p>

  <p :style="{ fontSize : size } "> This is big in size</p>

  <button @click="increment">
    {{ count }}
  </button>

	</center>
</template>

<style>
button {
	background: red;
}
.red {
  color: red;
}
</style>

