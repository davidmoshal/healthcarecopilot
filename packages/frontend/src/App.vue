<script setup lang="ts">
import { ref } from 'vue'
import {query} from './api/api'

const state = ref("")
const symptoms = ref("")

const output = ref("")

console.log(query)

function handleSubmit(e: any) {
  e.preventDefault()
  const res = "Lorem ipsum asfkl;adsnjl;kf jasdlk;jflk;asdjl;kfjasdl;k "

  output.value = res
}

</script>

<template>
  <header>
    <div>
    <h1>Find a reliable long COVID doctor and <br /> empower others to make informed decisions.</h1>
    <form @submit="handleSubmit">
      <div id="inputs">
        <div id="state">
          <select v-model="state">
            <option value="" disabled selected>State</option>
            <option value="Alabama">Alabama</option>
            <option value="Alaska">Alaska</option>
            <option value="Arizona">Arizona</option>
            <option value="Arkansas">Arkansas</option>
            <option value="California">California</option>
            <option value="Colorado">Colorado</option>
            <option value="Connecticut">Connecticut</option>
            <option value="Delaware">Delaware</option>
            <option value="District Of Columbia">District Of Columbia</option>
            <option value="Florida">Florida</option>
            <option value="Georgia">Georgia</option>
            <option value="Hawaii">Hawaii</option>
            <option value="Idaho">Idaho</option>
            <option value="Illinois">Illinois</option>
            <option value="Indiana">Indiana</option>
            <option value="Iowa">Iowa</option>
            <option value="Kansas">Kansas</option>
            <option value="Kentucky">Kentucky</option>
            <option value="Louisiana">Louisiana</option>
            <option value="Maine">Maine</option>
            <option value="Maryland">Maryland</option>
            <option value="Massachusetts">Massachusetts</option>
            <option value="Michigan">Michigan</option>
            <option value="Minnesota">Minnesota</option>
            <option value="Mississippi">Mississippi</option>
            <option value="Missouri">Missouri</option>
            <option value="Montana">Montana</option>
            <option value="Nebraska">Nebraska</option>
            <option value="Nevada">Nevada</option>
            <option value="New Hampshire">New Hampshire</option>
            <option value="New Jersey">New Jersey</option>
            <option value="New Mexico">New Mexico</option>
            <option value="New York">New York</option>
            <option value="North Carolina">North Carolina</option>
            <option value="North Dakota">North Dakota</option>
            <option value="Ohio">Ohio</option>
            <option value="Oklahoma">Oklahoma</option>
            <option value="Oregon">Oregon</option>
            <option value="Pennsylvania">Pennsylvania</option>
            <option value="Rhode Island">Rhode Island</option>
            <option value="South Carolina">South Carolina</option>
            <option value="South Dakota">South Dakota</option>
            <option value="Tennessee">Tennessee</option>
            <option value="Texas">Texas</option>
            <option value="Utah">Utah</option>
            <option value="Vermont">Vermont</option>
            <option value="Virginia">Virginia</option>
            <option value="Washington">Washington</option>
            <option value="West Virginia">West Virginia</option>
            <option value="Wisconsin">Wisconsin</option>
            <option value="Wyoming">Wyoming</option>
          </select>
        </div>
        <div id="symptoms">
          <input placeholder="Symptoms (e.g. coughing, muscle aches)" v-model="symptoms" />
        </div>
    </div>
    <button type="submit">Go!</button>
    </form>
  </div>
  </header>

  <main>
    <h2>Results</h2>
    <p>{{ output }}</p>
  </main>
</template>

<style scoped>
  h1 {
    font-size: 60px;
    line-height: 1.25;
    margin-bottom: 100px;
    color: #EEE;
  }


  header {
    background: rgb(58,49,212);
    background: linear-gradient(90deg, rgba(58,49,212,1) 0%, rgba(0,153,255,1) 100%);
    height: 500px;
  }

  header > div {
    background-image: url("./assets/doctor.png");
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: auto 460px;
    padding: 80px 40px;
    height: 100%;
  }

  form {
    border: 2px solid black;
    border-radius: 4px;
    display: flex;
    align-items: flex-end;
    background-color: white;
  }

  #inputs {
    flex: 1;
    display: flex;
    padding: 12px 0;
  }

  #inputs > div {
    padding: 0 20px;
  }

  #state {
    flex: 1;
    border-right: 1px solid black;
  }

  #symptoms {
    flex: 2
  }

  button {
    align-self: stretch;
    width: 100px;
    border: 0;
    font-size: 20px;
    background-color: #ffcd42;
    cursor: pointer;
  }

  label {
    display: block;
  }

  input, select {
    width: 100%;
    height: 50px;
    padding-left: 10px;
    border: 0;
    font-size: 18px;
  }

  select:has(option[value=""]:checked) {
    color: gray;
  }

  select:focus, input:focus {
    outline: none;
  }

  main {
    padding: 40px;
  }

  main h2 {
    font-weight: bold;
  }

  main p {
    font-size: 18px;
  }

</style>
