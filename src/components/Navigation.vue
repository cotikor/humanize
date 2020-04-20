<template>
   <nav>
       <a v-for="item in navItems" :key="item.index" :href="item.url" target="_blank" rel="noopener noreferrer">
           <section class="nav-section">
               <h1>{{item.title}}</h1>
           </section>
           </a>
    </nav> 
</template>

<script>
export default {
   name: "Navigation",
   data(){
       return {
           navItems: [
               {
                   title: "UNHCR Report",
                   url: "https://www.unhcr.org/globaltrends2018/"
               },
               {
                   title: "Host",
                   url: "https://www.airbnb.com/openhomes"
               },
                {
                   title: "Volunteer",
                   url: "https://www.unhcr.org/en-us/united-nations-volunteers.html"
               },
                              {
                   title: "Donate",
                   url: "https://www.unhcr.org/en-us/how-you-can-help-57307bc74.html"
               }
           ],
       }
   }
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Special+Elite&display=swap");
nav {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    background: black;
    width: 100%;
    border-bottom: 1px solid white;
}

nav a {
    text-decoration: none;
    width: 25%;
    border: 1px solid black;
    padding: 1%;

}

nav a .nav-section:hover {
    transform: scale(1.1);
    font-weight: bold;
    
}

nav a .nav-section h1 {
    text-align: center;
    	font-family: "Special Elite";

    color: white;
}

:focus {
	outline: none;
    opacity: .8;
}
::-moz-focus-inner {
	border: 0;
}
</style>