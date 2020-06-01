<template>
	<div class="slide-wrapper">
			<section
				v-for="slide in slides"
				class="slide"
				:key="slide.id"
			>
				<p>{{ slide.description }}</p>
				<img class="slide-img" :src="slide.image" :alt="slide.description" />
						<router-link to="/home" v-show="slide.id === 4">
			<button class="homeButton"></button>
		</router-link>
			</section>



	</div>
</template>
<script>
import Background1 from "../assets/images/reach-out.jpg";
import Background2 from "../assets/images/tents.jpg";
import Background3 from "../assets/images/children-of-war.jpg";
import Background4 from "../assets/images/girl.jpg";
import Background5 from "../assets/images/flower.jpg";

export default {
	name: "Carousel",
	data() {
		return {
			id: 1,
			slides: [
				{
					id: 1,
					image: Background3,
					description:
						"According to a report from the United Nations High Commissioner for Refugees, the number of people forcibly displaced due to war, persecution, and conflict exceeded 70 million in 2018.",
				},
				{
					id: 2,
					image: Background2,
					description:
						"Unable to return to safe, dignified conditions at home, 78% of refugees find themselves in protracted refugee situations where they have been displaced for at least 5 consecutive years.",
				},
				{
					id: 3,
					image: Background4,
					description:
						"Children constitute about half of the refugee population. Many of these children are unaccompanied making them more susceptible to exploitation and abuse.",
				},
				{
					id: 4,
					image: Background1,
					description: "How can you help?",
				},
			],
		};
	},

	methods: {
		next() {
			this.id++;
		},
		previous() {
			this.id--;
		},
	},
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Special+Elite&display=swap");

.slide-wrapper {
	display: flex;
	overflow-y: scroll;
	overflow-x: hidden;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: space-around;
	background: black;
}

:focus {
	outline: none;
}
::-moz-focus-inner {
	border: 0;
}

@keyframes faded-pulse {
	from {
		opacity: 0.25;
		transform: translateY(0);
	}
	to {
		opacity: 1;
		transform: translateY(-10px);
	}
}


.slide {
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: space-between;

}


.slide .homeButton {
	margin-top: 20px;
	background: url("../assets/images/arrow.png") no-repeat center center / 32px;
	width: 32px;
	height: 32px;
	cursor: pointer;
	border: none;
	animation-duration: 1s;
	animation-name: faded-pulse;
	animation-iteration-count: infinite;
	animation-direction: alternate;
}

.slide p {
	font-family: "Special Elite";
	color: #ffffff;
	font-size: 12px;
	line-height: 1.5;
	width:90%;
	margin: 2.5%;
	text-align: center;
}
.slide .slide-img {
	width: 100%;
}

/* Mobile Landscape */
@media only screen and (min-width: 576px) {
	.slide p {
		font-size: 14px;
	}
	.slide .slide-img{
		width: 90%
	}
}

/* Tablet Portrait */
@media only screen and (min-width: 768px) {

	.slide p {
		font-size: 16px;

	}
}

/* Tablet Landscape */
@media only screen and (min-width: 810px) {
	.slide p {
		font-size: 18px;
		width: 80%;

	}
		.slide .slide-img{
		width: 80%
	}

}

/* Desktop */
@media only screen and (min-width: 1024px) {
	.slide .slide-img {
		width: 70%;
	}

	.slide p {
		font-size: 22px;
				width: 70%;
	}
}
</style>
