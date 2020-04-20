<template>
	<div class="slider-wrapper">
		<div class="slideNavButtons">
			<button
				class="previousButton"
				@click="previous"
				v-bind:class="{ active: slideSet === 1 }"
			></button>
			<button
				class="nextButton"
				@click="next"
				v-bind:class="{ active: slideSet === 2 }"
			></button>
		</div>
		<transition-group name="slide-transition" tag="div" class="setContainer">
			<section
				v-for="slide in slides"
				class="slide"
				:key="slide.id"
				v-show="
					slideSet === 1
						? slide.id === 1 || slide.id === 2
						: slide.id === 3 || slide.id === 4
				"
			>
				<img class="slide-img" :src="slide.image" :alt="slide.description" />
				<section class="bottom-section">
					<p>{{ slide.description }}</p>
					<router-link to="/home" v-show="slide.id === 4">
						<button class="homeButton"></button>
					</router-link>
				</section>
			</section>
		</transition-group>
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
			slideSet: 1,
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
			this.slideSet = 2;
		},
		previous() {
			this.slideSet = 1;
		},
	},
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Special+Elite&display=swap");

.slider-wrapper {
	position: relative;
	overflow: hidden;
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: center;
	background: black;
	height: 100vh;
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

.slideNavButtons {
	position: absolute;
	top: 0;
	width: 100%;
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	background: black;
	z-index: 20;
}

.slideNavButtons .previousButton,
.nextButton {
	/* border-radius: 50%; */
	border: 1px solid white;
	height: 5px;
	width: 20px;
	margin: 1px 2.5px;
	outline: none;
	background: black;
}
.slideNavButtons .active {
	background: white;
}

.slide-transition-enter-active {
	transition: 1s;
	opacity: 1;
}
.slide-transition-enter {
	transition: 1s;
	opacity: 0;
}

.slide {
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: space-between;
}

.slide .bottom-section {
	position: relative;
	padding: 2.5%;
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-between;
	align-items: center;
	width: 100%;
}
.slide .bottom-section .homeButton {
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

.slide .bottom-section p {
	font-family: "Special Elite";
	color: #ffffff;
	font-size: 14px;
	line-height: 1;
	width: 70%;
	text-align: center;
}
.slide .slide-img {
	width: 100%;
}

/* Mobile Landscape */
@media only screen and (min-width: 576px) {
	.slide {
		border-left: 1px solid white;
		max-width: 50vw;
		justify-content: flex-start;
	}
	.setContainer {
		display: flex;
		height: 100vh;
	}
	.slide .bottom-section {
		justify-content: flex-end;
	}

	.slide .bottom-section p {
		font-size: 14px;
	}
}

/* Tablet Portrait */
@media only screen and (min-width: 768px) {
	.setContainer {
		flex-flow: column nowrap;
	}

	.slide {
		border: none;
		max-width: 100vw;
	}

	.slide .bottom-section {
		justify-content: center;
	}
	.slide .bottom-section p {
		font-size: 16px;
		text-align: center;
	}

	.slide .slide-img{
		width: 80%;
	}
	
}

/* Tablet Landscape */
@media only screen and (min-width: 810px) {
	.setContainer {
		flex-flow: row nowrap;
	}
	.slide {
		border-left: 1px solid white;
		max-width: 50vw;
		justify-content: flex-start;
	}
	
}


/* Desktop */
@media only screen and (min-width: 1024px) {

	.slide .slide-img{
		width: 100%;
	}

	.slide .bottom-section p {
		font-size: 28px;
	}

}


</style>
