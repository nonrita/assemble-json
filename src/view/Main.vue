<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

const header = ref('aa');

const getTeams = ()=>{
  axios.get('src/data/main.json').then((res) =>{
    header.value = res.data;
  })  
}

onMounted(async()=>{
  await getTeams();
})
</script>


<template>
    <h1>top</h1>
    <div v-for="(component, i) in header" :key="i">
        {{ component }}
    </div>
</template>