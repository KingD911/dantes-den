<template>
<div class="hottest">
    <button @click='loadData'>Load</button>
    Here are some of our hottest participants 
    <table>
        <tr>
            <th>Name</th>
            <th>Program</th>
            <th>Year</th>
        </tr>
        <tr v-for="p in people" :key=p.name>
           <td>{{p.name}}</td> 
           <td>{{p.prog}}</td>
           <td>{{p.year}}</td>
        </tr>
    </table>
</div>
</template>

<script>
export default {
    data(){
        return {
            a: 1,
            people: [
                {name: 'zer', prog: 'comp', year: '4th'}
            ]
        }
    },
    methods: {
        loadData(){
            fetch('https://vue-http-first-78a3d-default-rtdb.firebaseio.com/BestDrip.json', {'mode': 'no-cors'}).then(response => {
                if (response.ok) {
                    return response.json()
                }
            }).then(data=>{
                console.log(data)
            })
        }
    }
}
</script>